let form = document.querySelector("form")
let input = document.querySelectorAll("input")


form.addEventListener("submit", (e) => {
    e.preventDefault()
    for (let i = 0; i < input.length; i++) {
        if (input[i].value === "") {
            input[i].style.border = "3px solid red"
            input[i].placeholder = "Por favor completa este campo"
            break
        }
    }
})