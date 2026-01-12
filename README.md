# 0to1tax - 스타트업 전문 세무회계

> **Zero to One TAX** - 스타트업의 첫 번째 CFO  
> 선영회계법인의 스타트업 전문 브랜드

![Version](https://img.shields.io/badge/version-1.9.0-blue)
![Status](https://img.shields.io/badge/status-production-green)
![SEO](https://img.shields.io/badge/SEO-optimized-brightgreen)
![Responsive](https://img.shields.io/badge/responsive-✓-success)

---

## 🎯 프로젝트 개요

**0to1tax**는 스타트업을 위한 전문 세무회계 서비스 랜딩 페이지입니다.  
VC 투자유치, 재무실사, IR 자료 작성부터 상장 준비까지 스타트업 성장의 모든 단계를 지원합니다.

### 주요 특징
- 📱 **완전 반응형** - Desktop, Tablet, Mobile 완벽 지원
- 🎨 **인터랙티브 UI** - 로켓 애니메이션, 슬라이드, 아코디언 FAQ
- 🚀 **맞춤형 솔루션** - 사용자가 선택한 문제에 따른 맞춤 슬라이드
- 📊 **SEO 최적화** - Schema.org, OG 태그, 완벽한 메타 태그
- ⚡ **빠른 로딩** - 인라인 CSS, 최적화된 이미지, 3초 이내 로딩

---

## 📂 프로젝트 구조

```
0to1tax/
├── index.html                          # 메인 랜딩 페이지
├── rocket-icon.svg                     # 🚀 로켓 파비콘 (NEW!)
├── sitemap.xml                         # 검색엔진 사이트맵 (2026-01-12)
├── robots.txt                          # 크롤러 설정
├── site.webmanifest                    # PWA 매니페스트
├── DEPLOYMENT_CHECKLIST.md             # 배포 전 체크리스트
├── README.md                           # 프로젝트 문서
│
├── images/
│   ├── 0to1tax-horizontal-blue.svg    # 가로 로고 (파랑)
│   ├── 0to1tax-icon-blue.svg          # 아이콘 로고 (파랑)
│   └── og-image.jpg                   # 소셜 미디어 이미지
│
└── files/
    └── 0to1tax-service-guide.pdf      # 서비스 소개서
```

---

## 🎨 주요 기능

### ✨ **NEW (v1.8.0): 로고 최종 완성!**
- **텍스트 크기 48px**: 로켓 길이와 완벽히 일치
- **"1"과 "t" 띄어쓰기 제거**: "0to1tax" 하나로 통합
- **letter-spacing="-2"**: 글자들이 촘촘하게 붙음
- **로켓 불꽃 정렬**: "0"의 위쪽과 완벽히 일치
- **3곳 적용**: Header, Solution Section, Final Guidance

### 🏠 **히어로 전용 첫 페이지 (v1.5.0)**
- **첫 페이지 히어로만 표시**: 페이지 로드 시 히어로 섹션만 보이고 스크롤 불가
- **"같이 성장하기" 버튼**: 클릭 시 About 섹션으로 진행
- **히어로 높이 고정**: `height: calc(100vh - 60px)` (헤더 60px 제외)
- **body 스크롤 제어**: 히어로에서는 `overflow: hidden`

### 1️⃣ Hero 섹션
- 대형 타이틀과 설명
- 6가지 핵심 메시지 자동 슬라이드 (4초 사이클)
- "같이 성장하기" CTA 버튼 → About 섹션 시작
- 3D 떠다니는 요소 (글래스모피즘)
- **전체 화면 고정 - 스크롤 없음**

### 2️⃣ About 섹션 (3단계)
- 로딩 애니메이션 (1/3 → 2/3 → 3/3)
- 3개 슬라이드로 서비스 철학 소개
- 프로그레스바 표시

### 3️⃣ Problem 체크박스
- 7가지 스타트업 문제 선택 가능
- 다중 선택 지원
- 선택에 따른 맞춤형 솔루션 제공

### 4️⃣ Result & Rocket 애니메이션
- 선택한 문제 개수 표시 (0/6)
- 로켓 발사 애니메이션 (4초)
- 파티클 & 스파클 이펙트
- "성장" 메시지 표시

### 5️⃣ Solution 슬라이드
- 선택한 문제에 맞는 솔루션 표시
- Problem/Solution 박스 구조
  - Problem: 빨간 테두리
  - Solution: 초록 테두리
- 네비게이션 (이전/다음/점)
- 하단 고정 "문의하기" 버튼

### 6️⃣ 최종 안내 슬라이드
- 타이틀: "더 자세한 상담이 필요하신가요?"
- 로고 표시 (70px Desktop / 55px Mobile)
- [서비스소개서 ⬇] 버튼 (파란색)
- [지금 문의하기 →] 버튼 (오렌지색)
- FAQ 아코디언 (7개)
- 회사 정보 푸터
- 스크롤 지원 (max-height: 100vh)

### 7️⃣ 문의하기 폼
- 필수 필드: 회사명, 담당자명, 연락처, 이메일
- 선택 필드: 문의 내용
- 유효성 검사
- 스크롤 지원 (max-height: 90vh)
- ESC 키로 닫기
- X 버튼으로 닫기
- 제출 시 Solution 섹션으로 복귀

---

## 🔍 SEO 최적화

### 메타 태그
```html
<title>0to1tax - 스타트업 전문 세무회계 | 투자유치 재무관리 | 선영회계법인</title>
<meta name="description" content="VC 투자유치, 재무실사, IR 자료 작성까지. 12,000개 이상의 기장 노하우를 가진 선영회계법인의 스타트업 전문 브랜드...">
<meta name="keywords" content="스타트업 세무사, 스타트업 회계, 투자유치 회계, VC 실사, 재무제표, 기장대행, 스톡옵션, RCPS...">
```

### Schema.org 구조화 데이터
```json
{
  "@type": "ProfessionalService",
  "name": "0to1tax",
  "telephone": "070-8065-3619",
  "email": "contact@0to1tax.com",
  "address": {...},
  "serviceType": [...]
}
```

### Open Graph & Twitter Card
- og:title, og:description, og:image
- twitter:card, twitter:title, twitter:image
- 이미지 크기: 1200x630px

---

## 📱 반응형 디자인

| 요소 | Desktop | Tablet (768px) | Mobile (480px) |
|------|---------|----------------|----------------|
| **Hero Title** | 64px | 32px | 26px |
| **Hero Description** | 32px | 19px | 17px |
| **Headline Text** | 22px | 16px | 15px |
| **Problem Title** | 42px | - | 30px |
| **Problem Text** | 19px | - | 15px |
| **Header Logo** | 90px | 70px | 70px |
| **Solution Logo** | 80px | 65px | 65px |
| **Final Logo** | 70px | 55px | 55px |

### 텍스트 최적화
- `word-break: keep-all` - 한글 단어 끊김 방지
- `word-wrap: break-word` - 단어 단위 줄바꿈
- `overflow-wrap: break-word` - 추가 안전장치
- `line-height` 증가 - 가독성 향상

---

## 🚀 배포 가이드

### 1. 사전 준비
```bash
# 필수 파일 확인
✅ index.html
✅ sitemap.xml (2026-01-12)
✅ robots.txt
✅ 0to1tax-horizontal-blue.svg
✅ 0to1tax-icon-blue.svg
✅ og-image.jpg
⚠️  0to1tax-service-guide.pdf (준비 필요)
```

### 2. 서비스소개서 링크 설정
```html
<!-- 최종 안내 슬라이드 -->
<a href="https://0to1tax.com/files/0to1tax-service-guide.pdf" class="final-guidance-btn secondary">
    서비스소개서 ⬇
</a>
```

### 3. 배포
```bash
# Netlify
netlify deploy --prod

# Vercel  
vercel --prod

# GitHub Pages
git push origin main
```

### 4. 검색엔진 등록
- **Google Search Console**: https://search.google.com/search-console
  - 도메인 소유권 확인
  - sitemap.xml 제출: `https://0to1tax.com/sitemap.xml`
  - 색인 생성 요청
  
- **네이버 서치어드바이저**: https://searchadvisor.naver.com
  - 사이트 등록
  - sitemap.xml 제출
  
- **다음 검색등록**: https://register.search.daum.net/index.daum
  - 사이트 등록

### 5. 소셜 미디어 공유 테스트
- **Facebook 디버거**: https://developers.facebook.com/tools/debug/
- **Twitter Card 검증**: https://cards-dev.twitter.com/validator
- **LinkedIn 검증**: https://www.linkedin.com/post-inspector/

---

## 🛠️ 기술 스택

- **HTML5** - 시맨틱 마크업
- **CSS3** - Flexbox, Grid, Animations, Transitions
- **JavaScript (Vanilla)** - 인터랙션, 애니메이션, 폼 검증
- **SVG** - 로고, 아이콘, 로켓 애니메이션
- **Schema.org** - 구조화 데이터 (JSON-LD)

---

## 📊 성능 목표

- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.0s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Google PageSpeed Score**: 90+

---

## 📞 연락처

**회사명**: Zero to One TAX 선영 회계법인  
**대표자**: 최학수  
**사업자등록번호**: 209-86-51192  
**주소**: 서울시 강남구 테헤란로70길 12 H타워 2층  
**전화**: 070-8065-3619  
**이메일**: contact@0to1tax.com  
**웹사이트**: https://www.0to1tax.com

---

## 🎯 서비스 내용

### 기본 기장 서비스
- **1인 법인**: 월 130,000원 (VAT 별도)
- **직원 있는 법인**: 월 150,000원 (VAT 별도)

### 추가 서비스
1. **투자 지원**
   - VC 재무실사 대응
   - IR 자료 작성
   - 투자 유리한 재무제표 작성

2. **재무 관리**
   - 분기별 경영 리포트
   - 투자/감사 관점 핵심 포인트
   - 현금흐름 상태 분석

3. **전문 자문**
   - 스톡옵션 설계
   - RCPS 자문
   - 법인 구조 설계

4. **상장 준비**
   - 지정감사 PA
   - IFRS 컨버전
   - 상장청구서 작성
   - 기업가치 평가

---

## 📝 FAQ

### Q1. 0to1 tax는 어떤 서비스인가요?
선영회계법인의 스타트업 전문 기장 브랜드로, 12,000개 이상의 기장 노하우를 보유하고 있습니다.

### Q2. 가격은 어떻게 구성되나요?
1인 법인 월 130,000원, 직원 있을 시 월 150,000원(VAT 별도)부터 시작합니다.

### Q3. 일반 세무사·기장 서비스와 무엇이 다른가요?
VC가 보는 숫자 기준으로 재무를 관리하고, 투자 계약·실사에서 문제될 구조를 사전에 점검합니다.

### Q4. 어떤 스타트업에 최적인가요?
PRE-A부터 Series A를 준비 중인 스타트업에 최적입니다.

### Q5. 매출이 작아도 문의 가능한가요?
예, 그 단계에서 가장 도움이 됩니다.

### Q6. 분기별 보고서는 어떤 내용인가요?
투자 전문 회계사가 분석한 리포트로, 투자/감사 관점의 핵심 포인트를 매 분기 보고합니다.

### Q7. 투자 실사나 감사도 지원하나요?
가능합니다. Buy-side/Sell-side 실사, 회계감사, 기업가치평가 등을 지원합니다.

---

## 🔄 업데이트 히스토리

### v1.0.0 (2026-01-12) - Production Ready 🎉
- ✅ **SEO 대폭 강화**: Schema.org, OG 태그, 완벽한 메타 태그
- ✅ **텍스트 최적화**: 단어 끊김 방지, line-height 조정
- ✅ **반응형 완벽 구현**: Desktop, Tablet, Mobile
- ✅ **FAQ 아코디언**: 7개 FAQ with + 아이콘
- ✅ **문의하기 폼**: 스크롤 지원, ESC 키 닫기
- ✅ **로고 최적화**: 섹션별 크기 차별화
- ✅ **Solution 복귀**: X 버튼 클릭 시 Solution으로 복귀
- ✅ **스크롤 지원**: 최종 안내 슬라이드, 문의하기 창
- ✅ **Problem 텍스트 변경**: "연락하기 불편해요" → "세무사 연락이 잘 안되요"

---

## 📋 배포 전 체크리스트

자세한 내용은 [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md) 참고

### 필수 확인 사항
- [ ] 서비스소개서 PDF 링크 설정
- [ ] Google Analytics 설치
- [ ] 도메인 SSL 인증서 확인
- [ ] 크로스 브라우저 테스트
- [ ] 성능 테스트 (PageSpeed Insights)
- [ ] 검색엔진 sitemap 제출
- [ ] 소셜 미디어 공유 테스트

---

## 📄 라이선스

Copyright © 2026 Zero to One TAX. All rights reserved.

---

## ✨ 배포 완료!

프로젝트가 성공적으로 완료되었습니다! 🎉

**배포 후 확인 사항:**
1. ✅ 실제 도메인에서 정상 작동 확인
2. ✅ Google Search Console에 sitemap 제출
3. ✅ 네이버 서치어드바이저에 사이트 등록
4. ✅ 소셜 미디어 공유 이미지 확인
5. ✅ 24시간 후 검색엔진 크롤링 상태 확인

---

**Made with ❤️ by 0to1tax Team**
