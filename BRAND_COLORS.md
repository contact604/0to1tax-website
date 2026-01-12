# 0to1tax 브랜드 색상 시스템

## 🎨 현재 적용: Blue Edition (v9.1.0)

### 메인 컬러 팔레트

| 색상명 | HEX 코드 | RGB | 용도 |
|--------|----------|-----|------|
| **Primary Blue** | `#2563eb` | rgb(37, 99, 235) | 메인 브랜드 색상, Hero 배경, Feature 번호 |
| **Light Blue** | `#3b82f6` | rgb(59, 130, 246) | 그라데이션, 버튼 hover |
| **Sky Blue** | `#60a5fa` | rgb(96, 165, 250) | 강조, 링크 hover |
| **Dark Blue** | `#1e3a8a` | rgb(30, 58, 138) | Header 배경 |
| **Accent Orange** | `#f59e0b` | rgb(245, 158, 11) | CTA 버튼, 강조 포인트 |
| **Text Dark** | `#1e293b` | rgb(30, 41, 59) | 본문 텍스트 |
| **Text Gray** | `#64748b` | rgb(100, 116, 139) | 보조 텍스트 |

---

## 💡 색상 사용 가이드

### 1. Primary Blue (#2563eb)
**용도:**
- Hero 섹션 배경 그라데이션
- Feature 번호 배경
- 내비게이션 닷 (활성화)
- 로고 메인 색상

**사용 예시:**
```css
background: linear-gradient(135deg, #1e40af 0%, #2563eb 100%);
background: #2563eb;
color: #2563eb;
```

### 2. Light Blue (#3b82f6)
**용도:**
- 그라데이션 보조 색상
- 버튼 hover 상태
- 링크 기본 색상

**사용 예시:**
```css
background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);
border-color: #3b82f6;
```

### 3. Accent Orange (#f59e0b)
**용도:**
- 주요 CTA 버튼
- 강조 텍스트
- 로켓 날개 등 포인트 색상

**사용 예시:**
```css
background: #f59e0b;
color: #f59e0b;
```

**Hover 상태:**
```css
background: #d97706; /* darker orange */
```

### 4. Dark Blue (#1e3a8a)
**용도:**
- Header 배경
- 다크 모드 요소

**사용 예시:**
```css
background: #1e3a8a;
```

---

## 🎯 색상 조합

### Hero 섹션
```css
background: linear-gradient(135deg, #1e40af 0%, #2563eb 100%);
color: white;
```

### Feature 섹션
```css
background: white;
color: #1e293b;
.feature-number {
    background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);
}
```

### CTA 버튼
```css
background: #f59e0b;
color: white;
box-shadow: 0 10px 30px rgba(245, 158, 11, 0.3);
```

### 내비게이션
```css
background: rgba(255, 255, 255, 0.9);
border: 2px solid #3b82f6;
color: #2563eb;
```

---

## 📊 접근성 (Accessibility)

### 대비율 체크 ✅

| 배경색 | 텍스트색 | 대비율 | WCAG AA | WCAG AAA |
|--------|----------|--------|---------|----------|
| #2563eb | white | 8.6:1 | ✅ Pass | ✅ Pass |
| white | #2563eb | 8.6:1 | ✅ Pass | ✅ Pass |
| white | #1e293b | 15.8:1 | ✅ Pass | ✅ Pass |
| #f59e0b | white | 2.4:1 | ⚠️ Large Only | ❌ Fail |
| #f59e0b | #1e293b | 7.8:1 | ✅ Pass | ✅ Pass |

---

## 🆚 Cyan vs Blue 비교

### Cyan Edition (v9.0.0 이전)
**색상:**
- Primary: `#06b6d4` (Cyan 500)
- Light: `#22d3ee` (Cyan 400)

**특징:**
- ✨ 모던하고 테크한 느낌
- 🚀 스타트업, IT 기업에 적합
- 💡 밝고 세련된 톤

### Blue Edition (v9.1.0 현재) ⭐
**색상:**
- Primary: `#2563eb` (Blue 600)
- Light: `#3b82f6` (Blue 500)

**특징:**
- 💙 신뢰감 있고 클래식한 느낌
- 🏛️ 금융, 회계, 법률 서비스에 적합
- 🤝 안정적이고 전문적인 톤

**선택 이유:**
- 0to1tax는 **세무·회계 서비스**
- 신뢰성과 전문성이 핵심 가치
- 금융 서비스에서 보편적으로 사용되는 블루 계열이 더 적합

---

## 🎨 브랜드 감성

### 블루 색상이 전달하는 메시지

1. **신뢰 (Trust)** 💙
   - 금융·회계 서비스의 핵심 가치
   - 안정적이고 믿을 수 있는 파트너

2. **전문성 (Professionalism)** 👔
   - 전문가 그룹의 이미지
   - 체계적이고 정확한 서비스

3. **성장 (Growth)** 📈
   - 밝은 블루로 긍정적 에너지
   - 스타트업과 함께 성장하는 파트너십

4. **혁신 (Innovation)** 🚀
   - 전통적 신뢰감 + 현대적 감각
   - 로켓 모티브로 도전과 성장 상징

---

## 📱 반응형 색상 가이드

### 모바일
- 색상은 동일하게 유지
- 그라데이션 강도는 동일
- 그림자 효과 약간 축소

### 다크 모드 (향후 지원 시)
```css
/* 다크 모드 색상 팔레트 (참고용) */
--primary-blue: #60a5fa;
--light-blue: #93c5fd;
--background-dark: #0f172a;
--text-dark: #e2e8f0;
```

---

## 🎯 사용 예시

### CSS Variables 정의
```css
:root {
    --color-primary: #2563eb;
    --color-primary-light: #3b82f6;
    --color-primary-dark: #1e40af;
    --color-accent: #f59e0b;
    --color-accent-hover: #d97706;
    --color-text: #1e293b;
    --color-text-light: #64748b;
    --color-header: #1e3a8a;
}
```

### 그라데이션 믹스인
```css
/* Hero Gradient */
.hero-gradient {
    background: linear-gradient(135deg, #1e40af 0%, #2563eb 100%);
}

/* Feature Number Gradient */
.number-gradient {
    background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);
}

/* Progress Bar Gradient */
.progress-gradient {
    background: linear-gradient(90deg, #2563eb 0%, #3b82f6 100%);
}
```

---

## ✅ 체크리스트

현재 적용된 요소:
- ✅ Header 배경 (#1e3a8a)
- ✅ 로고 (0to1tax-horizontal-blue.svg)
- ✅ Hero 배경 그라데이션
- ✅ Feature 번호 배경
- ✅ CTA 버튼 (#f59e0b)
- ✅ Progress Bar
- ✅ Navigation Dots
- ✅ Navigation Buttons
- ✅ Final CTA 배경

---

## 📞 문의

색상 시스템에 대한 질문이나 수정 요청은:
- 디자인 시스템 담당자에게 문의
- 브랜드 가이드라인 참조

---

**Last Updated:** 2026-01-12  
**Version:** v9.1.0 (Blue Edition)  
**Status:** ✅ Active
