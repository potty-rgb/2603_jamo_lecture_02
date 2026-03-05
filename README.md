# 프로젝트 캘린더

> 마스터 시트(Google Sheets)의 공약 데이터를 시각화하여, 프로젝트 일정과 KPI 달성 현황을 한눈에 관리하는 대시보드입니다.

---

# Part 1. 사용 설명서

---

## 1. 화면 구성

### 1-1. 상단 네비게이션 (GNB)

| 영역 | 설명 |
|------|------|
| **프로젝트명 / D-day** | 현재 프로젝트 이름과 본공지까지 남은 일수 |
| **🔄 마스터 시트 업데이트** | 구글 시트의 최신 데이터를 가져옵니다. ▼ 클릭 시 업데이트 이력을 확인할 수 있습니다. 업데이트된 데이터는 캐시되어 **재접속 시에도 마지막 상태가 유지**됩니다 |
| **📄 마스터 시트 바로가기** | 구글 시트를 새 탭에서 엽니다 |
| **응원 문구** | 자동으로 바뀌는 응원 메시지 |
| **⚡ 임팩트** | KPI 변화량과 관련 공약을 추적하는 사이드바 |
| **📋 퍼티/제나 책무회의** | 담당자별 책무회의 보고서를 작성·저장·복사합니다 |
| **📝 목실감 작성** | 담당자별 목실감(일일 회고)을 작성·저장·복사합니다 |

### 1-2. 대시보드

대시보드는 3개의 접기/펼치기 가능한 섹션으로 구성됩니다.

#### ▶ 진행 상태 요약/Todo
- 오늘 날짜 기준으로 각 담당자(퍼티/제나)의 **진행중/완료/미완료** 공약 현황을 표시합니다
- KPI 실적이 있으면 전일 대비 변동도 표시됩니다

#### ▶ 선행지표 달성율
- **본강의**: 유입 → 오픈알림자수 → 오픈알림전환율 → 구매전환율 → 구매
- **무료특강**: 무료특강 신청 → 라이브 참여율 → 라이브 참여 → 구매전환율 → 구매
- 각 KPI의 목표 대비 달성율을 **프로그레스 바**로 표시합니다
- 마스터 시트 업데이트 시 자동으로 갱신됩니다

#### ▶ 이번주 공약
- 이번주(월~일) 기간의 공약을 **간트 차트** 형태로 보여줍니다
- ◀ / ▶ 버튼으로 이전/다음 주 이동
- **간략히보기** 클릭 시 전체 공약 트리를 펼칩니다

### 1-3. 프로젝트 일정 (메인 영역)

#### 필터
일정 영역 상단의 필터 버튼으로 원하는 공약만 볼 수 있습니다.

| 필터 그룹 | 설명 |
|-----------|------|
| **선행지표** | 본강의 / 무료특강 / 구매전환 — 해당 선행지표에 속한 공약만 표시 |
| **채널** | CRM, Owned, Pd, 결제, 라이브, 상세페이지, 오가닉, 월부닷컴, 채팅방, 커뮤니티 |
| **담당** | 제나 / 퍼티 |

- 필터는 **복수 선택** 가능합니다
- 같은 그룹 내 필터는 OR 조건, 다른 그룹 간은 AND 조건입니다
  - 예: `채널: CRM` + `채널: 상세페이지` → CRM **또는** 상세페이지
  - 예: `채널: CRM` + `담당: 퍼티` → CRM **이면서** 퍼티 담당
- 선택된 필터를 다시 클릭하면 해제됩니다

#### 뷰 전환
| 뷰 | 설명 |
|----|------|
| **캘린더** | 월간 달력에 공약을 채널 색상별로 표시. 일자 클릭 시 해당 날짜의 공약 상세를 사이드바에서 확인 |
| **간트** | 전체 공약을 간트 차트로 표시. 채널·담당·시작/종료일 확인 가능 |
| **리스트** | 공약을 리스트 형태로 정렬하여 표시 |
| **시트** | 마스터 시트와 유사한 테이블 형태로 전체 공약 데이터 확인 |

#### 캘린더 일자 클릭 → 사이드바
- 날짜를 클릭하면 오른쪽에 사이드바가 열립니다
- 사이드바에는 해당 날짜에 진행 중인 공약이 **선행지표 → 선선행지표 → 공약** 위계로 표시됩니다
- 각 공약의 **마스터 시트 원문 전체**가 표시됩니다
- 공약 항목 클릭 시 세부 내용이 펼쳐집니다

### 1-4. 기능 버튼 상세

#### ⚡ 임팩트
- **전일 마지막 업데이트 스냅샷** 대비 현재 KPI 변화량을 기록합니다
- 시트를 업데이트할 때마다 **자동으로 갱신**됩니다
- 현재 진행 중인 공약도 "미반영" 섹션에 표시됩니다
- 📋 복사 버튼으로 내용을 클립보드에 복사할 수 있습니다

#### 📋 책무회의
- 오늘 날짜 기준 책무회의 보고서를 자동 생성합니다
- 포함 내용: 공지사항, 선행지표 현황(gap), 진행한 공약, 오늘 진행할 공약
- **접기/펼치기 토글**: 각 섹션을 ▶ 클릭으로 접거나 펼칠 수 있습니다 (기본 접힘)
- **리스트 요약**: 접힌 상태에서 각 공약의 `[태그]`와 핵심 내용을 리스트로 미리 보여줍니다
- **저장** → 브라우저에 저장 (localStorage)
- **복사** → 모든 섹션의 상세 내용을 클립보드에 복사 (접힌 상태와 무관)
- 📂 이전 기록에서 과거 책무회의를 열어볼 수 있습니다

#### 📝 목실감
- 일일 회고 보고서를 자동 생성합니다
- **저장/복사** 기능 동일
- 📂 이전 기록에서 과거 기록을 열어볼 수 있습니다
- **목실감 기록 복사하기** → 여러 날짜의 기록을 한번에 선택하여 복사

---

## 2. 마스터 시트 작성 시 유의사항

### 2-1. 시트 구조 (컬럼)

| 컬럼 | 인덱스 | 내용 | 예시 |
|------|--------|------|------|
| B (1) | 번호(no) | 공약 계층 번호 | `1-1-1`, `2-3` |
| D (3) | 채널 | 채널명 | `상세페이지`, `CRM - LMS` |
| E (4) | 담당자 | 담당자명 | `퍼티`, `제나` |
| F (5) | 세부내용 | 공약 상세 내용 | `[운영] 구매이후까지...` |
| G (6) | 기간 | 주차 표시 | `2월 4주차` |
| H (7) | 진행날짜 | 시작~종료일 | `0223(월)-0226(목)` |
| J~P (9~15) | 목표값 | KPI 목표 | 숫자 |
| Q~V (16~21) | 실적값 | KPI 실적 | 숫자 |
| 완료 컬럼 | 진행상태 | 완료/미완료 | `완료`, `미완료` |
| 복기 컬럼 | 복기 내용 | 자유 텍스트 | |
| 피드백 컬럼 | 피드백 내용 | 자유 텍스트 | |

### 2-2. 날짜 형식 (중요!)

진행날짜 컬럼은 반드시 아래 형식을 따라야 합니다:

```
MMDD(요일)-MMDD(요일)
```

**올바른 예시:**
- `0223(월)-0226(목)` → 2월 23일 ~ 2월 26일
- `0227(금)` → 2월 27일 하루
- `0302(월)-0309(월)` → 3월 2일 ~ 3월 9일

**잘못된 예시:**
- `2/23-2/26` ❌ (슬래시 형식 불가)
- `0223-0226` ❌ (요일 표기 누락)
- `2026-02-23` ❌ (ISO 형식 불가)

### 2-3. 번호(no) 체계

번호는 **공약의 위계**를 결정합니다:

| 형식 | 의미 | 예시 |
|------|------|------|
| `1`, `2`, `3` | 선행지표 (최상위) | `1` = 선행지표 1 |
| `1-1`, `2-3` | 선선행지표 (중간) | `1-1` = 선행지표1의 첫번째 선선행지표 |
| `1-1-1`, `2-1-3` | 공약 (실행 과제) | `1-1-1` = 실행할 구체 공약 |

- 번호가 없는 행은 직전 상위 공약의 **하위 실행 과제**로 인식됩니다
- 선행지표 필터는 번호 첫자리(`1`, `2`, `3`)로 소속을 판별합니다

### 2-4. 채널명 규칙

채널명은 아래 키워드를 포함하면 자동으로 색상이 지정됩니다:

| 채널 키워드 | 색상 |
|-------------|------|
| `상세페이지` | 빨강 |
| `커뮤니티` | 초록 |
| `CRM`, `LMS` | 노랑 |
| `월부닷컴`, `월부` | 주황 |
| `채팅방` | 보라 |
| `오가닉` | 회색-초록 |
| `Pd` | 회색 |
| `Owned`, `온드` | 파랑-보라 |
| `라이브` | 핑크 |
| `결제` | 진한파랑 |

### 2-5. KPI 실적 행

KPI 실적은 특정 행에서 읽어옵니다:

| 선행지표 | 시트 행번호 | 읽는 컬럼 |
|----------|------------|-----------|
| 본강의 (선행지표1) | **6행** | R(17): 유입, T(19): 오픈알림자수, U(20): 오픈알림전환율, W(22): 구매전환율, V(21): 구매 |
| 무료특강 (선행지표2) | **51행** | 동일 컬럼 구조 |

- 전환율은 소수점(0.15) 또는 퍼센트(15) 모두 인식합니다
- 빈 셀이나 `0`, `-`는 무시됩니다

### 2-6. 공약 추가/수정 시

1. 마스터 시트에서 공약을 추가/수정합니다
2. 프로젝트 캘린더에서 **🔄 마스터 시트 업데이트** 버튼을 클릭합니다
3. 자동으로:
   - 공약 데이터가 갱신됩니다
   - 선행지표 매핑이 재스캔됩니다
   - 필터 버튼이 재구성됩니다
   - KPI 달성율이 업데이트됩니다
   - 임팩트 로그가 갱신됩니다

### 2-7. 데이터 저장 위치

| 데이터 | 1차 저장소 | 2차 저장소 (클라우드 백업) | 설명 |
|--------|-----------|--------------------------|------|
| 공약/일정 | 마스터 시트 (Google Sheets) | — | 시트 업데이트 시 동기화 |
| 시트 업데이트 캐시 | 브라우저 localStorage | Google Sheets `_data` 탭 | 재접속 시 마지막 업데이트 상태 자동 복원 |
| 책무회의 기록 | 브라우저 localStorage | Google Sheets `_data` 탭 | 저장 시 자동 백업, 페이지 로드 시 자동 복원 |
| 목실감 기록 | 브라우저 localStorage | Google Sheets `_data` 탭 | 동일 |
| KPI 스냅샷 | 브라우저 localStorage | Google Sheets `_data` 탭 | 동일 |
| 임팩트 로그 | 브라우저 localStorage | Google Sheets `_data` 탭 | 동일 |
| 시트 업데이트 이력 | 브라우저 localStorage | Google Sheets `_data` 탭 | 동일 |

> ✅ **클라우드 백업**: 책무회의, 목실감, KPI 스냅샷, 임팩트 로그 등은 Google Sheets의 `_data` 시트 탭에 자동으로 백업됩니다. 브라우저 캐시를 삭제하거나 다른 브라우저에서 접속해도 데이터가 자동 복원됩니다.

---

## 3. 자주 묻는 질문

**Q: 시트를 업데이트했는데 반영이 안 돼요**
→ 🔄 마스터 시트 업데이트 버튼을 클릭하셨는지 확인해주세요. 시트 수정만으로는 자동 반영되지 않습니다.

**Q: 임팩트에 아무것도 안 나와요**
→ 임팩트는 **전일 스냅샷**과 비교합니다. 처음 사용 시에는 오늘 스냅샷만 저장되고, 내일부터 비교가 시작됩니다.

**Q: 책무회의/목실감이 다른 컴퓨터에서 안 보여요**
→ 클라우드 백업이 활성화되어 있으면 다른 브라우저에서도 자동 복원됩니다. 만약 복원되지 않는 경우, Apps Script가 정상 배포되어 있는지 확인해주세요.

**Q: 페이지를 새로고침하면 데이터가 초기화돼요**
→ 시트 업데이트를 한 번 이상 실행했다면, 재접속 시 마지막 업데이트 상태가 자동 복원됩니다. 처음 접속 시에는 🔄 마스터 시트 업데이트 버튼을 클릭해주세요.

**Q: 브라우저 캐시를 삭제해도 데이터가 유지되나요?**
→ 네. 모든 데이터는 Google Sheets `_data` 시트 탭에 자동 백업됩니다. 페이지를 다시 열면 클라우드에서 자동 복원됩니다.

**Q: 필터를 여러 개 선택했는데 공약이 안 보여요**
→ 다른 그룹 간 필터는 AND 조건입니다. 예를 들어 `채널: CRM` + `담당: 제나`를 선택하면 CRM이면서 제나 담당인 공약만 표시됩니다.

---

# Part 2. 다음 프로젝트 재사용 가이드

---

## 4. 재사용 구조 개요

현재 서비스(`index.html`)는 **단일 HTML 파일**로 구성되어 있으며, 프로젝트별로 변경해야 하는 부분은 크게 **5곳**입니다.

```
변경 필요:
├── ① 프로젝트 정보 (이름, D-day, 시트 URL)
├── ② EVENTS 데이터 (마스터 시트 공약 목록)
├── ③ TREE_DATA 데이터 (공약 위계 구조)
├── ④ 선행지표 / KPI 설정
└── ⑤ Apps Script URL

변경 불필요:
├── CSS 스타일 전체
├── 캘린더/간트/리스트/시트 뷰 로직
├── 필터/사이드바/책무회의/목실감/임팩트 로직
└── 시트 업데이트 로직
```

---

## 5. 단계별 변경 가이드

### 5-1. 프로젝트 기본 정보 변경

**파일 내 검색 → 변경할 키워드:**

| 검색 키워드 | 위치 | 변경 내용 |
|-------------|------|-----------|
| `2604 자모님 입지특강` | `<title>`, `.gnb-logo` | 새 프로젝트 이름으로 변경 |
| `본공자 3/12` | GNB D-day 표시 영역 | 새 본공지 날짜 |
| `docs.google.com/spreadsheets/d/...` | 마스터시트 바로가기 버튼 | 새 구글 시트 URL |

**D-day 계산 기준일 변경:**
```javascript
// 검색: "본공지 D-day"  또는  "dday" 관련 코드
// 날짜를 새 프로젝트의 본공지일로 변경
```

### 5-2. EVENTS 데이터 교체

`index.html` 파일에서 `const EVENTS = [` 로 검색합니다.

이 배열은 **마스터 시트의 공약 목록을 1:1로 변환한 JSON**입니다.

```javascript
const EVENTS = [
  {
    "no": "1-1-1",           // 번호
    "title": "운영",          // 공약 제목 (짧은 이름)
    "detail": "[운영] ...",   // 세부 내용 (마스터 시트 원문)
    "channel": "상세페이지",   // 채널
    "assignee": "퍼티",       // 담당자
    "period": "2월 4주차",    // 기간
    "startDate": "2026-02-23", // 시작일 (YYYY-MM-DD)
    "endDate": "2026-02-26",   // 종료일 (YYYY-MM-DD)
    "done": false              // 완료 여부
  },
  // ... 나머지 공약들
];
```

**작성 방법:**
1. 마스터 시트의 각 공약 행을 위 형식의 JSON 객체로 변환
2. 배열 순서는 **마스터 시트의 행 순서 그대로** (선행지표 순)
3. `title`은 캘린더/간트에 표시되는 짧은 이름
4. `detail`은 사이드바에서 보여지는 전체 내용

### 5-3. TREE_DATA 교체

`const TREE_DATA = [` 로 검색합니다.

이것은 **선행지표 → 선선행지표 → 공약**의 위계 구조입니다.

```javascript
const TREE_DATA = [
  {
    "no": "1",
    "depth": 1,
    "detail": "선행지표 1. [Aw, 사전오픈알림 1500명]",
    "children": [
      {
        "no": "1-1",
        "depth": 2,
        "detail": "[Pd : PMF] ANSVA 구조...",
        "channel": "상세페이지",
        "children": [
          {
            "no": "1-1-1",
            "depth": 3,
            "detail": "[운영] ...",
            "channel": "상세페이지",
            "assignee": "퍼티",
            "startDate": "2026-02-23",
            "endDate": "2026-02-26",
            "children": []
          }
        ]
      }
    ]
  },
  // 선행지표 2, 3 ...
];
```

**구조 규칙:**
- depth 1: 선행지표 (`no`: `1`, `2`, `3`)
- depth 2: 선선행지표 (`no`: `1-1`, `2-3`)
- depth 3 / depth 0: 개별 공약

### 5-4. 선행지표 / KPI 설정 변경

#### (A) 선행지표 필터 라벨

`initFilters` 함수 내에서 `liItems` 배열을 검색합니다:

```javascript
const liItems = [
  { key: '1', label: '본강의' },      // 선행지표 1의 표시명
  { key: '2', label: '무료특강' },     // 선행지표 2의 표시명
  { key: '3', label: '구매전환' }      // 선행지표 3의 표시명
];
```

→ 새 프로젝트의 선행지표 이름으로 변경

#### (B) KPI 항목

```javascript
const KPI_MAIN = [
  { label: '유입', target: 16000, actual: 0, unit: '명', fmt: v => ... },
  { label: '오픈알림자수', target: 1500, actual: 0, unit: '명', fmt: v => ... },
  // ...
];

const KPI_FREE = [
  { label: '무료특강 신청', target: 3000, actual: 0, unit: '명', fmt: v => ... },
  // ...
];
```

→ 새 프로젝트의 KPI 항목 / 목표값으로 변경

#### (C) KPI 시트 행 매핑

```javascript
updateKpi(KPI_MAIN, 6);   // 선행지표1 KPI → 시트 6행에서 읽음
updateKpi(KPI_FREE, 51);  // 선행지표2 KPI → 시트 51행에서 읽음
```

→ 새 시트에서 KPI 실적이 있는 행번호로 변경

#### (D) KPI 컬럼 매핑

```javascript
var KPI_COL_MAP = [17, 19, 20, 22, 21]; // R, T, U, W, V 컬럼
```

→ KPI 항목 순서에 맞는 시트 컬럼 인덱스로 변경

### 5-5. Apps Script URL 변경

```javascript
var APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfyc.../exec';
```

→ 새 구글 시트의 Apps Script 웹앱 URL로 변경

**Apps Script 배포 방법:**
1. 새 구글 시트 → **확장 프로그램** → **Apps Script** 클릭
2. 기존 코드를 모두 지우고, 아래 **Apps Script 전체 코드**를 붙여넣기
3. `SHEET_GID` 값을 새 시트의 GID로 변경 (시트 URL의 `gid=` 뒤 숫자)
4. 상단 **배포** → **새 배포** 클릭
5. 유형: **웹 앱** 선택
6. 실행 주체: **본인(나)** 선택
7. 액세스 권한: **모든 사용자** 선택
8. **배포** 클릭 → 생성된 웹앱 URL을 `APPS_SCRIPT_URL` 변수에 설정

> ⚠️ 코드를 수정한 후에는 반드시 **배포** → **배포 관리** → **새 버전**으로 다시 배포해야 변경사항이 반영됩니다.

<details>
<summary><strong>📋 Apps Script 전체 코드 (클릭하여 펼치기)</strong></summary>

```javascript
var SHEET_GID = 370058510; // 시트 GID (URL의 gid= 뒤 숫자) ← 새 시트에 맞게 변경!
var DATA_SHEET_NAME = '_data'; // 클라우드 저장용 시트 탭 이름

// ===== GET 요청 처리 =====
function doGet(e) {
  var callback = (e && e.parameter) ? e.parameter.callback : null;
  var action = (e && e.parameter) ? (e.parameter.action || 'sheet') : 'sheet';

  try {
    var result;

    if (action === 'loadData') {
      // 클라우드 저장 데이터 로드
      result = loadCloudData();
    } else {
      // 기존: 마스터 시트 데이터 로드
      result = loadSheetData();
    }

    return respond(result, callback);

  } catch (err) {
    return respond({ error: err.message }, callback);
  }
}

// ===== POST 요청 처리 (클라우드 저장) =====
function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(DATA_SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(DATA_SHEET_NAME);
    }

    var payload = JSON.parse(e.postData.contents);
    var key = payload.key;
    var value = payload.value;

    if (!key) {
      return ContentService.createTextOutput(JSON.stringify({ error: 'key is required' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // 기존 행에서 키 찾기
    var data = sheet.getDataRange().getValues();
    var found = false;
    for (var i = 0; i < data.length; i++) {
      if (String(data[i][0]) === key) {
        sheet.getRange(i + 1, 2).setValue(value);
        found = true;
        break;
      }
    }
    if (!found) {
      sheet.appendRow([key, value]);
    }

    return ContentService.createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ===== 마스터 시트 데이터 로드 =====
function loadSheetData() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = getSheetByGid(ss, SHEET_GID);
  if (!sheet) {
    return { error: 'GID ' + SHEET_GID + ' 시트를 찾을 수 없습니다.' };
  }

  var data = sheet.getDataRange().getValues();
  if (data.length === 0) {
    return { error: '시트에 데이터가 없습니다.' };
  }

  var headers = data[0].map(function(h) { return String(h).trim(); });
  var rows = data.slice(1);

  return {
    headers: headers,
    rows: rows,
    sheetName: sheet.getName(),
    updatedAt: new Date().toISOString(),
    totalRows: rows.length
  };
}

// ===== 클라우드 저장 데이터 로드 (_data 시트) =====
function loadCloudData() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(DATA_SHEET_NAME);
  if (!sheet) {
    return { data: {} };
  }

  var data = sheet.getDataRange().getValues();
  var result = {};
  for (var i = 0; i < data.length; i++) {
    var key = String(data[i][0] || '').trim();
    if (key) {
      result[key] = String(data[i][1] || '');
    }
  }
  return { data: result };
}

// ===== 유틸리티 =====
function getSheetByGid(ss, gid) {
  var sheets = ss.getSheets();
  for (var i = 0; i < sheets.length; i++) {
    if (sheets[i].getSheetId() === gid) {
      return sheets[i];
    }
  }
  return null;
}

function respond(obj, callback) {
  var json = JSON.stringify(obj);
  if (callback) {
    // JSONP 응답
    return ContentService
      .createTextOutput(callback + '(' + json + ')')
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService
    .createTextOutput(json)
    .setMimeType(ContentService.MimeType.JSON);
}
```

</details>

---

## 6. 채널 색상 추가/변경

새 프로젝트에서 사용하는 채널이 다르다면:

### CSS 채널 클래스 추가
```css
.ch-새채널명 { background: #원하는색상; color: white; }
```

### JS 채널 매핑 함수 수정
```javascript
function getChannelClass(ch) {
  // ...
  if (c.includes('새채널키워드')) return 'ch-새채널명';
  // ...
}
```

---

## 7. 담당자 변경

담당자 이름이 달라지는 경우:

1. **GNB 버튼**: `openReportSidebar('퍼티')` → 새 이름
2. **목실감 버튼**: `openMoksilgamSidebar('퍼티')` → 새 이름
3. **응원 문구**: `cheerMessagesBase`, `cheerMessagesFinish` 배열에서 이름 변경
4. **KPI 담당 연결**: `who === '제나' ? KPI_FREE : KPI_MAIN` → 새 이름으로 변경

---

## 8. 빠른 시작 체크리스트

새 프로젝트를 시작할 때 아래 순서대로 진행합니다:

- [ ] `index.html` 파일 복사
- [ ] 프로젝트명, D-day 날짜 변경
- [ ] 새 마스터 시트 URL 연결
- [ ] EVENTS 배열 → 새 마스터 시트 기준으로 교체
- [ ] TREE_DATA 배열 → 새 위계 구조로 교체
- [ ] 선행지표 필터 라벨 변경 (`liItems`)
- [ ] KPI 항목/목표값 변경 (`KPI_MAIN`, `KPI_FREE`)
- [ ] KPI 시트 행 매핑 변경 (`updateKpi(KPI_MAIN, 행번호)`)
- [ ] KPI 컬럼 매핑 변경 (`KPI_COL_MAP`)
- [ ] 새 구글 시트에 Apps Script 배포 → URL 설정 (위 코드 복사 → GID 변경 → 배포)
- [ ] 담당자 이름 변경 (GNB, 목실감, 응원문구)
- [ ] (필요시) 채널 색상 추가
- [ ] 브라우저 localStorage 초기화 (이전 프로젝트 데이터 삭제)
- [ ] 테스트: 시트 업데이트 → 캘린더/필터/KPI/임팩트 동작 확인
- [ ] 테스트: 책무회의/목실감 저장 → `_data` 시트 탭에 백업되는지 확인

---

## 9. 마스터 시트 양식 유지 규칙

다음 프로젝트에서도 서비스가 정상 동작하려면, 마스터 시트의 **컬럼 구조**를 유지해야 합니다:

| 컬럼 | 인덱스 | 용도 | 변경 가능? |
|------|--------|------|------------|
| B (1) | 번호 | 공약 위계 | ✅ 내용만 변경 |
| D (3) | 채널 | 채널 분류 | ✅ 새 채널 추가 가능 |
| E (4) | 담당자 | 담당자 | ✅ 이름 변경 가능 |
| F (5) | 세부내용 | 공약 원문 | ✅ 자유 |
| G (6) | 기간 | 주차 | ✅ 자유 |
| H (7) | 진행날짜 | 시작/종료일 | ⚠️ `MMDD(요일)-MMDD(요일)` 형식 필수 |
| J~P (9~15) | 목표 | KPI 목표값 | ✅ 내용 자유 |
| Q~V (16~21) | 실적 | KPI 실적값 | ⚠️ 컬럼 위치 유지 필요 |
| 완료 컬럼 | 진행상태 | 완료/미완료 | ⚠️ `완료`/`미완료` 텍스트 필수 |

> 💡 **핵심**: 컬럼 인덱스(위치)를 바꾸면 코드의 `COL_NO`, `COL_CHANNEL` 등 상수도 함께 변경해야 합니다.

---

## 10. AI를 활용한 서비스 만들기

EVENTS/TREE_DATA를 수동으로 변환하는 대신, **AI 서비스(Claude, Google AI Studio 등)를 활용**하면 빠르게 새 프로젝트 서비스를 만들 수 있습니다.

👉 **[`HOW_TO_MAKE.md`](HOW_TO_MAKE.md)** 문서를 참고하세요.

이 문서에는 다음 내용이 포함되어 있습니다:
- AI에게 제공할 **기획문서 템플릿**
- 데이터 변환을 위한 **단계별 AI 프롬프트**
- Apps Script **배포 방법**
- 전체 과정 **체크리스트**

---

## 11. 자동화 개선 아이디어 (향후)

현재는 EVENTS/TREE_DATA를 HTML에 직접 작성해야 하지만, 다음과 같은 개선이 가능합니다:

1. **Apps Script에서 EVENTS/TREE_DATA도 함께 전송** → 시트만 작성하면 코드 수정 없이 사용 가능
2. **템플릿 생성기** → 프로젝트명/선행지표/KPI를 입력하면 index.html을 자동 생성
3. **GitHub Pages 배포** → 파일을 올리면 바로 웹에서 접근 가능 (현재도 가능)
