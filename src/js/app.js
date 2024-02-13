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
  _strk.push(function() {
    setVanta()
    window.edit_page.Event.subscribe( "Page.beforeNewOneFadeIn", setVanta )
  })

isWebp();
homeRedirect();
burgerMenu();
faqPage();
