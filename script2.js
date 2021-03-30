// const controller2 = new ScrollMagic.Controller();
// var tl = new TimelineMax({onupdate:updatePercentage});

// const form = document.querySelector('.section-d form');
// const infoContainer = document.querySelector('.section-d .info-container');
// const sectionHeader = document.querySelector('.section-d .section-header');

// tl.from(sectionHeader,1,{x:100,opacity:0});
// tl.from(form,1,{opacity:100,opacity:0});
// tl.from(infoContainer,1,{opacity:100,opacity:0});


// const scene2 = new ScrollMagic.Scene({
//     triggerElement: ".section-d",
//     triggerHook: "onLeave",
//     duration: "100%"
// })
// .setPin(".section-d")
// .setTween(tl)
// .addTo(controller);

// function updatePercentage() {
//     tl.progress();
//     console.log(tl.progress());
// }