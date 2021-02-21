let timeline = gsap.timeline();
timeline
  .fromTo(
    ".logo",
    {
      x: -200,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      delay: 0.5,
      duration: 1.3,
    }
  )
  .fromTo(
    ".menu",
    {
      x: 200,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      delay: 0.5,
      duration: 1.3,
    },
    ">-1.8"
  )
  .fromTo(
    ".info-section h1",
    {
      x: 0,
      y: 100,
      opacity: 0,
    },
    {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 1.3,
    }
  )
  .addLabel("h1Show")
  .fromTo(
    ".grandma",
    {
      height: 0,
    },
    {
      height: 500,
      duration: 1.1,
      ease: " power2.inOut",
    },
    ">-.5"
  )
  .fromTo(
    ".kids",
    {
      height: 0,
    },
    {
      height: 400,
      duration: 1.6,
      ease: "power2.inOut",
    },
    ">-1"
  )
  .fromTo(
    ".dashedsquare",
    {
      scale: 0,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      ease: "power2.inOut",
    },
    ">-1"
  )
  .fromTo(
    ".triangle",
    {
      x: -50,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 0.6,
      ease: "power2.inOut",
      duration: 1,
    },
    ">-.2"
  )
  .fromTo(
    ".triangle",
    {
      x: -50,
      y: 420,
    },
    {
      y: 330,
      repeat: -1,
      duration: 1.5,
      yoyo: true,
      ease: "sine.inOut",
    }
  )
  .fromTo(
    ".topsquare",
    {
      opacity: 0,
    },
    {
      opacity: 0.3,
      ease: "power2.inOut",
      duration: 1,
    },
    ">-1.3"
  )
  .fromTo(
    ".topsquare",
    {
      x: 550,
      y: -100,
    },
    {
      y: -185,
      repeat: -1,
      duration: 1.5,
      ease: "sine.inOut",
    }
  )
  .fromTo(
    ".info-section h4",
    {
      x: -50,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1.3,
    },
    "h1Show"
  )
  .fromTo(
    ".call-actions",
    {
      x: -50,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1.3,
    },
    "h1Show+=1"
  );
