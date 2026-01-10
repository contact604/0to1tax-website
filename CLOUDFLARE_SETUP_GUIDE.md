# Cloudflare로 0to1tax.com SSL 설정하기 (완벽 가이드)

## 🎯 목표
- www.0to1tax.com에 무료 SSL 인증서 발급
- 빠른 CDN 속도 제공
- 보안 강화

---

## 📋 준비물
- Cloudflare 무료 계정 (회원가입 필요)
- 0to1tax.com 도메인 (Squarespace에서 구매 완료)
- 약 10분의 시간

---

## 🔧 설정 단계

### 1️⃣ Cloudflare 가입 (5분)

1. **https://dash.cloudflare.com/sign-up** 접속
2. 이메일과 비밀번호로 가입
3. 이메일 인증

### 2️⃣ 도메인 추가 (3분)

1. Cloudflare 대시보드에서 **"Add a Site"** 클릭
2. **0to1tax.com** 입력
3. **Free 플랜** 선택
4. **Continue** 클릭

### 3️⃣ DNS 레코드 확인 (2분)

Cloudflare가 자동으로 기존 DNS 레코드를 스캔합니다.

**확인할 레코드**:
```
Type: CNAME
Name: www
Target: iadkczem.gensparkspace.com
Proxy status: Proxied (주황색 구름 ☁️)
```

**중요**: Proxy status가 **"Proxied"** (주황색)인지 확인!
- ✅ Proxied = Cloudflare CDN + SSL 활성화
- ❌ DNS only = SSL 없음

### 4️⃣ 네임서버 변경 (5분 + 대기)

Cloudflare가 제공하는 **네임서버 2개**를 메모하세요:
```
예시:
- adriana.ns.cloudflare.com
- bruce.ns.cloudflare.com
```

**Squarespace DNS 설정으로 이동**:

1. Squarespace 로그인
2. **도메인** → **0to1tax.com** → **DNS 설정**
3. **"고급 설정"** 또는 **"네임서버"** 섹션 찾기
4. 기존 네임서버를 Cloudflare 네임서버로 변경:
   ```
   기존: Squarespace 또는 Google 네임서버
   변경: Cloudflare 네임서버 2개
   ```
5. **저장**

### 5️⃣ SSL 설정 (자동)

네임서버 변경 후 **15분~24시간** 대기:

1. Cloudflare에서 자동으로 SSL 인증서 발급
2. 이메일로 "Your site is active on Cloudflare" 알림 수신
3. **https://www.0to1tax.com** 정상 작동! ✅

---

## 🎉 완료 후 상태

### 변경 전 (현재):
```
www.0to1tax.com
   ↓ (DNS)
iadkczem.gensparkspace.com
   ↓
❌ ERR_SSL_VERSION_OR_CIPHER_MISMATCH
```

### 변경 후 (Cloudflare):
```
www.0to1tax.com
   ↓ (Cloudflare DNS)
☁️ Cloudflare CDN + SSL
   ↓
iadkczem.gensparkspace.com
   ↓
✅ https://www.0to1tax.com 정상 작동!
```

---

## 🔍 추가 설정 (선택사항)

### SSL/TLS 암호화 모드 설정

Cloudflare 대시보드에서:
1. **SSL/TLS** 탭 클릭
2. **암호화 모드** 선택:
   - **"Flexible"** (추천) - Cloudflare ↔ 사용자 간 SSL
   - **"Full"** - 서버도 SSL 필요
   - **"Full (strict)"** - 검증된 SSL 필요

**추천**: **Flexible** 모드 사용

### 루트 도메인 리디렉션 설정

**0to1tax.com** → **www.0to1tax.com** 자동 리디렉션:

1. Cloudflare **Rules** → **Page Rules** 클릭
2. **Create Page Rule** 클릭
3. 설정:
   ```
   URL: http://0to1tax.com/*
   Setting: Forwarding URL
   Status Code: 301 - Permanent Redirect
   Destination: https://www.0to1tax.com/$1
   ```
4. **Save and Deploy**

---

## ⚠️ 주의사항

### 네임서버 변경 영향

**이메일 설정**:
- ✅ Google Workspace MX 레코드는 유지됨
- ✅ Cloudflare가 자동으로 복사함
- ⚠️ 확인 필수: Cloudflare DNS에 MX 레코드가 있는지 체크

**DNS 전파 시간**:
- 보통: 15분~2시간
- 최대: 24~48시간
- ISP에 따라 다름

---

## 🆘 문제 해결

### "Cloudflare에서 도메인을 찾을 수 없습니다"
→ Squarespace에서 도메인 잠금 해제 필요

### "네임서버를 변경할 수 없습니다"
→ 도메인이 Google Workspace로 관리 중
→ Google Admin Console에서 네임서버 변경 필요

### "SSL 인증서가 발급되지 않습니다"
→ 24시간 대기
→ Cloudflare 지원 문의

---

## 📊 예상 타임라인

```
0분:    Cloudflare 가입 및 도메인 추가
5분:    DNS 레코드 확인
10분:   네임서버 변경 완료
        ↓ (대기)
30분:   DNS 전파 시작
2시간:  대부분의 지역에서 작동
24시간: 전 세계 완전 전파
```

---

## 🎯 최종 체크리스트

- [ ] Cloudflare 가입 완료
- [ ] 0to1tax.com 도메인 추가
- [ ] www CNAME 레코드 확인 (Proxied)
- [ ] Squarespace에서 네임서버 변경
- [ ] Cloudflare 이메일 알림 대기
- [ ] https://www.0to1tax.com 테스트
- [ ] 루트 도메인 리디렉션 설정 (선택)

---

## 💡 꿀팁

### Cloudflare 무료 플랜 혜택:
- ✅ 무제한 DDoS 보호
- ✅ 무료 SSL 인증서 (자동 갱신)
- ✅ 글로벌 CDN
- ✅ 웹 방화벽 (WAF)
- ✅ 분석 및 통계
- ✅ 3개까지 Page Rules

### 성능 향상 팁:
1. **Auto Minify** 활성화 (Speed → Optimization)
2. **Brotli** 압축 활성화
3. **Caching Level** = Standard

---

## 🚀 시작하기

준비되셨나요?

**1단계부터 시작하세요!**

https://dash.cloudflare.com/sign-up

질문이 있으면 언제든 물어보세요! 😊
