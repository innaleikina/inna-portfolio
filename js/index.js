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
$("a").click(function(event) {
     var projectId = $(this).attr("id");
     $("#modal-" + projectId).css("display", "block");
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


// var i;
//  var modalArray = [("#modal-weather"), ("#modal-quote"), ("#modal-wikipedia"),("#modal-colmar"),("#modal-agent"),("#modal-brotherhood")];
//
// for (i =0; i < modalArray.length; i++){
//     $(modalArray[i]).css("display","none");
//     if ($(modalArray[i]).css("display", "block")){
//       console.log(modalArray[i]);
//       $(".arrow-right").on("click", function(){
//         $(modalArray[i]).hide();
//         $(modalArray[i + 1]).css("display","block");
//       })
//     };
// };





});
