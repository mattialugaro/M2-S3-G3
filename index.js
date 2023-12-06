
fetch("https://striveschool-api.herokuapp.com/books")
.then(responseObj => {
    if (responseObj.ok) {
        return responseObj.json()
    }
})

.then(booksObj => {

    const row = document.getElementById("row")
    console.log(booksObj)

    booksObj.forEach(book => {

        const col = document.createElement("div")
        col.classList.add("card-group", "col-4")
        const library = document.createElement("div")
        
        const card = document.createElement("div")
        card.classList.add("card", "mb-4")
        card.style = "width:350px; height:700px;"

        const img = document.createElement("img")
        img.classList.add("card-img-top", "img-fluid")
        img.style = "height: 500px"
        img.src = book.img

        const body = document.createElement("div")
        body.classList.add("card-body")

        const h5 = document.createElement("h5")
        h5.classList.add("card-title")
        h5.innerText = book.title

        const p = document.createElement("p")
        p.classList.add("card-text")
        p.innerText = book.price

        const flex = document.createElement("div")
        flex.classList.add("d-flex", "justify-content-between")

        const discard = document.createElement("a")
        discard.href = "#"
        discard.classList.add("btn", "btn-warning", "fw-bold")
        discard.innerText = "Scarta"

        const add = document.createElement("a")
        add.href = "#"
        add.classList.add("btn", "btn-success", "fw-bold")
        add.innerText = "Compra ora"

        card.appendChild(img)
        body.appendChild(h5)
        body.appendChild(p)
        body.appendChild(flex)
        flex.appendChild(add)
        flex.appendChild(discard)
        card.appendChild(body)
        library.appendChild(card)
        col.appendChild(library)
        row.appendChild(col)

        discard.addEventListener("click", function (e) {
            e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
        });
    })
})

.catch(error => console.log(error))
