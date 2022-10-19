
// const { default: gsap } = require("gsap");

const secContainer = document.querySelector(".sec-container");
const secImage = document.querySelector(".sec-img");

const secImage2 = document.querySelector(".sec-image2");
const secOne = document.querySelector(".sec1");

// const flex = document.querySelector(".flex");

const upOne = document.querySelector(".up1");
const upTwo = document.querySelector(".up2");
const upThree = document.querySelector(".up3");


// const { TimelineMax } = require("gsap/gsap-core");
gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(secContainer, 2, {x: -500}, {x: 0, ease: "linear"});
gsap.fromTo(secImage, 2, {x: 500}, {x: 0, ease: "linear"});

gsap.fromTo(secImage2, 1, {x: -500}, {x: 0, ease: "linear", scrollTrigger: secImage});
gsap.fromTo(secOne, 1, {y: 300, opacity: 0}, {y: 0, opacity: 1, ease: "linear", ScrollTrigger: secOne});

const tl = new TimelineMax();

tl.fromTo(upOne, 2, {x: -500, opacity: 0}, {x: 0, opacity: 1, ease: "linear", scrollTrigger: upOne});

tl.fromTo(upTwo, 1, {y: 300, opacity: 0}, {y: 0, opacity: 1, ease: "linear", scrollTrigger: upTwo});

tl.fromTo(upThree, 2, {x: 500, opacity: 0}, {x: 0, opacity: 1, ease: "linear", scrollTrigger: upThree});