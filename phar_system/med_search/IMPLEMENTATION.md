# med_search 藥品搜尋模組 - 實裝完成文件

## 功能概述
用戶查詢藥品在哪個調劑台，可透過調劑台篩選和搜尋展示相應的藥品資料。

## ✅ 最終實現功能

### 1. 藥局選擇區域
- **UI 呈現**: 下拉選單（同 medicine_cart_monitor）
- **資料來源**: 
  ```javascript
  getPharmacyList() → callMedCarListAPI('get_phar', null)
  ```
- **資料結構**: 
  ```javascript
  {
    phar: "藥局代碼",
    phar_name: "藥局名稱"
  }
  ```

### 2. 調劑台選擇區域
- **UI 呈現**: 按鈕組（全屏呈現）
  - 每個調劑台為一個可點擊按鈕
  - **預設全選**（所有按鈕呈現選中狀態）
  - **選中狀態**: 藍色邊框 + 淡藍背景 (#0066cc)
  - **未選中狀態**: 灰色邊框 + 白色背景
  
- **資料來源**:
  ```javascript
  getServerListByPharmacy(pharName) 
  → callServerSettingAPI('get_serversetting_by_department_type', [pharName])
  ```

- **互動邏輯**:
  - 點擊按鈕切換選中/未選中狀態
  - Set 資料結構存儲選中的調劑台：`selectedServers = new Set()`
  - 實時刷新下方藥品列表

### 3. 藥品搜尋區域 ⭐ (新增)
- **UI 呈現**: 單一輸入框 + 清除按鈕
  - **提示文字**: "輸入藥品碼、藥名、中文名、學名"
  - **文字大小**: 最小 16px（包含響應式設計）
  - **Placeholder**: 幫助用戶瞭解可搜尋的欄位

- **搜尋邏輯**:
  ```javascript
  searchKeyword = input.toLowerCase().trim()
  // 模糊匹配：藥品碼 OR 中文名包含搜尋關鍵字
  medicine.Code.includes(keyword) || medicine.ChineseName.includes(keyword)
  ```

- **互動方式**:
  - 實時搜尋，輸入時立即篩選已選調劑台的藥品
  - 「清除篩選」按鈕一鍵重置

### 4. 藥品展示區域 (Accordion)
- **UI 呈現**: 收合式選單（占滿剩餘頁面高度）
  - 每個選中的調劑台為一個收合項目
  - 標題: 調劑台名稱，展開/收合圖標
  - 內容: 藥品碼 (藍色) + 中文名，每個藥品占一行
  
- **資料來源**:
  ```javascript
  getMedicinesForServer(serverName, serverType)
  // 使用 device/list API (POST_list)
  payload: {
    ValueAry: [
      `ServerName=${serverName}`,
      `ServerType=${serverType}`
    ]
  }
  ```

- **Lazy Loading**:
  - 只在用戶點擊展開時才呼叫 API
  - 內置快取機制：`apiHandlers.cache.medicines[serverName]`
  - 顯示 Loading spinner 直到資料載入完成

- **搜尋篩選整合**:
  - 展開後顯示的藥品已應用搜尋篩選
  - 搜尋詞為空時顯示全部藥品
  - 無符合結果時提示「無符合的藥品資訊」

## 版面布局

### 全屏呈現（整頁）
```
┌────────────────────────────────────────┐
│  Header (藍灰色漸層)                    │
│  藥品搜尋                              │
├────────────────────────────────────────┤
│  請選擇藥局: [藥局下拉選單]             │
├────────────────────────────────────────┤
│  請選擇調劑台: [按鈕群組]               │
├────────────────────────────────────────┤
│  [搜尋框......] [清除篩選]              │
├────────────────────────────────────────┤
│  藥品資訊                              │
│  ┌──────────────────────────────────┐ │
│  │ 調劑台 A ▼                       │ │
│  │  藥品碼  藥品中文名               │ │
│  │  藥品碼  藥品中文名               │ │
│  └──────────────────────────────────┘ │
│  ┌──────────────────────────────────┐ │
│  │ 調劑台 B ▼                       │ │
│  └──────────────────────────────────┘ │
└────────────────────────────────────────┘
```

## 核心代碼實現

### APIHandlers 類
```javascript
class APIHandlers {
  cache = { medicines: {} }  // 藥品快取
  
  // 獲取藥局列表
  async getPharmacyList()
  
  // 獲取調劑台列表
  async getServerListByPharmacy(pharName)
  
  // 獲取藥品列表（含快取）
  async getMedicinesForServer(serverName, serverType)
}
```

### MedSearchApp 類
```javascript
class MedSearchApp {
  selectedServers = new Set()      // 已選調劑台
  searchKeyword = ''               // 搜尋關鍵字
  
  // 藥局選擇處理
  async handlePharmacyChange(pharValue)
  
  // 調劑台按鈕切換
  toggleServerSelection(serverName, buttonElement)
  
  // 搜尋篩選應用
  applySearchFilter()
  
  // 藥品篩選邏輯
  getFilteredMedicines(medicines)  // 模糊匹配搜尋
  
  // 藥品列表渲染
  renderMedicineList(medicines, contentElement)
}
```

## 樣式標準

### 文字大小標準化
- **最小字體**: 16px（搜尋框、按鈕）
- **其他元素**: 依比例調整
  - Header h1: 28px
  - 標籤文字: 18px
  - 藥品碼: 16px
  - 藥品名: 16px
  - 按鈕: 16px

### 顏色方案
- **主色調**: #667eea（紫藍色）
- **選中狀態**: #0066cc（藍色）+ #e6f2ff（淡藍背景）
- **邊框**: #ddd（淡灰）
- **文字**: #333（深灰）

### 響應式設計 (RWD)
- **768px 以下**: 搜尋框換行，按鈕全寬
- **500px 以下**: 所有元素縮小，保持 16px 最小字體
- **容器寬度**: 100%（無 max-width 限制）

## 檔案結構
```
phar_system/med_search/
├── index.html              # 主頁面
├── style.css               # 樣式（含 RWD）
├── app.js                  # 主應用邏輯（MedSearchApp 類）
├── api_handlers.js         # API 處理層（APIHandlers 類）
└── IMPLEMENTATION.md       # 本文件
```

## 數據流程

```
用戶進入頁面
    ↓
[初始化] LoadAPIServer() → 加載藥局列表
    ↓
藥局下拉選單呈現
    ↓
用戶選擇藥局
    ↓
[API] 獲取該藥局的所有調劑台
    ↓
顯示調劑台按鈕群組（預設全選）
    ↓
用戶可：
  1. 點擊按鈕切換調劑台選擇 → 實時更新藥品列表
  2. 在搜尋框輸入關鍵字 → 實時篩選藥品
    ↓
用戶點擊調劑台選單展開
    ↓
[API] 使用 device/list (POST_list) 獲取藥品
    ↓
應用搜尋篩選後展示藥品清單
```

## 關鍵特性

✅ **全屏呈現** - 無 container 邊框感，整頁占滿  
✅ **預設全選** - 所有調劑台預設被選取  
✅ **多選支援** - 可同時選擇多個調劑台  
✅ **Lazy Loading** - 只在展開時才載入藥品資料  
✅ **快取機制** - 避免重複 API 呼叫  
✅ **模糊搜尋** - 藥品碼和中文名均支援模糊匹配  
✅ **響應式設計** - 支援手機、平板、桌面  
✅ **文字標準化** - 最小 16px，清晰易讀  
✅ **錯誤處理** - API 失敗、無資料時適當提示  

## 測試清單

- [ ] 頁面加載時藥局列表正確呈現
- [ ] 選擇藥局後調劑台按鈕全部顯示且預選
- [ ] 點擊調劑台按鈕能切換選中狀態
- [ ] 搜尋框輸入時實時篩選藥品
- [ ] 點擊調劑台展開時顯示該台的藥品
- [ ] 搜尋後展開調劑台只顯示符合的藥品
- [ ] 清除篩選按鈕能重置搜尋
- [ ] 響應式設計在各裝置上正常呈現
- [ ] API 失敗時顯示錯誤訊息
