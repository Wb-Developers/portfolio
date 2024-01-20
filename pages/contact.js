$(document).ready(()=>{
    $("form .form_btn>a").click(()=>{
        $("#thanking_msg").show();
        $('.form form').hide();
    })
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


// Skills Progress bar
const skillsProgress=(a , b)=>{
$(`${a} .skills_progress_bar`).css(`width`, `${b}%`);
}
gsap.to(".js", {
scrollTrigger: {
    trigger: ".js",
    start: "top 90%",
    end: "top 0",
    onEnter: ()=>skillsProgress('.js' , 75),
}
})
gsap.to(".html", {
scrollTrigger: {
    trigger: ".html",
    start: "top 90%",
    end: "top 0",
    onEnter: ()=>skillsProgress('.html' , 95),
}
})
gsap.to(".css", {
scrollTrigger: {
    trigger: ".css",
    start: "top 90%",
    end: "top 0",
    onEnter: ()=>skillsProgress('.css' , 90),
}
})
gsap.to(".bt", {
scrollTrigger: {
    trigger: ".bt",
    start: "top 90%",
    end: "top 0",
    onEnter: ()=>skillsProgress('.bt' , 80),
}
})
gsap.to(".cms", {
scrollTrigger: {
    trigger: ".cms",
    start: "top 90%",
    end: "top 0",        onEnter: ()=>skillsProgress('.cms' , 89),
}
})
gsap.to(".mq", {
scrollTrigger: {
    trigger: ".mq",
    start: "top 90%",
    end: "top 0",
    onEnter: ()=>skillsProgress('.mq' , 100),
}
})
gsap.to(".react", {
scrollTrigger: {
    trigger: ".react",
    start: "top 90%",
    end: "top 0",
    onEnter: ()=>skillsProgress('.react' , 60),
}
})
gsap.to(".gsap", {
scrollTrigger: {
    trigger: ".gsap",
    start: "top 90%",
    end: "top 0",
    onEnter: ()=>skillsProgress('.gsap' , 65),
}
})
gsap.to(".canva", {
scrollTrigger: {
    trigger: ".canva",
    start: "top 90%",
    end: "top 0",
    onEnter: ()=>skillsProgress('.canva' , 92),
}
})
gsap.to(".seo", {
scrollTrigger: {
    trigger: ".seo",
    start: "top 90%",
    end: "top 0",
    onEnter: ()=>skillsProgress('.seo' , 80),
}
})

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

gsap.to(".image", {
x: 100,
y: -100,
duration: 1,
opacity: 1,
scrollTrigger: {
    trigger: ".image",
    start: "top 100%",
    end: "top 0%",
    markers: false,
}
})

// slide_left
gsap.to(".content ", {
x: -100,
y: 100,
duration: 1,
opacity: 1,
scrollTrigger: {
    trigger: ".content ",
    start: "top 100%",
    end: "top 0%",
    markers: false,
}
})
gsap.to(".second>h1", {
x: -100,
y: 100,
duration: 1,
opacity: .1,
scrollTrigger: {
    trigger: ".content>h2",
    start: "top 100%",
    end: "top 0%",
    markers: false,
}
})


// const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)