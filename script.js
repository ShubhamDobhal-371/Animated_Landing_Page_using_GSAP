var t1 = gsap.timeline();
t1.from(".page1 .nav .left,.page1 .nav .center h3,.page1 .nav .right",{
    y:-400,
    opacity: 0,
    duration:1,
    stagger:0.3 
    
})

// t1.from(".page1 .nav",{
//     opacity:0,
//     delay:0.3
// })
t1.from(".cont .left" ,{
    // y:200,
    opacity:0,
    duration : 1,
    stagger:0.8


})

t1.from(".cont .left h1 span img",{
    left:-400,
    opacity:0,
    duration : 1,
    stagger:0.8

})

t1.from(".cont .right img",{
    scale:0,
    opacity:0,
    duration:1,

})

t1.from(".cont .right input",{
    scale:0,
    opacity:0,
    duration:0.5,
    
})

t1.from(".page2 .box",{
    scale: 0,
    opacity:0,
    duration: 0.5,
    // rotate: 360,
    stagger:0.8,
    scrollTrigger: {
      trigger: ".page2 .box", // The element that triggers the animation
      scroller:"body",
      scrub:3,
    //   start: "bottom center",    // Start the animation when the top of the element hits the center of the viewport
       end: "bottom center",   // End the animation when the bottom of the element hits the center of the viewport
    //    markers: true 
    }
})
