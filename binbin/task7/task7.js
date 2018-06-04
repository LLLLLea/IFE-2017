var bpre = document.getElementById("preOrder");
var bin = document.getElementById("inOrder");
var bpost = document.getElementById("postOrder");
var treeNodes = [];
var treeRoot = document.getElementsByTagName("div")[0];
var timer = null;
bpre.onclick = function(){
	reset();
	preOrder(treeRoot);
	changeColor();
};
bin.onclick = function(){
	reset();
	inOrder(treeRoot);
	changeColor();
};
bpost.onclick = function(){
	reset();
	postOrder(treeRoot);
	changeColor();
};

function preOrder(node){
	if(node!=null)
	{
		treeNodes.push(node);
		preOrder(node.firstElementChild);
		preOrder(node.lastElementChild);
	}
}
function inOrder(node){
	if(node!=null)
	{
		inOrder(node.firstElementChild);
		treeNodes.push(node);
		inOrder(node.lastElementChild);
	}
}
function postOrder(node){
	if(node!=null)
	{
		postOrder(node.firstElementChild);
		postOrder(node.lastElementChild);
		treeNodes.push(node);
	}
}
function changeColor(){
	var i=0;
	treeNodes[i].style.backgroundColor = "red";
	timer = setInterval(function(){
		i++;
		if(i<treeNodes.length){
			treeNodes[i-1].style.backgroundColor = "white";
			treeNodes[i].style.backgroundColor = "red";
		}
		else{
			clearInterval(timer);
			treeNodes[treeNodes.length-1].style.backgroundColor = "white";
		}
	},1000);
}
function reset(){
	clearInterval(timer);
	var divList = document.getElementsByTagName("div");
	for(var i=0;i<divList.length;i++){
		divList[i].style.backgroundColor = "white";
	}
}