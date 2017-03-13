$("#title").click(function() {
  $("#nav").slideDown('fast');
  $("#title").slideUp();
});

$("#history").click(function() {
  $("#gallery").slideDown('fast');
  $("#nav").slideUp();
});

$("#display").click(function() {
  $("#display-page").slideDown('fast');
  $("#nav").slideUp();
});

$(".back-btn").click(function() {
  var historyIsShown = $("#gallery").css("display");
  if (historyIsShown == "block") {
    $("#nav").slideDown('fast');
    $("#gallery").hide('fast');
  } else {
    $("#nav").slideDown('fast');
    $("#display-page").hide('fast');
  }
});
