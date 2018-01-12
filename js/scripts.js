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

  var questions = $("select");
  var k = 1;
  for (var i = 0; i < questions.length; i++) {
    $("select#question"+k+" option:not(.first)").shuffle();
    k++;
  }

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
      $(".hide").show();
      $(".item span").remove();
      if (javaScore>0) {
        $(".java").show().css("width", javaScore+"00px").append('<span> '+javaScore+"/"+questions.length+'</span>');
      }
      if (cScore>0) {
        $(".c").show().css("width", cScore+"00px").append('<span> '+cScore+"/"+questions.length+'</span>');
      }
      if (rubyScore>0) {
      $(".ruby").show().css("width", rubyScore+"00px").append('<span> '+rubyScore+"/"+questions.length+'</span>');
      }
      if (phpScore>0) {
      $(".php").show().css("width", phpScore+"00px").append('<span> '+phpScore+"/"+questions.length+'</span>');
      }
      //remove items that are 0 if they don't refresh
      if (javaScore == 0){$(".java").hide();}
      if (phpScore == 0){$(".php").hide();}
      if (cScore == 0){$(".c").hide();}
      if (rubyScore == 0){$(".ruby").hide();}
    }


    event.preventDefault();
  });


});
