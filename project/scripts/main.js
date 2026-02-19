const nav = document.querySelector('.navigation');
const hamButton = document.querySelector('#menu');

hamButton.addEventListener('click', () => {
    nav.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const products = [
    {
        id: "P001",
        name: "Custom T-Shirt",
        category: "textile",
        price: 15.00,
        image: "images/tshirt.jpg"
    },
    {
        id: "P002",
        name: "Sublimated Mug",
        category: "mug",
        price: 8.50,
        image: "images/mug.jpg"
    },
    {
        id: "P003",
        name: "Trucker Cap",
        category: "textile",
        price: 12.00,
        image: "images/cap.jpg"
    },
    {
        id: "P004",
        name: "Laptop Sticker",
        category: "sticker",
        price: 3.00,
        image: "images/sticker.jpg"
    },
    {
        id: "P005",
        name: "Sport Jersey",
        category: "textile",
        price: 25.00,
        image: "images/jersey.jpg"
    },
    {
        id: "P006",
        name: "Water Bottle",
        category: "mug",
        price: 18.00,
        image: "images/bottle.jpg"
    },
        {
        id: "P007",
        name: "Mouse Pad",
        category: "merchandising",
        price: 2.10,
        image: "images/mouse-pad.jpg"
    },
        {
        id: "P008",
        name: "Keychain",
        category: "merchandising",
        price: 1.80,
        image: "images/keychain.jpg"
    }
];

const productContainer = document.querySelector('#products-container');

function renderProducts(productArray) {
    if (productContainer) {
        productContainer.innerHTML = ""; 
        
        productArray.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('product-card');
            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}" loading="lazy" width="250" height="200">
                <div class="card-content">
                    <h3>${product.name}</h3>
                    <p>Category: ${product.category}</p>
                    <span class="price">$${product.price.toFixed(2)}</span>
                    <button class="buy-btn">Add to Quote</button>
                </div>
            `;
            
            productContainer.appendChild(card);
        });
    }
}

renderProducts(products);

const filterSelect = document.querySelector('#filter');

if (filterSelect) {
    filterSelect.addEventListener('change', () => {
        const category = filterSelect.value;
        
        if (category === 'all') {
            renderProducts(products);
        } else {
            const filtered = products.filter(item => item.category === category);
            renderProducts(filtered);
        }
    });
}

document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;



const welcomeDisplay = document.querySelector("#welcome-message");
if (welcomeDisplay) {
    let visitCount = Number(window.localStorage.getItem("visits-ls")) || 0;
    
    if (visitCount !== 0) {
        welcomeDisplay.innerHTML = `Welcome back! This is your visit number <span>${visitCount + 1}</span>.`;
    } else {
        welcomeDisplay.innerHTML = `Welcome to Infinite Store! We are glad you are here for the first time.`;
    }
    
    visitCount++;
    localStorage.setItem("visits-ls", visitCount);
}

const quoteForm = document.querySelector(".quote-form");
const statusMsg = document.querySelector("#submission-status");

if (quoteForm) {
    quoteForm.addEventListener("submit", () => {
        let quoteCount = Number(window.localStorage.getItem("quotes-ls")) || 0;
        quoteCount++;
        localStorage.setItem("quotes-ls", quoteCount);
        
    });
    
    let currentQuotes = Number(window.localStorage.getItem("quotes-ls")) || 0;
    if (currentQuotes > 0 && statusMsg) {
        statusMsg.textContent = `You have requested ${currentQuotes} quotes with us so far.`;
    }
}