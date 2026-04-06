function formatFixed(ms) {
  const cs = Math.floor(ms / 10); // センチ秒
  const str = String(cs); // 5桁前提

  const minutes = str.slice(0, 1);
  const seconds = str.slice(1, 3);
  const decimal = str.slice(3, 5);

  return `${minutes}:${seconds}.${decimal}`;
}

window.formatFixed(ms)
