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
  $(".back").click(function(){
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
  async function timeOut(a,b,cb){
    return Promise((resolve, reject) => {
      setTimeout(()=>{
        cb(a);
      },b)
    })
  }

  function appearFadeInUp(section){
    $(section).addClass("animated fadeInUp")
  }
  // window.onscroll = function () { scrollFunction() };
  // function scrollFunction(){
  //   var screen_height = $( window ).height();
  //   var header = $("header").offset().top;
  //   var sec_first = $(".sec_first").offset().top;
  //   if(header > (sec_first - (screen_height/2))){
  //     console.log(1);
  //   }
  //   else console.log(0)
  // }
});