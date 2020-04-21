$(document).ready(function () {
  $(".language").click(function () {
    if ($(window).width() >= 1024) {
      $(".list_lang").slideToggle(300);
      $(".icon_lang").toggleClass("rorateLang");
    }
    else {
      $(".list_lang").addClass("show_lang");
      $(".menu_right").addClass("hide_menu");
    }

  });
  $(".back").click(function () {
    $(".menu_right").removeClass("hide_menu");
    $(".list_lang").removeClass("show_lang");
  });
  $(".burger").click(function () {
    $(".icon1:nth-child(1)").toggleClass("top");
    $(".icon1:nth-child(2)").toggleClass("center");
    $(".icon1:nth-child(3)").toggleClass("bottom");
    $(".menu_right").slideToggle(300);
    $(".list_lang").removeClass("show_lang");
    $(".menu_right").removeClass("hide_menu");
  });
  // Slide bar move
  var slider = document.querySelector(".second_content");
  var slider1 = $(".second_card:nth-child(1)").offset().left;
  var slider2 = $(".second_card:nth-child(2)").offset().left;
  var slider3 = $(".second_card:nth-child(3)").offset().left;
  let isDown = false;
  let startX;
  let startOld;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;

  });
  slider.addEventListener('mouseleave', () => {
    isDown = false;
  });
  slider.addEventListener('mouseup', () => {
    isDown = false;
    let h = $(".second_card").width()/2;
    console.log(slider1 + h)
    console.log(slider3 + h)
    console.log(slider2 + h)
    if (startOld <= 0) {
      if (slider.scrollLeft > 0 && slider.scrollLeft < slider1 + h)
        slider.scrollLeft = 0;
      else if (slider.scrollLeft >= slider1 + h && slider.scrollLeft < slider2 + h)
        slider.scrollLeft = slider2 - slider1;
      else if (slider.scrollLeft >= slider2 + h && slider.scrollLeft < slider3 +h)
        slider.scrollLeft = slider3 - slider1;
    }
    else{
      console.log(slider.scrollLeft);
      if(slider.scrollLeft > slider3 - h){
        slider.scrollLeft = slider3 - slider1;
      }
      else if (slider.scrollLeft <= slider3 - h && slider.scrollLeft > slider2 - h)
        slider.scrollLeft = slider2 - slider1;
      else if (slider.scrollLeft <= slider2 - h)
        slider.scrollLeft = 0;
    }
  });
  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; //scroll-fast
    startOld = walk;
    slider.scrollLeft = scrollLeft - walk;
  });
  // ===== Event Scroll =====


  window.onscroll = function () { scrollFunction() };
  function scrollFunction() {
    var screen_height = $(window).height();
    var header = $("header").offset().top + 300;
    var sec_first = $(".sec_first").offset().top;
    var sec_second = $(".sec_second").offset().top;
    if (header >= sec_first) {
      $("header").addClass("screen_border");
    }
    else $("header").removeClass("screen_border");
    if (header < sec_first) {
      removeFadeInUp(".firsth2");
      removeFadeInUp(".firstp");
    }
    else if (header >= sec_first && header <= sec_second) {
      let arrClass = [".firsth2", ".firstp"]
      for (let i = 0; i < arrClass.length; i++) {
        timeOut(arrClass[i], 300 * (i + 1), appearFadeInUp)
      }
      removeFadeInUp(".second_card")
    }
    else if (header >= sec_second) {
      let arrClass = [".second_card:nth-child(1)", ".second_card:nth-child(2)", ".second_card:nth-child(3)"]
      removeFadeInUp(".firsth2");
      removeFadeInUp(".firstp");
      for (let i = 0; i < arrClass.length; i++) {
        timeOut(arrClass[i], 100 * (i + 1), appearFadeInUp)
      }
    }
  }
  async function timeOut(a, b, cb) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        cb(a);
      }, b)
    })
  }
  function appearFadeInUp(section) {
    $(section).addClass("animated fadeInUp")
  }
  function removeFadeInUp(section) {
    $(section).removeClass("animated fadeInUp")
  }
});