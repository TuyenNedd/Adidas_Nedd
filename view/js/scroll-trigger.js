gsap.registerPlugin(ScrollTrigger);

const images = gsap.utils.toArray("aside");
const updateProgress = (instance) =>
  (loader.textContent = `${Math.round(
    (instance.progressedCount * 100) / images.length
  )}%`);

const showDemo = () => {
  document.body.style.overflowX = "hidden";
  document.scrollingElement.scrollTo(0, 0);

  // What's hot GSAP Scrolling
  const gsapScrollWh = gsap.utils.toArray(".gsap_scroll-wh");

  gsapScrollWh.forEach((gsapScrollWh, index) => {
    const w = gsapScrollWh.querySelector(".trigger-wh");
    const [x, xEnd] =
      index % 2
        ? ["100%", (w.scrollWidth - gsapScrollWh.offsetWidth) * 1]
        : [w.scrollWidth * 1, -650];
    gsap.fromTo(
      w,
      { x },
      {
        x: xEnd,
        scrollTrigger: {
          trigger: gsapScrollWh,
          scrub: 0.2,
          start: "-=1900",
          // end: "+=1000",
        },
      }
    );
  });

  // Trending GSAP Scrolling
  const gsapScrollTd = gsap.utils.toArray(".gsap_scroll-td");

  gsapScrollTd.forEach((gsapScrollTd, index) => {
    const w = gsapScrollTd.querySelector(".trigger-td");
    const [x, xEnd] =
      index % 2
        ? ["100%", (w.scrollWidth - gsapScrollTd.offsetWidth) * 1]
        : [w.scrollWidth * 1, -650];
    gsap.fromTo(
      w,
      { x },
      {
        x: xEnd,
        scrollTrigger: {
          trigger: gsapScrollTd,
          scrub: 0.2,
          start: "-=1900",
          // end: "+=1000",
        },
      }
    );
  });
};

imagesLoaded(images).on("progress", updateProgress).on("always", showDemo);
