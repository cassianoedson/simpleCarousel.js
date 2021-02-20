// select all the checkboxes //
const checkboxes = document.querySelectorAll("[data-carousel-checkbox]")
// select the checkboxes //
const checkbox0 = document.querySelector('[data-carousel-checkbox="1"]').classList;
const checkbox1 = document.querySelector('[data-carousel-checkbox="2"]').classList;
const checkbox2 = document.querySelector('[data-carousel-checkbox="3"]').classList;

// function that tells which slide is beeing showed //
function whichTrue(slide0, slide1, slide2) {
    for (let classe of slide0) {
        if (classe == "show") {
            return 0
        }
    }
    for (let classe of slide1) {
        if (classe == "show") {
            return 1
        }
    }
    for (let classe of slide2) {
        if (classe == "show") {
            return 2
        }
    }    
}

// function that marks the correct checkbox //
function autoCheckbox(whichTrue) {
    if (whichTrue(slide0, slide1, slide2) == 0) {
        for (let checkbox of checkboxes) {
            checkbox.classList.remove("checkbox-yes")
            checkbox.classList.add("checkbox-no")
        }
        checkbox0.remove("checkbox-no")
        checkbox0.add("checkbox-yes")
    }else if (whichTrue(slide0, slide1, slide2) == 1) {
        for (let checkbox of checkboxes) {
            checkbox.classList.remove("checkbox-yes")
            checkbox.classList.add("checkbox-no")
        }
        checkbox1.remove("checkbox-no")
        checkbox1.add("checkbox-yes")
    }else if (whichTrue(slide0, slide1, slide2) == 2) {
        for (let checkbox of checkboxes) {
            checkbox.classList.remove("checkbox-yes")
            checkbox.classList.add("checkbox-no")
        }
        checkbox2.remove("checkbox-no")
        checkbox2.add("checkbox-yes")
    }
}

// this last part tells when the carousel has changed and applies it into the checkbox //
function callback(mutationsList) {
    mutationsList.forEach(mutation => {
        if (mutation.attributeName === 'class') {
            autoCheckbox(whichTrue);
        }
    })
}

const mutationObserver = new MutationObserver(callback)

const observed0 = document.querySelector('[data-carousel="1"]');
const observed1 = document.querySelector('[data-carousel="2"]');
const observed2 = document.querySelector('[data-carousel="3"]');

mutationObserver.observe(observed0, { attributes: true })
mutationObserver.observe(observed1, { attributes: true })
mutationObserver.observe(observed2, { attributes: true })