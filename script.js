document.querySelectorAll(".code .copy").forEach(function (btn) {
  btn.addEventListener("click", function () {
    var code = btn.closest(".code").querySelector("code");
    var text = code.innerText;
    function done(label) { btn.textContent = label; setTimeout(function () { btn.textContent = "Copy"; }, 1600); }
    function fallback() {
      var r = document.createRange(); r.selectNodeContents(code);
      var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
      done("Selected");
    }
    try {
      navigator.clipboard.writeText(text).then(function () { done("Copied"); }, fallback);
    } catch (e) { fallback(); }
  });
});
