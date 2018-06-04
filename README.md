# IFE-2017
## 百度IFE学院2017的部分课程作业
- binbin学院主要是对JavaScript的学习，涉及DOM操作，简单排序等知识；
- xiaowei学院是对html+css的练习，涉及页面布局等知识；
## binbin学院
### task 7 
- JS动态实现二叉树的前序、中序、后序便利  
![image](https://github.com/LLLLLea/ife-2017/blob/master/images/task7.JPG)
### task 6
- 模拟队列的插入、删除、关键字查询  
![image](https://github.com/LLLLLea/ife-2017/blob/master/images/task6.JPG)
### task 5
![image](https://github.com/LLLLLea/ife-2017/blob/master/images/task5-1.JPG)  
![image](https://github.com/LLLLLea/ife-2017/blob/master/images/task5-2.JPG)
#### 任务目的

- 学习与实践JavaScript的基本语法、语言特性
- 练习使用JavaScript实现简单的排序算法

#### 任务描述

- 基于上一任务
- 限制输入的数字在10-100
- 队列元素数量最多限制为60个，当超过60个时，添加元素时alert出提示
- 队列展现方式变化如图，直接用高度表示数字大小
- 实现一个简单的排序功能，如冒泡排序（不限制具体算法），用可视化的方法表达出来，参考见下方参考资料

#### 任务注意事项

- 实现简单功能的同时，请仔细学习JavaScript基本语法、事件、DOM相关的知识
- 请注意代码风格的整齐、优雅
- 代码中含有必要的注释
- 示例图仅为参考，不需要完全一致
- 具体算法及可视化的形式不做特别限制，只要求能够展现出算法的过程
- 建议不使用任何第三方库、框架

#### 思路：

1、先对input输入的数字进行判断；

2、对每个div元素（数字）的高度设置：newnode.style.height = text.value*2 + 'px';

3、排序采用冒泡排序

- 先将元素值保存到数组arr中，同时sortList=原先列表
- arr数组冒泡排序
- arr数组赋值给sortList，
  sortList.childNodes[i].innerHTML = arr[i];
  sortList.childNodes[i].style.height = arr[i]*2 +'px';
  返回sortList；

#### 附：

**JS-排序详解-冒泡排序**

说明

- 时间复杂度指的是一个算法执行所耗费的时间
- 空间复杂度指运行完一个程序所需内存的大小
- 稳定指，如果a=b,a在b的前面，排序后a仍然在b的前面
- 不稳定指，如果a=b，a在b的前面，排序后可能会交换位置

JS冒泡排序

原理

依次比较相邻的两个值，如果后面的比前面的小，则将小的元素排到前面。依照这个规则进行多次并且递减的迭代，直到顺序正确。

时间复杂度，空间复杂度，稳定性

- 平均时间复杂度O(n*n)
- 最好情况O(n)
- 最差情况O(n*n)
- 空间复杂度O(1)
- 稳定性：稳定

冒泡排序的写法



    var examplearr=[8,94,15,88,55,76,21,39];
    function sortarr(arr){
        for(i=0;i<arr.length-1;i++){
            for(j=0;j<arr.length-1-i;j++){
                if(arr[j]>arr[j+1]){
                    var temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }
            }
        }
        return arr;
    }
    sortarr(examplearr);
    console.log(examplearr);



解析

- 两个循环

- 当i=0的时候，里面的循环完整执行，从j=0执行到j=6,这也就是第一遍排序，结果是将最大的数排到了最后，这一遍循环结束后的结果应该是[8,15,88,55,76,21,39,94]

- 当i=1的时候，里面的循环再次完整执行，由于最大的数已经在最后了，没有必要去比较数组的最后两项，这也是j<arr.length-1-i的巧妙之处，结果是[8,15,55,76,21,39,88,94]

- 说到这里，规律就清楚了，每次将剩下数组里面最大的一个数排到最后面，当第一个循环执行到最后的时候，也就是i=6,此时，j=0,只需要比较数组的第一和第二项，比较完毕，返回。  
### task 4

#### 任务目的

- 学习与实践JavaScript的基本语法、语言特性
- 初步了解JavaScript的事件是什么
- 初步了解JavaScript中的DOM是什么

#### 任务描述

- 模拟一个队列，队列的每个元素是一个数字，初始队列为空
- 有一个input输入框，以及4个操作按钮
  - 点击"左侧入"，将input中输入的数字从左侧插入队列中；
  - 点击"右侧入"，将input中输入的数字从右侧插入队列中；
  - 点击"左侧出"，读取并删除队列左侧第一个元素，并弹窗显示元素中数值；
  - 点击"右侧出"，读取并删除队列又侧第一个元素，并弹窗显示元素中数值；
- 点击队列中任何一个元素，则该元素会被从队列中删除

#### 任务注意事项

- 实现简单功能的同时，请仔细学习JavaScript基本语法、事件、DOM相关的知识
- 请注意代码风格的整齐、优雅
- 代码中含有必要的注释
- 示例图仅为参考，不需要完全一致
- 需要考虑数字输入的合法性
- 建议不使用任何第三方库、框架

#### 思路：

- 首先写好html界面元素，如<input> <button> <div>（数字显示区）；
- 在js中：
1.   document.getElementById() 获取元素对象；
2.   对左侧入、右侧入，先判断输入框内是否是有效数字，如果不是，弹出警示框；  
如果是有效数字，document.createElement()产生新节点，并插入节点  
<!--插入后成为第一个子节点；-->
       someNode.insertBefore(newnode,someNode.firstChild)  
<!-- 插入后成为最后一个子节点；-->
       someNode.insertBefore(newnode,null)
3. 对左侧出、右侧出，使用removeChild()方法;  
<!--移除第一个节点-->
       removeChild(someNode.firstChild);  
<!--移除最后一个节点-->
       removeChild(someNode.lastChild);
4. 点击队列中任何一个元素，则该元素会被从队列中删除
       addEventListener("click",function());
       event.target：target 可返回事件的目标节点（触发该事件的节点），如生成事件的元素、文档或窗口。
5. isNaN(value)
        NaN：Not-A-Number,不是一个数字
        value是数字，返回false；value不是数字，返回true；
- 注：isNaN()会首先尝试将这个参数转换为数值，然后才会对转换后的结果是否是NaN进行判断。因此，对于能被强制转换为有效的非NaN数值来说（ 值得一提的是，空字符串和布尔值会被强制转换为数值0或1），会返回false值。
      
## xiaowei学院
**三栏式布局（两边宽度固定，中间区自适应）**  
每种布局的优缺点

#### 1、流体布局
#### 2、BFC布局      
- overflow:hidden;
- float:left
- float:right

主要内容区无法最先加载，当页面中内容较多时，会影响用户体验（html中按照left-right-main 顺序）



#### 3、圣杯布局
#### 4、双飞翼布局
- 前三部曲相同...

#### 5、绝对布局   
- 左右设置position:absolute;(同时设置top，left，right）
- 左右两栏采用绝对定位抽离文档流，分别固定于页面的左右两侧
- 中间栏用左右margin值撑开可以容纳左右边栏的距离。
(html中，左右中三个顺序可随意颠倒）

#### 6、flex布局
- 目前移动端的布局用的flex box
- IE浏览器兼容性问题，不能兼容IE8及以下浏览器

#### 7、Table布局
