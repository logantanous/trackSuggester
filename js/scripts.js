$(document).ready(function() {

  //randomize answers utilizing https://css-tricks.com/snippets/jquery/shuffle-dom-elements/
  (function($){
      $.fn.shuffle = function() {
          var allElems = this.get(),
              getRandom = function(max) {
                  return Math.floor(Math.random() * max);
              },
              shuffled = $.map(allElems, function(){
                  var random = getRandom(allElems.length),
                      randEl = $(allElems[random]).clone(true)[0];
                  allElems.splice(random, 1);
                  return randEl;
             });
          this.each(function(i){
              $(this).replaceWith($(shuffled[i]));
          });
          return $(shuffled);
      };
  })(jQuery);
  $('select option:not(.first)').shuffle();


  //start of scoring

  $("#submitAnswers").click(function(event) {

    var javaScore = 0;
    var cScore = 0;
    var rubyScore = 0;
    var phpScore = 0;

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
      if (answer == "php") {phpScore++;}


      k++;
    }

    if (answered == "False") {
      alert("Some questions were not answered.");
    } else {
      alert("cScore"+cScore+" rubyScore"+rubyScore+" javaScore"+javaScore+" phpScore"+phpScore);

    }


    event.preventDefault();
  });


});
