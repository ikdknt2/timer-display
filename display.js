// ===== URL取得 =====
function getParams() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

// ===== 表示更新 =====
function updateDisplay() {
  const id = getParams();

  if (!id || !/^\d{6}$/.test(id)) return;

  const s = String(id).padStart(6, "0");

  const m = s[0];
  const s10 = s[1];
  const s1 = s[2];
  const msPart = s.slice(3, 6);

  document.getElementById("min").textContent =
    (m === "0" ? " " : m);

  document.getElementById("sec10").textContent =
    (s10 === "0" ? " " : s10);

  document.getElementById("sec1").textContent = s1;
  document.getElementById("ms").textContent = msPart;

// ===== コロン隠す処理　=====
  const colon = document.getElementById("colon");
  if (m === "0") {
    colon.style.visibility = "hidden";
  } else {
    colon.style.visibility = "visible";
  }
}

// ===== 初期実行 =====
window.onload = updateDisplay;
