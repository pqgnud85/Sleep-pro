function calculateWakeUp() {
  const sleepTime = document.getElementById("sleepTime").value;
  alert("Tính giờ thức dậy từ: " + sleepTime);
}

function calculateSleep() {
  const wakeTime = document.getElementById("wakeTime").value;
  alert("Tính giờ đi ngủ từ: " + wakeTime);
}

function logSleep() {
  const sleep = document.getElementById("logSleepTime").value;
  const wake = document.getElementById("logWakeTime").value;
  const table = document.getElementById("sleepLog");
  const row = table.insertRow(-1);
  row.insertCell(0).innerText = sleep;
  row.insertCell(1).innerText = wake;
  row.insertCell(2).innerText = "Tính toán...";
  row.insertCell(3).innerText = "Chu kỳ...";
  row.insertCell(4).innerText = "Giai đoạn...";
  row.insertCell(5).innerText = "Đánh giá...";
  row.insertCell(6).innerHTML = "<button onclick='this.parentElement.parentElement.remove()'>Xóa</button>";
}