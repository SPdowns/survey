$(document).ready(function() {
  $("#survey").submit(function(){
    event.preventDefault();
    const nameInput = $("input#name").val();
    const ageInput = $("input#age").val();
    const articleInput= $("#article").val(); 
    const flavorInput= $("input:radio[name=flavor]:checked").val(); 

    $("#nameSpan").text(nameInput);
    $("#ageSpan").text(ageInput);
    $("#articleSpan").text(articleInput);
    $("#flavorSpan").text(flavorInput);

  });
});