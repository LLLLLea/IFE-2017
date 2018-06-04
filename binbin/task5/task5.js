var text = document.getElementById("txt"); 
var blin = document.getElementById("lin");
var brin = document.getElementById("rin");
var blout = document.getElementById("lout");
var brout = document.getElementById("rout");
var bsort = document.getElementById("sort");
var num = document.getElementById("number");

function IsNum(){
	var maxlen = num.childNodes.length;
	if(isNaN(text.value) || text.value < 10 || text.value > 100 || text.value == "")
	{
		alert("Please input a number between 10 and 100!");
		return false;
	}
	if(maxlen > 60)
	{
		alert("The num of numbers has reached 60.");
		return false;
	}
	else
		return true;
}
blin.onclick = function(){
	if(IsNum()){
		var newnode = document.createElement("div");
		newnode.innerHTML=text.value;
		newnode.style.height = text.value*2 + "px";
		num.insertBefore(newnode,num.firstChild);  //插入到左边第一个节点
	}
}
brin.onclick = function(){
	if(IsNum()){
		var newnode = document.createElement("div");
		newnode.innerHTML=text.value;
		newnode.style.height = text.value*2 + "px";
		num.insertBefore(newnode,null);  //插入到左边第一个节点
	}
}
blout.onclick = function(){
	var delnum = num.firstChild;
	alert("Now Delete" + delnum.innerHTML);
	num.removeChild(delnum);
}
brout.onclick = function(){
	var delnum = num.lastChild;
	alert("Now Delete" + delnum.innerHTML);
	num.removeChild(delnum);
}
num.addEventListener("click",function(e){
	if(event.target.nodeName.toLowerCase() == 'div')
		num.removeChild(event.target);
});

bsort.onclick = function(){
	var arr = [];
	var len = num.childNodes.length;
	var sortList = num;
	for(var i=0;i<len;i++){
		arr[i] = num.childNodes[i].innerText;
	}
	for(var i=0;i<len-1;i++){
		for(var j=0;j<len-1-i;j++){
			if(arr[j]>arr[j+1]){
				var temp = arr[j];
				arr[j]=arr[j+1];
				arr[j+1]=temp;
			}
		}
	}
	for(var i=0;i<len;i++){
		sortList.childNodes[i].innerHTML = arr[i];
		sortList.childNodes[i].style.height = arr[i]*2 +'px';
	}
	return sortList;
}