// LENIS SCROLL

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// LENIS SCROLL ENDS


let tl = gsap.timeline();



tl.from("nav .logo, nav .menu ul li, nav .contact_btn button", {
   y: -50,
   delay: 0.7,
    opacity: 0,
    duation: 0.3,
   stagger: 0.2
});


tl.from("#page1 h1, #page1 button", {
  y: 50,
  delay: 0.7,
  opacity: 0,
  duation: 0.3,
  stagger: 0.2,
});

tl.from("#page1 .bg-img", {
    opacity: 0,
    duration: 3
});

tl.from("#page1 .brand img", {
    opacity: 0,
    scrollTrigger: {
        trigger: "#page1",
        scroller: "body",
        // markers: true,
        scrub: 2,
        start: "top 0"
    }
})


tl.to("#page2", {
   backgroundColor: "white",

  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    // markers: true,
    scrub: true,
    start: "top 20%",
    end: "top 0",
  },
});

tl.to("#page2 .card", {
    scale: 0.8,

    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        // markers: true,
        scrub: true,
        start: "top 50%",
        end: "top -50%"
    }
})


tl.to("#page3 .page3-img", {
  transform: "rotateX(0deg)",
  y: -300,
  scale: 1.2,

  scrollTrigger: {
    trigger: "#page3",
    scroller: "body",
    scrub: 3,
    start: "top 30%",
    end: "top 10%",
    // markers: true,
  }
});

tl.to("#page3 img", {
  // filter: "blur(8px)",
  scrollTrigger: {
    trigger: "#page3",
    scroller: "body",
    start: "top 0%",
    end: "top -250%",
    // markers: true,
    pin: ".page3-img",
  },
});

tl.from("#page3 .content h4, #page3 .content h1, #page3 .content p, #page3 .content h2", {
  opacity: 0,
  stagger: 3,
  duration: 3,

  scrollTrigger: {
    trigger: "#page3",
    scroller: "body",
    // markers: true,
    start: "top -100%",
    end: "top -10",
    scrub: 1,
  },
});

 


tl.to("#page4", {
    y: "-100vh",
  scrollTrigger: {
    trigger: "#page4",
    scroller: "body",
    // markers: true,
    start: "top 100%",
    end: "top 50%",
    scrub: 3
  }
});

