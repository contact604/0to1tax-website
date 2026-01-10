# 🚀 GitHub + Netlify 자동 배포 완벽 가이드

## 🎯 목표

**이 환경에서 수정 → GitHub → Netlify → 0to1tax.com 자동 업데이트!**

---

## 📋 준비물

- ✅ GitHub 계정 (무료)
- ✅ Netlify 계정 (무료)
- ✅ 현재 웹사이트 파일들
- ✅ 30분의 시간

---

## 🔵 Step 1: GitHub 가입 및 저장소 생성 (5분)

### 1-1. GitHub 가입

**웹사이트:**
```
https://github.com/signup
```

**입력 정보:**
- 이메일 주소
- 비밀번호
- 사용자 이름 (예: `zerotoonetax`)

**이메일 인증** 완료하기!

---

### 1-2. 새 저장소(Repository) 만들기

**1. GitHub 로그인 후:**
- 오른쪽 상단 **+** 클릭
- **New repository** 선택

**2. 저장소 설정:**
```
Repository name: 0to1tax-website
Description: Zero to one TAX 공식 웹사이트
```

**3. 공개 설정:**
- ⭐ **Public** 선택 (무료로 Netlify 사용하려면 필수!)
- 또는 **Private** (유료지만 추천)

**4. 초기화:**
- ✅ **Add a README file** 체크
- ✅ **Add .gitignore** → **None** 선택
- ✅ **Choose a license** → **None** (선택사항)

**5. Create repository** 클릭!

---

## 🔵 Step 2: 파일을 GitHub에 업로드 (5분)

### 방법 A: 웹 인터페이스로 업로드 (가장 쉬움!) ⭐⭐⭐⭐⭐

**1. 저장소 페이지에서:**
- **Add file** 클릭
- **Upload files** 선택

**2. 파일 업로드:**

**필수 파일 목록:**
```
✅ index.html (메인 페이지)
✅ blog.html
✅ blog-detail.html
✅ admin.html
✅ taxz1log.html
✅ robots.txt
✅ sitemap.xml
✅ .htaccess
✅ 404.html
✅ favicon.svg
✅ og-image.jpg
✅ android-chrome-512x512.png
✅ site.webmanifest
```

**폴더:**
```
✅ js/ (폴더 전체)
```

**3. 드래그 앤 드롭:**
- 모든 파일 선택
- GitHub 화면에 드롭
- 자동 업로드!

**4. 커밋 메시지 작성:**
```
Initial commit: Zero to one TAX website
```

**5. Commit changes** 클릭!

---

### 방법 B: Git 명령어 사용 (고급)

나중에 배워도 돼요! 일단 방법 A로!

---

## 🔵 Step 3: Netlify 연결 (5분)

### 3-1. Netlify 가입

**웹사이트:**
```
https://app.netlify.com/signup
```

**추천: GitHub 계정으로 로그인!**
- "Sign up with GitHub" 클릭
- GitHub 연결 승인

---

### 3-2. 새 사이트 생성

**1. Netlify 대시보드:**
- **Add new site** 클릭
- **Import an existing project** 선택

**2. Git provider 선택:**
- **GitHub** 클릭
- GitHub 승인 (처음이면)

**3. 저장소 선택:**
- `0to1tax-website` 검색
- 클릭!

**4. 배포 설정:**
```
Branch to deploy: main (또는 master)
Build command: (비워두기)
Publish directory: / (루트)
```

**5. Deploy site** 클릭!

---

### 3-3. 배포 완료!

**몇 초 후:**
```
✅ Site is live!
```

**임시 URL 생성:**
```
예: https://random-name-123.netlify.app
```

**테스트:**
- 임시 URL 클릭
- 웹사이트 확인!

---

## 🔵 Step 4: 0to1tax.com 도메인 연결 (10분)

### 4-1. 커스텀 도메인 추가

**1. Netlify에서:**
- **Site settings** 클릭
- **Domain management** 선택
- **Add custom domain** 클릭

**2. 도메인 입력:**
```
0to1tax.com
```

**3. Verify** 클릭

**4. "Yes, add domain" 선택**

---

### 4-2. DNS 설정 (2가지 방법)

#### 방법 A: Netlify DNS 사용 (추천!) ⭐⭐⭐⭐⭐

**장점:**
- 자동 설정
- SSL 자동
- 빠름

**단계:**

**1. Netlify에서:**
- "Set up Netlify DNS" 클릭

**2. Netlify가 제공하는 네임서버 복사:**
```
예시:
dns1.p03.nsone.net
dns2.p03.nsone.net
dns3.p03.nsone.net
dns4.p03.nsone.net
```

**3. Squarespace (또는 도메인 구매처)로 이동:**
- 도메인 관리
- DNS 설정 (또는 네임서버 설정)
- **네임서버 변경**

**4. Squarespace에서:**
```
기존 네임서버 삭제
    ↓
Netlify 네임서버 4개 추가
    ↓
저장
```

**5. Netlify로 돌아와서:**
- "Verify" 클릭
- DNS 전파 대기 (1~24시간)

---

#### 방법 B: 기존 DNS 유지 (이메일 유지 쉬움)

**장점:**
- 이메일 설정 그대로
- MX 레코드 건드리지 않음

**단계:**

**1. Netlify에서 IP 주소 확인:**
- "Use external DNS" 선택
- IP 주소 표시됨 (예: `75.2.60.5`)

**2. Squarespace DNS 설정 화면으로:**

**3. 기존 레코드 삭제:**
```
❌ www (A) → 172.67.70.200 삭제
❌ @ (A) → 172.67.70.200 삭제
```

**4. 새 레코드 추가:**
```
HOST: www
TYPE: A
DATA: [Netlify IP 주소]
TTL: 1 hr
```

```
HOST: @
TYPE: A  
DATA: [Netlify IP 주소]
TTL: 1 hr
```

**5. CNAME 레코드 추가 (www 리디렉션용):**
```
HOST: www
TYPE: CNAME
DATA: [yoursite].netlify.app
TTL: 1 hr
```

**참고:** 실제로는 A 레코드가 더 안정적!

---

### 4-3. SSL 인증서 설정 (자동!)

**Netlify가 자동으로:**
- Let's Encrypt SSL 발급
- 5분~1시간 소요
- https:// 자동 적용

**확인:**
```
https://0to1tax.com
https://www.0to1tax.com
```

둘 다 작동!

---

## 🔵 Step 5: 자동 배포 테스트 (5분)

### 5-1. 파일 수정하기

**GitHub 저장소에서:**

**1. index.html 수정:**
- GitHub에서 `index.html` 클릭
- 연필 아이콘 (Edit) 클릭
- 간단한 수정 (예: 제목에 "!" 추가)

**2. 커밋:**
```
Commit message: Test auto deploy
```
- **Commit changes** 클릭

---

### 5-2. 자동 배포 확인

**Netlify 대시보드:**
- 자동으로 빌드 시작!
- "Building" 표시
- 1분 후 "Published" 표시

**테스트:**
```
https://0to1tax.com 새로고침
→ 변경사항 반영됨! ✅
```

---

## 🎉 완료!

### 이제부터 워크플로우:

```
1. GitHub에서 파일 수정 (또는 업로드)
   ↓
2. Commit (저장)
   ↓
3. Netlify가 자동 감지
   ↓
4. 자동 빌드 및 배포 (1분)
   ↓
5. https://0to1tax.com 업데이트! ✅
```

---

## 💡 이제 할 수 있는 것들

### ✅ 웹사이트 수정
- GitHub에서 파일 수정
- 자동 배포

### ✅ 블로그 글 작성
- admin.html 접속 가능!
- 글 작성 후 자동 저장

### ✅ 파일 추가
- GitHub에 업로드
- 자동 반영

---

## 🔧 고급 기능 (나중에)

### Git 명령어 사용

**로컬에서 작업하고 싶다면:**

```bash
# 저장소 복제
git clone https://github.com/yourusername/0to1tax-website.git

# 파일 수정 후
git add .
git commit -m "Update content"
git push

# 자동 배포!
```

---

## 🆘 문제 해결

### Q1: Netlify 빌드 실패
**A:** Build log 확인
- 대부분 HTML 정적 사이트라 문제없음

### Q2: 도메인 연결 안 됨
**A:** DNS 전파 대기
- 최대 24시간
- dnschecker.org로 확인

### Q3: SSL 인증서 오류
**A:** 시간 더 대기
- Netlify가 자동 발급
- 보통 1시간 이내

### Q4: 이메일이 안 돼요
**A:** MX 레코드 확인
- Netlify DNS 사용 시:
  - MX 레코드 추가 필요
  - DNS 설정에서 추가

---

## 📚 추가 자료

### Netlify 문서:
```
https://docs.netlify.com
```

### GitHub 가이드:
```
https://guides.github.com
```

---

## 🎯 체크리스트

- [ ] GitHub 가입 및 저장소 생성
- [ ] 파일 업로드
- [ ] Netlify 가입 및 연결
- [ ] 0to1tax.com 도메인 연결
- [ ] DNS 설정 (네임서버 또는 A 레코드)
- [ ] SSL 확인 (https://)
- [ ] 자동 배포 테스트
- [ ] Google Search Console 등록

---

**축하합니다! 프로급 자동 배포 시스템 완성! 🎉**
