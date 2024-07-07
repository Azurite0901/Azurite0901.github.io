const circleAction = () => {
   const pageHeight = document.body.offsetHeight;
   const circles = document.querySelector(".js_circles");
   circles.style.height = pageHeight + `px`;

   for (let i = 0; i < 80; i++) {
      const li = document.createElement("li");
      const size = gsap.utils.random(50, 150, 1);
      const hue = gsap.utils.random(0, 360, 1);
      document.querySelector(".js_circles").appendChild(li);

      li.style.width = size + "px";
      li.style.height = size + "px";
      li.style.backgroundColor = `hsl(${hue},70%,80%)`;
      li.style.left = `${gsap.utils.random(0, 100, 1)}%`;
      li.style.top = `${gsap.utils.random(0, 100, 1)}%`;
      li.style.filter = `blur(${gsap.utils.random(2, 10)}px)`;

      gsap.set(li, {
         x: size / -2,
         y: size / -2,
         scale: 0.6,
         opacity: 0,
      });
   }
   gsap.to(".circles li", 1, {
      opacity: "random(0.1, 0.4)",
      scale: 1,
      stagger: {
         amount: 1.5,
      },
   });
};

const clickEffect = () => {
   const effectWrapper = document.querySelector(".js_effects");
   const classList = ["fa-solid fa-star", "fa-regular fa-star"];
   for (let i = 0; i < 10; i++) {
      const hue = gsap.utils.random(0, 360, 1);
      const li = document.createElement("li");
      li.setAttribute("class", classList[i % classList.length]);
      effectWrapper.appendChild(li);
      li.style.color = `hsl(${hue},100%,50%)`;
      window.addEventListener("load", () => {
         gsap.set(li, {
            top: li.offsetHeight / -2,
            left: li.offsetWidth / -2,
         });
      });
   }
   const effectElements = effectWrapper.querySelectorAll("li");
   const initPositionAndColor = () => {
      gsap.set(effectElements, {
         x: 0,
         y: 0,
         rotate: 0,
         scale: 0,
      });
      effectElements.forEach((li) => {
         const hue = gsap.utils.random(0, 360, 1);
         li.style.color = `hsl(${hue},100%,50%)`;
      });
   };
   document.body.addEventListener("click", (e) => {
      effectWrapper.style.left = `${e.pageX}px`;
      effectWrapper.style.top = `${e.pageY}px`;

      const tl = gsap.timeline();
      tl.to(effectElements, 0.2, {
         opacity: "random(.2,1)",
      })
         .to(effectElements, 0.2, {
            opacity: 0,
            delay: 0.3,
         })
         .to(
            effectElements,
            0.6,
            {
               x: "random(-50,50)",
               y: "random(-50,50)",
               rotate: "random(-180,180)",
               scale: "random(-0.3,1.5)",
               onComplete: () => {
                  initPositionAndColor();
               },
            },
            "0"
         );
   });
};
export { clickEffect };
export { circleAction };
