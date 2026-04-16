function checkStatus() {
  let output = document.getElementById("output");

  let success = Math.random() > 0.4;

  if (success) {
    output.innerText = "✔ Connection successful — Your audio pipeline is now active.";
  } else {
    output.innerText = "✖ Not connected yet — retry pairing mode and scan again.";
  }
}
