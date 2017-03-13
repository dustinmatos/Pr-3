var idleTime = 0;
$(document).ready(function () {
    //Increment the idle time counter every minute.
    var idleInterval = setInterval(timerIncrement, 100); // 1 minute

    //Zero the idle timer on mouse movement.
    $(this).on({ “.touchend” : function (){
        idleTime = 0;
}
    });
});

function timerIncrement() {
    idleTime = idleTime + 1;
    if (idleTime > 19) { // 20 minutes
        window.location.reload();
    }
}

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
