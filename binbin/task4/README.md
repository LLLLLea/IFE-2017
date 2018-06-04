# task4

### 任务目的

- 学习与实践JavaScript的基本语法、语言特性
- 初步了解JavaScript的事件是什么
- 初步了解JavaScript中的DOM是什么

### 任务描述

- [如图](http://7xrp04.com1.z0.glb.clouddn.com/task_2_18_1.jpg)，模拟一个队列，队列的每个元素是一个数字，初始队列为空
- 有一个input输入框，以及4个操作按钮
  - 点击"左侧入"，将input中输入的数字从左侧插入队列中；
  - 点击"右侧入"，将input中输入的数字从右侧插入队列中；
  - 点击"左侧出"，读取并删除队列左侧第一个元素，并弹窗显示元素中数值；
  - 点击"右侧出"，读取并删除队列又侧第一个元素，并弹窗显示元素中数值；
- 点击队列中任何一个元素，则该元素会被从队列中删除

### 任务注意事项

- 实现简单功能的同时，请仔细学习JavaScript基本语法、事件、DOM相关的知识

- 请注意代码风格的整齐、优雅

- 代码中含有必要的注释

- 示例图仅为参考，不需要完全一致

- 需要考虑数字输入的合法性

- 建议不使用任何第三方库、框架

  ​

## `思路：`

- 首先写好html界面元素，如<input> <button> <div>（数字显示区）；

- 在js中：

  1、`document.getElementById()` 获取元素对象；

  2、对左侧入、右侧入，先判断输入框内是否是有效数字，如果不是，弹出警示框；

  ​     如果是有效数字，`document.createElement()`产生新节点，并插入节点

  ​     <!--插入后成为第一个子节点；-->

  ​     `someNode.insertBefore(newnode,someNode.firstChild)`

  ​    <!-- 插入后成为最后一个子节点；-->

  ​     `someNode.insertBefore(newnode,null)`

  3、对左侧出、右侧出，使用`removeChild()`方法；

  ​     <!--移除第一个节点-->

  ​     `removeChild(someNode.firstChild);`

  ​      <!--移除最后一个节点-->

  ​     `removeChild(someNode.lastChild);`

  4、点击队列中任何一个元素，则该元素会被从队列中删除

  ​     `addEventListener("click",function());`

  ​     **event.target**：target 可返回事件的目标节点（触发该事件的节点），如生成事件的元素、文档或窗口。

  5、isNaN(value)

  ​      NaN：Not-A-Number,不是一个数字

  ​      value是数字，返回false；value不是数字，返回true；

  ​     注：`isNaN()`会首先尝试将这个参数转换为数值，然后才会对转换后的结果是否是[`NaN`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NaN)进行判断。因此，对于能被强制转换为有效的非`NaN`数值来说（ 值得一提的是，空字符串和布尔值会被强制转换为数值0或1），会返回false值。

  ​    

  ​      

