const calculateBMI = () => {
    let weightInput = document.getElementById("weight")
    let heightInput = document.getElementById("height")
    let result = calculateMetricBMI(weightInput.value, heightInput.value)
    let message =getBMIClassification(result)
    let displayResultsElement = document.getElementById("result")
    displayResultsElement.innerHTML = `<h1> Your BMI value is: ${result} and you are ${message}</h1>`
}