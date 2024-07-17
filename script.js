var timeout;

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function firstPageAnim() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })
    .to(".boundingelem", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 2,
      delay: -1,
      stagger: 0.2,
    })
    .from("#herofooter", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeInOut,
    });
}


 firstPageAnim();

// teeno element ko sleect karo, uske baad teeno par ek mousemove lagao, jab mousemove ho to ye pata karo ki mouse kaha par hai, jiska matlab hai mouse ki x and y position pata karo, ab mouse ki x y position ke badle us image ko show karo and us image ko move karo, move karte waqt rotate karo, and jaise jaise mouse tez chale waise waise rotation bhi tez ho jaye

document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
});

var date = new Date()
const todaydate = document.querySelector('.date');

function printdate(){
    var date= new Date();
    var day = date.getDate();
    var month = date.getMonth()+1;
    var year= date.getFullYear();
    todaydate.innerHTML = day + "/" + month + "/" + year;
}
printdate();
const todaytime = document.querySelector('.time');
function printtime(){
    var date = new date();
    var hour = date.getHours();
    var min = date.getminutes();
    var sec = date.getseconds();
    var period = "AM";
    if(hour == 0){
        hour = 12;

    }
    if(hour> 12){
        hour = hour - 12;
        period = "PM";
    }
    if(hour<10){
        hour="0"+ hour;

    }
    
    if(min<10){
        min = "0" + min;

    }
    if(sec < 10){
        sec = "0" + sec;
    }
     var time = hour + ":" + min + ":" + sec + " "+ period;
     document.querySelector(".time").innerHTML=time;
     setTimeout(printtime,1000);

}
printtime();
