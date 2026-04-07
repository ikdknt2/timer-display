// ===== フォーマット =====
function formatFixed(ms) {
  const cs = Math.floor(ms / 10); // センチ秒
  const s = String(cs);

  // 5桁前提
  return `${s[0]}:${s.slice(1,3)}.${s.slice(3,5)}`;
}

// ===== URLから取得 =====
function getParams() {
  const params = new URLSearchParams(window.location.search);

  return {
    id: params.get("id")
  };
}

// ===== 表示更新 =====
function updateDisplay() {
  const {id} = getParams();

  // idチェック（5桁数字のみ）
  if (!id || !/^\d{5}$/.test(id)) return;

  let text = formatFixed(Number(id));

  document.getElementById("time").textContent = text;
}

// ===== 初期実行 =====
window.onload = updateDisplay;
