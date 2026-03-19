// routing.js

const surveys = {
  groceryEyesee: [
    "https://eyesee-research.decipherinc.com/survey/selfserve/215a/2026007",
    "https://eyesee-research.decipherinc.com/survey/selfserve/215a/2026001",
    "https://eyesee-research.decipherinc.com/survey/selfserve/215a/2026005"
  ],
  packageQualtrics: "https://qualtricsxm7n3pr5tl8.qualtrics.com/jfe/form/SV_emMCD1fjknV6i9w",
  airHarris: "https://surveys.harrisinsights.com/survey/selfserve/53b/250493",
  trafficCenter: "https://itrafficcenter.com/s/139187/30/20112b8b-31f7-4c50-aebd-b0237870935b"
};

document.getElementById("profilingForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  const grocery = document.querySelector('input[name="grocery"]:checked')?.value;
  const category = document.querySelector('input[name="category"]:checked')?.value;

  if (!grocery || !category) {
    alert("Please answer both questions.");
    return;
  }

  routeUser(grocery, category);
});

function routeUser(grocery, category) {
  let chosenSurvey = null;

  if (grocery === "fresh" && category === "general") {
    const options = surveys.groceryEyesee;
    chosenSurvey = options[Math.floor(Math.random() * options.length)];
  } else if (grocery === "packaged") {
    chosenSurvey = surveys.packageQualtrics;
  } else if (category === "air") {
    chosenSurvey = surveys.airHarris;
  } else if (category === "traffic") {
    chosenSurvey = surveys.trafficCenter;
  } else {
    // Fail case → send to check.html
    window.location.href = "check.html";
    return;
  }

  const previousSurvey = localStorage.getItem("assignedSurvey");
  if (previousSurvey === chosenSurvey) {
    window.location.href = "duplicate.html";
  } else {
    localStorage.setItem("assignedSurvey", chosenSurvey);
    window.location.href = chosenSurvey;
  }
}
