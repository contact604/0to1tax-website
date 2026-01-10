# 🚀 GitHub + Netlify 자동 배포 완벽 가이드

**프로젝트**: Zero to one TAX  
**방법**: GitHub → Netlify 자동 연동  
**난이도**: ⭐⭐⭐☆☆  
**소요 시간**: 15~20분

---

## 📋 목차

1. [사전 준비](#1-사전-준비)
2. [GitHub 저장소 생성](#2-github-저장소-생성)
3. [파일 업로드](#3-파일-업로드)
4. [Netlify 연동](#4-netlify-연동)
5. [배포 완료 확인](#5-배포-완료-확인)
6. [도메인 연결](#6-도메인-연결-선택)
7. [문제 해결](#7-문제-해결)

---

## 1. 사전 준비

### ✅ 필요한 계정
- **GitHub 계정** - https://github.com/join
- **Netlify 계정** - https://app.netlify.com/signup (GitHub 계정으로 로그인 가능)

### ✅ 업로드할 파일 목록

#### 필수 파일 (29개)
```
📁 루트 디렉토리
├── index.html              ✅ (메인 페이지)
├── taxz1log.html           ✅ (블로그 목록)
├── blog-detail.html        ✅ (블로그 상세)
├── admin.html              ✅ (관리자)
├── 404.html                ✅ (에러 페이지)
├── robots.txt              ✅ (SEO)
├── sitemap.xml             ✅ (SEO)
├── .htaccess               ✅ (서버 설정)
├── site.webmanifest        ✅ (PWA)
├── netlify.toml            ✅ (Netlify 설정) ⭐ 새로 생성!
├── .gitignore              ✅ (Git 제외 파일) ⭐ 새로 생성!
├── README.md               ✅ (프로젝트 문서)
│
├── favicon.svg             ✅ (파비콘)
├── og-image.jpg            ✅ (SNS 공유 이미지)
├── android-chrome-512x512.png  ✅ (앱 아이콘)
│
└── 📁 js/
    ├── main.js             ✅
    ├── blog.js             ✅
    ├── blog-detail.js      ✅
    ├── admin.js            ✅
    └── taxz1log.js         ✅
```

#### 선택 파일 (필요시)
```
- blog.html
- timeline-option1.html
- timeline-option2.html
- timeline-option3.html
- og-image-maker.html
- kakao-chat-widget.html
- tracking-scripts.html
- og-image-template.html
- 기타 가이드 문서들
```

---

## 2. GitHub 저장소 생성

### 방법 A: GitHub 웹사이트 (추천)

1. **GitHub 로그인**
   - https://github.com 접속
   - 로그인

2. **새 저장소 생성**
   - 우측 상단 `+` 클릭 → `New repository` 선택
   - 또는 https://github.com/new 직접 접속

3. **저장소 설정**
   ```
   Repository name: 0to1tax-website
   Description: Zero to one TAX - 스타트업 성장 세무회계 전문 웹사이트
   
   공개 여부:
   ○ Public (추천 - 무료)
   ○ Private (유료 필요할 수 있음)
   
   Initialize this repository with:
   ☐ Add a README file (체크 안 함 - 이미 있음)
   ☐ Add .gitignore (체크 안 함 - 이미 있음)
   ☐ Choose a license (선택 사항)
   ```

4. **Create repository 클릭**

✅ **완료!** 저장소 생성됨!

---

## 3. 파일 업로드

### 방법 A: GitHub 웹 인터페이스 (가장 쉬움!)

#### Step 1: 업로드 페이지 이동
```
https://github.com/사용자명/0to1tax-website
```
- `uploading an existing file` 링크 클릭
- 또는 `Add file` → `Upload files` 클릭

#### Step 2: 파일 업로드

**옵션 1: 드래그 앤 드롭**
1. 모든 필수 파일을 선택
2. GitHub 업로드 영역으로 드래그
3. 파일 업로드 대기

**옵션 2: 파일 선택**
1. `choose your files` 클릭
2. 필수 파일 선택 (Ctrl/Cmd + 클릭으로 여러 개 선택)
3. 열기

#### Step 3: js/ 폴더 업로드
GitHub 웹에서는 폴더를 직접 업로드할 수 없으므로:

1. `Add file` → `Create new file` 클릭
2. 파일명에 `js/main.js` 입력 (자동으로 폴더 생성)
3. main.js 내용 복사 & 붙여넣기
4. 하단 `Commit new file` 클릭
5. 나머지 JS 파일들도 반복

**또는 방법 B (Git 명령어) 사용**

#### Step 4: Commit
```
Commit message: Initial commit - Upload Zero to one TAX website
```
- `Commit changes` 클릭

✅ **완료!** 파일 업로드됨!

---

### 방법 B: Git 명령어 (터미널/CMD)

#### 사전 준비
```bash
# Git 설치 확인
git --version

# Git 설정 (처음만)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

#### Step 1: 로컬에 파일 준비
1. 새 폴더 생성: `0to1tax-website`
2. 모든 프로젝트 파일을 이 폴더에 복사

#### Step 2: Git 초기화 및 업로드
```bash
# 프로젝트 폴더로 이동
cd 0to1tax-website

# Git 저장소 초기화
git init

# 모든 파일 추가
git add .

# Commit
git commit -m "Initial commit - Upload Zero to one TAX website"

# GitHub 원격 저장소 연결
git remote add origin https://github.com/사용자명/0to1tax-website.git

# 메인 브랜치 이름 설정 (필요시)
git branch -M main

# Push (업로드)
git push -u origin main
```

**GitHub 인증**
- Username: GitHub 사용자명
- Password: Personal Access Token (PAT)
  - https://github.com/settings/tokens 에서 생성

✅ **완료!** Git으로 업로드됨!

---

## 4. Netlify 연동

### Step 1: Netlify 로그인
1. https://app.netlify.com 접속
2. GitHub 계정으로 로그인 (추천)
   - 또는 이메일로 가입

### Step 2: 새 사이트 추가
1. **"Add new site"** 버튼 클릭
2. **"Import an existing project"** 선택

### Step 3: Git Provider 선택
1. **"GitHub"** 선택
2. GitHub 권한 요청 시 **"Authorize Netlify"** 클릭
3. (처음이면) Netlify가 GitHub 저장소에 접근할 수 있도록 허용

### Step 4: 저장소 선택
1. **"0to1tax-website"** 저장소 찾기
   - 검색창에 `0to1tax` 입력
2. 저장소 클릭

### Step 5: 빌드 설정

```
Branch to deploy:
main (또는 master)

Build settings:
Base directory: (비워두기)
Build command: (비워두기)
Publish directory: . (점 하나)

Advanced build settings: (필요 없음)
```

**중요!**
- 정적 사이트이므로 빌드 명령 불필요
- `netlify.toml` 파일이 설정을 자동으로 처리

### Step 6: Deploy site 클릭!

✅ **자동 배포 시작!**

---

## 5. 배포 완료 확인

### Step 1: 배포 상태 확인
```
Netlify 대시보드에서:
- "Site deploy in progress" 표시
- 진행 상황 실시간 확인
- 보통 30초~2분 소요
```

### Step 2: 배포 완료!
```
✅ "Published"
✅ Your site is live! 🎉
```

### Step 3: URL 확인
```
https://랜덤이름.netlify.app
예: https://cosmic-stroopwafel-a1b2c3.netlify.app
```

### Step 4: 웹사이트 접속 테스트
1. 제공된 URL 클릭
2. 메인 페이지 확인
3. 링크 작동 확인:
   - ✅ 블로그 (`/taxz1log.html`)
   - ✅ 관리자 (`/admin.html`)
   - ✅ 블로그 상세 (`/blog-detail.html`)

✅ **배포 완료!** 🎉

---

## 6. 도메인 연결 (선택)

### 커스텀 도메인: 0to1tax.com

#### 방법 A: Netlify DNS 사용 (추천)

**Step 1: Netlify에서 도메인 추가**
1. Netlify 사이트 대시보드
2. `Domain settings` 클릭
3. `Add custom domain` 클릭
4. `0to1tax.com` 입력
5. `Verify` 클릭

**Step 2: DNS 설정**
Netlify가 제공하는 네임서버:
```
dns1.p01.nsone.net
dns2.p01.nsone.net
dns3.p01.nsone.net
dns4.p01.nsone.net
```

**Step 3: 도메인 등록업체에서 변경**
(가비아/후이즈/Cafe24 등)
1. 도메인 관리 페이지
2. 네임서버 변경
3. Netlify 네임서버로 변경
4. 저장

**Step 4: DNS 전파 대기**
- 소요 시간: 최대 24~48시간
- 보통 1~6시간 내 완료

#### 방법 B: 기존 DNS 유지

**A 레코드 추가:**
```
Type: A
Name: @
Value: 75.2.60.5
TTL: 3600
```

**CNAME 레코드 추가:**
```
Type: CNAME
Name: www
Value: 랜덤이름.netlify.app
TTL: 3600
```

**상세 가이드:**
- `도메인_연결_간단가이드.md`
- `DNS_오류_해결_가이드.md`

---

## 7. 자동 배포 확인

### GitHub → Netlify 자동 연동 완료!

**이제부터:**
1. GitHub에 파일 수정 후 Push
2. Netlify가 **자동으로 감지**
3. **자동으로 재배포**
4. 몇 초 후 변경사항 반영!

### 테스트:
```bash
# 파일 수정
git add .
git commit -m "Update: Test auto deploy"
git push

# Netlify에서 자동 배포 확인!
```

✅ **자동화 완료!** 🎉

---

## 8. 배포 후 설정

### 즉시 (30분 내)

#### 1. HTTPS 강제 리디렉션
```
Netlify 대시보드:
1. Domain settings
2. HTTPS → Force HTTPS
3. 체크박스 활성화
```

#### 2. 폼 알림 설정
```
Netlify 대시보드:
1. Forms → Form notifications
2. 이메일 알림 설정
3. 상담 문의 수신 이메일 추가
```

### 1일 내

#### 3. Google Search Console 등록
```
1. https://search.google.com/search-console
2. 속성 추가: https://0to1tax.com
3. 소유권 확인 (HTML 파일 또는 메타 태그)
4. sitemap.xml 제출
```

#### 4. Google Analytics 설치
```
1. https://analytics.google.com
2. 새 속성 생성
3. 추적 코드 받기
4. index.html <head>에 추가
5. Git push로 자동 배포!
```

---

## 9. 문제 해결

### ❌ "Repository not found"
**원인**: Netlify가 GitHub 접근 권한 없음  
**해결**:
1. https://github.com/settings/installations
2. Netlify 찾기
3. Repository access → 저장소 추가

---

### ❌ "Deploy failed"
**원인**: 파일 구조 또는 설정 오류  
**해결**:
1. Netlify 대시보드 → Deploys → 실패한 배포 클릭
2. 로그 확인
3. 오류 메시지 확인
4. 대부분 `netlify.toml` 설정 문제

---

### ❌ "404 Not Found" (페이지 안 열림)
**원인**: 파일 경로 오류  
**해결**:
1. GitHub에서 파일명 확인
   - `index.html` (소문자 확인)
   - `js/main.js` (폴더 구조 확인)
2. Netlify에서 재배포
3. 브라우저 캐시 삭제 (Ctrl + Shift + R)

---

### ❌ "Domain not working"
**원인**: DNS 전파 중 또는 설정 오류  
**해결**:
1. DNS 전파 확인: https://dnschecker.org
2. `0to1tax.com` 입력 후 체크
3. 전파 완료 대기 (최대 48시간)
4. 상세: `DNS_오류_해결_가이드.md`

---

### ❌ "Images not loading"
**원인**: 파일 업로드 누락  
**해결**:
1. GitHub에서 이미지 파일 확인
2. 없으면 업로드
   - `favicon.svg`
   - `og-image.jpg`
   - `android-chrome-512x512.png`
3. Netlify 자동 재배포

---

## 10. 주요 링크

### 대시보드
- **GitHub 저장소**: https://github.com/사용자명/0to1tax-website
- **Netlify 사이트**: https://app.netlify.com/sites/사이트명
- **배포된 사이트**: https://사이트명.netlify.app

### 관리 도구
- **Google Search Console**: https://search.google.com/search-console
- **Google Analytics**: https://analytics.google.com
- **Netlify 문서**: https://docs.netlify.com

### 프로젝트 가이드
- 📖 `README.md` - 프로젝트 전체 문서
- ✅ `지금_당장_할일.md` - 배포 후 체크리스트
- 🌐 `도메인_연결_간단가이드.md` - 도메인 연결
- 🔍 `구글검색_노출_가이드.md` - SEO 가이드

---

## 🎉 축하합니다!

**Zero to one TAX** 웹사이트가 성공적으로 배포되었습니다! 🚀

### ✅ 완료된 것들:
- ✅ GitHub 저장소 생성
- ✅ 파일 업로드
- ✅ Netlify 자동 배포 연동
- ✅ 웹사이트 라이브!
- ✅ HTTPS 보안 적용
- ✅ 자동 배포 시스템 구축

### 📈 다음 단계:
1. ✅ Google Search Console 등록 (30분)
2. ✅ 도메인 연결 (1~48시간)
3. ✅ Google Analytics 설치 (10분)
4. ✅ 첫 블로그 글 작성!

---

**Zero to one TAX** - ZERO에서 ONE까지 함께합니다! 🚀

© 2024 Zero to one TAX. All rights reserved.
