# 藥品亮燈 API 監控面板 - 專案文檔

## 📋 專案概述

為了診斷現場硬體設備亮燈速度慢的問題，建立一個獨立的監控面板，用於追蹤 `light_on_by_code` API 從觸發到接收回應的完整時間序列，幫助工程師快速定位瓶頸。

---

## 🎯 需求規格

### 核心功能

1. **自動記錄 API 調用**
   - 不修改現有 `medicine_cart/index.html` 的業務邏輯
   - 在後台自動監控所有 `light_on_by_code` API 呼叫
   - 使用 `performance.now()` 實現高精度時間計測（微秒級）

2. **監控數據展示**
   - 顯示每一筆 API 調用的完整時間信息
   - 簡約風格，清晰易讀
   - 按時間倒序（最新的在上面）

3. **詳細信息查看**
   - 點擊「詳情」按鈕查看該次調用的：
     - 請求 Payload（JSON）
     - 回應 Response（JSON）
   - 使用彈窗或展開式顯示

4. **狀態指示**
   - 用顏色標示成功/失敗
   - 記錄 API 返回的 Result 文字（包含錯誤原因）

---

## 📊 時間計測說明

### 前端額外耗時定義

```
前端額外耗時包含網路傳輸、瀏覽器處理、Gateway / Proxy 等非 API 內部處理時間。

計算公式：
前端額外耗時 = 前端總耗時 - API 處理耗時

例：
API 觸發時間: 14:23:45.123
API 接收時間: 14:23:45.268
┌─────────────────────────────────┐
│ 前端總耗時: 145ms                │
│ API 處理耗時: 31.602ms           │
│ 前端額外耗時: 約 113.4ms         │
└─────────────────────────────────┘
```

### 時間來源

| 時間項目 | 來源 | 精度 | 說明 |
|---------|------|------|------|
| API 觸發時間 | 前端 JS（`performance.now()`） | 微秒 | 發送 API 請求的時刻 |
| API 接收時間 | 前端 JS（`performance.now()`） | 微秒 | 接收 API 回應的時刻 |
| 前端總耗時 | 計算值 | 毫秒 | 接收時間 - 觸發時間 |
| API 處理耗時 | API 回應（`TimeTaken` 欄位） | 毫秒 | 後端內部處理時間 |
| 前端額外耗時 | 計算值 | 毫秒 | 前端總耗時 - API 處理耗時 |

---

## 💾 數據儲存

### localStorage 設計

**Key:** `light_on_api_logs`

**Value 結構（JSON 陣列）：**
```json
[
  {
    "id": "unique-id-1",
    "timestamp_send": 1234567890.123,
    "timestamp_receive": 1234567890.268,
    "duration_frontend": 145,
    "duration_api": 31.602,
    "duration_extra": 113.398,
    "status": "success",
    "code": 200,
    "result": "設備更新亮燈完成,共<1>筆",
    "payload": {...},
    "response": {...}
  },
  ...
]
```

### 數據管理策略

- **最多保留筆數：** 300 筆
- **自動清除：** 無（需手動清除或超過 300 筆時自動刪除最舊記錄）
- **清除時機：** 新記錄寫入時檢查是否超過 300 筆

---

## 📂 目錄結構

```
phar_system/
├── medicine_cart/
│   ├── index.html                     （現有，修改：加載 api_monitor.js）
│   ├── api_monitor.js                 ✨ 新建 - 監控腳本
│   └── ...現有文件
│
└── medicine_cart_monitor/             ✨ 新建 - 監控模組
    ├── index.html                     （監控頁面）
    ├── app.js                         （監控邏輯）
    ├── style.css                      （簡約風格）
    ├── PROJECT.md                     （本文檔）
    └── README.md                      （使用說明）
```

---

## 🔧 實現細節

### 1. `api_monitor.js` - 監控腳本

**功能：**
- 攔截所有 `fetch` 請求
- 識別 `light_on_by_code` API 調用
- 記錄時間戳和回應數據
- 存儲到 `localStorage`

**位置：** `phar_system/medicine_cart_monitor/api_monitor.js`

**引入方式：** 在 `phar_system/medicine_cart/index.html` 的 `</body>` 前添加
```html
<script src="../medicine_cart_monitor/api_monitor.js?v=1.0"></script>
```

### 2. `medicine_cart_monitor/index.html` - 監控頁面

**功能：**
- 讀取 `localStorage` 中的監控數據
- 渲染時間線列表
- 提供詳情查看功能
- 顯示統計信息

**訪問 URL:** `http://[域名]/phar_system/medicine_cart_monitor/`

### 3. `medicine_cart_monitor/app.js` - 監控邏輯

**功能：**
- 初始化頁面
- 管理事件監聽
- 處理詳情彈窗
- 數據篩選和排序

### 4. `medicine_cart_monitor/style.css` - 樣式

**特點：**
- 簡約風格
- 響應式設計
- 清晰的視覺層級
- 狀態色彩標示（綠色成功、紅色失敗）

---

## 🎨 UI 設計規範

### 列表項目樣式

```
┌──────────────────────────────────────────────────────┐
│ ✓ 14:23:45.123 → 14:23:45.268                [詳情] │
│   前端總耗時: 145ms | API 耗時: 31.602ms |額外: 113.4ms
│   狀態: 成功 | 結果: 設備更新亮燈完成,共<1>筆          │
└──────────────────────────────────────────────────────┘
```

### 詳情彈窗

```
╔═══════════════════════════════════╗
║         API 調用詳情               ║
╠═══════════════════════════════════╣
║ 觸發時間: 2025-05-11 14:23:45.123 ║
║ 接收時間: 2025-05-11 14:23:45.268 ║
║                                   ║
║ 【請求 Payload】                  ║
║ {                                 ║
║   "ServerName": "長青樓U1",        ║
║   "ServerType": "調劑台",          ║
║   "ValueAry": [...]               ║
║ }                                 ║
║                                   ║
║ 【回應 Response】                  ║
║ {                                 ║
║   "Code": 200,                    ║
║   "Result": "設備更新亮燈完成...",   ║
║   "TimeTaken": "31.602ms"         ║
║ }                                 ║
║                           [關閉]    ║
╚═══════════════════════════════════╝
```

---

## ✅ 功能清單 - 完成後核對

### 必須實現

- [ ] **監控腳本 (`api_monitor.js`)**
  - [ ] 正確攔截 fetch 請求
  - [ ] 識別 `light_on_by_code` API
  - [ ] 使用 `performance.now()` 記錄時間戳（精確到微秒）
  - [ ] 從 API 回應中提取 `TimeTaken`
  - [ ] 計算前端總耗時
  - [ ] 計算前端額外耗時（總耗時 - API耗時）
  - [ ] 完整保存 Payload 和 Response
  - [ ] 存儲到 `localStorage`

- [ ] **監控頁面 (`medicine_cart_monitor/index.html`)**
  - [ ] 讀取 `localStorage` 數據
  - [ ] 顯示時間戳到**毫秒**精度
  - [ ] 時間格式: `HH:MM:SS.mmm`
  - [ ] 按時間倒序排列（最新在上）
  - [ ] 顯示箭頭表示時間流向（→）
  - [ ] 顯示各個耗時項目

- [ ] **狀態指示**
  - [ ] 成功時顯示 ✓ 標記（綠色）
  - [ ] 失敗時顯示 ✗ 標記（紅色）
  - [ ] 顯示 API 返回的 Result 文字

- [ ] **詳情功能**
  - [ ] 每筆記錄旁有「詳情」按鈕
  - [ ] 點擊彈出詳情彈窗
  - [ ] 顯示完整的 Payload（JSON 格式）
  - [ ] 顯示完整的 Response（JSON 格式）
  - [ ] JSON 語法高亮（可選但推薦）
  - [ ] 可複製 JSON 內容（可選但推薦）

- [ ] **數據管理**
  - [ ] 最多保留 300 筆記錄
  - [ ] 超過 300 筆時自動刪除最舊記錄
  - [ ] 提供「清除所有數據」按鈕
  - [ ] 清除時有確認提示

- [ ] **修改現有文件**
  - [ ] `phar_system/medicine_cart/index.html` - 在 `</body>` 前添加監控腳本引入
  - [ ] 確認 medicine_cart 的現有功能完全不受影響

---

## 🚀 部署和使用

### 部署步驟

1. **建立目錄**
   ```
   mkdir phar_system/medicine_cart_monitor
   ```

2. **放入文件**
   - `index.html`
   - `app.js`
   - `style.css`
   - `api_monitor.js` 放在該目錄

3. **修改 medicine_cart/index.html**
   - 在 `</body>` 前添加：
   ```html
   <script src="../medicine_cart_monitor/api_monitor.js?v=1.0"></script>
   ```

4. **訪問監控頁面**
   - 打開藥師操作頁面：`http://[域名]/phar_system/medicine_cart/`（自動監控）
   - 查看監控數據：`http://[域名]/phar_system/medicine_cart_monitor/`

### 使用流程

1. **藥師正常操作** `medicine_cart/index.html`
   - 無感知，後台自動記錄

2. **工程師查看監控**
   - 訪問 `medicine_cart_monitor/index.html`
   - 看到所有亮燈 API 的時間數據
   - 點擊「詳情」查看具體調用信息

3. **診斷瓶頸**
   - 如果「前端額外耗時」很大 → 網路或 Gateway 問題
   - 如果「API 處理耗時」很大 → 硬體設備通訊慢
   - 對比多次調用找出規律

---

## 📝 備註

- **隱私考慮：** 監控頁面不需要認證機制（僅工程人員訪問）
- **不修改 medicine_cart：** `medicine_cart/index.html` 只添加腳本引入，業務邏輯完全不改
- **跨瀏覽器兼容：** 優先支援 Chrome（現代瀏覽器），IE 不考慮
- **性能影響：** localStorage 的讀寫性能影響可忽略（< 5ms）

---

## 📞 問題排查

如果監控頁面看不到數據：

1. **檢查 medicine_cart/index.html 是否加載了 api_monitor.js**
   - 打開瀏覽器開發者工具
   - 檢查 Console 是否有錯誤

2. **檢查 localStorage 是否有數據**
   - 開發者工具 → Application → localStorage
   - 找 `light_on_api_logs` 鍵

3. **檢查 API 是否真的被調用**
   - 開發者工具 → Network
   - 操作亮燈，看是否有 `light_on_by_code` 請求

4. **清除瀏覽器快取**
   - `Ctrl+Shift+Delete` 清除快取和 cookies
   - 重新訪問

---

## 版本信息

- **文檔版本：** 1.0
- **建立日期：** 2025-05-11
- **最後更新：** 2025-05-11
