// Preloader Effect
window.onload = function() {
    document.getElementById("preloader").style.display = "none";
};

// Renovation Cost Calculator
function calculateCost() {
    let area = document.getElementById("area").value;
    let material = document.getElementById("material").value;

    if (area <= 0 || isNaN(area)) {
        document.getElementById("cost-result").innerText = "Please enter a valid area!";
        document.getElementById("cost-result").style.color = "red";
        return;
    }

    let cost = area * material;
    document.getElementById("cost-result").innerText = "Estimated Cost: $" + cost.toFixed(2);
    document.getElementById("cost-result").style.color = "green";
}
