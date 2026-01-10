# 🚀 Zero to one TAX - 최종 설정 가이드

배포 후 반드시 해야 할 설정들을 단계별로 안내합니다.

---

## 📋 체크리스트 요약

- [ ] 1. Favicon 생성 (PNG 파일)
- [ ] 2. OG 이미지 생성 및 업로드
- [ ] 3. Google Tag Manager 설정
- [ ] 4. Facebook Pixel 설정
- [ ] 5. 카카오톡 채널 생성 및 연동
- [ ] 6. 트래킹 스크립트 적용
- [ ] 7. 최종 테스트

---

## 1️⃣ Favicon 생성하기

### 현재 상태
✅ `favicon.svg` 파일 생성 완료

### 추가 작업 필요
PNG 파일로도 변환 필요 (구형 브라우저 지원)

#### 방법 A: 온라인 도구 사용 (추천)
1. https://realfavicongenerator.net/ 접속
2. `favicon.svg` 파일 업로드
3. 설정:
   - iOS: 배경색 #0F172A 선택
   - Android: 배경색 #0F172A 선택
   - Windows: 배경색 #0F172A 선택
4. "Generate your Favicons and HTML code" 클릭
5. 다운로드한 파일들을 루트 폴더에 업로드:
   - `favicon-32x32.png`
   - `favicon-16x16.png`
   - `apple-touch-icon.png`
   - `favicon.ico`

#### 방법 B: 수동 제작
1. Figma/Photoshop에서 로고 디자인
2. 다음 사이즈로 내보내기:
   - 32x32px (favicon-32x32.png)
   - 16x16px (favicon-16x16.png)
   - 180x180px (apple-touch-icon.png)
3. 루트 폴더에 업로드

---

## 2️⃣ OG 이미지 생성하기

### 현재 상태
✅ `og-image-template.html` 템플릿 생성 완료

### 작업 순서

#### 스크린샷 방식
1. `og-image-template.html` 파일을 브라우저에서 열기
2. 브라우저 창 크기를 정확히 1200x630으로 설정
3. 스크린샷 찍기:
   - **Mac**: Command + Shift + 4, 스페이스바
   - **Windows**: Windows + Shift + S
   - **Chrome**: DevTools > Device Toolbar > Responsive > 1200x630
4. 이미지를 `og-image.jpg`로 저장
5. 루트 폴더에 업로드

#### 이미지 최적화
```bash
# TinyPNG.com 사용 (추천)
https://tinypng.com/

# 또는 ImageOptim (Mac)
https://imageoptim.com/
```

#### index.html 업데이트
```html
<!-- 현재 -->
<meta property="og:image" content="https://zerotoonetax.com/images/og-image.jpg">

<!-- 실제 도메인으로 변경 -->
<meta property="og:image" content="https://실제도메인.com/og-image.jpg">
```

#### 테스트
- Facebook: https://developers.facebook.com/tools/debug/
- Twitter: https://cards-dev.twitter.com/validator
- LinkedIn: https://www.linkedin.com/post-inspector/

---

## 3️⃣ Google Tag Manager 설정

### 1단계: GTM 계정 생성
1. https://tagmanager.google.com/ 접속
2. "계정 만들기" 클릭
3. 계정 정보:
   - 계정 이름: Zero to one TAX
   - 국가: 대한민국
4. 컨테이너 정보:
   - 컨테이너 이름: zerotoonetax.com
   - 대상 플랫폼: 웹
5. "만들기" 클릭

### 2단계: 컨테이너 ID 받기
- 형식: `GTM-XXXXXXX`
- 상단에서 확인 가능

### 3단계: 코드 설치
`tracking-scripts.html` 파일 참고하여 index.html에 추가:

```html
<!-- <head> 시작 부분에 -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>

<!-- <body> 시작 직후에 -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
```

### 4단계: Google Analytics 연동
GTM 내에서:
1. "태그" > "새로 만들기"
2. 태그 유형: Google 애널리틱스: GA4 구성
3. 측정 ID 입력 (G-XXXXXXXXXX)
4. 트리거: All Pages
5. 저장 및 게시

---

## 4️⃣ Facebook Pixel 설정

### 1단계: 픽셀 생성
1. https://business.facebook.com/events_manager 접속
2. "데이터 소스 연결" > "웹"
3. "Facebook Pixel" 선택
4. 픽셀 이름: Zero to one TAX
5. 웹사이트 URL 입력

### 2단계: 픽셀 ID 받기
- 형식: 숫자 16자리
- 이벤트 관리자에서 확인

### 3단계: 코드 설치
`tracking-scripts.html` 파일 참고하여 index.html `<head>`에 추가:

```html
<script>
!function(f,b,e,v,n,t,s){...}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'YOUR_PIXEL_ID'); // 실제 픽셀 ID로 교체
fbq('track', 'PageView');
</script>
```

### 4단계: 이벤트 설정
상담 신청 폼 제출 시 이벤트 추가:

```javascript
// js/main.js의 submitConsultation 함수에 추가
if (typeof fbq !== 'undefined') {
  fbq('track', 'Lead');
}
```

---

## 5️⃣ 카카오톡 채널 생성 및 연동

### 1단계: 카카오톡 채널 생성
1. https://center-pf.kakao.com/ 접속
2. "채널 만들기" 클릭
3. 채널 정보:
   - 채널 이름: **Zero to one TAX**
   - 검색용 아이디: **@zerotoonetax** (원하는 아이디)
   - 카테고리: 비즈니스/재무
4. 프로필 사진 업로드 (로고)
5. 소개 문구:
   ```
   스타트업 성장 세무회계 전문
   ZERO에서 ONE까지 함께합니다 🚀
   ```

### 2단계: 상담 설정
1. 채널 관리 > 설정 > 상담 설정
2. "1:1 채팅 받기" 활성화
3. 운영 시간 설정:
   - 평일: 09:00 - 18:00
   - 주말: 휴무
4. 환영 메시지:
   ```
   안녕하세요! Zero to one TAX입니다 🚀
   
   무엇을 도와드릴까요?
   
   ✅ 무료 상담 신청
   ✅ 서비스 안내
   ✅ 가격 문의
   ✅ 블로그 보기
   ```

### 3단계: 채팅 버튼 코드 받기
1. 채널 관리 > 홍보하기 > 채팅 버튼
2. JavaScript 키 발급
3. 채널 공개 ID 확인 (예: `_abc123`)

### 4단계: 웹사이트에 적용
index.html에서 카카오톡 버튼 URL 업데이트:

```html
<!-- 현재 -->
<a href="http://pf.kakao.com/_your_channel_id/chat" ...>

<!-- 실제 채널 ID로 교체 -->
<a href="http://pf.kakao.com/_zerotoonetax/chat" ...>
```

### 5단계 (선택): 카카오 SDK 사용
더 고급 기능을 원한다면 `kakao-chat-widget.html` 참고

---

## 6️⃣ 트래킹 이벤트 적용

### js/main.js 파일 수정

#### 1. 상담 신청 완료 이벤트
```javascript
// 상담 신청 폼 제출 함수에 추가
async function submitConsultation(formData) {
  // ... 기존 코드 ...
  
  if (response.ok) {
    // 트래킹 이벤트 추가
    if (typeof dataLayer !== 'undefined') {
      dataLayer.push({
        'event': 'consultation_submit',
        'event_category': 'form',
        'event_label': 'consultation_form'
      });
    }
    
    if (typeof fbq !== 'undefined') {
      fbq('track', 'Lead');
    }
    
    // ... 나머지 코드 ...
  }
}
```

#### 2. 전화/이메일 클릭 이벤트
```javascript
// Footer의 전화번호/이메일 링크에 onclick 추가
<a href="tel:010-4395-1996" 
   onclick="trackEvent('phone_click', {'event_category': 'contact'})">

<a href="mailto:contact@0to1tax.com" 
   onclick="trackEvent('email_click', {'event_category': 'contact'})">
```

#### 3. 트래킹 함수 추가
```javascript
// js/main.js 하단에 추가
function trackEvent(eventName, eventData) {
  if (typeof dataLayer !== 'undefined') {
    dataLayer.push({
      'event': eventName,
      ...eventData
    });
  }
}
```

---

## 7️⃣ 최종 테스트

### 기능 테스트
```bash
□ 모든 페이지 정상 로딩
□ 상담 신청 폼 제출
□ 카카오톡 버튼 클릭
□ 블로그 페이지 접속
□ 관리자 페이지 로그인
□ 모바일 화면 확인
```

### SEO 테스트
```bash
□ Google Search Console 색인 확인
□ 구조화된 데이터 유효성 검사
□ 모바일 친화성 테스트
□ 페이지 속도 테스트
```

### 트래킹 테스트
```bash
□ GTM 미리보기 모드 실행
□ GA4 실시간 보고서 확인
□ Facebook Pixel Helper 확장 프로그램 확인
□ 상담 신청 이벤트 발생 확인
□ 카카오톡 클릭 이벤트 확인
```

### OG 이미지 테스트
```bash
□ Facebook Debugger로 확인
□ Twitter Card Validator로 확인
□ LinkedIn Post Inspector로 확인
□ 카카오톡 공유 시 미리보기 확인
```

---

## 📊 성과 측정 지표 (KPI)

### 일간 확인
- [ ] 방문자 수
- [ ] 페이지뷰
- [ ] 상담 신청 건수
- [ ] 카카오톡 클릭 수

### 주간 확인
- [ ] 검색 유입 키워드
- [ ] 평균 체류 시간
- [ ] 이탈률
- [ ] 전환율 (상담 신청 / 방문자)

### 월간 확인
- [ ] 신규 방문자 / 재방문자 비율
- [ ] 블로그 조회수 Top 10
- [ ] 유입 채널 분석 (검색, 소셜, 직접)
- [ ] 목표 달성률

---

## 🚨 문제 해결

### GTM이 작동하지 않을 때
1. 브라우저 콘솔에서 `dataLayer` 확인
2. GTM 미리보기 모드 실행
3. 태그 실행 여부 확인

### Facebook Pixel이 작동하지 않을 때
1. Facebook Pixel Helper 설치
2. 픽셀 ID 확인
3. 브라우저 콘솔에서 `fbq` 함수 확인

### 카카오톡 버튼이 작동하지 않을 때
1. 채널 ID 확인
2. 채널이 공개 상태인지 확인
3. 1:1 채팅 기능 활성화 확인

---

## ✅ 완료 체크리스트

모든 작업 완료 후 체크하세요:

- [ ] Favicon 생성 및 업로드
- [ ] OG 이미지 생성 및 업로드
- [ ] GTM 설치 및 GA4 연동
- [ ] Facebook Pixel 설치
- [ ] 카카오톡 채널 생성 및 연동
- [ ] 트래킹 이벤트 모두 적용
- [ ] 모든 기능 테스트 완료
- [ ] 실제 상담 신청 테스트
- [ ] 모바일 화면 테스트
- [ ] 팀원들에게 공유

---

**설정 완료를 축하합니다! 🎉**

이제 Zero to one TAX 웹사이트가 완벽하게 준비되었습니다!
