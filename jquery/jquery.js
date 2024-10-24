// alert("Hello");
// $(".my-boss h1").text("two");      /*Jquery method: TEXT */
// $("#id-bar").text("hello id bar ");

// $("p, h1, h3").text("same bar");
// $("#id-bar").html("<b>the text blod</b>");   /*Jquery method: HTML */

// $("#id-bar").append(", in the normal text."); /*Jquery method: append (right bose text.) */

// $("#id-bar").prepend("In text start, "); /*Jquery method: TEXT (text left side prothom bosebe)*/

// var mypraX = $("<p></p>").text("this is my paragraph 0/1");   
// $("#id-bar").after(mypraX);         /*Jquery method : after(pore bose..)*/


// var secondP = $("<p></p>").text("This is my before text update..");
// $("#id-bar").before(secondP);


/* 
$("h1").css("color","red");
$("h1").css("font-size","4rem");
$("h1").css("font-style","italic");

$("h1").css(
    {"color":"red","font-size":"4rem","font-style":"italic", "background":"green", "padding":"10px", "border-radius":"30px"}    
);
*/

/*// document.querySelector("h1").classList.add("add");

$("h1").addClass("add  add2  add3");
*/ 

 /*  document.querySelector("button").addEventListener("click", function(){
    document.querySelector("h1").innerHTML = "The New paragraph";
})
$("button").click(function(){
    $("h1").text("place click button..........");
})
      */

/*$("button").click(function(){
    $("h1").toggleClass("add add2 add3")
   
   
    // $("button").mouseout(function(){
    // $("h1").toggleClass("add ")
})
})*/
/*

// var totalButton = document.querySelectorAll(".myButton").length;
//   console.log(totalButton)
// for(i =0; i< totalButton; i++){
//     document.querySelectorAll(".myButton")[i].addEventListener("click", function(){
//         var text = this.innerHTML;
//         document.querySelector("h1").innerHTML = text + "is clicked  ";
//     })
// }
$(".myButton").click(function(){
    var value = this.innerHTML;
    $("h1").text(value + "is clicked");
})
    $(".myButton").on( "click",function(){
    var value = this.innerHTML;
    $("h1").text(value + "is clicked");
})
 */
/*// var password1 = document.getElementById("pass1");
// var password2 = document.getElementById("pass2");
// var password1 = document.getElementById("loginButton");

$("#loginButton").click(function(){

      var password1 = $("#pass1").val();
      var password2 = $("#pass2").val();

      if(password1 != "" && password2 != ""){
          if(password1 == password2){
            alert("Successfully login");
          }
          else{
            alert("password mismatch")
          }
      }
      else{
    alert("plaec enter your password");
         }
})

 */


$("#btn").click(function (){
    alert("place button hide and show");
    // alert("place button show");
    // $("#id-div").hide(2000).show(2000);
    // $("#id-div").toggle(2000);
    // $("#id-div").fadeOut(2000);
    // $("#id-div").fadeIn(2000);
    // $("#id-div").fadeToggle(2000);
    // $("#id-div").fadeTo(2000,0.5);
    // $("#id-div").slideUp(3000);
    // $("#id-div").slideDown(2000);
    // $("#id-div").slideToggle(2000);
    // $("#id-div").slideUp(2000). slideDown(4000);
    // $("#id-div").fadeOut(2000). fadeIn(2000);

             /*animate methid*/
     $("#id-div").animate({height:"400px",width:"800px", marginTop:"40px", padding:"50px"}, 2000);                
})



