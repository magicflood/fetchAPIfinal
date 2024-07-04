let card = document.getElementById('card');
let btn = document.getElementById("button")
let h = document.querySelector("h1")

card.style.display = "none"

btn.addEventListener("click", function fetchUsre() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(products => createCards(products[Math.trunc(Math.random() * products.length)]))
        .catch(error => console.error('Error fetching data', error));

    h.style.display = "none"
    card.style.display = "block"
    card.style.display = "flex"
    card.style.flexDirection = "column"
    card.style.alignItems = "center"
    card.style.justifyContent = "center"


    function createCards(products) {

        let container = document.getElementById('user-cards-container');

        let name = document.getElementById("name")
        let username = document.getElementById("username")
        let email = document.getElementById("email")
        let phone = document.getElementById("phone")
        let company = document.getElementById("company")

        name.innerHTML = "Name: " + products.name;
        username.innerHTML = "Username: " + products.username;
        email.innerHTML = "Email: " + products.email;
        phone.innerHTML = "Phone: " + products.phone;
        company.innerHTML = "Company: " + products.company;

        card.appendChild(name)
        card.appendChild(username)
        card.appendChild(email)
        card.appendChild(phone)
        card.appendChild(company)

        container.appendChild(card)
    }
})


