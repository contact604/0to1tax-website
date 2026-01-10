# 📧 자동 PDF 발송 설정 가이드

## 🎯 목표
문의 폼 제출 시 자동으로 서비스 소개서 PDF를 이메일로 발송하는 기능을 설정합니다.

---

## 📋 필수 사전 작업

### 1. Gmail 앱 비밀번호 생성

#### Step 1: Google 계정 보안 설정
1. https://myaccount.google.com/security 접속
2. Gmail 계정으로 로그인 (lbg@0to1tax.com)

#### Step 2: 2단계 인증 활성화
1. "Google에 로그인하는 방법" 섹션 찾기
2. "2단계 인증" 클릭
3. 설정 완료 (SMS 또는 앱 인증)

#### Step 3: 앱 비밀번호 생성
1. 보안 페이지에서 "앱 비밀번호" 검색
2. "앱 비밀번호" 선택
3. 앱 선택: "메일"
4. 기기 선택: "기타 (맞춤 이름)" → "Netlify Functions" 입력
5. **생성 버튼** 클릭
6. **16자리 비밀번호 복사** (예: abcd efgh ijkl mnop)
7. 이 비밀번호는 한 번만 표시되므로 **안전한 곳에 저장**

---

## ⚙️ Netlify 환경 변수 설정

### Step 1: Netlify Dashboard 접속
1. https://app.netlify.com 로그인
2. Zero to One TAX 사이트 선택

### Step 2: 환경 변수 설정
1. 사이트 메뉴에서 **Site settings** 클릭
2. 왼쪽 메뉴에서 **Environment variables** 클릭
3. **Add a variable** 버튼 클릭

### Step 3: 변수 추가

#### 변수 1: EMAIL_USER
```
Key: EMAIL_USER
Value: lbg@0to1tax.com
Scopes: All (production, deploy previews, branch deploys)
```

#### 변수 2: EMAIL_PASSWORD
```
Key: EMAIL_PASSWORD
Value: [위에서 생성한 16자리 Gmail 앱 비밀번호]
Scopes: All (production, deploy previews, branch deploys)
```

### Step 4: 저장 및 확인
1. 각 변수 추가 후 **Save** 클릭
2. 환경 변수 목록에서 2개 변수 확인

---

## 📄 PDF 파일 준비

### Step 1: PDF 파일 생성
1. 서비스 소개서를 PDF로 준비
2. 파일 크기: **25MB 이하** 권장
3. 내용: 서비스 소개, 차별점, 가격, 연락처 등

### Step 2: 파일명 변경
```
파일명: Zero_to_One_TAX_Service_Guide.pdf
```
⚠️ **정확히 이 파일명을 사용해야 합니다**

### Step 3: 파일 업로드
```
경로: /pdf/Zero_to_One_TAX_Service_Guide.pdf
```

#### 업로드 방법 1: Git 리포지토리
```bash
# pdf 폴더 생성 (없는 경우)
mkdir pdf

# PDF 파일 복사
cp your-service-guide.pdf pdf/Zero_to_One_TAX_Service_Guide.pdf

# Git commit & push
git add pdf/Zero_to_One_TAX_Service_Guide.pdf
git commit -m "Add service guide PDF"
git push
```

#### 업로드 방법 2: Netlify Dashboard
1. Deploys 탭 > Deploy settings
2. 파일 드래그 앤 드롭
3. 배포 완료 대기

---

## 🚀 배포 및 테스트

### Step 1: 코드 배포
1. **Publish 탭** 이동
2. **Deploy 버튼** 클릭
3. **빌드 완료 대기** (약 2-3분)

### Step 2: Functions 확인
1. Netlify Dashboard > Functions 탭
2. `submission-created` Function 확인
3. Status가 **Active**인지 확인

### Step 3: 테스트 문의 제출
1. https://0to1tax.com 접속
2. 문의 폼 섹션으로 스크롤
3. **테스트 정보 입력**:
   - 회사명: 테스트 회사
   - 이름: 테스트
   - 이메일: **자신의 이메일**
   - 연락처: 010-0000-0000
4. **제출 버튼** 클릭

### Step 4: 이메일 확인
1. 입력한 이메일 받은편지함 확인
2. 제목: `[Zero to One TAX] 서비스 소개서를 보내드립니다`
3. PDF 첨부 파일 확인
4. 이메일 내용 확인

---

## ✅ 체크리스트

### 환경 변수 설정
- [ ] Gmail 2단계 인증 활성화 완료
- [ ] Gmail 앱 비밀번호 생성 완료 (16자리)
- [ ] Netlify `EMAIL_USER` 변수 설정 완료
- [ ] Netlify `EMAIL_PASSWORD` 변수 설정 완료

### PDF 파일 준비
- [ ] 서비스 소개서 PDF 준비 완료
- [ ] 파일명: `Zero_to_One_TAX_Service_Guide.pdf`
- [ ] 파일 크기: 25MB 이하
- [ ] 파일 경로: `/pdf/` 폴더에 업로드 완료

### 배포 및 테스트
- [ ] 코드 배포 완료
- [ ] Netlify Functions Active 확인
- [ ] 테스트 문의 제출 완료
- [ ] 이메일 수신 확인
- [ ] PDF 첨부 파일 확인

---

## 🔧 트러블슈팅

### 1. 이메일이 발송되지 않음
**원인**: 환경 변수 미설정 또는 오류

**해결**:
1. Netlify Dashboard > Functions > `submission-created` 클릭
2. Logs 확인
3. 환경 변수가 제대로 설정되었는지 확인
4. Gmail 앱 비밀번호 재생성

### 2. PDF가 첨부되지 않음
**원인**: 파일 경로 오류

**해결**:
1. 파일명 확인: `Zero_to_One_TAX_Service_Guide.pdf`
2. 파일 경로 확인: `/pdf/`
3. 파일 존재 여부 확인
4. 대소문자 정확히 일치하는지 확인

### 3. 성공 메시지가 표시되지 않음
**원인**: JavaScript 오류

**해결**:
1. 브라우저 콘솔 확인 (F12)
2. 폼 제출 시 네트워크 탭 확인
3. Netlify Forms 설정 확인

### 4. "Method Not Allowed" 오류
**원인**: Netlify Forms 비활성화

**해결**:
1. HTML에서 `data-netlify="true"` 속성 확인
2. 폼 `name` 속성 확인: `contact-with-pdf`
3. 재배포 후 테스트

---

## 📞 지원

### 문제 해결이 안 되는 경우
1. Netlify Functions Logs 확인
2. Gmail 계정 보안 설정 확인
3. 파일 경로 및 이름 재확인
4. 환경 변수 값 재설정

### 추가 기능 요청
- 이메일 템플릿 변경
- 추가 첨부 파일
- 내부 알림 설정
- CRM 연동

---

**설정 완료 후 즉시 사용 가능합니다!** ✅
