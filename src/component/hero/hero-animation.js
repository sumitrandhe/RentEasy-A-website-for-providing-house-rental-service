import gsap from "gsap";
const tl = gsap.timeline({defaults : {duration : .5}});

export default function(heading, btns){
    console.log( btns);
    tl.fromTo(heading, {scale : 0 }, {scale : 1, duration : 3, ease:"elastic.out(1.2, 0.3)", delay: 1})
    tl.fromTo(btns, {y : 100}, {y : 0}, '<30%')
}

