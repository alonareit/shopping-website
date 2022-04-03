jQuery(document).ready(function ($) {
  //if you change this breakpoint in the style.css file, don't forget to update this value as well
  var $L = 1200,
    $cart_trigger = $("#cd-cart-trigger"),
    $lateral_cart = $("#cd-cart"),
    $shadow_layer = $("#cd-shadow-layer");

  //open cart
  $cart_trigger.on("click", function (event) {
    event.preventDefault();
    toggle_panel_visibility($lateral_cart, $shadow_layer, $("body"));
  });

  //close lateral cart
  $shadow_layer.on("click", function () {
    $lateral_cart.removeClass("speed-in");
    $shadow_layer.removeClass("is-visible");
    $("body").removeClass("overflow-hidden");
  });

  $(window).on("resize", function () {
    if ($(window).width() >= $L) {
      $shadow_layer.removeClass("is-visible");
      $("body").removeClass("overflow-hidden");
    }
  });
});

function toggle_panel_visibility($lateral_panel, $background_layer, $body) {
  if ($lateral_panel.hasClass("speed-in")) {
    $lateral_panel.removeClass("speed-in");
    $background_layer.removeClass("is-visible");
    $body.removeClass("overflow-hidden");
  } else {
    $lateral_panel.addClass("speed-in");
    $background_layer.addClass("is-visible");
    $body.addClass("overflow-hidden");
  }
}

function move_navigation($navigation, $MQ) {
  if ($(window).width() >= $MQ) {
    $navigation.detach();
    $navigation.appendTo("header");
  } else {
    $navigation.detach();
    $navigation.insertAfter("header");
  }
}
