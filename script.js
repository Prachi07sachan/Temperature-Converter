const inputEle = document.getElementById("value");
        const leftdegree = document.getElementById("left-degree");
        const rightdegree = document.getElementById("right-degree");
        const convertEle = document.getElementById("convert");
        const clearEle = document.getElementById("clear");
        const resultEle = document.getElementById("result");

        function convertTemperature() {
            const inputValue = parseFloat(inputEle.value);
            if (isNaN(inputValue)) {
                resultEle.value = "Enter a value first.";
                return;
            }

            let convertValue;
            let fromUnit = leftdegree.value;
            let toUnit = rightdegree.value;

            if (fromUnit === "celsius" && toUnit === "fahrenheit") {
                convertValue = (inputValue * 9 / 5) + 32;
            } else if (fromUnit === "celsius" && toUnit === "kelvin") {
                convertValue = inputValue + 273.15;
            } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
                convertValue = (inputValue - 32) * 5 / 9;
            } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
                convertValue = (inputValue - 32) * 5 / 9 + 273.15;
            } else if (fromUnit === "kelvin" && toUnit === "celsius") {
                convertValue = inputValue - 273.15;
            } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
                convertValue = (inputValue - 273.15) * 9 / 5 + 32;
            } else {
                resultEle.value = "The units are the same.";
                return;
            }

            resultEle.value = convertValue.toFixed(2);
        }

        convertEle.addEventListener('click', convertTemperature);

        clearEle.addEventListener("click", () => {
            inputEle.value = "";
            resultEle.value = "";
            leftdegree.selectedIndex = 0; 
            rightdegree.selectedIndex = 0; 
        });

        convertTemperature();