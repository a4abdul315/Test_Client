gsap.to("#page3line",{
    scrollTrigger:{
        trigger:"#page3",
        start:"top 0%",
        end:"top -200%",
        // markers:true,
        pin:true,
        scrub:true

    },

    height:"45%"
})

gsap.to("#page4line1",{
    scrollTrigger:{
        trigger:"#page4",
        start:"top 90%",
        end:"top 0%",
        // markers:true,
        scrub:true

    },

    height:"45%"
})




gsap.to("#page4line2",{
    scrollTrigger:{
        trigger:"#page4",
        start:"top 0%",
        end:"top -100%",
        // markers:true,
        scrub:true,
        pin :true

    },

    width:"18vw"
})

gsap.to("#page4line3",{
    scrollTrigger:{
        trigger:"#page3",
        start:"top -200%",
        end:"top -300%",
        // markers:true,
        scrub:true,
        // pin :true

    },

    height:"55vw"
})

gsap.to("#page4line4",{
    scrollTrigger:{
        trigger:"#page3",
        start:"top -200%",
        end:"top -300%",
        // markers:true,
        scrub:true,
        // pin :true

    },

    height:"55vw"
})
// General ScrollTrigger settings for pinning and scrub
gsap.to("#page5", {
    scrollTrigger: {
        trigger: "#page5",
        start: "top 0%",
        end: "top -200%",
        // markers: true,
        scrub: true,
        pin: true
    }
});

// Hide the before text
gsap.to("#p5beforetext", {
    scrollTrigger: {
        trigger: "#p5beforetext",
        start: "top 0%",
        end: "top -1%",
        // markers: true,
        scrub: true,
        // pin: true
    },
    display: "none"
});

// Fade in the after text
gsap.to("#p5aftertext", {
    scrollTrigger: {
        trigger: "#p5beforetext",
        start: "top -1%",
        end: "top -10%", // Increase end point for smoother transition
        // markers: true,
        scrub: true,
        // pin: true
    },
    opacity: "1",
    ease: "power1.inOut" // Smooth easing function
});

// Display the span text within the after text
gsap.to("#p5aftertext span", {
    scrollTrigger: {
        trigger: "#p5aftertext",
        start: "top -50%", // Adjusted start point
        end: "top -60%", // Adjusted end point
        // markers: true,
        scrub: true,
        // pin: true
    },
    display: "inline-block",
    opacity: "1",
    ease: "power1.inOut" // Smooth easing function
});

// Fade out the after text
gsap.to("#p5aftertext", {
    scrollTrigger: {
        trigger: "#p5aftertext",
        start: "top -90%", // Adjusted start point
        end: "top -100%", // Adjusted end point
        // markers: true,
        scrub: true,
        // pin: true
    },
    opacity: "0",
    ease: "power1.inOut" // Smooth easing function
});


gsap.to("#page5 h2",{
    scrollTrigger:{
        trigger:"#p5aftertext",
        start:"top -105%",
        end:"top -110%",
        // markers:true,
        scrub:true,
        // pin :true

    },

    opacity:"1"
})
gsap.to("#page5 h3",{
    scrollTrigger:{
        trigger:"#p5aftertext",
        start:"top -105%",
        end:"top -110%",
        // markers:true,
        scrub:true,
        // pin :true

    },

    opacity:"1"
})

gsap.to("#p5blackline",{
    scrollTrigger:{
        trigger:"#p5aftertext",
        start:"top -100%",
        end:"top -110%",
        // markers:true,
        scrub:true,
        // pin :true

    },

    opacity:"1"
})


gsap.to("#page7",{
    scrollTrigger:{
        trigger:"#page7",
        start:"top 0%",
        end:"top -160%",
        // markers:true,
        scrub:true,

        pin :true

    },

})


gsap.to("#container h1",{
    scrollTrigger:{
        trigger:"#page7",
        scrub:true,
        start:"top 0%",
        end:"top -100%",
        // markers:true,
        // pin:true

    },
    left:"-61%",
    onComplete: function() {

        document.querySelector('.auto-type').style.visibility = 'visible';
        var typed = new Typed('.auto-type', {
            strings: ['require CREO.'],
            typeSpeed: 150
        });
    }
})

gsap.to("#p7blackline",{
    scrollTrigger:{
        trigger:"#p7blackline",
        scrub:true,
        start:"top -100%",
        end:"top -150%",
        // markers:true,
        // pin:true

    },
    height:"0%"
})

gsap.to("#explore",{
    scrollTrigger:{
        trigger:"#p7blackline",
        scrub:true,
        start:"top -140%",
        end:"top -160%",
        // markers:true,
        // pin:true

    },
    filter: "blur(0px)"

    
})
