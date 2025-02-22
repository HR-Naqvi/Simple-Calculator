let resultdiv = document.getElementById("result")
let buttons = document.getElementById("numbers_button")
let current_value = ""
let Operator_value = ""
let previous_value = ""

// ....................................

display_result = (value) => {
    if (value == "" || value == null || value == undefined) {
        resultdiv.textContent = 0
    }
    else {
        resultdiv.textContent = value
    }
}

// ...........................

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent

        if (value === "AC") {
            current_value = ""
            Operator_value = ""
            previous_value = ""
            display_result(0)
        }
        else if (!isNaN(value) || value == ".") {
            current_value += value
            display_result(current_value)
        }
        else if (value == '=') {
            if (previous_value && current_value && Operator_value) {
                current_value =eval(`${previous_value} ${Operator_value} ${current_value}`)
                display_result(current_value);
                previous_value = "";
                Operator_value = "";
            }
        }
        else {
            if (current_value !== "") {
              previous_value = current_value;
              current_value = "";
              Operator_value = value;
            }
        }
    }
    )
})
