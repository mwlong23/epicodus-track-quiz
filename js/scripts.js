$(document).ready(function(){
  $("form#quiz").submit(function(event){
    event.preventDefault();

    var answer1 = $("#question1").val();
    var answer2 = $("#question2").val();
    var answer3 = $("#question3").val();
    var answer4 = $("input:radio[name=answer4]:checked").val();
    var answer5 = $("#startDate").val();
    var blankForm = ""
    alert(answer1+" "+answer2+" "+answer3+" "+answer4+" "+answer5+" ")


    if (answer1 === "" || answer2 === "" || answer3 === ""){
      alert("You are missing one or more answers, please answer all questions!");
      blankForm = "invalidInput";


    } else if (answer4 === "stillConsidering"){
      $("#result1").show();

    } else
    if(answer4 === "nightTrack"){
      $("#result2").show();

    }else if(answer3=== "I've always been interested in making my own Wordpress themes!"){
      $("#result3").show();

    }else if(answer1 ==="I enjoy organizing things, simplifying them and Beautifying them." || answer2 ==="Looking for new and colorful ways to express myself." ){
      $("#result4").show();

    }else if(answer2 ==="Feeling like websites I visit are lacking features I could make." || answer3 === "I surf the internet more than I use apps on my phone and I've always wondered what was under the hood and tinkering."){
      $("#result5").show();

    }else if(answer2 === "Glued to my phone, I can't put it down.  My friends hate it." && answer3 === "I'm interested in working at a really established tech company like Microsoft" ){
      $("#result6").show();
    }
    else {
      $("#result7").show();
    }

    if(blankForm ===""){
      $("form#quiz").hide();
    } else {
      
    }

  });
});
