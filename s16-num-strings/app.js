function randomIntBetween(min, max) { // min:5, max: 10
    return Math.floor(Math.random() * (max - min + 1) + min); // 10.99999999 => 10
}

console.log(randomIntBetween(1, 10));

function productDescription(strings, productName, productPrice) {
    console.log(strings, productName, productPrice);
    let priceCategory = 'pretty cheap';
    if (productPrice > 20) {
        priceCategory = 'fairly priced';
    }
    return `${strings[0]}${productName}${strings[1]}${priceCategory}${strings[2]}`;
}

const prodName = 'Tagged Templates';
const prodPrice = 29.99;

const productOutput = productDescription`This product (${prodName}) is ${prodPrice}.`;
console.log(productOutput);