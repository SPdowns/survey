$(document).ready(function() {
  $("#survey").submit(function(){
    event.preventDefault();
    const nameInput = $("input#name").val();
    const ageInput = $("input#age").val();
    //console.log(ageInput);
    const articleInput= $("#article").val(); 

    $("#nameSpan").text(nameInput);
    $("#ageSpan").text(ageInput);
    $("#articleSpan").text(articleInput);

  });
});