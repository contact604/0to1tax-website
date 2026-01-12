# 🚀 배포 전 체크리스트 (Deployment Checklist)

## ✅ **1. SEO 최적화 완료 사항**

### 📌 **메타 태그 최적화**
- [x] Primary Meta Tags (title, description, keywords, author)
- [x] Open Graph Tags (Facebook 공유 최적화)
- [x] Twitter Card Tags (트위터 공유 최적화)
- [x] Canonical URL 설정 (`https://www.0to1tax.com/`)
- [x] Robots Meta Tag (index, follow)

### 📌 **구조화된 데이터 (Structured Data)**
- [x] JSON-LD Schema.org 마크업 추가
  - Professional Service 타입
  - 회사명, 주소, 전화번호, 이메일
  - 영업시간, 가격 범위, 지리 좌표
  - URL: `https://www.0to1tax.com/`

### 📌 **Sitemap & Robots.txt**
- [x] `sitemap.xml` 존재 및 최신화 (2026-01-12 업데이트)
  - 메인 페이지 (priority 1.0)
  - 서비스 페이지 (priority 0.9)
  - 인사이트 페이지 (priority 0.9)
  - 블로그 페이지 (priority 0.7-0.8)
- [x] `robots.txt` 설정
  - 모든 크롤러 허용 (User-agent: *)
  - Admin 페이지 차단 (/admin/, /admin.html)
  - Sitemap 위치 명시 (`https://0to1tax.com/sitemap.xml`)
  - Crawl-delay 설정 (1초)
  - Host 지정 (`https://0to1tax.com`)

---

## ✅ **2. 콘텐츠 & 디자인 완료 사항**

### 📌 **Hero 섹션**
- [x] 수직 자동 슬라이더 (5개 Feature, 20초 주기)
- [x] 마우스 오버 일시정지
- [x] 반응형 폰트 크기
  - Desktop: 64px
  - Mobile 768px: 32px
  - Mobile 480px: 26px
- [x] 글래스모피즘 효과
- [x] CTA 버튼 ('시작하기')
- [x] 타이포그래피 최적화 (word-break: keep-all)

### 📌 **About 섹션**
- [x] 브랜드 소개 슬라이드
- [x] 자동 전환 애니메이션

### 📌 **Problem 섹션**
- [x] 7개 문제 체크박스
  1. 내 재무제표를 잘 몰라요
  2. 투자사의 재무실사가 두려워요
  3. 개발비가 많이 쌓여 있어요
  4. 세무용 장부와 관리용 장부가 따로 있어요
  5. **세무사 연락이 잘 안되요** ⭐ (최신 업데이트)
  6. 담당자가 스톡옵션, RCPS를 잘 몰라요
  7. 상장을 준비해야하는데 어디서부터 해야할지 모르겠어요
- [x] 제출 버튼 (그라데이션 + 호버 효과)
- [x] 진단 결과 페이지 (점수 표시)

### 📌 **Rocket 애니메이션**
- [x] 불꽃/스파클 파티클 효과
- [x] '성장' 메시지 및 로켓 SVG
- [x] Solution 섹션 자동 전환

### 📌 **Solution 섹션**
- [x] 6개 슬라이드 (Problem → Solution 구조)
- [x] 0to1tax 로고
  - Desktop: 80px
  - Mobile: 65px
- [x] 좌우 네비게이션 버튼
- [x] 슬라이드 인디케이터 (dots)
- [x] 하단 '문의하기' 버튼
  - Final Guidance 활성 시 숨김 처리 ✅

### 📌 **Final Guidance 슬라이드 (최종 안내)**
- [x] 스크롤 가능 레이아웃 (max-height: 100vh)
- [x] 커스텀 스크롤바 (파란 그라데이션)
- [x] 상단 로고 숨김 (깔끔한 레이아웃)
- [x] 타이틀: '더 자세한 상담이 필요하신가요?'
- [x] 서브타이틀: '선영회계법인의 스타트업 전문 브랜드'
- [x] 0to1tax 로고 이미지
  - Desktop: 70px
  - Mobile: 55px
- [x] **서비스소개서 ⬇** 버튼
- [x] **지금 문의하기 →** 버튼
- [x] FAQ 아코디언 (7개)
  - Q1: 0to1 tax는 어떤 서비스인가요?
  - Q2: 가격은 어떻게 구성되나요?
  - Q3: 일반 세무사와 차이점은 무엇인가요?
  - Q4: 어떤 스타트업에 최적인가요?
  - Q5: 매출이 작아도 의뢰할 수 있나요?
  - Q6: 분기별 보고서는 자동화된 템플릿인가요?
  - Q7: 투자 실사나 감사도 지원하나요?
- [x] 푸터 (회사 정보)
  - 회사명: Zero to One TAX 선영회계법인
  - 대표자: 최학수
  - 사업자등록번호: 209-86-51192
  - 주소: 서울시 강남구 테헤란로70길 12 H타워 2층
  - 이메일: contact@0to1tax.com
  - 전화: 070-8065-3619

### 📌 **Final Info 섹션 (문의하기 폼)**
- [x] 오버레이 팝업 형태 (z-index: 5000)
- [x] 스크롤 가능 (max-height: 90vh)
- [x] X 버튼 클릭 시 Solution 섹션으로 복귀 ✅
- [x] ESC 키로도 닫기 가능 ✅
- [x] 중복 표시 방지 (Solution 활성 상태 유지) ✅
- [x] 서비스 소개서 다운로드 버튼 제거 ✅
- [x] 폼 필드:
  - 회사명* (필수)
  - 담당자명* (필수)
  - 연락처* (필수)
  - 이메일* (필수)
  - 문의 내용 (선택)
- [x] 제출 버튼
- [x] 푸터 정보

---

## ✅ **3. 반응형 디자인 완료**

### 📌 **Desktop (1024px 이상)**
| 요소 | 크기 |
|------|------|
| Hero Title | 64px |
| Hero Description | 32px |
| Headline Text | 22px |
| Problem Title | 42px |
| Problem Text | 19px |
| Solution Logo | 80px |
| Solution Title | 25px |
| Final Guidance Logo | 70px |

### 📌 **Tablet/Mobile (768px 이하)**
| 요소 | 크기 |
|------|------|
| Hero Title | 32px |
| Hero Description | 19px |
| Headline Text | 16px |
| Problem Title | 32px |
| Problem Text | 16px |
| Solution Logo | 65px |
| Solution Title | 20px |
| Final Guidance Logo | 55px |

### 📌 **Small Mobile (480px 이하)**
| 요소 | 크기 |
|------|------|
| Hero Title | 26px |
| Hero Description | 17px |
| Headline Text | 15px |
| Problem Title | 30px |
| Problem Text | 15px |
| Solution Logo | 65px |
| Solution Title | 19px |
| Final Guidance Logo | 55px |

### 📌 **타이포그래피 최적화**
- [x] `word-break: keep-all` (한글 단어 끊김 방지)
- [x] `word-wrap: break-word` (긴 단어 자동 줄바꿈)
- [x] `overflow-wrap: break-word` (추가 보험)
- [x] `line-height` 증가 (1.6~1.8)
- [x] 모든 섹션에 일관되게 적용

---

## ✅ **4. JavaScript 기능 완료**

### 📌 **Hero 슬라이더**
- [x] 자동 전환 (20초 주기)
- [x] 마우스 오버 일시정지
- [x] 무한 루프
- [x] 부드러운 애니메이션

### 📌 **Problem 체크박스**
- [x] 클릭 시 체크 애니메이션
- [x] 점수 계산 (0-6)
- [x] 제출 시 결과 페이지 표시
- [x] 결과에 따른 메시지 변경

### 📌 **Rocket 애니메이션**
- [x] 파티클 애니메이션 (불꽃, 스파클)
- [x] Solution 섹션으로 자동 전환
- [x] 부드러운 화면 전환

### 📌 **Solution 슬라이더**
- [x] 좌우 네비게이션 버튼
- [x] 슬라이드 인디케이터 클릭
- [x] 키보드 네비게이션 (좌우 화살표)
- [x] ESC 키로 닫기
- [x] 슬라이드 전환 애니메이션

### 📌 **FAQ 아코디언**
- [x] 클릭 시 펼침/접힘
- [x] 한 번에 하나만 열림
- [x] 아이콘 회전 애니메이션 (45도 → X)
- [x] 부드러운 max-height 전환

### 📌 **문의하기 폼**
- [x] 폼 유효성 검사 (필수 필드)
- [x] 제출 시 알림 메시지
- [x] X 버튼 / ESC 키로 닫기
- [x] Solution 섹션으로 복귀 (중복 표시 방지) ✅
- [x] 폼 리셋

---

## 🔍 **5. 업로드 전 최종 점검 사항**

### 📌 **필수 파일 확인**
- [x] `index.html` - 메인 페이지 (116,079 bytes)
- [x] **`rocket-icon.svg`** - 🚀 로켓 파비콘 (NEW!)
- [x] `0to1tax-horizontal-blue.svg` - 로고 파일
- [x] `sitemap.xml` - 사이트맵 (2,474 bytes, 2026-01-12)
- [x] `robots.txt` - 크롤러 설정 (634 bytes)
- [x] `site.webmanifest` - PWA 매니페스트
- [x] `README.md` - 프로젝트 문서 (5,762 bytes)
- [x] `DEPLOYMENT_CHECKLIST.md` - 이 파일

### 📌 **이미지 준비**
- [x] 로고 파일 (`0to1tax-horizontal-blue.svg`)
- [x] **로켓 파비콘** (`rocket-icon.svg`) ⭐ 새로 추가!
- [x] OG Image (`og-image.jpg`) - 소셜 미디어 공유용
  - 크기: 1200x630px
  - 위치: 루트 디렉토리
- [x] Web Manifest (`site.webmanifest`) - PWA 지원

### 📌 **브라우저 테스트 (권장)**
- [ ] Chrome (최신 버전)
- [ ] Firefox (최신 버전)
- [ ] Safari (macOS / iOS)
- [ ] Edge (최신 버전)
- [ ] Mobile Chrome (Android)
- [ ] Mobile Safari (iOS)

### 📌 **반응형 테스트 (권장)**
- [ ] Desktop: 1920px, 1440px, 1280px
- [ ] Tablet: 1024px, 768px
- [ ] Mobile: 480px, 375px, 360px

### 📌 **기능 테스트 (권장)**
- [ ] Hero 슬라이더 자동 전환
- [ ] Problem 체크박스 선택 및 제출
- [ ] Rocket 애니메이션 → Solution 전환
- [ ] Solution 슬라이드 네비게이션
- [ ] FAQ 아코디언 펼침/접힘
- [ ] 문의하기 버튼 클릭
- [ ] 문의하기 폼 제출
- [ ] X 버튼 / ESC 키 닫기
- [ ] 서비스소개서 다운로드

---

## 📊 **6. SEO 상태 요약**

### ✅ **완벽하게 구현된 SEO 요소**
- [x] **Primary Meta Tags**
  - Title: "0to1tax - 스타트업 전문 세무회계 | 투자유치 재무관리 | 선영회계법인"
  - Description: VC 투자유치, 재무실사, IR 자료 작성 포함
  - Keywords: 스타트업 세무사, 투자유치 회계, VC 실사 등
  - Canonical URL: `https://www.0to1tax.com/`

- [x] **Open Graph Tags (Facebook)**
  - og:type, og:url, og:title, og:description
  - og:image: `https://www.0to1tax.com/og-image.jpg`
  - og:locale: ko_KR

- [x] **Twitter Card Tags**
  - twitter:card, twitter:url, twitter:title
  - twitter:description, twitter:image

- [x] **JSON-LD Structured Data**
  - Professional Service 타입
  - 완전한 회사 정보 (이름, 주소, 전화, 이메일)
  - 지리 좌표, 가격 범위, 영업시간

- [x] **Sitemap & Robots**
  - sitemap.xml (11개 URL, 최신 날짜 2026-01-12)
  - robots.txt (크롤러 설정, sitemap 위치)

### 📈 **예상 Lighthouse 점수**
- **Performance**: 95+ (인라인 CSS, 최소 외부 리소스)
- **Accessibility**: 90+ (시맨틱 HTML, ARIA 레이블)
- **Best Practices**: 95+ (HTTPS, 보안 헤더)
- **SEO**: 98+ (완벽한 메타 태그, 구조화된 데이터)

---

## 🚀 **7. 배포 방법**

### **✅ Publish 탭 사용 (권장)**

1. **화면 상단의 Publish 탭 클릭**
2. **Publish 버튼 클릭**
3. **배포 완료 후 제공되는 URL 확인**
4. **URL 접속하여 최종 확인**

### **배포 후 즉시 할 일**

#### 1️⃣ **사이트 접속 확인**
- [ ] 제공된 URL로 접속
- [ ] 모든 섹션 정상 표시 확인
- [ ] 이미지/로고 로딩 확인

#### 2️⃣ **모바일 확인**
- [ ] 실제 모바일 기기로 접속
- [ ] 터치 스크롤 작동 확인
- [ ] 버튼 터치 반응 확인

#### 3️⃣ **폼 테스트**
- [ ] 문의하기 버튼 클릭
- [ ] 필수 필드 입력
- [ ] 제출 버튼 클릭 (알림 확인)

---

## 📋 **8. 배포 후 할 일 (선택 사항)**

### 📌 **Google Search Console 등록**
1. [Google Search Console](https://search.google.com/search-console) 접속
2. 속성 추가: `https://www.0to1tax.com/`
3. 소유권 확인 (HTML 태그 방법)
4. Sitemap 제출: `https://0to1tax.com/sitemap.xml`
5. 색인 생성 요청

### 📌 **SEO 도구 검증**
- [ ] [Google 구조화된 데이터 테스트](https://search.google.com/test/rich-results)
- [ ] [Open Graph 미리보기](https://www.opengraph.xyz/)
- [ ] [Twitter Card 검증](https://cards-dev.twitter.com/validator)

### 📌 **분석 도구 설치 (선택)**
- [ ] Google Analytics 4 (GA4)
- [ ] Google Tag Manager (GTM)
- [ ] Naver Analytics
- [ ] Facebook Pixel (필요 시)

### 📌 **백엔드 연동 (추후)**
현재 문의하기 폼은 프론트엔드만 구현되어 있습니다.  
실제 데이터 수신을 위해서는 백엔드 API 연동이 필요합니다.

```javascript
// TODO: 백엔드 API 연동 필요
// index.html 3732번째 줄 참고
```

---

## ✨ **9. 최종 요약**

### 🎉 **완료된 작업**
1. ✅ 완전 반응형 랜딩 페이지 (Desktop/Tablet/Mobile)
2. ✅ SEO 완벽 최적화 (메타 태그, OG, JSON-LD)
3. ✅ 인터랙티브 UI (Hero 슬라이더, 로켓, Solution, FAQ)
4. ✅ 사용자 진단 시스템 (Problem 체크 → 결과)
5. ✅ 문의하기 폼 (유효성 검사 포함)
6. ✅ Sitemap & Robots.txt
7. ✅ 타이포그래피 최적화 (단어 끊김 방지)
8. ✅ 로고 크기 조정 (섹션별 최적화)
9. ✅ FAQ 아코디언 (7개 질문)
10. ✅ 푸터 정보 (회사 상세 정보)
11. ✅ **로켓 파비콘 추가** (`rocket-icon.svg`) 🚀 NEW!
12. ✅ **Savetax 브랜드 정보 추가** (FAQ 및 JSON-LD) 🏢 NEW!

### 🔧 **추후 개선 사항**
- [ ] 백엔드 API 연동 (문의하기 데이터 수신)
- [ ] Google Analytics 설치
- [ ] 블로그 콘텐츠 추가
- [ ] 고객 후기 섹션
- [ ] 실제 서비스소개서 PDF 업로드

---

## 🎯 **10. 지금 바로 배포하세요!**

모든 준비가 완료되었습니다! 🎉

1. **Publish 탭** 클릭
2. **Publish 버튼** 클릭
3. 배포 완료! 🚀

---

## 📞 **문의사항**

배포 후 문제가 발생하거나 추가 수정이 필요하시면 언제든지 말씀해주세요! 😊

**현재 버전**: v1.0.0  
**최종 업데이트**: 2026-01-12  
**제작**: 선영회계법인 0to1tax 팀
