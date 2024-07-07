import { circleAction } from "./Gsap.js";
import { clickEffect } from "./Gsap.js";
import { MySeihekiMusic } from "./MySeihekiMusic.js";

const switchViewport = () => {
   const viewportMeta = document.querySelector('meta[name="viewport"]');

   let viewportContent;
   if (window.outerWidth > 380) {
      viewportContent = "width=device-width, initial-scale=1";
   } else {
      viewportContent = "width=380";
   }

   if (!viewportMeta) return;

   if (viewportMeta.getAttribute("content") !== viewportContent) {
      viewportMeta.setAttribute("content", viewportContent);
   }
};
switchViewport();
window.addEventListener("resize", switchViewport);

MySeihekiMusic();
circleAction();
clickEffect();
