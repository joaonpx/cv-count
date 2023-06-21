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

export { addCount }
