import { addCount, resetCount } from "./utils/count"

let btnCount = document.querySelector(".btn-count")
let btnReset = document.querySelector(".btn.reset")
let countNumber = document.getElementById("count-number")

btnCount.addEventListener("click", addCount)

btnReset.addEventListener("click", resetCount)

if (!localStorage.clickCount) {
  countNumber.innerText = 0
} else {
  countNumber.innerText = localStorage.clickCount
}
