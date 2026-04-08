// ===== URL取得 =====
function getParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    id: params.get("id"),
    offsetX: params.get("offsetX"),
  };
}

// ===== 表示更新 =====
function updateDisplay() {
  const { id, offsetX } = getParams();

  if (!id || !/^\d{6}$/.test(id)) return;

  if (offsetX !== null) {
    const parsedOffset = Number(offsetX);
    if (!Number.isNaN(parsedOffset)) {
      document.documentElement.style.setProperty(
        "--time-offset-x",
        `${parsedOffset}px`
      );
    }
  }

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
