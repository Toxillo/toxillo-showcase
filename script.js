var hero = document.getElementById('hero-container');
var nav = document.getElementById('header');
var projects = document.getElementsByClassName('sticky')[0];
var heroHeight = hero.clientHeight;
var fading = document.getElementsByClassName('fading');

document.addEventListener('scroll', (e) => {
    if (window.scrollY == 0) nav.style.display = 'none'; else nav.style.display = 'block';
    Array.from(fading).forEach(item => {
        var pos = item.getBoundingClientRect();
        var opacity = pos.top + (pos.height / 2) - (window.innerHeight / 2) + 50;
        console.log("first: " + opacity);
        if (pos.top < window.innerHeight && pos.bottom > 0) {
            if ((pos.top + (pos.height / 2)) < window.innerHeight / 2) {
                opacity *= -1;
            }
        } else {
            opacity = 0;
        }
        console.log(opacity);
        opacity = 1 - norm(opacity, window.innerHeight / 2, 0);
        // if (opacity > 0.80) opacity = 1;
        item.style.opacity = opacity;
    })
    var scrollPercent = (heroHeight - window.scrollY) / heroHeight;
    if (scrollPercent < 0.05) {
        scrollPercent = 0
    }

    nav.style.opacity = 1 - scrollPercent;
});

function norm(val, max, min) { return (val - min) / (max - min); }
