// Netlify Functions - 폼 제출 시 자동 이메일 발송
const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  // Netlify Forms 제출 이벤트만 처리
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const payload = JSON.parse(event.body);
    const { form_name, data } = payload;

    // contact-with-pdf 폼만 처리
    if (form_name !== 'contact-with-pdf') {
      return { statusCode: 200, body: 'OK' };
    }

    // 사용자 정보 추출
    const { company, name, email, phone, stage, message } = data;

    // Nodemailer 설정 (Gmail 사용 예시)
    // 실제 사용 시 환경 변수로 설정해야 합니다
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'lbg@0to1tax.com',
        pass: process.env.EMAIL_PASSWORD // Gmail 앱 비밀번호 필요
      }
    });

    // 이메일 옵션
    const mailOptions = {
      from: '"Zero to One TAX" <lbg@0to1tax.com>',
      to: email,
      subject: '[Zero to One TAX] 서비스 소개서를 보내드립니다',
      html: `
        <div style="font-family: 'Noto Sans KR', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #0066FF 0%, #003D99 100%); padding: 40px; border-radius: 12px 12px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 900;">Zero to One TAX</h1>
            <p style="color: rgba(255, 255, 255, 0.9); margin: 10px 0 0 0; font-size: 16px;">투자 관점의 재무 관리 파트너</p>
          </div>
          
          <div style="background: white; padding: 40px; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 12px 12px;">
            <p style="font-size: 16px; color: #1A1A1A; line-height: 1.8; margin-bottom: 20px;">
              <strong>${name}</strong> 님, 안녕하세요!<br>
              Zero to One TAX에 문의해 주셔서 감사합니다.
            </p>
            
            <div style="background: #F6F9FF; padding: 20px; border-radius: 10px; border-left: 4px solid #0066FF; margin: 30px 0;">
              <p style="margin: 0; font-size: 15px; color: #1A1A1A; line-height: 1.7;">
                <strong style="color: #0066FF;">📎 상담 전 참고 자료</strong><br>
                첨부된 <strong>서비스 소개서 PDF</strong>를 먼저 확인해 주시면<br>
                Zero to One TAX 서비스를 더욱 잘 이해하실 수 있습니다.
              </p>
            </div>
            
            <p style="font-size: 15px; color: #666; line-height: 1.8; margin: 20px 0;">
              <strong style="color: #1A1A1A;">문의하신 내용</strong><br>
              회사명: ${company || '-'}<br>
              연락처: ${phone || '-'}<br>
              투자 단계: ${stage || '미선택'}<br>
              ${message ? `문의 내용: ${message}` : ''}
            </p>
            
            <div style="background: #FFF9E6; padding: 20px; border-radius: 10px; margin: 30px 0;">
              <p style="margin: 0; font-size: 14px; color: #666; line-height: 1.7;">
                💬 <strong>1영업일 이내</strong> 담당자가 연락드려<br>
                회사 상황에 맞는 상담을 도와드리겠습니다.
              </p>
            </div>
            
            <div style="text-align: center; margin-top: 40px; padding-top: 30px; border-top: 1px solid #e0e0e0;">
              <p style="font-size: 13px; color: #999; line-height: 1.6; margin: 0;">
                <strong>Zero to One TAX 선영 회계법인</strong><br>
                대표자: 이범기 | 사업자등록번호: 209-86-51192<br>
                서울시 강남구 테헤란로70길 12 H타워 2층<br>
                📧 lbg@0to1tax.com | 📞 010-4395-1996
              </p>
            </div>
          </div>
        </div>
      `,
      attachments: [
        {
          filename: 'Zero_to_One_TAX_서비스_소개서.pdf',
          path: './pdf/Zero_to_One_TAX_Service_Guide.pdf' // PDF 파일 경로
        }
      ]
    };

    // 이메일 발송
    await transporter.sendMail(mailOptions);

    // 내부 알림 이메일 (선택사항)
    const adminNotification = {
      from: '"Zero to One TAX" <lbg@0to1tax.com>',
      to: 'lbg@0to1tax.com',
      subject: `[신규 문의] ${company} - ${name}`,
      html: `
        <h2>신규 문의가 접수되었습니다</h2>
        <p><strong>회사명:</strong> ${company}</p>
        <p><strong>이름:</strong> ${name}</p>
        <p><strong>이메일:</strong> ${email}</p>
        <p><strong>연락처:</strong> ${phone}</p>
        <p><strong>투자 단계:</strong> ${stage || '미선택'}</p>
        <p><strong>문의 내용:</strong><br>${message || '없음'}</p>
        <hr>
        <p style="color: #666; font-size: 13px;">서비스 소개서 PDF가 자동으로 발송되었습니다.</p>
      `
    };

    await transporter.sendMail(adminNotification);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' })
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' })
    };
  }
};
