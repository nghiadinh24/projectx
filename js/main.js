document.addEventListener("DOMContentLoaded", (event) => {
gsap.registerPlugin(ScrollTrigger)

// gsap code here!

// preloader 

const tl_preloader = gsap.timeline();

tl_preloader.to("body", {
  overflow: "hidden"
})
  .to(".preloader .text-container", {
    duration: 0,
    opacity: 1,
    ease: "Power3.easeOut"
  })
  .from(".preloader .text-container h1", {
    duration: 1.5,
    delay: 1,
    y: 70,
    skewY: 10,
    stagger: 0.4,
    ease: "Power3.easeOut"
  })
  .to(".preloader .text-container h1", {
    duration: 1.2,
    y: 70,
    skewY: -20,
    stagger: 0.2,
    ease: "Power3.easeOut"
  })
  .to(".preloader", {
    duration: 1.5,
    height: "0vh",
    ease: "Power3.easeOut"
  })
  .to(
    "body",
    {
      overflow: "auto"
    },
    "-=2"
  )
  .to(".preloader", {
    display: "none"
  });


// end preloader


gsap.to('.dt_progress', {
    height: '100%',
    ease: 'sine',
    scrollTrigger: {
        scrub: 0.3
    }
});

// hero_section scripts
const tl = gsap.timeline();

tl_preloader.to(".first_name",{
    opacity: 1,
    y:0,
    duration: 0.7,
    ease: "power3.out"
});
tl_preloader.to(".middle_name",{
    opacity: 1,
    y:0,
    duration: 0.8,
    ease: "power3.out"
});
tl_preloader.to(".hero_hightlight",{
    opacity: 1,
    y:0,
    duration: 0.9,
    ease: "power3.out"
});
tl_preloader.to(".navbar, .hero_second_text, .hero_p",{
    opacity:1,
     x:0,
     y:0,
     duration: 2,
     ease: "power3.out",
    });

// hide main_text on scroll 

const hideMaintext = gsap.to (".hero_main_text",{
    x: 250,
    ease: "power3.out", 
    duration: 2,
    opacity: 0,
    toggleActions: "play complete reverse none"
});

ScrollTrigger.create ({
    trigger: ".hero_section",
    start: "50% center",
    end: "bottom 20%",
    animation: hideMaintext,
    scrub: 1,
});

// hide second_text on scroll 

const hideSecondtext = gsap.to (".hero_second_title",{
    x: -250,
    ease: "power3.out", 
    duration: 2,
    opacity: 0,
    toggleActions: "play complete reverse none"
});

ScrollTrigger.create ({
    trigger: ".hero_section",
    start: "60% center",
    end: "bottom 20%",
    animation: hideSecondtext,
    scrub: 1,
});

// hide p text on scroll
const hidePtext = gsap.to (".hero_p_text", { 
    x:250,
    ease: "power3.out", 
    duration: 2,
    opacity: 0,
    toggleActions: "play complete reverse none"
} );

ScrollTrigger.create ({
    trigger: ".hero_section",
    start: "70% center",
    end: "bottom 20%",
    animation: hidePtext,
    scrub: 1,
    markers: false,
}
);


// end hero_section scripts

// about_section scripts

// about_title
const about_title = gsap.to (".about_title",{
    y:0,
    ease: "power3.out",
    duration: 2,
    opacity: 1,
    pin: true,
    toggleActions: "play complete reverse none",
});
ScrollTrigger.create ({
    trigger: ".about_section",
    start: "top 50%",
    end: "bottom 20%",
    animation: about_title,
    scrub: 1,
    markers: false,
});


// about_card

const timeline = gsap.timeline();

const about_card = document.querySelectorAll('.about_card');

about_card.forEach((about_card, index) => {
  timeline.to(about_card, {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 1,
    ease: "power3.out",
    toggleActions: "play complete reverse reverse",
  });
});

ScrollTrigger.create ({
    trigger: ".about_section",
    start: "20% 20%",
    end: "40% top",
    animation: timeline,
    scrub: 1,
    markers: false,
    pin: true,
});


// works_section scripts

gsap.set(".works_img:not(:first-child)", {opacity:0, scale:0.5})

const animation = gsap.to(".works_img:not(:first-child)", {
	opacity:1,
    scale:1,
    duration:1,
    stagger:1,
    ease: "power3",
});

ScrollTrigger.create({
	trigger:".works_container",
	start:"top top",
	end:"bottom bottom",
	pin:".works_col_right",
	animation: animation,
	scrub:true,
	markers:false,
});

// end work_section scripts


// contact_section

const contact_text = gsap.to(".contact_text", {
    opacity: 1,
    duration:1,
    x:0,
    ease:"power3.out",
});

ScrollTrigger.create ({
    trigger: ".contact_section",
    start: "top center",
    end: "bottom bottom",
    scrub:1,
    animation: contact_text,
    markers: false,
});

const contact_cta = gsap.to(".contact_cta",{
    opacity:1,
    duration: 2,
    x:0,
    ease:"power1.out",
});

ScrollTrigger.create({
    trigger:".contact_section",
    start: "top center",
    end: "bottom bottom",
    scrub: 1,
    animation: contact_cta,
});

const contact_social_btn_group = gsap.to(".contact_social_btn_group", {
    opacity: 1,
    duration: 1,
    x:0,
    ease: "power3.out",
});

ScrollTrigger.create ({
    trigger: ".contact_section",
    start: "top center",
    end: "bottom bottom",
    scrub: 1,
    animation: contact_social_btn_group,
});

const tl_card = gsap.timeline();

const contact_card = document.querySelectorAll('.contact_card');

contact_card.forEach((contact_card, index) => {
  tl_card.to(contact_card, {
    opacity: 1,
    x: 0,
    scale: 1,
    duration: 1,
    ease: "power3.out",
    toggleActions: "play complete reverse reverse",
  });
});

ScrollTrigger.create ({
    trigger: ".contact_section",
    start: "20% 20%",
    end: "40% top",
    animation: tl_card,
    scrub: 1,
    markers: false,
    pin: true,
});


// end contact_section

// lenis scroll trigger
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 300)
})

gsap.ticker.lagSmoothing(0)

// end lennis


});


// end gsap
