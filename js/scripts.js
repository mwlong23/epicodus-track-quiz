$(document).ready(function(){
  $("form#quiz").submit(function(event){
    event.preventDefault();

    var answer1 = $("#question1").val();
    // alert(answer1 + answer2 + answer3  + answer5 + "    -" +"made it past answer1");
    var answer2 = $("#question2").val();
    // alert(answer1 + answer2 + answer3 +  answer5 + "    -" +"made it past answer1");
    var answer3 = $("#question3").val();
    // alert(answer1 + answer2 + answer3 +  answer5 + "    -" +"made it past answer1");
    var answer4 = $("input:radio[name=answer4]:checked").val();
    var dob = $("#born").val();
    alert(answer1 + answer2 + answer3 + dob + answer4 + "    -" +"made it past answer1");

  });
});
