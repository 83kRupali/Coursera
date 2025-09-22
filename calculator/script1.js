// Add Recommendation
function addRecommendation() {
  let input = document.getElementById("new-recommendation");
  let list = document.getElementById("recommendation-list");

  if (input.value.trim() !== "") {
    let li = document.createElement("li");
    li.textContent = input.value;
    list.appendChild(li);
    input.value = "";
    showPopup();
  }
}

// Popup
function showPopup() {
  document.getElementById("popup").style.display = "block";
}
function closePopup() {
  document.getElementById("popup").style.display = "none";
}
