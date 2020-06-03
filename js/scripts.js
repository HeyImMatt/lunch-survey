$(document).ready(function() {
  $("form#lunchtime-survey").submit(function(event) {
    event.preventDefault();
    const firstName = $("#firstName").val();
    const lastName = $("#lastName").val();
    const beverageChoice = $("#beverageChoice").val();
    const dessert =  $("input:radio[name=dessert]:checked").val();
    const lunchDate = $("#lunchDate").val();
    const colorGroup = $("#colorGroup").val();
    console.log(firstName, lastName, beverageChoice, dessert, lunchDate, colorGroup, typeof(colorGroup))

    $(".firstName").text(firstName);
    $(".lastName").text(lastName);
    $("#surveyResults").toggle();
  })
})