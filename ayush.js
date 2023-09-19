// Percentage count down
const countDown1 = () => {
    let Num = Number(document.getElementById('num95').innerHTML);
    let newNum;
    if (Num < 95) {
        newNum = Num + 1;
    } else {
        newNum = 95;
    }
    document.getElementById('num95').innerHTML = newNum;
    return newNum;
}
setInterval(countDown1, 40);

const countDown2 = () => {
    let Num = Number(document.getElementById('num70').innerHTML);
    let newNum;
    if (Num < 70) {
        newNum = Num + 1;
    } else {
        newNum = 70;
    }
    document.getElementById('num70').innerHTML = newNum;
    return newNum;
}
setInterval(countDown2, 40);

const countDown3 = () => {
    let Num = Number(document.getElementById('num75').innerHTML);
    let newNum;
    if (Num < 75) {
        newNum = Num + 1;
    } else {
        newNum = 75;
    }
    document.getElementById('num75').innerHTML = newNum;
    return newNum;
}
setInterval(countDown3, 40);

// Progress-bar
const container = document.getElementById('page');
const highlight = document.getElementById('progressHeight');

let containerHeight;
let containerPos;
window.onscroll = () => {
    containerHeight = container.offsetHeight - window.innerHeight;
    containerPos = container.getBoundingClientRect();
    diff = containerHeight + containerPos.top;
    progressPercentage = diff / containerHeight * 100;
    cssWidth = Math.floor(100 - progressPercentage);
    highlight.style.width = cssWidth + "%";

}

// Hamburger 
const cross = () => {
    document.getElementById('firstLine').classList.toggle('firstLine');
    document.getElementById('lastLine').classList.toggle('lastLine');
    document.getElementById('middLine').classList.toggle('middLine');
    document.getElementById('menu').classList.toggle('showMenu');
    // document.getElementById('hamburgar').classList.toggle('showMenu');
    document.getElementById('menuContainer').classList.toggle('containerBg');
    // document.getElementById('menuContainer').classList.toggle('containerBg');
    return;

}
const removeMenu = () => {
    document.getElementById('firstLine').classList.remove('firstLine');
    document.getElementById('lastLine').classList.remove('lastLine');
    document.getElementById('middLine').classList.remove('middLine');
    document.getElementById('menu').classList.remove('showMenu');
    document.getElementById('menuContainer').classList.remove('containerBg');
    return;
}

// gsap animations
gsap.registerPlugin(ScrollTrigger);
