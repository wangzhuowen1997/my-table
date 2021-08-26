# 运行

### `npm start`

![image](https://user-images.githubusercontent.com/56719562/130942517-4e6edf82-75da-4a71-a591-b5795e1bbe0a.png)

###  VUE和react区别的感受
一是vue是响应式的，可以直接修改数据触发依赖，更新数据渲染页面，react需要通过setState来触发数据改变

二是语法特性，react是写js，比较灵活，组件可以通过传入一个render函数来动态控制内部渲染，vue提供了一套自己的单文件组件规范.vue，约束强但是不够灵活

react通过props传入render函数的形式在vue中是以插槽的形式存在

三是父子组件通信：vue里面用派发事件的形式，react调用回调。父组件把他的方法通过props传递给子组件，子组件调用这个方法来通信

