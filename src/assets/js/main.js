$(function() {
    $(".bg").addClass("opacity30");
    $(".wrapper").removeClass("invisible");
    $("#searchField").focus();


  setTimeout(function() {
    var input = document.getElementById("searchField");
    new Awesomplete(input, {list: document.querySelector("#resultsList")});
  }, 1000);
});
