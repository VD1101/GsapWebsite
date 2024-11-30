const pageOneAnimation = function () {
  let tl = gsap.timeline();

  tl.from("nav h1,nav h4,nav button", {
    y: -40,
    opacity: 0,
    duration: 0.3,
    delay: 0.5,
    stagger: 0.15,
  });

  tl.from(".center-part1 > *", {
    x: -500,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
  });
  tl.from(
    ".center-part2 > img",
    {
      opacity: 0,
      duration: 0.5,
      scale: 0.5,
    },
    "-=1"
  );

  gsap.from(".section1-bottom > img ", {
    y: 30,
    duration: 0.8,
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: ".section1-bottom > img ",
  });
};
pageOneAnimation()


const pageTwoAnimation = function(){

gsap.from(".section2 > h3",{
  x:-40,
  duration:.8,
  opacity : 0,
  delay: .5,
  scrollTrigger : ".section2 > h3"


})

gsap.from(".services > div:nth-child(odd)",{
    x: -200,
    duration : .8,
    delay : .5,
    opacity : 0,
    stagger : 1,
    ease : "none",
    scrollTrigger : {
      trigger : ".services > div:nth-child(odd)",
      scrub : 1,
      start : "top 90%"
    }  
},"same")
gsap.from(".services > div:nth-child(even)",{

    x: 200,
    duration : .8,
    delay : .5,
    opacity : 0,
    stagger : 1,
    ease : "none",
    scrollTrigger : {
      trigger : ".services > div:nth-child(even)",
      scrub : 1,
      start : "top 90%"
    }  
},"same")
}
pageTwoAnimation();
console.log("bar gsap")

const navigationLinksAnimation = function(){
  console.log("gsap")
  const button = document.querySelector(".part2 > button");
  const links = document.querySelectorAll(".part2 > h4");

  button.addEventListener("mouseover",()=>{  
    gsap.to(button,{
      scale : 1.1,
      

    })
  })
  button.addEventListener("mouseleave",()=>{  
    gsap.to(button,{
      scale : 1,


    })
  })
  links.forEach((link) => {
    const beforeElement = link.querySelector('.before');
  
    link.addEventListener('mouseover', () => {
      gsap.to(beforeElement, {
        x: '100%', 
        opacity: 1,
        duration: 0.8,
      });
    });
  
    link.addEventListener('mouseleave', () => {
      gsap.to(beforeElement, {
        x: '-100%', // Slide out to the right
        opacity: 0,
        duration: 0.8,
      });
    });
  });

}
navigationLinksAnimation();

gsap.from(".section3 > div",{
  scale : .2,
  duration : .8,
  opacity : 0,
  stagger : .2,
  scrollTrigger : {
    trigger : ".section3 > div",
    scrub : 5,
    // markers : true,
    start : "top 80%"
  }

})