function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();
  

const canvas = document.querySelector("canvas")
const context = canvas.getContext("2d")

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize" , function(){
canvas.width = window.innerWidth
canvas.height = window.innerHeight
render()     // when we resize the window , render() func will draw the images // 
})
function files(index) {
    var data = `
   ./1.jpg
   ./2.jpg
   ./3.jpg
   ./4.jpg
   ./5.jpg
   ./6.jpg
   ./7.jpg
   ./8.jpg    
   ./9.jpg
   ./10.jpg 
   ./11.jpg 
   ./12.jpg 
   ./13.jpg 
   ./14.jpg 
   ./15.jpg 
   ./16.jpg 
   ./17.jpg 
   ./18.jpg 
   ./19.jpg 
   ./20.jpg 
   ./21.jpg 
   ./22.jpg 
   ./23.jpg 
   ./24.jpg 
   ./25.jpg 
   ./26.jpg 
   ./27.jpg 
   ./28.jpg 
   ./29.jpg 
   ./30.jpg 
   ./31.jpg 
   ./32.jpg 
   ./33.jpg 
   ./34.jpg 
   ./35.jpg 
   ./36.jpg 
   ./37.jpg 
   ./38.jpg 
   ./39.jpg 
   ./40.jpg 
   ./41.jpg 
   ./42.jpg 
   ./43.jpg 
   ./44.jpg 
   ./45.jpg 
   ./46.jpg 
   ./47.jpg 
   ./48.jpg 
   ./49.jpg 
   ./50.jpg 
   ./51.jpg 
   ./52.jpg 
   ./53.jpg 
   ./54.jpg 
   ./55.jpg 
   ./56.jpg 
   ./57.jpg 
   ./58.jpg 
   ./59.jpg 
   ./60.jpg 
   ./61.jpg 
   ./62.jpg 
   ./63.jpg 
   ./64.jpg 
   ./65.jpg 
   ./66.jpg 
   ./67.jpg 
   ./68.jpg 
   ./69.jpg 
   ./70.jpg 
   ./71.jpg 
   ./72.jpg 
   ./73.jpg 
   ./74.jpg 
   ./75.jpg 
   ./76.jpg 
   ./77.jpg 
   ./78.jpg 
   ./79.jpg 
   ./80.jpg 
   ./81.jpg 
   ./82.jpg 
   ./83.jpg 
   ./84.jpg 
   ./85.jpg 
   ./86.jpg 
   ./87.jpg 
   ./88.jpg 
   ./89.jpg 
   ./90.jpg 
   ./91.jpg 
   ./92.jpg 
   ./93.jpg 
   ./94.jpg 
   ./95.jpg 
   ./96.jpg 
   ./97.jpg 
   ./98.jpg 
   ./99.jpg 
   ./100.jpg 
   ./101.jpg 
   ./102.jpg 
   ./103.jpg 
   ./104.jpg 
   ./105.jpg 
   ./106.jpg 
   ./107.jpg 
   ./108.jpg 
   ./109.jpg 
   ./110.jpg 
   ./111.jpg 
   ./112.jpg 
   ./113.jpg 
   ./114.jpg 
   ./115.jpg 
   ./116.jpg 
   ./117.jpg 
   ./118.jpg 
   ./119.jpg 
   ./120.jpg 
   ./121.jpg 
   ./122.jpg 
   ./123.jpg 
   ./124.jpg 
   ./125.jpg 
   ./126.jpg 
   ./127.jpg 
   ./128.jpg 
   ./129.jpg 
   ./130.jpg 
   ./131.jpg 
   ./132.jpg 
   ./133.jpg 
   ./134.jpg 
   ./135.jpg 
   ./136.jpg 
   ./137.jpg 
   ./138.jpg 
   ./139.jpg 
   ./140.jpg 
   ./141.jpg 
   ./142.jpg 
   ./143.jpg 
   ./144.jpg 
   ./145.jpg 
   ./146.jpg 
   ./147.jpg 
   ./148.jpg 
   ./149.jpg 
   ./150.jpg 
   ./151.jpg 
   ./152.jpg 
   ./153.jpg 
   ./154.jpg 
   ./155.jpg 
   ./156.jpg 
   ./157.jpg 
   ./158.jpg 
   ./159.jpg 
   ./160.jpg 
   ./161.jpg 
   ./162.jpg 
   ./163.jpg 
   ./164.jpg 
   ./165.jpg 
   ./166.jpg 
   ./167.jpg 
   ./168.jpg 
   ./169.jpg 
   ./170.jpg 
   ./171.jpg 
   ./172.jpg 
   ./173.jpg 
   ./174.jpg 
   ./175.jpg 
   ./176.jpg 
   ./177.jpg 
   ./178.jpg 
   ./179.jpg 
 
   `;
    return data.split("\n")[index];
  }
  
  const frameCount = 260;
   
const images = []
const imageSeq = {
    frame : 1 ,    // starting image must be the first number of image 
}


for(let i = 0 ; i< frameCount ; i++){

const img = new Image()
img.src= files(i);
images.push(img);
}


function render(){
scaleImage(images[imageSeq.frame] , context);
}

// animation on frames one by one 

gsap.to(imageSeq , {
frame : frameCount -1 ,
snap : "frame" ,
ease : `none` ,
scrollTrigger : {


    scrub : 0.15 ,
    trigger : `#page>canvas`,
    start  : `top top `,
    end : `600% , top` ,
    scroller : `#main`
} ,
onUpdate : render , 

})

// when site is load first image must be render or seen
images[1].onload = render



function scaleImage(img , ctx){

var canvas =  ctx.canvas 
var hRatio = canvas.width / img.width
var vRatio = canvas.height / img.height
var ratio =  Math.max(hRatio , vRatio)
var centerShift_x = (canvas.width - img.width * ratio ) /2 
var centerShift_y = (canvas.height - img.height * ratio ) /2 
ctx.clearRect(0,0,canvas.width , canvas.height)    /// clearing pervoius immage //
ctx.drawImage(


    img , 
    0,0

    ,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
) ; 

}


gsap.to(`#page>canvas`, {
 scrollTrigger : {
   trigger : `#page>canvas` ,
   pin : true , 
   scroller : `#main` , 
   start : "top top " , 
   end : "600%  top"

 }


})








gsap.to("#page1", {
scrollTrigger:{
trigger:"#page1" ,
start : `top top` ,
end : `bottom top` ,
// markers : true ,
pin : true ,
scroller : "#main"
}
})

gsap.to("#page2", {
scrollTrigger:{
trigger:"#page2" ,
start : `top top` ,
end : `bottom top` ,
// markers : true ,
pin : true ,
scroller : "#main"
}
})

gsap.to("#page3", {
scrollTrigger:{
trigger:"#page3" ,
start : `top top` ,
end : `bottom top` ,
// markers : true ,
pin : true ,
scroller : "#main"
}
})
