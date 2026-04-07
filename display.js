function formatFixed(ms) {
  const s = String(ms).padStart(6, "0");

  const m = s[0];           // 分
  const s10 = s[1];         // 秒10の位
  const s1 = s[2];          // 秒1の位
  const msPart = s.slice(3, 6); // ミリ秒

  // 秒部分（10の位が0なら空欄）
  const sec = (s10 === "0" ? " " : s10) + s1;

  // 分が0なら消す
  if (m === "0") {
    return `${sec}.${msPart}`.trimStart();
  }

  return `${m}:${sec}.${msPart}`;
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
