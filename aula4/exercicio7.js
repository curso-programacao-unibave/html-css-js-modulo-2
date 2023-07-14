const notas = [6.7, 7.5, 9.2, 8.0]

function calcularMedia(array) {
  for (let i = 0; i < array.length; i++) {
    media += array[i]
  }
  return media / array.length
}

const media = calcularMedia(notas)
console.log(media)