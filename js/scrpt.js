// alert("Working....")
let url = 'https://dummyjson.com/products/'

fetch(url)
.then(res => res.json())
.then(data => {
    console.log(data.products[0])
    domManipulate(data, url)
})

function domManipulate(data) {
    const row = document.getElementById("row")

    data.products.forEach(product => {
        row.innerHTML += `
            <div class="col-md-3">
                <a href="${url}/${product.id}">
                    <img src="${product.thumbnail}" class="img" alt="">
                </a>
                <p>${product.title}</p>
                <span>₦ ${product.price}</span>
            </div>
            `
    })
}
            