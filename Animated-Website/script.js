var cursorEl = document.querySelector("#cursor");
var blurEl = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function(dets){
    cursorEl.style.left = dets.x+ "px"
    cursorEl.style.top = dets.y+ "px"
    blurEl.style.left = dets.x - 200 + "px"
    blurEl.style.top = dets.y -200 + "px"
})

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
