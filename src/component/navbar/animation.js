import gsap from "gsap";

const tl = gsap.timeline({defaults : {duration : .5}});

export default function(element){
    tl.fromTo(element, {y : -100 ,ease : "elastic.out(1, 0.3)", duration : 2 }, {y : 0})
}

