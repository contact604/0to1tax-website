# 📝 Netlify CMS 완벽 가이드

**프로젝트**: Zero to one TAX  
**목적**: 0to1tax.com 도메인에서 쉽게 블로그 관리하기  
**날짜**: 2024-10-27

---

## 🎉 축하합니다!

Netlify CMS 설치가 완료되었습니다! 이제 WordPress처럼 쉽게 블로그를 관리할 수 있습니다! 🚀

---

## 📋 설치된 파일 목록

### ✅ 새로 생성된 파일

```
프로젝트 루트/
├── admin/
│   ├── index.html          ✅ CMS 관리자 페이지
│   └── config.yml          ✅ CMS 설정 파일
│
├── _posts/
│   ├── .gitkeep           ✅ 블로그 글 저장 폴더
│   └── 2024-10-27-welcome.md  ✅ 예시 블로그 글
│
├── images/
│   └── blog/
│       └── .gitkeep       ✅ 이미지 저장 폴더
│
└── js/
    └── blog-cms.js        ✅ 블로그 표시 JavaScript
```

---

## 🚀 배포 및 설정 순서

### 1단계: GitHub에 업로드 (필수!)

```
모든 파일을 GitHub 저장소에 업로드하세요:

필수 파일:
✅ admin/index.html
✅ admin/config.yml
✅ _posts/ 폴더
✅ images/blog/ 폴더
✅ js/blog-cms.js
✅ 기존 모든 파일들
```

**업로드 방법**: `🚀_GitHub_Netlify_배포_완벽가이드.md` 참조

---

### 2단계: config.yml 수정 (중요!)

📍 **admin/config.yml** 파일을 열고 수정:

```yaml
backend:
  name: github
  repo: YOUR_GITHUB_USERNAME/0to1tax-website  # 👈 여기 수정!
  branch: main  # 또는 master
```

**예시**:
```yaml
backend:
  name: github
  repo: johndoe/0to1tax-website  # GitHub 사용자명/저장소명
  branch: main
```

---

### 3단계: Netlify에서 GitHub OAuth 설정

#### A. Netlify 대시보드 접속
```
1. https://app.netlify.com 로그인
2. 배포된 사이트 선택 (0to1tax-website)
3. Site settings 클릭
```

#### B. OAuth 설정
```
1. "Access control" → "OAuth" 클릭
2. "Install provider" 클릭
3. "GitHub" 선택
4. 자동으로 설정됨!
```

**또는 수동 설정**:

1. GitHub에서 OAuth App 생성:
   - https://github.com/settings/developers
   - "New OAuth App" 클릭
   
2. 정보 입력:
   ```
   Application name: Zero to one TAX CMS
   Homepage URL: https://0to1tax.com
   Authorization callback URL: https://api.netlify.com/auth/done
   ```

3. Client ID와 Client Secret 복사

4. Netlify에 입력:
   - Site settings → Access control → OAuth
   - GitHub 선택
   - Client ID, Secret 입력

---

### 4단계: js/blog-cms.js 수정

📍 **js/blog-cms.js** 파일 열기

**26번째 줄 수정**:
```javascript
// 수정 전:
const response = await fetch('https://api.github.com/repos/YOUR_GITHUB_USERNAME/0to1tax-website/contents/_posts');

// 수정 후:
const response = await fetch('https://api.github.com/repos/johndoe/0to1tax-website/contents/_posts');
// 👆 YOUR_GITHUB_USERNAME을 실제 GitHub 사용자명으로 변경!
```

---

### 5단계: 블로그 페이지에 JavaScript 추가

#### A. taxz1log.html (블로그 목록) 수정

파일 열기 → `</body>` 태그 바로 위에 추가:

```html
<!-- Marked.js for Markdown parsing -->
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>

<!-- Netlify CMS Blog System -->
<script src="/js/blog-cms.js"></script>
```

#### B. blog-detail.html (블로그 상세) 수정

파일 열기 → `</body>` 태그 바로 위에 추가:

```html
<!-- Marked.js for Markdown parsing -->
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>

<!-- Netlify CMS Blog System -->
<script src="/js/blog-cms.js"></script>
```

---

### 6단계: GitHub에 Push!

```bash
# 모든 파일 추가
git add .

# 커밋
git commit -m "Add Netlify CMS"

# Push
git push origin main
```

**또는 GitHub 웹에서**:
- 수정된 파일들을 GitHub에 업로드
- Netlify가 자동으로 재배포

---

### 7단계: 배포 완료 확인

```
1. Netlify 대시보드에서 배포 상태 확인
2. "Published" 확인
3. 사이트 접속: https://0to1tax.com
```

---

## 📝 블로그 글 작성 방법

### Step 1: CMS 접속

```
https://0to1tax.com/admin
```

### Step 2: GitHub 로그인

```
1. "Login with GitHub" 클릭
2. GitHub 계정으로 로그인
3. 권한 승인
```

### Step 3: 새 글 작성

```
1. 좌측 "블로그" 메뉴 클릭
2. "New 블로그" 버튼 클릭
3. 글 작성 시작!
```

### Step 4: 필드 입력

```
✏️ 제목: 블로그 글 제목
📅 발행일: 날짜 및 시간 선택
👤 작성자: 기본값 "Zero to one TAX"
📂 카테고리: 세무, 회계, 스타트업, 기타 중 선택
🏷️ 태그: Enter로 태그 추가 (예: 법인세, 절세, 스타트업)
🖼️ 썸네일 이미지: 선택사항 (목록에 표시)
📝 요약: 선택사항 (목록에 표시될 짧은 요약)
📄 본문: Markdown 또는 Rich Text로 작성
✅ 공개: 체크하면 웹사이트에 바로 표시
```

### Step 5: 미리보기

```
우측 "Preview" 버튼으로 미리보기 확인
```

### Step 6: 발행

```
상단 "Publish" → "Publish now" 클릭
→ GitHub에 자동 커밋
→ Netlify 자동 배포
→ 2~3분 후 https://0to1tax.com에 반영!
```

---

## ✏️ Markdown 작성 가이드

### 제목
```markdown
# 큰 제목 (H1)
## 중간 제목 (H2)
### 작은 제목 (H3)
```

### 텍스트 스타일
```markdown
**굵게**
*이탤릭*
~~취소선~~
```

### 리스트
```markdown
- 항목 1
- 항목 2
  - 하위 항목

1. 첫 번째
2. 두 번째
```

### 링크
```markdown
[링크 텍스트](https://0to1tax.com)
```

### 이미지
```markdown
![이미지 설명](/images/blog/image.jpg)
```

### 인용구
```markdown
> 인용 내용
```

### 코드
```markdown
`인라인 코드`

​```
코드 블록
​```
```

---

## 🖼️ 이미지 업로드

### 방법 1: CMS에서 직접 업로드

```
1. 본문 작성 중 이미지 아이콘 클릭
2. 이미지 파일 선택
3. 자동으로 /images/blog/에 업로드
4. Markdown에 자동 삽입
```

### 방법 2: 썸네일 이미지

```
1. "썸네일 이미지" 필드 클릭
2. "Choose an image" 클릭
3. 이미지 업로드
4. 블로그 목록에 자동 표시
```

---

## 📊 블로그 글 관리

### 글 수정

```
1. https://0to1tax.com/admin 접속
2. "블로그" 메뉴
3. 수정할 글 클릭
4. 수정 후 "Publish" → "Publish now"
```

### 글 삭제

```
1. 글 선택
2. 상단 "Delete" 버튼
3. 확인
→ GitHub에서 파일 삭제됨
```

### 임시 저장

```
작성 중 자동 저장됨
"Save" 버튼으로 임시 저장
발행 전까지는 웹사이트에 표시 안 됨
```

### 비공개 설정

```
"공개" 체크박스 해제
→ 발행해도 웹사이트에 표시 안 됨
→ 초안 작성용
```

---

## 🎨 블로그 페이지 커스터마이징

### 카테고리 추가/변경

📍 **admin/config.yml** 수정:

```yaml
- {label: "카테고리", name: "category", widget: "select", 
   options: ["세무", "회계", "스타트업", "기타", "새로운카테고리"], 
   required: true}
```

### 필드 추가

📍 **admin/config.yml** → fields 섹션에 추가:

```yaml
- {label: "조회수", name: "views", widget: "number", default: 0}
```

### 디자인 변경

📍 **taxz1log.html**, **blog-detail.html** CSS 수정

---

## 🔧 문제 해결

### ❌ "Error loading the CMS configuration"

**원인**: config.yml 문법 오류  
**해결**:
1. admin/config.yml 확인
2. YAML 문법 체크: https://www.yamllint.com
3. repo 이름이 정확한지 확인

---

### ❌ "Failed to load entries"

**원인**: GitHub 저장소 접근 권한 없음  
**해결**:
1. config.yml의 repo 이름 확인
2. GitHub에서 저장소가 public인지 확인
3. OAuth 설정 재확인

---

### ❌ 로그인이 안 돼요

**원인**: OAuth 설정 문제  
**해결**:
1. Netlify → Site settings → Access control → OAuth
2. GitHub OAuth 재설정
3. 브라우저 캐시 삭제 후 재시도

---

### ❌ 블로그 글이 표시 안 돼요

**원인**: JavaScript 로딩 실패  
**해결**:
1. taxz1log.html에 blog-cms.js 스크립트 추가 확인
2. js/blog-cms.js의 GitHub API URL 확인
3. 브라우저 콘솔 에러 확인 (F12)

---

### ❌ 이미지가 안 보여요

**원인**: 이미지 경로 문제  
**해결**:
1. images/blog/ 폴더가 GitHub에 있는지 확인
2. 이미지 URL이 /images/blog/파일명 형식인지 확인
3. Netlify에서 재배포

---

## 📊 작동 원리

### 전체 흐름:

```
1. CMS에서 글 작성 (https://0to1tax.com/admin)
   ↓
2. "Publish" 클릭
   ↓
3. GitHub에 Markdown 파일 자동 커밋
   (_posts/2024-10-27-제목.md)
   ↓
4. Netlify가 변경 감지
   ↓
5. 자동 재배포
   ↓
6. blog-cms.js가 Markdown 파일 읽기
   ↓
7. HTML로 변환하여 표시
   ↓
8. https://0to1tax.com에 반영 완료!
```

---

## 💡 팁 & 트릭

### 효율적인 블로그 작성

```
1. 먼저 Word나 Notion에서 초안 작성
2. CMS에서 복사 & 붙여넣기
3. Markdown 서식 정리
4. 미리보기로 확인
5. 발행!
```

### SEO 최적화

```
✅ 제목: 핵심 키워드 포함 (40자 이내)
✅ 요약: 매력적인 요약 (150자 이내)
✅ 태그: 관련 키워드 3~5개
✅ 본문: 구조화된 제목 (H2, H3 사용)
✅ 이미지: Alt 텍스트 포함
```

### 정기 발행 스케줄

```
추천 스케줄:
- 주 1회: 가장 이상적
- 격주 1회: 최소 권장
- 월 1회: 최소한

일관성이 중요합니다!
```

---

## 🎯 다음 단계

### 1. 첫 블로그 글 작성 (30분)

```
https://0to1tax.com/admin 접속
→ 실전 블로그 글 작성
→ 발행!
```

### 2. Google Search Console 등록

```
새 블로그 글마다:
1. Google Search Console
2. URL 검사
3. 색인 생성 요청
```

### 3. SNS 공유

```
블로그 글 발행 후:
→ LinkedIn, Facebook에 공유
→ og-image.jpg 자동 표시
```

---

## 📞 추가 도움

### 공식 문서

- **Netlify CMS**: https://www.netlifycms.org/docs/
- **Markdown 가이드**: https://www.markdownguide.org/
- **Netlify 문서**: https://docs.netlify.com/

### 커뮤니티

- **Netlify Forum**: https://answers.netlify.com/
- **GitHub Issues**: 저장소에서 이슈 생성

---

## 🎉 축하합니다!

이제 WordPress처럼 쉽게 블로그를 관리할 수 있습니다!

### ✅ 완료된 것:
- Netlify CMS 설치 완료
- 관리자 페이지 구축
- Markdown 블로그 시스템
- 자동 배포 연동

### 🚀 이제 할 일:
1. GitHub에 모든 파일 업로드
2. config.yml 수정 (GitHub 정보)
3. Netlify OAuth 설정
4. 첫 블로그 글 작성!

---

**Zero to one TAX** - 전문적인 블로그로 고객과 소통하세요! 📝

© 2024 Zero to one TAX. All rights reserved.
