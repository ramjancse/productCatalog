
const searchboxElem = document.querySelector('.searchbox');
const prodcutElem = document.getElementById('prodcut');
const priceElem = document.getElementById('price');
const deleteButtonElem = document.getElementById('deleteButton');
const prodcutInputElem = document.getElementById('prodcutInput');
const priceInputElem = document.getElementById('priceInput');
const submitButtonElem = document.getElementById('submitButton');
const formElem = document.getElementById('form');
const errorNameElem = document.getElementById('errorName');
const errorPriceElem = document.getElementById('errorPrice');
const listGroupElem = document.querySelector('.listGroup');

const products = [
    
]

formElem.addEventListener('submit', (event) => {
    event.preventDefault();
    const { productName, productPrice } = receiveInputs();
    const isError = validateInput(productName, productPrice)
    if (!isError) {
        const id = products.length + 1;
        products.push({
            id: id,
            name: productName,
            price : productPrice
        })
        addItemToUI(id, productName, productPrice);
        resetInput()
        

    }
});

console.log(products)

listGroupElem.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.classList.contains('delete-item')) {
        console.log('clciekd to delete');
    }
       
})

function resetInput() {
    prodcutInputElem.value = '';
    priceInputElem.value = '';
    errorNameElem.innerHTML = '';
    errorPriceElem.innerHTML = '';

 }

function addItemToUI(id, name, price) {
    const htmlElemen = `
            <li class="marginHorizontal item-${id}">
                <span class="product" id="prodcut"> ${name} </span>
                <span class="price" id="price"> ${price} </span>
                <span> <i class="fa fa-trash delete-item" aria-hidden="true" id="deleteButton"></i> </span>
            </li> 
    `
    listGroupElem.insertAdjacentHTML('afterbegin', htmlElemen)
}

function validateInput(name, price) {
    let isError = false;
    if (!name || name.length < 5) {
        isError = true;
        errorNameElem.innerHTML= 'Please Input more than 5 charracter'
    }

    if(!price || price < 0) {
        isError = true;
        errorPriceElem.innerHTML= 'Price Should not be empty'
    }
    return isError;
}

function receiveInputs() {
    const productName = prodcutInputElem.value;
    const productPrice = priceInputElem.value;
    return {
        productName,
        productPrice,
    }
}


