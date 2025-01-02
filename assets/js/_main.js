$(document).ready(function() {
  // Sticky Footer
  var bumpIt = function() {
      $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
    },
    didResize = false;

  bumpIt();

  $(window).resize(function() {
    didResize = true;
  });
  setInterval(function() {
    if (didResize) {
      didResize = false;
      bumpIt();
    }
  }, 250);

  // FitVids init
  $("#main").fitVids();

  // Sticky Sidebar Initialization
  $(".sticky").Stickyfill();

  var stickySideBar = function() {
    var show = $(".author__urls-wrapper button").length === 0 ? $(window).width() > 1024 : !$(".author__urls-wrapper button").is(":visible");
    if (show) {
      Stickyfill.rebuild();
      Stickyfill.init();
      $(".author__urls").show();
    } else {
      Stickyfill.stop();
      $(".author__urls").hide();
    }
  };

  // Adjust Sidebar Width Dynamically
  var adjustSidebarWidth = function() {
    if ($(window).width() > 1024) {
      $(".author__urls-wrapper").css({
        "width": "300px",
        "max-width": "300px"
      });
    } else {
      $(".author__urls-wrapper").css({
        "width": "100%"
      });
    }
  };

  stickySideBar();
  adjustSidebarWidth();

  $(window).resize(function() {
    stickySideBar();
    adjustSidebarWidth();
  });

  // Smooth Scroll
  $("a").smoothScroll({ offset: -20 });

  // Lightbox for Images
  $(".image-popup").magnificPopup({
    type: "image",
    gallery: {
      enabled: true
    },
    image: {
      tError: "<a href='%url%'>Image #%curr%</a> could not be loaded."
    },
    mainClass: "mfp-zoom-in",
    midClick: true
  });
});
