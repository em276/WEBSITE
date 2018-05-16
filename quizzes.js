/**
 * author: elisa mulla
 * date : 15th May 2018
 * last modified : 23rd Feb 2018
 * An informative website about UK, and a simple quiz
 */
$(function() {
  //this should only work if you click a button
  //right now this is done on page load

  $("#q1").click(function() {
    $("#dialog").dialog({
      modal: blur,
      open: function() {
        jQuery(".ui-widget-overlay").bind("click", function() {
          jQuery("#dialog").dialog("close");
        });
      }
    });
  });

  $("#submit-answers").click(function() {
    var correctanswer = 1707;
    var choosenanswer = $("input[name='optradio1']:checked").val();
    if (correctanswer == choosenanswer) {
      alert("Correct");
    } else {
      alert("Please try again");
    }
  });
});
