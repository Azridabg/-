let buttonElement = document.getElementById('Next1');
let caloriesCalculation = undefined;
buttonElement.addEventListener('click', () => {
    if (buttonElement.textContent == 'Изчисли') {

        let kilogramsElement = document.querySelector('input[placeholder="Килограми"]');
        let activityElement = document.getElementById('activity');
        let genderElement = document.querySelector('input[placeholder="Пол(мъж или жена)"]');
        let bodyFatPercentageElement = document.querySelector('input[placeholder="Процент подкожни мазнини(Пример:13)"]');;


        let kilograms = Number(kilogramsElement.value);
        let activity = activityElement.value;
        let gender = genderElement.value;
        let bodyFatPercentage = Number(bodyFatPercentageElement.value);

        let caloriesCalculation = kilograms;

        if (gender == 'жена') {
            caloriesCalculation *= 0.9
        }


        caloriesCalculation *= 24


        if (gender == 'мъж') {
            if (bodyFatPercentage >= 15 && bodyFatPercentage <= 20) {
                caloriesCalculation *= 0.95
            }
            else if (bodyFatPercentage >= 21 && bodyFatPercentage <= 28) {
                caloriesCalculation *= 0.90
            }
            else if (bodyFatPercentage >= 29) {
                caloriesCalculation *= 0.85
            }
        }
        else if (gender == 'жена') {
            if (bodyFatPercentage >= 19 && bodyFatPercentage <= 28) {
                caloriesCalculation *= 0.95
            }
            else if (bodyFatPercentage >= 29 && bodyFatPercentage <= 38) {
                caloriesCalculation *= 0.90
            }
            else if (bodyFatPercentage >= 39) {
                caloriesCalculation *= 0.85
            }
        }

        if (activity == 'very light') {
            caloriesCalculation *= 1.3
        }
        else if (activity == 'light') {
            caloriesCalculation *= 1.55
        }
        else if (activity == 'moderate') {
            caloriesCalculation *= 1.65
        }
        else if (activity == 'heavy') {
            caloriesCalculation *= 1.80
        }
        else if (activity == 'very heavy') {
            caloriesCalculation *= 2
        }

        let valueCalorieElement = document.getElementById('textarea');
        valueCalorieElement.value = caloriesCalculation

        kilogramsElement.value = '';
        activityElement.value = 'activity';
        genderElement.value = '';
        bodyFatPercentageElement.value = '';

        buttonElement.textContent = 'Върни се';
    }

    else if (buttonElement.textContent == 'Върни се') {
        window.location.href='index.html'
    }
});
