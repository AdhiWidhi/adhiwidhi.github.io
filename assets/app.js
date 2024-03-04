window.addEventListener("load", () => {
  document.querySelector(".loader-wrap").classList.add("loader-hidden");
  document.querySelector(".loader").classList.add("loader-hidden");
});
$(document).ready(function () {

  var btn = $("#button");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });

  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "100");
  });

  // Aos
  AOS.init();
  AOS.init({
    once: false,
    mirror: true,
    easing: "ease-in",
    duration: 1200,
  });

  // Work Swiper
  function checkWidth() {
    var windowSize = $(window).width();
    if (windowSize < 768) {
      // Ukuran layar ponsel (misalnya)
      $("#gallery").remove();
      const swiper = new Swiper(".swiper", {
        // Optional parameters
        direction: "horizontal",
        autoHeight: true,
        loop: true,
        autoplay: true,
        // If we need pagination
        pagination: {
          el: ".swiper-pagination",
        },
      });
    } else {
      $(".swiper").remove();
    }
  }

  // Panggil fungsi deteksi ukuran layar
  checkWidth();
  // Work Gallery
  $(".fancybox").fancybox({
    openEffect: "elastic",
    closeEffect: "elastic",
    beforeShow: function () {
      this.title = $(this.element).data("caption");
    },
  });

  $(".zoom").hover(
    function () {
      $(this).addClass("transition");
    },
    function () {
      $(this).removeClass("transition");
    }
  );
});
