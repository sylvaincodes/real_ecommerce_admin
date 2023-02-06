// Caracteres restants sur les inputs
$(document).ready(function () {
  $("#titre").on("keyup", function () {
      
      let string = $("#titre").val();
      let counter = $("#titre").data("counter");
      let left = counter - string.length;

      let counterElement = $("#titre")[0].nextElementSibling ;
      counterElement.innerHTML =  '( ' +left+ ' caractère(s) restantes'
  });
  
  $("#pourcentage").on("keyup", function () {
      
      let string = $("#pourcentage").val();
      let counter = $("#pourcentage").data("counter");
      let left = counter - string.length;

      let counterElement = $("#pourcentage")[0].nextElementSibling ;
      counterElement.innerHTML =  '( ' +left+ ' caractère(s) restantes'
  }); 
  
  $("#priorite").on("keyup", function () {
      
      let string = $("#priorite").val();
      let counter = $("#priorite").data("counter");
      let left = counter - string.length;

      let counterElement = $("#priorite")[0].nextElementSibling ;
      counterElement.innerHTML =  '( ' +left+ ' caractère(s) restantes'
  });
});
