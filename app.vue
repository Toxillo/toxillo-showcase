<template>
    <header id=header>
        <nav class=main-header>
            <ul class=main-nav-items>
                <li id=main-nav-heading class=main-nav-item>
                    <a href="/">Me</a>
                </li>
                <li class=main-nav-item>
                    <a href="/#projects">Projects</a>
                </li>
                <li class=main-nav-item>
                    <a href="/#about">About</a>
                </li>
                <li class=main-nav-item>
                    <a href="/#contact">Contact</a>
                </li>
            </ul>
        </nav>
    </header>
    <div >
        <section>
            <div id=hero-container class="hero-container">
                <div class="hero fading">
                    <h1 class=hero-title>
                        Leon Stier
                    </h1>
                    <h2 class=hero-subtitle>
                        Game Developer
                    </h2>
                </div>
            </div>
        </section>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100&display=swap');

* {
    box-sizing: border-box;
    text-align: center;
}

/* Disable Scrollbar for Firefox */
html {
    scrollbar-width: none;
}

/* Disable Scrollbar for Chrome */
::-webkit-scrollbar {
    display: none;
}

body {
    font-family: 'Roboto', sans-serif;
    color: #fff;
    background-color: #000;
    margin: 0 auto;
}

a {
    font-family: 'Roboto', sans-serif;
    font-size: 1em;
    font-weight: 300;
    text-decoration: none;
    color: #ddd;
}

p {
    font-size: 1.2em;
    text-align: center;
    padding: 0 1.5em;
}

ul {
    padding: 0;
    margin: 0;
}

header {
    z-index: 100;
    display: none;
    position: fixed;
    opacity: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.75);
}

.main-nav-items {
    height: 82px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
}

.main-nav-item {
    width: 100%;
    text-align: center;
    margin: 0 1em;
    border-bottom: 1px solid transparent;
}

.main-nav-item a {
    display: block;
    padding: 2em 0;
}

.main-nav-item:hover {
    border-bottom: 1px solid #8b2ab4;
    transition: border-bottom 200ms linear;
}

.main-nav-item:focus-visible {
    outline: none;
}

.hero-container {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
}

.hero {}

.hero-title {
    margin: 0;
    text-align: center;
    font-weight: 400;
}

.hero-subtitle {
    padding: 0;
    text-align: center;
    font-weight: 100;
    margin: 0;
}

.hero-graphic-container {
    display: flex;
    height: 350px;
    max-width: 600px;
    border-radius: 10px;
}


.hero-graphic {
    border-radius: 10px
}

@media (min-width: 1024px) {
    h1 {
        font-size: 4em;
    }

    h2 {
        font-size: 3.5em;
    }

    p {
        font-size: 1.6em;
    }

    ::-webkit-scrollbar {
        display: none;
    }

    .hero-container {
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
}
</style>
