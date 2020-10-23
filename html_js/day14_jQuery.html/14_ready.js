//希望必须在页面内容加载完成后才查找元素，绑定事件
// window.onload=function(){
// window.addEventListener("load",function(){
// $(window).load(function(){
// window.addEventListener("DOMContentLoaded",function(){
// $(window).on("DOMContentLoaded",function(){
$(function(){
  alert("仅DOM内容加载完成，就提前为btn1绑定事件");
  $("#btn1").click(function(){
    alert("btn1 疼!")
  })
})//千万不要加()，因为不是立刻执行，而是等事件发生时才自动执行！