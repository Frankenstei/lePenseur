$(function(){
var textField=$("#textfield").text();
$("#add").on("click",function(){
$("list").append(textField);
});
});
