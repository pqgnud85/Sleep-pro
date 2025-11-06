function calculateWakeUp() {
  const sleepTime = document.getElementById("sleepTime").value;
  if (!sleepTime) return alert("Vui lòng nhập giờ đi ngủ");

  const sleepDate = new Date("1970-01-01T" + sleepTime + ":00");
  let results = [];
  for (let i = 1; i <= 6; i++) {
    let wakeDate = new Date(sleepDate.getTime() + i * 90 * 60000);
    results.push(wakeDate.toTimeString().substring(0, 5));
  }
  alert("Thời điểm thức dậy lý tưởng:
" + results.join(" hoặc "));
}

function calculateSleep() {
  const wakeTime = document.getElementById("wakeTime").value;
  if (!wakeTime) return alert("Vui lòng nhập giờ thức dậy");

  const wakeDate = new Date("1970-01-01T" + wakeTime + ":00");
  let results = [];
  for (let i = 6; i >= 1; i--) {
    let sleepDate = new Date(wakeDate.getTime() - i * 90 * 60000);
    results.push(sleepDate.toTimeString().substring(0, 5));
  }
  alert("Thời điểm đi ngủ lý tưởng:
" + results.join(" hoặc "));
}

function logSleep() {
  const sleep = document.getElementById("logSleepTime").value;
  const wake = document.getElementById("logWakeTime").value;
  if (!sleep || !wake) return alert("Vui lòng nhập đầy đủ giờ đi ngủ và thức dậy");

  const sleepDate = new Date("1970-01-01T" + sleep + ":00");
  const wakeDate = new Date("1970-01-01T" + wake + ":00");
  let duration = (wakeDate - sleepDate) / 60000;
  if (duration <= 0) duration += 1440;

  const cycles = Math.floor(duration / 90);
  const phase = duration % 90;
  let phaseDesc = "";
  if (phase < 20) phaseDesc = "Thức dậy giữa chu kỳ (ngủ sâu)";
  else if (phase < 60) phaseDesc = "Thức dậy gần cuối chu kỳ (REM)";
  else phaseDesc = "Thức dậy đầu chu kỳ mới";

  let rating = "";
  if (cycles >= 5) rating = "✅ Ngủ đủ chu kỳ";
  else if (cycles >= 3) rating = "⚠️ Ngủ chưa đủ, nên cải thiện";
  else rating = "❌ Ngủ quá ít, ảnh hưởng sức khỏe";

  const table = document.getElementById("sleepLog");
  const row = table.insertRow(-1);
  row.insertCell(0).innerText = sleep;
  row.insertCell(1).innerText = wake;
  row.insertCell(2).innerText = (duration / 60).toFixed(2) + " giờ";
  row.insertCell(3).innerText = cycles + " chu kỳ";
  row.insertCell(4).innerText = phaseDesc;
  row.insertCell(5).innerText = rating;
  row.insertCell(6).innerHTML = "<button onclick='this.parentElement.parentElement.remove()'>Xóa</button>";
}
