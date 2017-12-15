$("document").ready(function(){

  $(window).scroll(function() {

  var scroll = $(window).scrollTop();

//navigation appers when user scrolls
     if (scroll >= 150) {
        $(function () {
            $(".all-small-boxes").hide();
    $(".scrolled-menu").css("display","block");
    $(".scrolled-menu").css("position","fixed");
        })
     } else {
         $(".all-small-boxes").show();
           $(".scrolled-menu").css("display","none");

     }

  });

//when user clicks the drop down menu it automatically closes, after taking the user to the requested page
  $(".drop-down-menu").hide();

  $(".fa-bars").on("click", function(){
     $(".drop-down-menu").toggle();
   });

   $(".drop-down-menu").on("click", function(){
     $(".drop-down-menu").hide();
   })

//Module pops up when user clicks on a project
// $(".modal").hide();

$("#weather").on("click", function(){
  $("#modal-weather").css("display","block");
  });



$("#quote").on("click", function(){
  $("#modal-quote").css("display","block");
  });


$("#wikipedia").on("click", function(){
  $("#modal-wikipedia").css("display","block");
 });

$("#colmar").on("click", function(){
  $("#modal-colmar").css("display","block");
});

$("#agent").on("click", function(){
  $("#modal-agent").css("display","block");
});

$("#brotherhood").on("click", function(){
  $("#modal-brotherhood").css("display","block");
});



$(".close").on("click", function(){
  $(".modal").hide();
});

// Closes the modal if user clicks anywhere on the screen
$(window).on("click", function(event) {
     var target = $(event.target);
    if (target.is (".modal")) {
        $(".modal").hide();
    }
});


});
