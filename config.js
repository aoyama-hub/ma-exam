/* ==========================================================================
   ▼▼▼ 【APP SETTINGS】 ▼▼▼
   API_URL: the Apps Script web app URL (ends in /exec). See README.md.
   Questions are NOT in this file — they live in Questions.gs (Apps Script)
   and are only sent to logged-in members.
========================================================================== */
const API_URL = "https://script.google.com/macros/s/AKfycbzCCpBXAa-ObsFtBIi61iFEpRpNMQ6rjutUfgi075akCRtF9LM1oR9g0_CPK_OUKm8O/exec";

/* ==========================================================================
   ▼▼▼ 【EXAM SETTINGS】 ▼▼▼
   Values marked 暫定 are based on the 中小企業庁 study group materials
   (2026/3/17) and are not final. Update them when official criteria are published.
========================================================================== */
const EXAM_CONFIG = {
  examName: "中小企業M&A実務能力・倫理検定試験",
  lawBaseDate: "2026年3月31日",          // 法令・税制等の基準日
  minutes: 120,                          // 本番の試験時間
  subjects: [                            // 本番の出題数（合計60問）。category はこの name と完全一致させる
    { name: "M&A実務",       count: 22 },
    { name: "倫理・行動規範", count: 15 },
    { name: "財務・税務",     count: 13 },
    { name: "法務",           count: 10 }
  ],
  passOverall: 0.70,     // 暫定：総合得点の合格基準（資料では7〜8割程度）
  passSubject: 0.50,     // 暫定：科目別の最低基準（資料では5割程度）
  tabooFailCount: 1,     // 暫定：禁忌肢をこの数以上選ぶと不合格（資料では「一定数」）
  miniRatio: 1 / 3       // ミニ模試の問題数（本番の何割か）
};
