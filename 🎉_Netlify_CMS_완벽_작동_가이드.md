# 🎉 Netlify CMS 완벽 작동 가이드

**Zero to one TAX 블로그 시스템 - WordPress처럼 쉽게 글쓰기!**

---

## ✅ 완료된 작업

### 1. **Netlify CMS 방식으로 완전 전환**
- ❌ **기존**: Table API 방식 (데이터베이스 필요)
- ✅ **현재**: GitHub + Markdown 방식 (Netlify CMS)

### 2. **수정된 파일**
- ✅ `taxz1log.html` - GitHub API로 Markdown 읽기
- ✅ `blog-detail.html` - Markdown을 HTML로 변환하여 표시
- ✅ `admin/config.yml` - Netlify CMS 설정
- ✅ `admin/index.html` - CMS 관리자 페이지

---

## 📋 GitHub에 업로드해야 할 파일

### ⚠️ **중요: 아래 파일들이 GitHub에 없으면 블로그가 작동하지 않습니다!**

### 1. **`admin` 폴더**

#### `admin/index.html`
```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Zero to one TAX - 블로그 관리</title>
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
</head>
<body>
  <script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"></script>
</body>
</html>
```

#### `admin/config.yml`
```yaml
# Netlify CMS 설정 파일
backend:
  name: github
  repo: contact604/0to1tax-website
  branch: main
  
media_folder: "images/blog"
public_folder: "/images/blog"

locale: 'ko'

collections:
  - name: "blog"
    label: "블로그"
    folder: "_posts"
    create: true
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}"
    editor:
      preview: true
    fields:
      - {label: "제목", name: "title", widget: "string", required: true}
      - {label: "발행일", name: "date", widget: "datetime", format: "YYYY-MM-DD HH:mm:ss", dateFormat: "YYYY-MM-DD", timeFormat: "HH:mm", required: true}
      - {label: "작성자", name: "author", widget: "string", default: "Zero to one TAX"}
      - {label: "카테고리", name: "category", widget: "select", options: ["세무", "회계", "스타트업", "기타"], required: true}
      - {label: "태그", name: "tags", widget: "list", required: false}
      - {label: "썸네일 이미지", name: "thumbnail", widget: "image", required: false}
      - {label: "요약", name: "excerpt", widget: "text", required: false}
      - {label: "본문", name: "body", widget: "markdown", required: true}
      - {label: "공개", name: "published", widget: "boolean", default: true}

site_url: https://0to1tax.com
display_url: https://0to1tax.com
logo_url: /favicon.svg
```

---

### 2. **`_posts` 폴더**

#### `_posts/.gitkeep`
빈 파일로 생성 (폴더 유지용)

#### `_posts/2024-10-27-welcome.md`
```markdown
---
title: Zero to one TAX 블로그에 오신 것을 환영합니다
date: 2024-10-27 10:00:00
author: Zero to one TAX
category: 기타
tags:
  - 공지
  - 환영
  - 블로그
thumbnail: ""
excerpt: Zero to one TAX 공식 블로그가 오픈했습니다. 스타트업 세무·회계에 관한 유익한 정보를 공유하겠습니다.
published: true
---

# 안녕하세요! 👋

**Zero to one TAX** 공식 블로그에 오신 것을 환영합니다!

## 🎯 블로그 소개

이 블로그에서는 스타트업과 창업자들을 위한 세무·회계 정보를 공유합니다.

### 다룰 주제:

- **세무**: 법인세, 부가세, 절세 전략
- **회계**: 재무제표, 회계 처리 실무
- **스타트업**: 투자유치, 법인설립, 스톡옵션
- **기타**: 최신 세법 개정, 정부 지원사업

## 💼 Zero to one TAX는?

대형 회계법인 출신 전문가들이 모여 만든 스타트업 전문 세무·회계 서비스입니다.

**"가까운 것보다 잘 아는 전문가와 함께하세요"**
```

---

### 3. **`images/blog` 폴더**

#### `images/blog/.gitkeep`
빈 파일로 생성 (CMS에서 이미지 업로드용)

---

## 🚀 GitHub 업로드 방법

### **방법 1: GitHub 웹 인터페이스 (추천)**

1. https://github.com/contact604/0to1tax-website 접속
2. **"Add file" → "Create new file"** 클릭
3. 파일 경로 입력 (예: `admin/index.html`)
4. 내용 붙여넣기
5. **"Commit new file"** 클릭
6. 모든 파일 반복

### **방법 2: GitHub Desktop (더 빠름)**

1. GitHub Desktop 다운로드
2. 저장소 Clone
3. 로컬 프로젝트의 폴더들을 복사
4. Commit & Push

---

## ✅ 업로드 완료 후 확인사항

GitHub에서 다음 파일들이 존재하는지 확인:

```
0to1tax-website/
├── admin/
│   ├── index.html ✅
│   └── config.yml ✅
├── _posts/
│   ├── .gitkeep ✅
│   └── 2024-10-27-welcome.md ✅
└── images/
    └── blog/
        └── .gitkeep ✅
```

---

## 🎯 블로그 사용 방법

### 1️⃣ **CMS 접속**
```
https://0to1tax.netlify.app/admin/
```
또는
```
https://0to1tax.com/admin/
```

### 2️⃣ **GitHub 계정으로 로그인**
- "Login with GitHub" 클릭
- GitHub OAuth 인증

### 3️⃣ **새 블로그 작성**
1. **"새 블로그"** 버튼 클릭
2. 제목, 카테고리, 본문 작성
3. 태그 추가 (Enter로 구분)
4. 이미지 업로드 (선택사항)
5. **"Publish"** 버튼 클릭

### 4️⃣ **게시글 확인**
- 블로그 목록: https://0to1tax.com/taxz1log.html
- 1~2분 후 Netlify 자동 배포 완료
- 새 게시글이 목록에 표시됨

---

## 🔧 작동 원리

```
1. CMS에서 글 작성 → Markdown 파일 생성
2. GitHub에 Commit → _posts/2024-10-27-제목.md 저장
3. Netlify 감지 → 자동 배포 시작
4. 웹사이트 접속 → GitHub API로 Markdown 읽기
5. Marked.js로 변환 → HTML로 표시
```

---

## 🐛 문제 해결

### **게시글이 안 보여요**
1. GitHub 확인: `_posts` 폴더에 `.md` 파일이 있나요?
2. Netlify 배포: 최근 배포가 성공했나요?
3. 브라우저 캐시: Ctrl+Shift+R로 새로고침

### **CMS 접속이 안 돼요**
1. `admin` 폴더가 GitHub에 있나요?
2. OAuth 설정이 완료됐나요?
3. Netlify 도메인 설정이 맞나요?

### **이미지 업로드가 안 돼요**
1. `images/blog` 폴더가 GitHub에 있나요?
2. GitHub OAuth 권한이 있나요?

---

## 📞 도움이 필요하신가요?

**Zero to one TAX**
- 📧 이메일: contact@0to1tax.com
- 📱 전화: 010-4395-1996
- 🏢 주소: 서울특별시 강남구 테헤란로70길 12 H타워 6층

---

**🎉 축하합니다! 이제 WordPress처럼 쉽게 블로그를 관리할 수 있습니다!**
