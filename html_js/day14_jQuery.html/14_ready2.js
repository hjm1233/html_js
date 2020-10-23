// window.onload=function(){
// window.addEventListener("load",function(){
// $(window).load(function(){
// window.addEventListener("DOMContentLoaded",function(){
// $(window).on("DOMContentLoaded",function(){
$(function(){
  alert("仅DOM内容加载完成，就提前为btn1绑定事件");
  $("#btn2").click(function(){
    alert("btn2 疼!")
  })
});//千万不要加()，因为不是立刻执行，而是等事件发生时才自动执行！
