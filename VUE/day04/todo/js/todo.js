//创建todo组件
Vue.component("todo",{
  template:`<div>
    <h3>待办事项列表</h3>
    <todo-add></todo-add>
    <todo-list></todo-list>
  </div>`
})