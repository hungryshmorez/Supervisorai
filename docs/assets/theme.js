// Shared theme toggle for SupervisorAI sites.
(function () {
  var KEY = "supervisorai-theme";
  var root = document.documentElement;
  try {
    var saved = localStorage.getItem(KEY);
    if (saved === "dark" || saved === "light") root.setAttribute("data-theme", saved);
  } catch (e) {}
  function current() {
    var t = root.getAttribute("data-theme");
    if (t) return t;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  window.__toggleTheme = function () {
    var next = current() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem(KEY, next); } catch (e) {}
    var b = document.querySelector(".theme-btn");
    if (b) b.textContent = next === "dark" ? "☀️" : "🌙";
  };
  document.addEventListener("DOMContentLoaded", function () {
    var b = document.querySelector(".theme-btn");
    if (b) b.textContent = current() === "dark" ? "☀️" : "🌙";
  });
})();
