//定义一个插件函数，保存到jquery的原型对象中
jQuery.prototype.myAccordion=function(){
  //1. 为元素自动添加样式: 
  //为当前父元素添加class accordion
  //因为将来是$("#my-accordion").myAccordion()使用函数的，所以
  //this->点前的$("#my-accordion")->当前父元素
  this.addClass("accordion")
  //return 当前父元素
  //为父元素下的所有奇数位置的元素加class title
  .children(":nth-child(2n+1)")
  .addClass("title")
  //return 所有奇数位置的元素
  //为所有奇数位置元素的下一个兄弟元素加class content fade
  .next()
  .addClass("content fade")
  //return 所有奇数位置元素的兄弟
  //为所有奇数位置元素的兄弟中第一个元素加class in
  //新: 想获得任意查找结果中第一个元素，可用: .first()
  .first()
  .addClass("in");
  //2. 为元素添加行为:
  console.log(`为元素添加行为`);
}