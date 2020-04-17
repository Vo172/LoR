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
});