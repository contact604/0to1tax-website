# 🔧 DNS_PROBE_FINISHED_NXDOMAIN 오류 해결

## 🚨 오류 메시지
```
사이트에 연결할 수 없음
0to1tax.com에 오타가 있는지 확인하세요.
DNS_PROBE_FINISHED_NXDOMAIN
```

---

## 🎯 오류 원인

### 간단히 말하면
**도메인(0to1tax.com)과 웹사이트(배포된 서버)가 연결되지 않았어요.**

### 비유로 설명
```
🏠 집 (웹사이트)
- 위치: iadkczem.gensparkspace.com
- 상태: ✅ 이미 지어짐 (배포 완료!)

📮 주소 (도메인)
- 이름: 0to1tax.com
- 상태: ⚠️ 구매는 했지만 집과 연결 안 됨

❌ 문제: 우체부(인터넷)가 주소(도메인)를 찾아도
         집(웹사이트)의 위치를 몰라서 배달 실패!
```

---

## ✅ 해결 방법 (2가지)

### 방법 1: 실제 주소로 접속하기 (즉시 해결!) ⭐

**가장 빠른 방법**: 배포된 실제 URL 사용

#### 단계:
1. **Publish 탭** 열기
2. **배포된 URL** 확인
   ```
   예시: https://iadkczem.gensparkspace.com
   또는: https://your-project-id.gensparkspace.com
   ```
3. **이 URL을 사용**하세요!
   - 북마크에 추가
   - 고객에게 공유
   - 명함에 인쇄

#### 장점
- ✅ 즉시 작동!
- ✅ 설정 필요 없음
- ✅ 완전히 정상적인 주소

#### 단점
- 주소가 좀 길어요 (하지만 문제없어요!)

---

### 방법 2: 도메인 연결하기 (0to1tax.com 사용) ⏱️

**더 예쁜 주소를 원하신다면**: DNS 설정 필요

---

## 🌐 도메인 연결 방법 (상세)

### 📋 준비물
- Squarespace 계정 (도메인 구매한 곳)
- 배포된 URL (Publish 탭에서 확인)
- 10~30분의 시간

---

### 🔵 Option A: Cloudflare 사용 (강력 추천!) ⭐⭐⭐

**장점**:
- ✅ 무료 SSL (https) 자동 발급
- ✅ 빠른 속도 (CDN)
- ✅ DDoS 보호
- ✅ 전문적인 관리

**단점**:
- 설정이 약간 복잡 (하지만 가이드 있음!)
- 15분~24시간 대기

#### 단계:

**1. Cloudflare 가입**
```
https://dash.cloudflare.com/sign-up
```

**2. 도메인 추가**
- "Add a Site" 클릭
- `0to1tax.com` 입력
- **Free 플랜** 선택

**3. DNS 레코드 확인/추가**

Cloudflare가 기존 레코드를 스캔하지만, 추가해야 할 수도 있어요:

```
Type: CNAME
Name: www
Target: iadkczem.gensparkspace.com
Proxy: ON (주황색 구름 ☁️)
```

```
Type: CNAME (또는 A 레코드)
Name: @ (루트 도메인용)
Target: iadkczem.gensparkspace.com
Proxy: ON
```

**4. 네임서버 변경**

Cloudflare가 제공하는 네임서버 2개 복사:
```
예시:
- adriana.ns.cloudflare.com
- bruce.ns.cloudflare.com
```

**5. Squarespace로 가기**

1. Squarespace 로그인
2. **도메인** → **0to1tax.com** 클릭
3. **DNS 설정** 또는 **고급 설정**
4. **네임서버** 섹션 찾기
5. Cloudflare 네임서버로 변경
6. **저장**

**6. 대기**
- 15분~2시간: 대부분 작동 시작
- 최대 24~48시간: 전 세계 전파 완료

**7. 확인**
```
https://www.0to1tax.com
```

#### 📝 상세 가이드
→ `CLOUDFLARE_SETUP_GUIDE.md` 참고

---

### 🔵 Option B: Squarespace DNS 직접 설정 (간단하지만 제한적)

**장점**:
- ✅ 설정이 간단
- ✅ 빠르게 적용 (15분~2시간)

**단점**:
- ❌ SSL (https) 수동 설정 필요
- ❌ 속도 최적화 없음

#### 단계:

**1. Squarespace 로그인**

**2. DNS 설정 열기**
- **도메인** → **0to1tax.com**
- **DNS 설정** 클릭

**3. CNAME 레코드 추가**

www 서브도메인용:
```
Host: www
Points to: iadkczem.gensparkspace.com
TTL: Auto 또는 3600
```

**4. A 레코드 추가 (루트 도메인용)**

⚠️ **문제**: A 레코드는 **IP 주소**가 필요해요.

IP 주소 확인 방법:
1. 명령 프롬프트 (Windows) 또는 터미널 (Mac) 열기
2. 입력:
   ```
   ping iadkczem.gensparkspace.com
   ```
3. IP 주소 확인 (예: `104.26.15.183`)

A 레코드 추가:
```
Host: @
Points to: [확인한 IP 주소]
TTL: Auto 또는 3600
```

**5. 저장 및 대기**
- 15분~2시간 대기
- `https://0to1tax.com` 접속 시도

**⚠️ 주의**: SSL 오류가 발생할 수 있어요!
→ 이 경우 **Cloudflare 사용 권장**

---

## 🎯 어떤 방법을 선택해야 할까요?

### 빠른 비교

| 항목 | 배포 URL 사용 | Cloudflare | Squarespace DNS |
|------|--------------|------------|-----------------|
| 설정 시간 | 0분 (즉시!) | 30분 | 10분 |
| 대기 시간 | 없음 | 2~24시간 | 15분~2시간 |
| SSL (https) | ✅ 자동 | ✅ 자동 | ❌ 수동 |
| 속도 | 보통 | ⚡ 빠름 | 보통 |
| 난이도 | ⭐ 쉬움 | ⭐⭐⭐ 중간 | ⭐⭐ 약간 복잡 |
| 추천도 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |

### 추천

**지금 당장 사이트 사용하고 싶다면**:
→ **배포 URL 사용** (즉시!)

**예쁜 도메인 꼭 필요하고, 시간 있다면**:
→ **Cloudflare** (최고!)

**빠르게 도메인만 연결하고 싶다면**:
→ **Squarespace DNS** (하지만 SSL 문제 가능)

---

## 📊 타임라인 예상

### 배포 URL 사용
```
지금: 0to1tax.com 입력 → ❌ 오류
      ↓
지금: 배포 URL 입력 → ✅ 즉시 작동!
```

### Cloudflare 설정
```
지금:       설정 시작 (30분)
           ↓
15분 후:    DNS 전파 시작
           ↓
2시간 후:   대부분 지역에서 작동
           ↓
24시간 후:  전 세계 완전 작동
           ↓
결과:      https://0to1tax.com ✅
          https://www.0to1tax.com ✅
```

### Squarespace DNS
```
지금:       설정 시작 (10분)
           ↓
30분 후:    DNS 전파 시작
           ↓
2시간 후:   작동 시작
           ↓
결과:      https://0to1tax.com ⚠️ (SSL 오류 가능)
          http://0to1tax.com ✅
```

---

## ❓ 자주 묻는 질문

### Q1: 왜 즉시 안 되나요?
**A:** DNS는 전 세계에 전파되는 데 시간이 걸려요.
- 최소: 15분
- 보통: 2시간
- 최대: 48시간

### Q2: 배포 URL이 못생겼어요...
**A:** 
- 기능적으로는 완전히 동일해요!
- SEO에도 문제없어요
- 고객은 북마크만 하면 돼요
- 정 싫으면 도메인 연결하세요 (시간 투자 필요)

### Q3: SSL 오류가 나요 (ERR_SSL_VERSION_OR_CIPHER_MISMATCH)
**A:** 
- Squarespace DNS만 사용하면 발생 가능
- **해결책**: Cloudflare 사용!

### Q4: 도메인 설정이 너무 어려워요
**A:**
- 배포 URL 사용하세요! (완전히 정상!)
- 나중에 천천히 도메인 연결해도 돼요
- 전문가에게 의뢰하는 것도 방법

### Q5: 도메인 비용 더 나가나요?
**A:**
- 도메인: 이미 구매하셨어요 (추가 비용 없음)
- Cloudflare: 무료 플랜 사용 가능
- Squarespace DNS: 무료

---

## 🎯 추천 해결 방법

### 초보자 or 바쁜 분
```
1. 배포 URL 확인
2. 그 URL 사용
3. 끝! ✅
```

### 전문적으로 하고 싶은 분
```
1. Cloudflare 가입
2. DNS 설정
3. 2시간 대기
4. 0to1tax.com 사용! ✅
```

---

## 🚀 지금 당장 할 일

### Step 1: 실제 사이트 확인 (1분)
```
Publish 탭 → 배포된 URL 확인 → 접속
```

### Step 2: 결정하기
- **A안**: 배포 URL 그대로 사용 (추천!)
- **B안**: 도메인 연결 시도 (시간 있으면!)

### Step 3: 실행
- A안 선택: 끝!
- B안 선택: Cloudflare 가이드 따라하기

---

## 📚 관련 가이드

- **CLOUDFLARE_SETUP_GUIDE.md** - Cloudflare 완벽 가이드
- **도메인_연결_간단가이드.md** - 도메인 연결 간단 버전
- **빠른_시작_가이드.md** - 전체 흐름 이해

---

## 💡 핵심 요약

### DNS_PROBE_FINISHED_NXDOMAIN 오류 = 도메인 연결 안 됨

**해결책 3가지**:
1. ⭐⭐⭐⭐⭐ 배포 URL 사용 (즉시)
2. ⭐⭐⭐⭐ Cloudflare 설정 (2~24시간)
3. ⭐⭐⭐ Squarespace DNS (2시간, SSL 문제 가능)

**가장 쉬운 방법**: 배포 URL 그대로 사용!
**가장 좋은 방법**: Cloudflare 설정 (시간 투자)

---

**걱정 마세요! 이 오류는 정상이고, 쉽게 해결할 수 있어요! 😊**
