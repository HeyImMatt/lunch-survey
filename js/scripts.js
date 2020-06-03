$(document).ready(function() {
  $("form#lunchtime-survey").submit(function(event) {
    event.preventDefault();
    const firstName = $("#firstName").val();
    const lastName = $("#lastName").val();
    const beverageChoice = $("#beverageChoice").val();
    const dessert =  $("input:radio[name=dessert]:checked").val();
    const lunchDate = $("#lunchDate").val();
    const colorGroup = $("#colorGroup").val();

    $(".firstName").text(firstName);
    $(".lastName").text(lastName);
    $(".beverageChoice").text(beverageChoice);
    $(".dessert").text(dessert);
    $(".lunchDate").text(lunchDate);
    $(".colorGroup").text(colorGroup);
    $(".colorGroup").css("color", colorGroup);
    $("#surveyResults").toggle();
  })
})