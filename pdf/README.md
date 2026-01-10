# Zero to One TAX 서비스 소개서 PDF

이 폴더에는 자동 발송될 서비스 소개서 PDF 파일이 위치합니다.

## 파일명
`Zero_to_One_TAX_Service_Guide.pdf`

## 파일 위치
`/pdf/Zero_to_One_TAX_Service_Guide.pdf`

## 사용 방법
1. 실제 서비스 소개서 PDF를 준비합니다
2. 파일명을 `Zero_to_One_TAX_Service_Guide.pdf`로 변경합니다
3. 이 폴더에 업로드합니다

## 자동 발송 트리거
- 문의 폼 제출 시 자동으로 이메일에 첨부되어 발송됩니다
- Netlify Functions (`submission-created.js`)에서 처리합니다

## 이메일 내용
**제목**: [Zero to One TAX] 서비스 소개서를 보내드립니다  
**내용**: 
- 문의 감사 인사
- 서비스 소개서 PDF 첨부 안내
- 1영업일 이내 연락 예정 안내
- 회사 정보

## 환경 변수 설정 필요
Netlify Dashboard > Site Settings > Environment Variables에서 설정:
- `EMAIL_USER`: lbg@0to1tax.com
- `EMAIL_PASSWORD`: Gmail 앱 비밀번호

## Gmail 앱 비밀번호 생성 방법
1. Google 계정 > 보안
2. 2단계 인증 활성화
3. 앱 비밀번호 생성
4. 생성된 16자리 비밀번호를 Netlify 환경 변수에 등록
