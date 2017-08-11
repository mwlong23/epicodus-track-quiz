$(document).ready(function(){
  $("form#quiz").submit(function(event){
    event.preventDefault();

    var answer1 = $("#question1").val();
    var answer2 = $("#question2").val();
    var answer3 = $("#question3").val();
    var answer4 = $("input:radio[name=answer4]:checked").val();
    var answer5 = $("#startDate").val();
    alert(answer1 + answer2 + answer3 + answer5 + answer4 + "    -" +"made it past answer1");

    if (answer1 === "" || answer2 === "" || answer3 === ""){
      alert("You are missing one or more answers, please answer all questions!");
    } else {
      $("#result5").show();
    }

    $("form#quiz").hide();

  });
});
