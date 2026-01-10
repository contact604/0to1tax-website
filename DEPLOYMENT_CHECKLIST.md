# 🚀 배포 전 체크리스트

## ✅ 완료된 항목 (배포 준비 완료)

### 🔍 SEO 최적화
- [x] Primary Meta Tags (title, description, keywords)
- [x] Open Graph Meta Tags (Facebook, LinkedIn)
- [x] Twitter Cards Meta Tags
- [x] Canonical URL 설정
- [x] Structured Data (JSON-LD) - ProfessionalService
- [x] robots.txt 생성
- [x] sitemap.xml 생성

### 🎨 디자인 & UX
- [x] Cosmic 테마 완성
- [x] 반응형 디자인 (Mobile/Tablet/Desktop)
- [x] 모든 페이지 통일된 브랜딩
- [x] 404 에러 페이지 생성
- [x] 접근성 향상 (ARIA labels, semantic HTML)

### 📄 콘텐츠
- [x] 연락처 정보 업데이트
  - Email: contact@0to1tax.com
  - Phone: 010-4395-1996
  - Address: 서울특별시 강남구 테헤란로70길 12 H타워 6층
- [x] 지도 임베드 (Google Maps)
- [x] FAQ 섹션 (5개 질문)
- [x] 14단계 성장 여정

### ⚡ 성능 최적화
- [x] .htaccess 설정
  - Gzip 압축
  - 브라우저 캐싱
  - 보안 헤더
- [x] CDN 사용 (Tailwind, FontAwesome, Fonts)
- [x] 이미지 최적화 권장사항 문서화

### 🛠️ 기능
- [x] 블로그 시스템 완성
  - 목록/상세 페이지
  - 관리자 페이지
  - Rich Text & Markdown 에디터
- [x] 상담 신청 폼
- [x] RESTful Table API 연동

---

## 🔜 배포 직전 확인사항

### 1️⃣ 도메인 & 호스팅
```bash
# 확인 사항:
□ 도메인 구매 완료 (예: zerotoonetax.com)
□ 호스팅 서버 준비 완료
□ FTP/SFTP 접속 정보 확인
□ 데이터베이스 접속 정보 확인
```

### 2️⃣ 파일 업로드
```bash
# 업로드할 파일 목록:
□ index.html
□ taxz1log.html
□ blog-detail.html
□ admin.html
□ 404.html
□ robots.txt
□ sitemap.xml
□ .htaccess
□ css/ (있는 경우)
□ js/ (있는 경우)
□ images/ (있는 경우)
```

### 3️⃣ URL 업데이트
배포 후 다음 파일에서 URL 변경 필요:
```javascript
// index.html, taxz1log.html, blog-detail.html
// 현재: https://zerotoonetax.com/
// 실제 도메인으로 변경

// 수정 위치:
1. Meta Tags (og:url, twitter:url)
2. Canonical URL
3. Structured Data (JSON-LD)
4. sitemap.xml
```

---

## 📊 배포 후 필수 작업

### 1️⃣ 검색엔진 등록 (24시간 내)

#### Google
```bash
1. Google Search Console 접속
   https://search.google.com/search-console
   
2. 속성 추가
   - 도메인: zerotoonetax.com
   - 소유권 확인 (HTML 파일 업로드 또는 메타 태그)
   
3. sitemap.xml 제출
   https://zerotoonetax.com/sitemap.xml
   
4. URL 검사 도구로 색인 요청
```

#### Naver
```bash
1. 네이버 웹마스터도구 접속
   https://searchadvisor.naver.com/
   
2. 사이트 등록
   - 도메인 입력
   - 소유권 확인
   
3. 사이트맵 제출
   
4. RSS 제출 (블로그)
```

### 2️⃣ 분석 도구 설치 (48시간 내)

#### Google Analytics
```html
<!-- index.html <head> 안에 추가 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

#### Naver Analytics
```html
<!-- index.html <head> 안에 추가 -->
<script type="text/javascript" src="//wcs.naver.net/wcslog.js"></script>
<script type="text/javascript">
if(!wcs_add) var wcs_add = {};
wcs_add["wa"] = "XXXXXXXXXX";
wcs_do();
</script>
```

### 3️⃣ SSL 인증서 (즉시)
```bash
□ Let's Encrypt 무료 SSL 설치
□ HTTPS 리다이렉션 활성화 (.htaccess)
□ Mixed Content 오류 확인
□ 모든 링크 https:// 로 변경
```

### 4️⃣ SNS 연동
```bash
□ Facebook Business Page 생성
□ Instagram Business Account 생성
□ 카카오톡 채널 생성
□ Meta Tags 테스트
   - Facebook Debugger: https://developers.facebook.com/tools/debug/
   - Twitter Card Validator: https://cards-dev.twitter.com/validator
```

---

## 🧪 배포 후 테스트

### 1️⃣ 기능 테스트
```bash
□ 모든 페이지 접속 확인
□ 네비게이션 링크 동작
□ 상담 신청 폼 제출
□ 블로그 페이지 로딩
□ 관리자 페이지 접속
□ 모바일 화면 확인
```

### 2️⃣ SEO 테스트
```bash
□ Google PageSpeed Insights
   https://pagespeed.web.dev/
   
□ Google Mobile-Friendly Test
   https://search.google.com/test/mobile-friendly
   
□ Schema Markup Validator
   https://validator.schema.org/
   
□ Open Graph Checker
   https://www.opengraph.xyz/
```

### 3️⃣ 성능 테스트
```bash
□ 페이지 로딩 속도 (< 3초)
□ 이미지 최적화 확인
□ Gzip 압력 확인
□ 캐싱 동작 확인
```

---

## 📈 운영 체크리스트 (주간)

### 매주 확인사항
```bash
□ Google Search Console 확인
  - 색인 생성된 페이지 수
  - 검색 쿼리 분석
  - 크롤링 오류 확인
  
□ Google Analytics 확인
  - 방문자 수
  - 페이지뷰
  - 이탈률
  - 전환율
  
□ 블로그 포스팅 (주 1-2회)

□ 백업 (주 1회)
  - 데이터베이스 백업
  - 파일 백업
```

---

## 🎯 마케팅 체크리스트 (월간)

### SEO 개선
```bash
□ 키워드 분석 및 최적화
□ 메타 설명 개선
□ 내부 링크 구조 개선
□ 백링크 확보
```

### 콘텐츠 전략
```bash
□ 블로그 콘텐츠 계획
□ FAQ 업데이트
□ 케이스 스터디 추가
□ 고객 후기 수집
```

### SNS 마케팅
```bash
□ 정기 포스팅
□ 광고 캠페인 (필요시)
□ 인플루언서 협업 (필요시)
```

---

## 🚨 긴급 연락처

### 기술 지원
- 호스팅: [호스팅 업체 연락처]
- 도메인: [도메인 등록 업체]
- 개발자: [개발자 연락처]

### 비즈니스
- 대표 이메일: contact@0to1tax.com
- 대표 전화: 010-4395-1996

---

## ✅ 최종 확인

배포 직전에 다음 항목을 **반드시** 확인하세요:

1. [ ] 모든 연락처 정보가 정확한가?
2. [ ] 테스트 데이터가 아닌 실제 데이터인가?
3. [ ] 모든 링크가 실제 도메인을 가리키는가?
4. [ ] SSL 인증서가 설치되어 있는가?
5. [ ] robots.txt와 sitemap.xml이 올바른가?
6. [ ] 404 페이지가 작동하는가?
7. [ ] 상담 신청 폼이 정상 작동하는가?
8. [ ] 관리자 페이지 접근 권한이 설정되어 있는가?

---

**배포 준비 완료! 🚀**

모든 체크리스트를 완료하면 안전하게 배포할 수 있습니다.
