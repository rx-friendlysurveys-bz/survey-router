// routing.js

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const grocery = urlParams.get("grocery");
  const category = urlParams.get("category");

  if (!grocery || !category) {
    // If no parameters, stay on profiling form
    return;
  }

  // Route logic
  if (grocery === "fresh" && category === "general") {
    // Send to screening page with context
    window.location.href = `screening.html?topic=grocery`;
  } else if (grocery === "packaged") {
    window.location.href = `screening.html?topic=package`;
  } else if (category === "air") {
    window.location.href = `screening.html?topic=air`;
  } else if (category === "traffic") {
    window.location.href = `screening.html?topic=traffic`;
  } else {
    // Fail case → send to check.html
    window.location.href = "check.html";
  }
});
