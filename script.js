
document.getElementById('height-slider').addEventListener('input', function() {
    document.getElementById('height-value').textContent = this.value;
    document.getElementById('height').value = this.value;
});

document.getElementById('weight-slider').addEventListener('input', function() {
    document.getElementById('weight-value').textContent = this.value;
    document.getElementById('weight').value = this.value;
});

function calculateBMI() {
    const height = document.getElementById("height").value / 100;  // Convert cm to meters
    const weight = document.getElementById("weight").value;
    const heightsq = height * height;  
    let bmi = weight / heightsq;  

   
    bmi = Math.floor(bmi * 10) / 10;

    let resultText = `Your BMI is ${bmi}.`;
    let categoryText = '';
    let emoji = '';

    if (bmi < 18.5) {
        categoryText = "You are underweight.";
        emoji = "⚠️"; 
        categoryColor="blue"
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        categoryText = "You have a normal weight.";
        emoji = "😊"; 
                categoryColor="green"
    } else if (bmi >= 25 && bmi <= 29.9) {
        categoryText = "You are overweight.";
        emoji = "⚠️"; 
                categoryColor="red"
    } else {
        categoryText = "You are obese.";
        emoji = "🚨"; 
    }

    document.getElementById("bmi-result").textContent = resultText;

    categoryrslt=   document.getElementById("category-result")
    categoryrslt.textContent = `${categoryText} ${emoji}`;
    categoryrslt.style.color=categoryColor
}
