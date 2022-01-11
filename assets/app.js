let form = document.querySelector("form");
let inputField = document.querySelector("#inputText");
let arrClassDetails = document.querySelectorAll(".card p");
let instantSeach = document.querySelector(".instantSeach");
let searchOnSubmit = document.querySelector(".searchOnSubmit");
let selectedMethod = true;


document.querySelector(".switch__icon").addEventListener("click", () => {
    document.querySelector(".switch__icon").classList.toggle("toggle");
})

instantSeach.onclick = () => {
    selectedMethod = true;
    console.log(selectedMethod);
}
searchOnSubmit.onclick = () => {
    selectedMethod = false;
    console.log(selectedMethod);
}

inputField.addEventListener("input", () => {
    if (selectedMethod == true) {
        if (inputField.value == "") {

            if (document.querySelector(".not__founds")) {
                document.querySelector(".not__founds").remove();
                document.querySelectorAll(".card").forEach(data => data.style.display = "block");
                arrClassDetails.forEach(data => {
                    data.style.border = "none";
                })
            } else {
                document.querySelectorAll(".card").forEach(data => data.style.display = "block");
                arrClassDetails.forEach(data => {
                    data.style.border = "none";
                })
            }

        } else {
            let falseIndexCounter = 0;
            let arraa = [];

            document.querySelectorAll(".card").forEach(data => {
                data.style.display = ""
                data.style.border = ""
                arrClassDetails.forEach(data => {
                    data.style.border = ""
                })
            });

            for (let index = 0; index < arrClassDetails.length; index++) {
                if ((arrClassDetails[index].innerText.toLocaleLowerCase().includes(inputField.value.toLocaleLowerCase()))) {
                    arrClassDetails[index].style.border = "2px solid";

                    if (arraa.includes(arrClassDetails[index].parentElement.parentElement)) {

                    } else {
                        arraa.push(arrClassDetails[index].parentElement.parentElement);
                    }
                } else {
                    falseIndexCounter += 1;
                }
            }

            document.querySelectorAll(".card").forEach(data => {
                data.style.display = "none"
            });

            arraa.forEach(data => data.style.display = "block")

            if (falseIndexCounter >= arrClassDetails.length) {
                document.querySelectorAll(".card").forEach(data => data.style.display = "none");
                document.querySelector(".error").innerHTML = `<div class="not__founds d-flex flex-column flex-lg-row align-items-center" style="background-color: white;"> <img src="assets/images/error.png" style="max-width: 500px;"><div class="not__founds__text"><h2>Not Founds !!</h2><p style="width: 500px;">Not Found? Please try to search by another keyword? I hope you will find or You might be hacker !! oh! No !! You hacked our system using only HTML ...... (◔‿◔) </p></div></div>`;
            } else {
                if (document.querySelector(".not__founds")) {
                    document.querySelector(".not__founds").remove();
                }
            }

        }
    }
})

form.addEventListener("submit", (e) => {
    if (selectedMethod == false) {
        e.preventDefault();
        if (inputField.value == "") {

            if (document.querySelector(".not__founds")) {
                document.querySelector(".not__founds").remove();
                document.querySelectorAll(".card").forEach(data => data.style.display = "block");
                arrClassDetails.forEach(data => {
                    data.style.border = "none";
                })
            } else {
                document.querySelectorAll(".card").forEach(data => data.style.display = "block");
                arrClassDetails.forEach(data => {
                    data.style.border = "none";
                })
            }

        } else {
            let falseIndexCounter = 0;
            let arraa = [];

            document.querySelectorAll(".card").forEach(data => {
                data.style.display = ""
                data.style.border = ""
                arrClassDetails.forEach(data => {
                    data.style.border = ""
                })
            });

            for (let index = 0; index < arrClassDetails.length; index++) {
                if ((arrClassDetails[index].innerText.toLocaleLowerCase().includes(inputField.value.toLocaleLowerCase()))) {
                    arrClassDetails[index].style.border = "2px solid";

                    if (arraa.includes(arrClassDetails[index].parentElement.parentElement)) {

                    } else {
                        arraa.push(arrClassDetails[index].parentElement.parentElement);
                    }
                } else {
                    falseIndexCounter += 1;
                }
            }

            document.querySelectorAll(".card").forEach(data => {
                data.style.display = "none"
            });

            arraa.forEach(data => data.style.display = "block")

            if (falseIndexCounter >= arrClassDetails.length) {
                document.querySelectorAll(".card").forEach(data => data.style.display = "none");
                document.querySelector(".error").innerHTML = `<div class="not__founds d-flex flex-column flex-lg-row align-items-center" style="background-color: white;"> <img src="assets/images/error.png" style="max-width: 500px;"><div class="not__founds__text"><h2>Not Founds !!</h2><p style="width: 500px;">Not Found? Please try to search by another keyword? I hope you will find or You might be hacker !! oh! No !! You hacked our system using only HTML ...... (◔‿◔) </p></div></div>`;
            } else {
                if (document.querySelector(".not__founds")) {
                    document.querySelector(".not__founds").remove();
                }
            }

        }
    }
})