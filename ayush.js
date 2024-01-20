// Percentage count down
let countIt = () => {
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
        let Num = Number(document.getElementById('num90').innerHTML);
        let newNum;
        if (Num < 90) {
            newNum = Num + 1;
        } else {
            newNum = 90;
        }
        document.getElementById('num90').innerHTML = newNum;
        return newNum;
    }
    setInterval(countDown3, 40);

}
gsap.to(".counters ", {
    opacity: 1,
    scrollTrigger: {
        trigger: ".counters",
        start: "40% 80%",
        end: "40% 0%",
        scrub: 1,
        toggleActions: "restart reverse revese none",
        markers: false,
        onEnter: () => countIt(),

    }
})

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
// Responsive Menu
$(document).ready(() => {
    $(".menu_icon").click(() => {
        $(".overlay").addClass("show");
        $("body").css("overflow-y", "hidden");
        setTimeout(() => {
            $(".mobile_menu").addClass("fade");
        }, 400);
        setTimeout(() => {
            $(".close_btn").addClass("fade_bottom");
        }, 900);
        setTimeout(() => {
            $(".mobile_menu ul li:first-child").addClass("fade_up");
        }, 1000);
        setTimeout(() => {
            $(".mobile_menu ul li:nth-child(2)").addClass("fade_up");
        }, 1200); setTimeout(() => {
            $(".mobile_menu ul li:nth-child(3)").addClass("fade_up");
        }, 1400); setTimeout(() => {
            $(".mobile_menu ul li:nth-child(4)").addClass("fade_up");
        }, 1600); setTimeout(() => {
            $(".mobile_menu ul li:last-child").addClass("fade_up");
        }, 1800);
    });
    $(".close_btn>span").click(() => {
        $(".overlay").removeClass("show");
        $(".mobile_menu").removeClass("fade");
        $(".close_btn").removeClass("fade_bottom");
        setTimeout(() => {
            $(".mobile_menu ul li:first-child").removeClass("fade_up");
        }, 800);
        setTimeout(() => {
            $(".mobile_menu ul li:nth-child(2)").removeClass("fade_up");
        }, 700); setTimeout(() => {
            $(".mobile_menu ul li:nth-child(3)").removeClass("fade_up");
        }, 600); setTimeout(() => {
            $(".mobile_menu ul li:nth-child(4)").removeClass("fade_up");
        }, 500); setTimeout(() => {
            $(".mobile_menu ul li:last-child").removeClass("fade_up");
        }, 400);
        $("body").css("overflow-y", "visible");
    });
    $(".overlay").click(() => {
        $(".overlay").removeClass("show");
        $(".mobile_menu").removeClass("fade");
        $(".close_btn").removeClass("fade_bottom");
        setTimeout(() => {
            $(".mobile_menu ul li:first-child").removeClass("fade_up");
        }, 800);
        setTimeout(() => {
            $(".mobile_menu ul li:nth-child(2)").removeClass("fade_up");
        }, 700); setTimeout(() => {
            $(".mobile_menu ul li:nth-child(3)").removeClass("fade_up");
        }, 600); setTimeout(() => {
            $(".mobile_menu ul li:nth-child(4)").removeClass("fade_up");
        }, 500); setTimeout(() => {
            $(".mobile_menu ul li:last-child").removeClass("fade_up");
        }, 400);
        $("body").css("overflow-y", "visible");

    });


});
gsap.to(".slideUp_1", {
    y: -100,
    duration: .5,
    opacity: 1,
    scrollTrigger: {
        trigger: ".slideUp_1",
        start: "top 100%",
        end: "top 0%",
        markers: false,
    }
})
gsap.to(".slideUp_2", {
    y: -200,
    duration: .5,
    opacity: 1,
    scrollTrigger: {
        trigger: ".slideUp_2",
        start: "top 100%",
        end: "top 60%",
        scrub: 1,
        markers: false,
    }
})

gsap.to(".slideUp_3", {
    y: -200,
    duration: .5,
    opacity: 1,
    scrollTrigger: {
        trigger: ".slideUp_3",
        start: "top 100%",
        end: "top 40%",
        scrub: 1,
        markers: false,
    }
})

gsap.to(".fourth>div:first-child", {
    y: -200,
    duration: .5,
    opacity: 1,
    scrollTrigger: {
        trigger: ".fourth>div:first-child",
        start: "top 100%",
        end: "top 60%",
        scrub: 1,
        markers: false,
    }
})
gsap.to(".fifth>div:first-child", {
    y: -200,
    duration: .5,
    opacity: 1,
    scrollTrigger: {
        trigger: ".fifth>div:first-child",
        start: "top 100%",
        end: "top 60%",
        scrub: 1,
        markers: false,
    }
})

gsap.to(".fourth>div:nth-child(2)", {
    y: -200,
    duration: .5,
    opacity: 1,
    scrollTrigger: {
        trigger: ".fourth>div:nth-child(2)",
        start: "top 100%",
        end: "top 60%",
        scrub: 1,
        markers: false,
    }
})

gsap.to(".slideUp_6", {
    y: -200,
    duration: .5,
    opacity: 1,
    scrollTrigger: {
        trigger: ".slideUp_6",
        start: "top 100%",
        end: "top 60%",
        scrub: 1,
        markers: false,
    }
})
gsap.to(".fourth>div:nth-child(3)", {
    y: -200,
    duration: .5,
    opacity: 1,
    scrollTrigger: {
        trigger: ".fourth>div:nth-child(3)",
        start: "top 100%",
        end: "top 60%",
        scrub: 1,
        markers: false,
    }
})
gsap.to(".fourth>div:nth-child(4)", {
    y: -200,
    duration: .5,
    opacity: 1,
    scrollTrigger: {
        trigger: ".fourth>div:nth-child(4)",
        start: "top 100%",
        end: "top 60%",
        scrub: 1,
        markers: false,
    }
})
gsap.to(".fourth>div:nth-child(5)", {
    y: -200,
    duration: .5,
    opacity: 1,
    scrollTrigger: {
        trigger: ".fourth>div:nth-child(5)",
        start: "top 100%",
        end: "top 60%",
        scrub: 1,
        markers: false,
    }
})


gsap.to(".counters>div:first-child", {
    y: -200,
    duration: .5,
    opacity: 1,
    scrollTrigger: {
        trigger: ".counters>div:first-child",
        start: "top 100%",
        end: "top 60%",
        scrub: 1,
        markers: false,
    }
})
gsap.to(".counters>div:nth-child(2)", {
    y: -200,
    duration: .5,
    opacity: 1,
    scrollTrigger: {
        trigger: ".counters>div:nth-child(2)",
        start: "top 100%",
        end: "top 60%",
        scrub: 1,
        markers: false,
    }
})
gsap.to(".counters>div:nth-child(3)", {
    y: -200,
    duration: .5,
    opacity: 1,
    scrollTrigger: {
        trigger: ".counters>div:nth-child(3)",
        start: "top 100%",
        end: "top 60%",
        scrub: 1,
        markers: false,
    }
})
