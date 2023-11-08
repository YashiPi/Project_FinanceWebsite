var crsr = document.querySelector(".cursor")
var blur = document.querySelector(".cursor-blur")

document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x-250+"px"
    blur.style.top = dets.y-250+"px"
})

// dets is the name of a mouse event that entails all that is happening with the mouse while it is moving


gsap.to(".nav", {
    // you can use CSS properties in camelCase
    backgroundColor :"#000", 
    height:"110px",
    duration:0.5,
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        // markers: true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to(".main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger:".main",
        scroller:"body",
        // markers:true,
        start:"top -30vh",
        end:"top -80vh",
        scrub:2
    }
})

// function login() {
//     fetch('home.php')
//       .then(response => response.text())
//       .then(data => {
//         // Handle the response from the PHP script
//       });
//   }