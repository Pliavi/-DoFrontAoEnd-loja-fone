const $heart = document.querySelector(".heart");
const $stars = document.querySelectorAll(".star");

$heart.addEventListener('click', function() {
    $heart.classList.toggle('active');
});

$stars.forEach(function($star, index) {
    $star.addEventListener('click', function() {
        changeRank(index);
    });
})

function changeRank(indexClicked) {
    $stars.forEach(function($star, index) {
        if(index <= indexClicked) {
            $star.classList.add('active');
            return;
        }

        $star.classList.remove('active');
    });
}
