// ===== フォーマット =====
function formatFixed(ms) {
  const s = String(ms).padStart(6, "0");

  return `${s[0]}:${s.slice(1,3)}.${s.slice(3,6)}`;
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

  // idチェック（6桁数字のみ）
  if (!id || !/^\d{6}$/.test(id)) return;

  let text = formatFixed(Number(id));

  document.getElementById("time").textContent = text;
}

// ===== 初期実行 =====
window.onload = updateDisplay;
