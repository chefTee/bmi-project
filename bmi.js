const metricButton = document.getElementById('metric');
const imperialButton = document.getElementById('imperial');
const metricButtonValues = document.getElementById('metric-values-section');
const imperialButtonValues = document.getElementById('imperial-values-section');
const heightInputContainer = document.querySelector('.height-input-container');
const userHeightInput = document.querySelector('.user-height');
const weightInputContainer = document.querySelector('.weight-input-container');
const userWeightInput = document.querySelector('.user-weight');
const welcomeSection = document.querySelector('.welcome-section');
const resultSection = document.querySelector('.result-section');
const bmiStatus = document.querySelector('.bmi-status');
const bmiRangeValue = document.querySelector('.bmi-range-value');
// IMPERIAL
// height
const ftInputContainer = document.querySelector('.ft-input-container');
const userFtInput = document.querySelector('.user-ft');
const inInputContainer = document.querySelector('.in-input-container');
const userInInput = document.querySelector('.user-in');
// weight
const stInputContainer = document.querySelector('.st-input-container');
const userStInput = document.querySelector('.user-st');
const lbsInputContainer = document.querySelector('.lbs-input-container');
const userLbsInput = document.querySelector('.user-lbs');

function metricReset(){
        //RESETING BMI RESULTS FUNCTION TO DEFAULT
        welcomeSection.classList.remove('hide');
        resultSection.classList.add('hide');
        //CLEARING BMI PREVIOUS RESULT
        document.querySelector('.bmi-result-value').textContent = "";
        bmiStatus.textContent = "";
        bmiRangeValue.textContent = "";
        // clearing imperial values
        userFtInput.value = "";
        userInInput.value = "";
        userStInput.value = "";
        userLbsInput.value = "";
}
metricButton.addEventListener('change', function() {
    if (metricButton.checked) {
        metricButtonValues.classList.remove('hide');
        imperialButtonValues.classList.add('hide');
        metricReset();
    }
});
function imperialReset(){
        //RESETING BMI RESULTS FUNCTION TO DEFAULT
        welcomeSection.classList.remove('hide');
        resultSection.classList.add('hide');

        //CLEARING BMI PREVIOUS RESULT
        document.querySelector('.bmi-result-value').textContent = "";
        bmiStatus.textContent = "";
        bmiRangeValue.textContent = "";

        // CLEARING METRIC INPUT VALUES
        userHeightInput.value = "";
        userWeightInput.value = "";
}
imperialButton.addEventListener('change', function() {
    if (imperialButton.checked) {
        imperialButtonValues.classList.remove('hide');
        metricButtonValues.classList.add('hide');
        imperialReset();
    }
});

// METRIC VALUE CALCULATION
let userHeightInMeters = null;
let userWeightValue = null;

    heightInputContainer. addEventListener('focusout', () => {
    const userHeightValue = parseFloat(userHeightInput.value);
    userHeightInMeters = userHeightValue / 100;
    console.log(userHeightInMeters);
    calculateMetricBmi();
    });

    weightInputContainer.addEventListener('focusout', () => {
    userWeightValue = parseFloat(userWeightInput.value);
    console.log(userWeightValue);
    calculateMetricBmi();
    });

function calculateMetricBmi(){
    if(userHeightInMeters && userWeightValue){
        const bmiResult = (userWeightValue / (userHeightInMeters ** 2)).toFixed(1);
        welcomeSection.classList.add('hide');
        resultSection.classList.remove('hide');
        console.log("BMI RESULT", bmiResult);
        document.querySelector('.bmi-result-value').textContent = bmiResult;
        if (bmiResult < 18.5){
        bmiStatus.textContent = "an Underweight"
        }else if(bmiResult >= 18.5 && bmiResult <= 24.9){
        bmiStatus.textContent = " a Healthy weight"
        }else if(bmiResult >= 25 && bmiResult <= 29.9){
        bmiStatus.textContent  = "an Overweight";
        }else if(bmiResult >= 30){
        bmiStatus.textContent = "an Obese"
        }
        const minIdealWeight = 18.5 * (userHeightInMeters ** 2);
        const maxIdealWeight = 24.9 * (userHeightInMeters ** 2);
        let idealWeightRange = `${minIdealWeight.toFixed(1)}kg - ${maxIdealWeight.toFixed(1)}Kg`;
        bmiRangeValue.textContent = idealWeightRange;
    }
}

// IMPERIAL VALUE CALCULATION
let ftValue = null;
let inValue = null;
let stValue = null;
let lbsValue = null;
ftInputContainer.addEventListener('focusout', () => {
    ftValue = parseFloat(userFtInput.value);
    console.log(ftValue);
    calculateImperialBmi();
})
inInputContainer.addEventListener('focusout', () =>{
    inValue = parseFloat(userInInput.value);
    console.log(inValue);
    calculateImperialBmi();
})
stInputContainer.addEventListener('focusout', () => {
    stValue = parseFloat(userStInput.value);
    console.log(stValue);
    calculateImperialBmi();
})
lbsInputContainer.addEventListener('focusout', () => {
    lbsValue = parseFloat(userLbsInput.value);
    console.log(lbsValue);
    calculateImperialBmi();
})


function bmiResultDetails(bmiResult, userHeightInMeters){
    document.querySelector('.bmi-result-value').textContent = bmiResult;
    if (bmiResult < 18.5){
    bmiStatus.textContent = "an Underweight"
    }else if(bmiResult >= 18.5 && bmiResult <= 24.9){
    bmiStatus.textContent = " a Healthy weight"
    }else if(bmiResult >= 25 && bmiResult <= 29.9){
    bmiStatus.textContent  = "an Overweight";
    }else if(bmiResult >= 30){
    bmiStatus.textContent = "an Obese"
    }
    const minIdealWeight = 18.5 * (userHeightInMeters ** 2);
    const maxIdealWeight = 24.9 * (userHeightInMeters ** 2);
    let idealWeightRange = `${minIdealWeight.toFixed(1)}kg - ${maxIdealWeight.toFixed(1)}Kg`;
    bmiRangeValue.textContent = idealWeightRange;
}
function calculateImperialBmi(){

    if (ftValue && inValue && stValue && lbsValue){
        let imperialHeightValue = (ftValue * 12) + inValue;
        let imperialWeightValue = (stValue * 14) + lbsValue;
        const imperialBmiValue = ((imperialWeightValue * 703) / (imperialHeightValue ** 2)).toFixed(1);
        welcomeSection.classList.add('hide');
        resultSection.classList.remove('hide');
        console.log(imperialBmiValue);
        bmiResultDetails(imperialBmiValue, imperialHeightValue / 39.3701);
    }
}

