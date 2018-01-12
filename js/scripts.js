$(document).ready(function() {
  $("#submitAnswers").click(function(event) {

    var javaScore = 0;
    var cScore = 0;
    var rubyScore = 0;

    var questions = $("select");

    var k = 1;
    var answered = "True";
    for (var i = 0; i < questions.length; i++) {
      //Validation - Check if they selected an answer other than the default answer of 'Select'
      var answerCheck = $("select#question"+k).val();
      if (answerCheck == "Select") {
        answered = "False";
      }
      //Check what answer they gave and add 1 to their score
      //alert("select#question"+k);
      var answer = $("select#question"+k).val();
      if (answer == "c") {cScore++;}
      if (answer == "ruby") {rubyScore++;}
      if (answer == "java") {javaScore++;}

      k++;
    }

    if (answered == "False") {
      alert("Some questions were not answered.");
    } else {
      alert("cScore"+cScore+" rubyScore"+rubyScore+" javaScore"+javaScore);

    }


    event.preventDefault();
  });
});
