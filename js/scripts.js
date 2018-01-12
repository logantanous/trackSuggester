$(document).ready(function() {
  $("#submitAnswers").click(function(event) {
    var question1 = $("select#question1").val();
    var question2 = $("select#question2").val();
    var question3 = $("select#question3").val();
    var question4 = $("select#question4").val();
    var question5 = $("select#question5").val();

    /*if () {
      alert("Some questions were not answered.");
    } else {

    }*/

    event.preventDefault();
  });
});
