const rangeInput = document.querySelector('#range');
const rangeValue = document.querySelector('#rangeValue');
const perMonth = document.querySelector('#month');
const viewValue = document.querySelector('#viewValue');
const periodToggle = document.querySelector('#periodToggle');
let initPeriod = "/month";

function updateViewValue(value) {
    if (value <= 12) {
        rangeInput.step = 4;
        viewValue.textContent = value == 8 ? "10K" : "50K";
    } else if (value <= 24) {
        rangeInput.step = 8;
        viewValue.textContent = value == 16 ? "100K" : "500K";
    } else {
        rangeInput.step = 14;
        viewValue.textContent = "1M";
    }
}
function updatePrice() {
    let price = parseFloat(rangeInput.value);
    let period = periodToggle.checked ? "/year" : "/month";

    if (period === "/year") {
        price *= 12; // Convert monthly price to yearly
        price *= 0.75; // Apply 25% discount
    }

    rangeValue.innerText = price.toFixed(2);
    perMonth.innerText = period;
}

// Event listener for the range input
rangeInput.addEventListener('input', function () {
    updateViewValue(this.value);
    updatePrice();
});

// Event listener for the period toggle
periodToggle.addEventListener('change', updatePrice);

// Initialize the view value
updateViewValue(rangeInput.value);
// progress bar
const sliderEl = document.querySelector("#range")
const min = parseInt(sliderEl.min);
const max = parseInt(sliderEl.max);
const initialValue = parseInt(sliderEl.value);

sliderEl.addEventListener("input", (event) => {
    const tempSliderValue = event.target.value;

    if(tempSliderValue === 36.00){
        var progress = 120;
        alert()
    }else{
            progress = ((tempSliderValue - min) / (max - min)) * 100;
    }

    sliderEl.style.background = `linear-gradient(to right, #00FFE799 ${progress}%, #ccc ${progress}%)`;
});

// Set initial value and trigger input event
sliderEl.value = initialValue;
sliderEl.dispatchEvent(new Event('input'));