# task5

### 任务目的

- 学习与实践JavaScript的基本语法、语言特性
- 练习使用JavaScript实现简单的排序算法

### 任务描述

- 基于上一任务
- 限制输入的数字在10-100
- 队列元素数量最多限制为60个，当超过60个时，添加元素时alert出提示
- 队列展现方式变化[如图](http://7xrp04.com1.z0.glb.clouddn.com/task_2_19_1.jpg)，直接用高度表示数字大小
- 实现一个简单的排序功能，如冒泡排序（不限制具体算法），用可视化的方法表达出来，参考见下方参考资料

### 任务注意事项

- 实现简单功能的同时，请仔细学习JavaScript基本语法、事件、DOM相关的知识
- 请注意代码风格的整齐、优雅
- 代码中含有必要的注释
- 示例图仅为参考，不需要完全一致
- 具体算法及可视化的形式不做特别限制，只要求能够展现出算法的过程
- 建议不使用任何第三方库、框架



# 思路：

1、先对input输入的数字进行判断；

2、对每个div元素（数字）的高度设置：`newnode.style.height = text.value*2 + 'px';`

3、排序采用冒泡排序

- 先将元素值保存到数组arr中，同时sortList=原先列表

- arr数组冒泡排序

- arr数组赋值给sortList，

  `sortList.childNodes[i].innerHTML = arr[i];`

  `sortList.childNodes[i].style.height = arr[i]*2 +'px';`

  返回sortList；



附：

# [JS-排序详解-冒泡排序](http://www.cnblogs.com/zhouliang/p/6638010.html)

#### 说明

- 时间复杂度指的是一个算法执行所耗费的时间
- 空间复杂度指运行完一个程序所需内存的大小
- 稳定指，如果a=b,a在b的前面，排序后a仍然在b的前面
- 不稳定指，如果a=b，a在b的前面，排序后可能会交换位置

### JS冒泡排序

#### 原理

##### 依次比较相邻的两个值，如果后面的比前面的小，则将小的元素排到前面。依照这个规则进行多次并且递减的迭代，直到顺序正确。

#### 时间复杂度，空间复杂度，稳定性

- 平均时间复杂度O(n*n)
- 最好情况O(n)
- 最差情况O(n*n)
- 空间复杂度O(1)
- 稳定性：稳定

#### 冒泡排序的写法

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
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
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

#### 解析

##### 两个循环

##### 当i=0的时候，里面的循环完整执行，从j=0执行到j=6,这也就是第一遍排序，结果是将最大的数排到了最后，这一遍循环结束后的结果应该是[8,15,88,55,76,21,39,94]

##### 当i=1的时候，里面的循环再次完整执行，由于最大的数已经在最后了，没有必要去比较数组的最后两项，这也是j<arr.length-1-i的巧妙之处，结果是[8,15,55,76,21,39,88,94]

##### 说到这里，规律就清楚了，每次将剩下数组里面最大的一个数排到最后面，当第一个循环执行到最后的时候，也就是i=6,此时，j=0,只需要比较数组的第一和第二项，比较完毕，返回。