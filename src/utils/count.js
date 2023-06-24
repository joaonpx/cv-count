let countNumber = document.getElementById("count-number")

function addCount() {
  // verificando se existe algum valor dentro do item clickCount
  if (localStorage.clickCount) {
    // se existir pega o valor atual e soma + 1
    localStorage.clickCount = Number(localStorage.clickCount) + 1
  } else {
    // se não existir valor dentro do item clickCount adiciona 0
    localStorage.clickCount = 0
  }

  countNumber.innerText = localStorage.clickCount
}

function resetCount() {
  let confirmContainer = document.querySelector(".confirm-container")
  let btnConfirm = document.querySelector(".btn.confirm")
  let btnCancel = document.querySelector(".btn.cancel")

  confirmContainer.classList.add("active")

  btnConfirm.addEventListener("click", () => {
    localStorage.clickCount = 0

    countNumber.innerText = localStorage.clickCount

    confirmContainer.classList.remove("active")
  })

  btnCancel.addEventListener("click", () => {
    confirmContainer.classList.remove("active")
  })
}

export { addCount, resetCount }
