import { addCount } from "./utils/count"

let btnCount = document.querySelector("#btn-count")
let countNumber = document.getElementById("count-number")

btnCount.addEventListener("click", addCount)

countNumber.innerText = localStorage.clickCount
