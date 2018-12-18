const $heart = document.querySelector(".heart");
const $stars = document.querySelectorAll(".star");

$heart.addEventListener('click', function() {
    $heart.classList.toggle('active');
});


$stars.forEach(function($star) {
    $star.addEventListener('click', function() {
        $star.classList.toggle('active');
    });
})

