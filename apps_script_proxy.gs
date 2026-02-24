/**
 * Google Apps Script - 마스터 시트 데이터 프록시 + 클라우드 데이터 저장
 *
 * [설정 방법]
 * 1. Google Sheet에서 "확장 프로그램" > "Apps Script" 클릭
 * 2. 기존 코드를 모두 지우고 이 코드를 붙여넣기
 * 3. 상단 "배포" > "새 배포" 클릭
 * 4. 유형: "웹 앱" 선택
 * 5. 실행 주체: "본인(나)" 선택
 * 6. 액세스 권한: "모든 사용자" 선택
 * 7. "배포" 클릭 → 웹앱 URL 복사
 * 8. index.html 파일에서 APPS_SCRIPT_URL 변수에 복사한 URL 붙여넣기
 *
 * [주의]
 * - GID를 변경해야 할 경우 아래 SHEET_GID 값을 수정하세요
 * - 코드를 수정하면 "배포" > "배포 관리" > "새 버전"으로 다시 배포해야 합니다
 * - _data 시트 탭은 자동 생성됩니다 (클라우드 저장용)
 */

var SHEET_GID = 370058510; // 시트 GID (URL의 gid= 뒤 숫자)
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
