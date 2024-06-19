function search() {
    console.log("hello from search....");

    const query = document.getElementById('search').value;
    console.log(query);

    fetch(`https://dummyjson.com/products/search?q=${query}&limit=20`)
        .then(response => response.json())
        .then(data => renderUI(data))
        .catch(error => console.error(error));
}


const root = document.getElementById('root');

const pr = fetch('https://dummyjson.com/products');
console.log(pr);

pr.then(res => res.json())
    .then(data => renderUI(data))
    .catch(err => console.error(err));

function renderUI(data) {
    const products = data.products;
    root.innerHTML = '';

    products.forEach(product => {
        let num = product.price*83;
        let len = num.toString().length;
        num = Math.floor(num);

        console.log(num);
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src=${product.thumbnail}>
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <h4>₹${num}</h4>
        `;
        root.appendChild(card);
    });
}