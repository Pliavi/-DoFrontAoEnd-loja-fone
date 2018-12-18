const $cart = document.querySelector(".cart");
const $addCart = document.querySelector(".-second");

$addCart.addEventListener('click', function() {
    $cart.textContent = "Eae! (10)";
});