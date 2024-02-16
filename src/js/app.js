import {
  isWebp,
  faqPage,
  homeRedirect,
  burgerMenu
} from './modules';
var setVanta = ()=>{
  if (window.VANTA) window.VANTA.FOG({
    el: "#vanta",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00
  })
  }

isWebp();
homeRedirect();
burgerMenu();
faqPage();
