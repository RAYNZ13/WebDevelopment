var cursorEl = document.querySelector("#cursor");
var blurEl = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function(dets){
    cursorEl.style.left = dets.x+10+ "px";
    cursorEl.style.top = dets.y+ "px";
    blurEl.style.left = dets.x - 200 + "px";
    blurEl.style.top = dets.y -200 + "px";
})

var h4El = document.querySelectorAll("#nav h4");
h4El.forEach(function(elem){
   elem.addEventListener("mouseenter",function(){
        cursorEl.style.scale = 1.5;
        cursorEl.style.border = "0.5px solid #fff";
        cursorEl.style.backgroundColor = "transparent";
   })

   elem.addEventListener("mouseleave",function(){
        cursorEl.style.scale = 1;
        cursorEl.style.border = "0px solid #95C11e";
        cursorEl.style.backgroundColor = "#95C11e";
    })
});

gsap.to("#nav",{
    backgroundColor: "#000",
    height: "100px",
    duration: 0.5,
    scrollTrigger:{
        trigger: "#nav",
        scroller : "body",
        // markers: true,
        start : "top -10%",
        end : "top -11%",
        scrub: 1
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70 m%",
        scrub: 2
    }
})

gsap.from("#about-us img,#about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 70%",
        end:"top 60%",
        scrub:1
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1,
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:3,
    }
})

gsap.from("#colon2",{
    y:80,
    x:80,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:3,
    }
})

gsap.from("#page4 h1",{
    y:60,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:3,
    }
})
