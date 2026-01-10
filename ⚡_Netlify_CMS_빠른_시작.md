# ⚡ Netlify CMS 빠른 시작 가이드

**목표**: 최대한 빠르게 Netlify CMS 사용 시작하기!  
**소요 시간**: 15~20분

---

## 🎯 3단계로 완성!

### 1️⃣ 파일 수정 (5분)

#### A. admin/config.yml 열기
```yaml
backend:
  name: github
  repo: YOUR_GITHUB_USERNAME/0to1tax-website  # 👈 여기만 수정!
  branch: main
```

**YOUR_GITHUB_USERNAME**을 당신의 GitHub 사용자명으로 변경!

예시:
- GitHub: https://github.com/johndoe
- 수정: `repo: johndoe/0to1tax-website`

---

#### B. js/blog-cms.js 열기

**26번째 줄** 찾기:
```javascript
const response = await fetch('https://api.github.com/repos/YOUR_GITHUB_USERNAME/0to1tax-website/contents/_posts');
```

**YOUR_GITHUB_USERNAME** 변경!

예시:
```javascript
const response = await fetch('https://api.github.com/repos/johndoe/0to1tax-website/contents/_posts');
```

---

### 2️⃣ GitHub에 업로드 (5분)

#### 필수 파일:
```
✅ admin/ 폴더 전체
✅ _posts/ 폴더 전체
✅ images/blog/ 폴더 전체
✅ js/blog-cms.js
✅ 기존 모든 파일
```

#### 업로드 방법:
1. GitHub 저장소 페이지
2. "Add file" → "Upload files"
3. 모든 파일 드래그 앤 드롭
4. "Commit changes"

---

### 3️⃣ Netlify 설정 (5분)

#### A. OAuth 설정
```
1. https://app.netlify.com 로그인
2. 사이트 선택
3. Site settings → Access control → OAuth
4. "Install provider" → GitHub 선택
5. 완료!
```

#### B. 배포 확인
```
1. Deploys 탭
2. "Published" 확인
3. 사이트 접속
```

---

## 🎉 완료! 이제 사용하세요!

### 블로그 관리 페이지 접속:
```
https://0to1tax.com/admin
```

### 로그인:
```
1. "Login with GitHub" 클릭
2. GitHub 계정으로 로그인
3. 권한 승인
```

### 첫 블로그 글 작성:
```
1. 좌측 "블로그" 클릭
2. "New 블로그" 클릭
3. 제목, 카테고리, 본문 입력
4. "Publish" → "Publish now"
5. 2~3분 후 https://0to1tax.com에 표시!
```

---

## 📝 블로그 작성 팁

### 필수 입력 필드:
- **제목**: 매력적인 제목
- **카테고리**: 세무, 회계, 스타트업, 기타
- **본문**: Markdown 또는 Rich Text

### 선택 입력 필드:
- **태그**: Enter로 여러 개 추가 가능
- **썸네일 이미지**: 블로그 목록에 표시
- **요약**: 짧은 소개글

---

## 🆘 문제 해결

### "Error loading the CMS configuration"
→ config.yml의 GitHub 정보 확인

### "Failed to load entries"
→ GitHub 저장소가 public인지 확인

### 로그인 안 됨
→ OAuth 설정 재확인

---

## 📚 더 자세한 내용

→ **📝_Netlify_CMS_완벽_가이드.md** 참조

---

**준비되셨나요? 지금 시작하세요!** 🚀
