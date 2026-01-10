# 📧 Netlify Forms 알림 설정 가이드

뉴스레터 구독 시 `lbg@syacc.co.kr`로 자동 알림을 받으려면 **Netlify Forms 설정**만 하면 됩니다!

> 💡 **상담 모달도 이 방식으로 작동 중**입니다!

---

## 🚀 빠른 시작 (3분)

### ✅ 이미 준비된 것
- ✅ index.html에 Netlify Forms 코드 추가 완료
- ✅ 상담 폼과 동일한 방식 적용
- ✅ 별도 가입이나 API 키 불필요!

---

## 📋 설정 방법

### 1️⃣ Netlify 대시보드 접속

1. **https://app.netlify.com/** 로그인
2. **0to1tax.com** 사이트 선택
3. 상단 메뉴에서 **"Forms"** 클릭

---

### 2️⃣ 이메일 알림 설정

1. **"Form notifications"** 섹션 찾기
2. **"Add notification"** 클릭
3. **"Email notification"** 선택

#### 설정값:

**Event to listen for:**
```
New form submission
```

**Form to notify on:**
```
newsletter (뉴스레터 폼 선택)
```

**Email to notify:**
```
lbg@syacc.co.kr
```

4. **"Save"** 클릭

---

### 3️⃣ 테스트

1. 웹사이트에서 뉴스레터 구독 폼 작성
2. "지금 바로 구독하기" 클릭
3. `lbg@syacc.co.kr` 메일함 확인!

---

## 📊 받게 될 메일 형식

```
제목: New form submission from newsletter

Form Name: newsletter

Submission Data:
━━━━━━━━━━━━━━━━━━━━
name:      홍길동
email:     hong@example.com
company:   스타트업XYZ
interest:  ai
agree:     on
━━━━━━━━━━━━━━━━━━━━

Submitted at: 2025-11-09T15:45:23.000Z
```

---

## 💡 추가 설정 (선택사항)

### Slack 알림 추가

1. "Add notification" → **"Slack notification"**
2. Slack Webhook URL 입력
3. 팀 채널에서 실시간 알림 받기

### Webhook 연동

1. "Add notification" → **"Outgoing webhook"**
2. 자체 서버 URL 입력
3. 구독자 데이터를 자동으로 CRM에 저장

---

## 📊 구독자 관리

### Netlify Forms 대시보드에서:
- ✅ 모든 구독자 목록 확인
- ✅ CSV 파일로 내보내기
- ✅ 스팸 필터링 자동 적용
- ✅ 구독 시간, IP 주소 기록

---

## 🔧 트러블슈팅

### ❌ "Forms" 메뉴가 안 보여요
**해결:**
1. 사이트가 Netlify에 배포되어 있는지 확인
2. index.html에 `data-netlify="true"` 속성 확인
3. Git Push 후 Netlify 자동 배포 완료 대기

### ❌ 메일이 안 와요
**해결 1:** 스팸 메일함 확인  
**해결 2:** Netlify 대시보드 → Forms → Submissions에서 데이터 확인  
**해결 3:** Email notification 설정 다시 확인

### ❌ 폼 제출 후 에러 페이지로 이동
**해결:**
1. index.html에 `method="POST"` 확인
2. 폼 필드 `name` 속성 확인
3. Git Push 후 재배포

---

## ✅ 장점

### EmailJS vs Netlify Forms

| 기능 | EmailJS | Netlify Forms |
|------|---------|---------------|
| 가입 필요 | ⚠️ 필요 | ✅ 불필요 |
| API 키 설정 | ⚠️ 3곳 수정 | ✅ 자동 |
| 무료 한도 | 월 200건 | 월 100건 |
| 설정 시간 | 10분 | 3분 |
| 스팸 방지 | ❌ 없음 | ✅ 자동 |
| 데이터 백업 | ❌ 없음 | ✅ 대시보드 |

**결론:** Netlify Forms가 더 간단하고 안전합니다! 👍

---

## 🎯 현재 상태

### ✅ 이미 작동 중인 폼:
- **상담 모달** (`consultForm`) → 이미 `lbg@syacc.co.kr`로 알림 가는 중

### ✅ 방금 추가한 폼:
- **뉴스레터 구독** (`newsletter`) → 동일한 방식으로 설정 완료

---

## 📞 확인 방법

### Netlify 대시보드에서:
1. **Forms** 메뉴 클릭
2. 2개 폼 확인:
   - `consultation` (상담 폼)
   - `newsletter` (뉴스레터 폼) ← NEW!

3. 각 폼의 **Settings** → **Notifications** 확인
4. `lbg@syacc.co.kr` 이메일 알림 설정 확인

---

## 🎉 완료!

**추가 작업 없음!**
- ❌ EmailJS 가입 불필요
- ❌ API 키 설정 불필요
- ❌ 코드 수정 불필요

**Git Push만 하면 자동으로 작동합니다!**

```bash
git add index.html
git commit -m "feat: 뉴스레터 Netlify Forms 연동 (EmailJS 제거)"
git push origin main
```

배포 완료 후 Netlify 대시보드에서 이메일 알림만 추가하면 끝! 🚀

---

## 💬 문의

Netlify 설정 관련 문제 발생 시:
- **Netlify 공식 문서:** https://docs.netlify.com/forms/setup/
- **Netlify 지원:** https://www.netlify.com/support/
