# 루트 도메인 (0to1tax.com) 설정 가이드

## 현재 상태
- ✅ **www.0to1tax.com** - 작동 (CNAME 설정 완료)
- ❌ **0to1tax.com** - 아직 설정 안 됨

---

## 루트 도메인을 설정하려면

### 방법: A 레코드 추가

Squarespace DNS 설정 화면에서:

1. **"ADD PRESET"** 버튼 클릭
2. **A 레코드** 추가:
   ```
   Host: @
   Type: A
   Data: 104.26.15.183
   TTL: 4 hrs
   ```
3. **저장**

### 결과
- **0to1tax.com** → 웹사이트로 연결
- **www.0to1tax.com** → 웹사이트로 연결

---

## ⚠️ 주의사항

### Google Workspace 사용 중
도메인이 Google Workspace로 관리되고 있습니다.

**A 레코드 추가 시**:
- ✅ 이메일 기능은 유지됨 (MX 레코드가 별도로 존재)
- ✅ 루트 도메인이 웹사이트로 연결됨
- ⚠️ 단, Google Workspace의 기본 웹사이트 기능은 사용 불가

**확인할 사항**:
- Google Workspace에서 웹사이트 호스팅 기능을 사용하고 있지 않다면 문제없음
- 대부분의 경우 이메일만 사용하므로 안전함

---

## 권장사항

### Option 1: 루트 도메인 자동 리디렉션 (추천) 🌟
- 사용자가 **0to1tax.com** 입력 시
- 자동으로 **www.0to1tax.com**으로 리디렉션
- 장점: SEO에 유리, 한 가지 URL로 통일

**설정 방법**:
- Squarespace DNS에서 URL Redirect 추가:
  ```
  Source: 0to1tax.com
  Target: https://www.0to1tax.com
  Type: Permanent (301)
  ```

### Option 2: 루트 도메인 직접 연결
- A 레코드 추가 (위 방법)
- 장점: 짧은 URL (0to1tax.com)
- 단점: www와 루트 도메인이 별도로 인식될 수 있음

---

## 추천 순서

1. **먼저 www.0to1tax.com 테스트** (현재 설정)
2. 정상 작동 확인 후
3. 루트 도메인 설정 결정
4. 설정 추가

---

## 질문?

어떤 방식을 원하시나요?
1. **www만 사용** (현재 상태 유지)
2. **루트 도메인 리디렉션** (www로 자동 전환)
3. **루트 도메인 직접 연결** (A 레코드 추가)

알려주시면 상세 가이드 제공해드리겠습니다! 🚀
