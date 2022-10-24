var hero = document.getElementById('hero-container');
var nav = document.getElementById('header');
var projects = document.getElementsByClassName('sticky')[0];
var heroHeight = hero.clientHeight;
var fading = document.getElementsByClassName('fading');

document.addEventListener('scroll', (e) => {
    if (window.scrollY == 0) nav.style.display = 'none'; else nav.style.display = 'block';
    Array.from(fading).forEach(item => {
        var pos = item.getBoundingClientRect();
        var height = item.clientHeight;
        var opacity = (pos.top) / 100
        console.log(pos.top)
        item.style.opacity = opacity
    })
    // var scrollPercent = (heroHeight - window.scrollY) / heroHeight;
    // if (scrollPercent < 0.05) {
    //     scrollPercent = 0
    // }

    // hero.style.opacity = scrollPercent;
    // nav.style.opacity = 1 - scrollPercent;

    // if (window.scrollY >= window.innerHeight) {
    //     var opacity = Math.min(1, (window.scrollY - window.innerHeight) / 500);
    //     projects.style.opacity = opacity;
    // } else {
    //     projects.style.opacity = 0;
    // }
});