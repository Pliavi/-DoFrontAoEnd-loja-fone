const $cart = document.querySelector(".cart");
const $addCart = document.querySelector(".-second");

let cartCounter = 0;
$addCart.addEventListener('click', function() {
    $cart.textContent = `Carrinho (${++cartCounter})`;
});