$(document).ready(function(){
  $('#yo').append("Hey everybody!");
});

//When the code gets longer, you can declare a function separately and insert only the function name.
$(document).ready(function(){
  heyEverybody();
});

function heyEverybody(){
  $('#yo').append("Hey everybody!");
}