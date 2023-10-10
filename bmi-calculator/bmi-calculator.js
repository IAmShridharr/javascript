const form = document.querySelector('form')
const inputWeight = document.getElementById('weight')
const inputHeight = document.getElementById('height')
const reset = document.getElementById('reset')
const result = document.getElementById('result')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const weightInKG = parseFloat(inputWeight.value)
    const heightInCM = parseFloat(inputHeight.value)

    if(!isNaN(weightInKG) || !isNaN(heightInCM)) {
        // Convert Height from Centimeters to Meters by dividing it by 100
        const heightInM = parseFloat(heightInCM) / 100
        const bmi = calculateBMI(weightInKG, heightInM)
        const remark = calculateRemark(bmi)
        result.textContent = `Your BMI: ${bmi.toFixed(2)} | Remark: ${remark}`
    } else {
        result.textContent = `Please enter valid weight and height values!`
    }
})

reset.addEventListener('click', () => {
    inputWeight.value = ""
    inputHeight.value = ""
    result.textContent = ""
})

function calculateBMI(weight, height) {
    return weight / (height ** 2);
}

function calculateRemark(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi < 24.9) {
        return 'Normal Weight';
    } else if (bmi < 29.9) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
}