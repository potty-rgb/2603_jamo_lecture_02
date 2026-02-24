# AI를 활용한 프로젝트 캘린더 서비스 만들기

> 이 문서는 AI 서비스(Claude, Google AI Studio 등)를 활용하여 **새 프로젝트의 캘린더 서비스**를 만드는 **단계별 가이드**입니다.
> 가이드를 순서대로 따라하면 동일한 기능의 서비스를 만들 수 있습니다.

---

## 목차

1. [사전 준비물](#1-사전-준비물)
2. [마스터 시트 준비](#2-마스터-시트-준비)
3. [AI에게 제공할 기획문서](#3-ai에게-제공할-기획문서)
4. [단계별 AI 프롬프트](#4-단계별-ai-프롬프트)
5. [Apps Script 배포](#5-apps-script-배포)
6. [배포 및 테스트](#6-배포-및-테스트)
7. [체크리스트](#7-체크리스트)

---

## 1. 사전 준비물

AI 작업을 시작하기 전에 아래 항목을 준비합니다.

### 필수 준비물

| 항목 | 설명 | 예시 |
|------|------|------|
| **마스터 시트** | 공약 데이터가 입력된 구글 시트 | [구글 시트 링크] |
| **기존 index.html** | 이전 프로젝트의 서비스 파일 (템플릿) | `index.html` 파일 |
| **apps_script_proxy.gs** | Apps Script 프록시 코드 | `apps_script_proxy.gs` 파일 |
| **프로젝트 정보** | 아래 표 참조 | |

### 프로젝트 정보 (미리 정리)

아래 내용을 텍스트로 정리해두세요:

```
■ 프로젝트명: (예: "2604 자모님 입지특강")
■ 본공지 날짜: (예: 2026-03-12)
■ 프로젝트 기간: (예: 2026-02-23 ~ 2026-03-17)
■ 담당자 목록: (예: 퍼티, 제나)
■ 마스터 시트 URL: (구글 시트 주소)
■ 마스터 시트 GID: (시트 URL의 gid= 뒤 숫자)

■ 선행지표 목록:
  - 선행지표 1: (이름과 목표, 예: "본강의 - 사전오픈알림 1500명")
  - 선행지표 2: (이름과 목표, 예: "무료특강 - 무료특강 3000명")
  - 선행지표 3: (이름과 목표, 예: "구매전환 - 구매전환율 5%")

■ KPI 항목 (선행지표별):
  - 선행지표 1 KPI: 유입 16000명, 오픈알림자수 1500명, 오픈알림전환율 15%, 구매전환율 30%, 구매 450건
  - 선행지표 2 KPI: 무료특강 신청 3000명, 라이브 참여율 50%, 라이브 참여 1500명, 구매전환율 20%, 구매 300건

■ KPI가 위치한 시트 행번호:
  - 선행지표 1 KPI → 시트 6행
  - 선행지표 2 KPI → 시트 51행

■ 사용하는 채널 목록:
  (예: 상세페이지, CRM, 커뮤니티, 월부닷컴, 채팅방, 오가닉, Pd, Owned, 라이브, 결제)
```

---

## 2. 마스터 시트 준비

### 2-1. 시트 컬럼 구조 (반드시 유지)

마스터 시트는 아래 컬럼 구조를 따라야 합니다:

| 컬럼 | 인덱스 | 용도 | 형식 |
|------|--------|------|------|
| B (1) | 번호 | 공약 위계 번호 | `1`, `1-1`, `1-1-1` |
| D (3) | 채널 | 채널 분류 | `상세페이지`, `CRM - LMS` 등 |
| E (4) | 담당자 | 담당자명 | `퍼티`, `제나` |
| F (5) | 세부내용 | 공약 원문 | 자유 텍스트 |
| G (6) | 기간 | 주차 표시 | `2월 4주차` |
| H (7) | 진행날짜 | 시작~종료일 | `0223(월)-0226(목)` ← 형식 필수! |
| J~P (9~15) | 목표값 | KPI 목표 | 숫자 |
| Q~V (16~21) | 실적값 | KPI 실적 | 숫자 |
| 완료 컬럼 | 진행상태 | 완료/미완료 | `완료` 또는 `미완료` |
| 복기 컬럼 | 복기 내용 | 자유 텍스트 | |

### 2-2. 번호 체계

```
1        → 선행지표 (최상위)
1-1      → 선선행지표 (중간)
1-1-1    → 공약 (실행 과제)
```

### 2-3. 날짜 형식 (중요!)

```
올바른 예: 0223(월)-0226(목)  → 2월 23일 ~ 2월 26일
올바른 예: 0227(금)           → 2월 27일 하루
잘못된 예: 2/23-2/26  ❌
잘못된 예: 2026-02-23  ❌
```

---

## 3. AI에게 제공할 기획문서

AI에게 작업을 요청할 때, 아래 기획문서를 **그대로 복사**하여 제공합니다.
`[괄호]` 안의 내용만 새 프로젝트 정보로 변경하세요.

---

### 📄 기획문서 템플릿

```
# 프로젝트 캘린더 서비스 기획서

## 1. 서비스 개요
마스터 시트(Google Sheets)의 공약 데이터를 시각화하여, 프로젝트 일정과 KPI 달성 현황을 한눈에 관리하는 **단일 HTML 파일** 대시보드입니다.

## 2. 프로젝트 정보
- 프로젝트명: [프로젝트명]
- 본공지 날짜: [YYYY-MM-DD]
- 프로젝트 기간: [시작일] ~ [종료일]
- 담당자: [담당자1], [담당자2]
- 마스터 시트 URL: [URL]

## 3. 핵심 기능
1. **캘린더 뷰**: 월간 달력에 공약을 채널 색상별로 표시
2. **간트 뷰**: 전체 공약을 간트 차트로 표시
3. **리스트 뷰**: 공약을 리스트 형태로 표시
4. **시트 뷰**: 마스터 시트와 유사한 테이블 형태
5. **필터**: 선행지표/채널/담당자별 필터링 (복수 선택 가능)
6. **대시보드**: 진행 상태 요약, KPI 달성율 프로그레스 바, 이번주 간트
7. **사이드바**: 캘린더 날짜 클릭 시 해당일 공약 상세 표시
8. **책무회의 보고서**: 담당자별 자동 생성, 저장, 복사
9. **목실감(일일 회고)**: 담당자별 자동 생성, 저장, 복사
10. **임팩트 추적**: KPI 전일 대비 변화량 기록
11. **마스터 시트 실시간 업데이트**: Apps Script를 통한 시트 데이터 동기화
12. **클라우드 백업**: 저장 데이터를 Google Sheets _data 탭에 자동 백업

## 4. 선행지표 구조
- 선행지표 1: [이름] — KPI: [항목1 목표, 항목2 목표, ...]
- 선행지표 2: [이름] — KPI: [항목1 목표, 항목2 목표, ...]
- 선행지표 3: [이름] — KPI: [항목1 목표, ...]

## 5. 채널 목록
[채널1], [채널2], [채널3], ...

## 6. 담당자
- [담당자1]: [담당 선행지표] KPI 연결
- [담당자2]: [담당 선행지표] KPI 연결

## 7. 데이터 구조
- 공약 데이터(EVENTS): 번호, 제목, 상세내용, 채널, 담당자, 기간, 시작일, 종료일, 완료여부
- 위계 데이터(TREE_DATA): 선행지표 → 선선행지표 → 공약의 트리 구조
- KPI 데이터: 마스터 시트 특정 행에서 읽어오는 실적값
```

---

## 4. 단계별 AI 프롬프트

### 🔷 1단계: 마스터 시트 → EVENTS 데이터 변환

**AI에게 제공할 것:**
- 마스터 시트의 공약 데이터 (복사 붙여넣기 또는 스크린샷)

**AI에게 보낼 프롬프트:**

```
아래는 마스터 시트의 공약 데이터입니다.
이 데이터를 아래 JSON 형식의 JavaScript 배열로 변환해주세요.

[마스터 시트 데이터 붙여넣기]

변환 형식:
const EVENTS = [
  {
    "no": "번호",           // 마스터 시트의 번호 컬럼 (1-1-1 형태)
    "title": "짧은 제목",    // 세부내용에서 핵심 키워드 추출 (캘린더 표시용)
    "detail": "전체 내용",   // 세부내용 컬럼 원문 그대로
    "channel": "채널명",     // 채널 컬럼
    "assignee": "담당자",    // 담당자 컬럼
    "period": "기간",        // 기간 컬럼 (2월 4주차 등)
    "startDate": "YYYY-MM-DD", // 진행날짜에서 시작일 추출
    "endDate": "YYYY-MM-DD",   // 진행날짜에서 종료일 추출
    "done": false              // 완료 여부 (완료=true, 미완료=false)
  }
];

주의사항:
- 날짜 형식 0223(월)-0226(목)에서 시작일은 2026-02-23, 종료일은 2026-02-26으로 변환
- 날짜가 0227(금) 처럼 하루만 있으면 startDate와 endDate를 동일하게
- title은 세부내용에서 대괄호 안의 키워드나 핵심 2-3단어로 추출
- 프로젝트 연도는 [연도]년입니다
- 번호가 없는 행은 빈 문자열("")로 설정
- 선행지표(depth 1)와 선선행지표(depth 2) 행은 제외하고, 실행 공약만 포함
```

---

### 🔷 2단계: 마스터 시트 → TREE_DATA 변환

**AI에게 보낼 프롬프트:**

```
아래는 마스터 시트의 전체 데이터입니다 (선행지표, 선선행지표, 공약 포함).
이 데이터를 아래 트리 구조의 JavaScript 배열로 변환해주세요.

[마스터 시트 전체 데이터 붙여넣기]

변환 형식:
const TREE_DATA = [
  {
    "no": "1",
    "depth": 1,
    "detail": "선행지표 1. [내용]",
    "children": [
      {
        "no": "1-1",
        "depth": 2,
        "detail": "[선선행지표 내용]",
        "channel": "채널명",
        "children": [
          {
            "no": "1-1-1",
            "depth": 3,
            "detail": "[공약 내용]",
            "channel": "채널명",
            "assignee": "담당자",
            "startDate": "YYYY-MM-DD",
            "endDate": "YYYY-MM-DD",
            "children": []
          }
        ]
      }
    ]
  }
];

구조 규칙:
- depth 1: 선행지표 (번호: 1, 2, 3)
- depth 2: 선선행지표 (번호: 1-1, 1-2, 2-1 등)
- depth 3: 개별 공약 (번호: 1-1-1, 1-1-2 등)
- 번호가 없는 행은 직전 공약의 하위로 depth 0 처리
- 프로젝트 연도는 [연도]년입니다
```

---

### 🔷 3단계: SHEET_DATA 변환

**AI에게 보낼 프롬프트:**

```
아래 마스터 시트 데이터를 SHEET_DATA 배열로 변환해주세요.
SHEET_DATA는 시트의 모든 행을 포함합니다 (선행지표, 선선행지표, 공약 모두).

[마스터 시트 전체 데이터 붙여넣기]

변환 형식:
const SHEET_DATA = [
  {
    row: 5,                    // 시트에서의 행 번호
    no: '1-1-1',               // 번호
    depth: 3,                  // 깊이 (1=선행지표, 2=선선행지표, 3=공약, 0=하위과제)
    detail: '[운영] ...',      // 세부내용 원문
    channel: '상세페이지',      // 채널
    assignee: '퍼티',          // 담당자
    period: '2월 4주차',       // 기간
    date: '0223(월)-0226(목)', // 날짜 원문
    done: false,               // 완료 여부 (null=해당없음)
    startDate: '2026-02-23',   // 시작일 (있을 경우)
    endDate: '2026-02-26'      // 종료일 (있을 경우)
  }
];

추가로 복기 데이터가 있다면:
const REVIEW_DATA = {
  행번호: '복기 내용',
  // 예: 18: '복기 내용...'
};

주의: row는 시트의 실제 행 번호입니다.
```

---

### 🔷 4단계: index.html 데이터 교체

**AI에게 제공할 것:**
- 기존 프로젝트의 `index.html` 파일 (템플릿)
- 1~3단계에서 생성한 EVENTS, TREE_DATA, SHEET_DATA

**AI에게 보낼 프롬프트:**

```
아래 index.html 파일의 프로젝트별 데이터를 새 프로젝트로 교체해주세요.

[index.html 파일 첨부 또는 붙여넣기]

■ 변경 사항:

1. 프로젝트 정보:
   - <title> → "[프로젝트명] - 프로젝트 캘린더"
   - .gnb-logo 텍스트 → "[프로젝트명]"
   - BONGONGJI_DATE → '[본공지 날짜]'
   - 마스터 시트 URL → '[새 시트 URL]'

2. 데이터 교체:
   - const EVENTS = [...] → 새 EVENTS 데이터로 교체
   - const TREE_DATA = [...] → 새 TREE_DATA 데이터로 교체
   - const SHEET_DATA = [...] → 새 SHEET_DATA 데이터로 교체
   - const REVIEW_DATA = {...} → 새 REVIEW_DATA로 교체 (없으면 빈 객체 {})

3. 선행지표 필터 라벨 변경:
   - initFilters() 함수 내 liItems 배열:
     { key: '1', label: '[선행지표1 이름]' },
     { key: '2', label: '[선행지표2 이름]' },
     { key: '3', label: '[선행지표3 이름]' }

4. KPI 항목/목표값 변경:
   - KPI_MAIN 배열: [선행지표1의 KPI 항목들]
   - KPI_FREE 배열: [선행지표2의 KPI 항목들]

5. KPI 시트 행 매핑 변경:
   - updateKpi(KPI_MAIN, [선행지표1 KPI가 있는 시트 행번호]);
   - updateKpi(KPI_FREE, [선행지표2 KPI가 있는 시트 행번호]);

6. KPI 컬럼 매핑 (필요시):
   - var KPI_COL_MAP = [17, 18, 19, 21, 20]; // 기본값 유지 또는 변경

7. 담당자 변경:
   - openReportSidebar('[담당자1]') / openReportSidebar('[담당자2]')
   - openMoksilgamSidebar('[담당자1]') / openMoksilgamSidebar('[담당자2]')
   - cheerMessages 배열 내 이름 변경
   - who === '[담당자2]' ? KPI_FREE : KPI_MAIN

8. Apps Script URL:
   - var APPS_SCRIPT_URL = '[새 Apps Script 웹앱 URL]';

■ 변경하지 않을 부분:
- CSS 스타일 전체
- 캘린더/간트/리스트/시트 뷰 렌더링 로직
- 필터/사이드바/책무회의/목실감/임팩트 기능 로직
- 클라우드 동기화 로직 (loadFromCloud, saveToCloud)
- 시트 업데이트 로직 (updateFromSheet)
```

---

### 🔷 5단계: 응원 문구 변경 (선택)

**AI에게 보낼 프롬프트:**

```
프로젝트 캘린더에서 사용할 응원 문구를 생성해주세요.

담당자: [담당자1], [담당자2]
프로젝트명: [프로젝트명]

아래 형식으로 생성:

1. cheerMessagesBase 배열: 일반 응원 문구 120개
   - 형식: '[담당자1], [담당자2]! [응원 메시지] [이모지]'
   - 프로젝트와 관련된 긍정적이고 에너지 넘치는 메시지

2. cheerMessagesFinish 배열: 피니시 응원 문구 30개
   - D-3 이하일 때 추가되는 문구
   - 마무리/결승점 관련 응원 메시지
```

---

## 5. Apps Script 배포

### 5-1. Apps Script 코드 붙여넣기

1. 새 구글 시트 열기 → **확장 프로그램** → **Apps Script** 클릭
2. 기존 코드를 **전체 삭제**
3. 아래 코드를 **그대로 복사 붙여넣기**
4. **`SHEET_GID` 값을 새 시트의 GID로 변경** (시트 URL의 `gid=` 뒤 숫자)

```javascript
var SHEET_GID = 000000000; // ← 이 숫자를 새 시트의 GID로 변경!
var DATA_SHEET_NAME = '_data';

function doGet(e) {
  var callback = (e && e.parameter) ? e.parameter.callback : null;
  var action = (e && e.parameter) ? (e.parameter.action || 'sheet') : 'sheet';
  try {
    var result;
    if (action === 'loadData') {
      result = loadCloudData();
    } else {
      result = loadSheetData();
    }
    return respond(result, callback);
  } catch (err) {
    return respond({ error: err.message }, callback);
  }
}

function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(DATA_SHEET_NAME);
    if (!sheet) { sheet = ss.insertSheet(DATA_SHEET_NAME); }
    var payload = JSON.parse(e.postData.contents);
    var key = payload.key;
    var value = payload.value;
    if (!key) {
      return ContentService.createTextOutput(JSON.stringify({ error: 'key is required' }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    var data = sheet.getDataRange().getValues();
    var found = false;
    for (var i = 0; i < data.length; i++) {
      if (String(data[i][0]) === key) {
        sheet.getRange(i + 1, 2).setValue(value);
        found = true;
        break;
      }
    }
    if (!found) { sheet.appendRow([key, value]); }
    return ContentService.createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function loadSheetData() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = getSheetByGid(ss, SHEET_GID);
  if (!sheet) return { error: 'GID ' + SHEET_GID + ' 시트를 찾을 수 없습니다.' };
  var data = sheet.getDataRange().getValues();
  if (data.length === 0) return { error: '시트에 데이터가 없습니다.' };
  var headers = data[0].map(function(h) { return String(h).trim(); });
  var rows = data.slice(1);
  return { headers: headers, rows: rows, sheetName: sheet.getName(),
           updatedAt: new Date().toISOString(), totalRows: rows.length };
}

function loadCloudData() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(DATA_SHEET_NAME);
  if (!sheet) return { data: {} };
  var data = sheet.getDataRange().getValues();
  var result = {};
  for (var i = 0; i < data.length; i++) {
    var key = String(data[i][0] || '').trim();
    if (key) result[key] = String(data[i][1] || '');
  }
  return { data: result };
}

function getSheetByGid(ss, gid) {
  var sheets = ss.getSheets();
  for (var i = 0; i < sheets.length; i++) {
    if (sheets[i].getSheetId() === gid) return sheets[i];
  }
  return null;
}

function respond(obj, callback) {
  var json = JSON.stringify(obj);
  if (callback) {
    return ContentService.createTextOutput(callback + '(' + json + ')')
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService.createTextOutput(json)
    .setMimeType(ContentService.MimeType.JSON);
}
```

### 5-2. 배포

1. 상단 **배포** → **새 배포** 클릭
2. 유형: **웹 앱** 선택
3. 실행 주체: **본인(나)** 선택
4. 액세스 권한: **모든 사용자** 선택
5. **배포** 클릭 → 생성된 **웹앱 URL 복사**
6. `index.html` 파일의 `APPS_SCRIPT_URL` 변수에 URL 붙여넣기

> ⚠️ 코드 수정 후에는 **배포 → 배포 관리 → 새 버전**으로 재배포해야 합니다.

---

## 6. 배포 및 테스트

### 6-1. GitHub Pages 배포 (권장)

```bash
# 1. 새 저장소 생성 (GitHub)
# 2. 파일 업로드
git init
git add index.html apps_script_proxy.gs
git commit -m "새 프로젝트 캘린더 서비스"
git remote add origin [GitHub 저장소 URL]
git push -u origin main

# 3. GitHub 저장소 → Settings → Pages → Source: main → Save
# 4. https://[username].github.io/[repo-name]/ 에서 접속
```

### 6-2. 로컬 테스트

```bash
# 간단한 로컬 서버 실행 (Python)
python3 -m http.server 8080

# 또는 Node.js
npx serve .

# 브라우저에서 http://localhost:8080 접속
```

### 6-3. 테스트 체크리스트

- [ ] 캘린더에 공약이 올바르게 표시되는가
- [ ] 간트 차트에 날짜가 맞는가
- [ ] 필터(선행지표/채널/담당)가 동작하는가
- [ ] 🔄 마스터 시트 업데이트 버튼이 동작하는가
- [ ] KPI 달성율이 표시되는가
- [ ] 책무회의/목실감 저장이 되는가
- [ ] 임팩트가 기록되는가
- [ ] `_data` 시트 탭에 데이터가 백업되는가
- [ ] D-day가 올바르게 표시되는가

---

## 7. 체크리스트

전체 과정을 순서대로 확인합니다:

### 사전 준비
- [ ] 마스터 시트 준비 완료 (컬럼 구조, 날짜 형식 확인)
- [ ] 프로젝트 정보 정리 완료

### AI 데이터 변환
- [ ] EVENTS 데이터 생성 완료
- [ ] TREE_DATA 데이터 생성 완료
- [ ] SHEET_DATA 데이터 생성 완료

### index.html 수정
- [ ] 프로젝트명, D-day 날짜 변경
- [ ] 마스터 시트 URL 변경
- [ ] EVENTS 배열 교체
- [ ] TREE_DATA 배열 교체
- [ ] SHEET_DATA 배열 교체
- [ ] 선행지표 필터 라벨 변경
- [ ] KPI 항목/목표값 변경
- [ ] KPI 시트 행 매핑 변경
- [ ] KPI 컬럼 매핑 확인
- [ ] 담당자 이름 변경
- [ ] (선택) 응원 문구 변경
- [ ] (필요시) 채널 색상 추가

### Apps Script
- [ ] Apps Script 코드 붙여넣기
- [ ] SHEET_GID 변경
- [ ] 웹앱 배포 완료
- [ ] APPS_SCRIPT_URL 설정

### 테스트
- [ ] 캘린더/간트/리스트/시트 뷰 동작 확인
- [ ] 필터 동작 확인
- [ ] 시트 업데이트 동작 확인
- [ ] KPI 표시 확인
- [ ] 책무회의/목실감 저장 확인
- [ ] 클라우드 백업 동작 확인

---

## 부록: AI 활용 팁

### Claude 사용 시
- 파일 첨부 기능으로 `index.html`과 마스터 시트 데이터를 직접 업로드할 수 있습니다
- "이 파일의 EVENTS 배열만 새 데이터로 교체해줘"처럼 구체적으로 요청하세요
- Claude Code(CLI)를 사용하면 파일 수정까지 자동으로 처리됩니다

### Google AI Studio 사용 시
- 긴 데이터는 여러 번에 나눠서 변환을 요청하세요
- JSON 형식이 깨지면 "위 JSON의 문법 오류를 수정해줘"라고 요청하세요

### 공통 주의사항
- AI가 생성한 날짜를 반드시 확인하세요 (연도 오류가 자주 발생)
- JSON 배열의 마지막 항목 뒤에 쉼표가 없는지 확인하세요
- 생성된 데이터의 `no` 필드가 마스터 시트와 일치하는지 확인하세요
