let storage = window.localStorage

let countNumber = document.querySelector("#count")

let clickCount = 0

export function addCount() {
  ++clickCount

  storage.setItem("count", clickCount)

  countNumber.innerHTML = storage.getItem("count")
}
