const products = document.querySelectorAll(".product")

// Solution 2: Word-Level Search

function search(input) {
  const searchWords = input.value.toLowerCase().split(/\s+/)

  products.forEach(product => {
    const text = product.textContent.toLowerCase()
    const matches = searchWords.every(word => text.includes(word))

    if(matches){
      //show the product
      product.style.display = "block"
    }
    else {
      //hide the product
      product.style.display = "none"
    }
  })
}

// Solution 1: Exact String Match

// function search(input) {
//   const searchQuery = input.value.toLowerCase()

//   products.forEach(product => {
//     const text = product.textContent.toLowerCase()

//     if(text.includes(searchQuery)){
//       //show the product
//       product.style.display = "block"
//     }
//     else {
//       //hide the product
//       product.style.display = "none"
//     }
//   })
// }