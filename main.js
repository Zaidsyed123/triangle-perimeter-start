// Add Event listener to Button
document.getElementById('calcBtn').addEventListener("click", btnClicked);

// Calculate Function
function btnClicked() {
 // Get inputs
 let xA = +document.getElementById('x1').value;
 let yA = +document.getElementById('y1').value;
 let xB = +document.getElementById('x2').value;
 let yB = +document.getElementById('y2').value;
 let xC = +document.getElementById('x3').value;
 let yC = +document.getElementById('y3').value;
// Process
let AB = dist(xA, yA, xB, yB);
let BC = dist(xB, yB, xC, yC);
let AC = dist(xA, yB, xC, yC);
let Perimeter = AB + BC + AC;
// Output
document.getElementById('answer1').innerHTML = AB;
document.getElementById('answer2').innerHTML = BC;
document.getElementById('answer3').innerHTML = AC;
document.getElementById('answer4').innerHTML = Perimeter;
}

// Calculate and return the length of a line
function dist(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
} 


