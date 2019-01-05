window.onload = function(){

	var dingbu = document.getElementsByClassName('dingbu')[0];
	var headHeight = document.getElementById('headHeight');
	window.onscroll = function(){

		var st = document.documentElement.scrollTop||document.body.scrollTop;
		if (st>180) {
			dingbu.style.position = 'fixed';
			dingbu.style.top = "0px";
			headHeight.style.height = "153px"
		}
		else{
			dingbu.style.position = 'static';
			headHeight.style.height = "0px"
		}
	}

	window.onload = roll(50);

	function roll(t){
		var ul1 = document.getElementById("ul1");
    	var ul2 = document.getElementById("ul2");
    	var kuai42 = document.getElementById("kuai42");
    	ul2.innerHTML = ul1.innerHTML;
    	kuai42.scrollTop = 0;
    	var timer = setInterval(rollStart, 50);
    	kuai42.onmouseover = function () {
        	    clearInterval(timer)
        	}
    	kuai42.onmouseout = function () {
        	    timer = setInterval(rollStart, 50);
        	}
}

function rollStart() {
    if (kuai42.scrollTop >= ul1.scrollHeight) {
        kuai42.scrollTop = 0; 
    }else {
        kuai42.scrollTop++;
    }
}

}
 function getStyle(obj, attr) { //返回值带有单位px  解决兼容性问题
  	if (obj.currentStyle) {//只兼容IE
  		return obj.currentStyle[attr];
  	} else {
  		return getComputedStyle(obj, null)[attr];//只兼容谷歌
  	}
  }

  function animate(obj, json, callback) {
  	clearInterval(obj.timer);
  	obj.timer = setInterval(function () {
  		var flag = true;
  		for (var attr in json) {
  			(function (attr) {
  				if (attr == "opacity") {
  					var now = parseInt(getStyle(obj, attr) * 100);
  					var dest = json[attr] * 100;
  				} else {
  					var now = parseInt(getStyle(obj, attr));
  					var dest = json[attr];
  				}
  				var speed = (dest - now) / 6;
  				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
  				if (now != dest) {
  					flag = false;
  					if (attr == "opacity") {
  						obj.style[attr] = (now + speed) / 100;
  					} else {
  						obj.style[attr] = now + speed + "px";
  					}
  				}
  			})(attr);
  		}
  		if (flag) {
  			clearInterval(obj.timer);
  			callback && callback(); //如果回调函数存在，就调用回调函数
  		}
  	}, 30);
  }

var box = document.getElementById('box');
var left = document.getElementById('left');
var right = document.getElementById('right');
var oNavlist = document.getElementById('nav').children;
var slider = document.getElementById('slider');
var index = 1;
var timer;
var isMoving = false;
box.onmouseover = function(){
	animate(left, {
				opacity: 0.6
			})
			animate(right, {
				opacity: 0.6
			})
	clearInterval(timer)
}
box.onmouseout = function(){
	animate(left, {
				opacity: 0
			})
			animate(right, {
				opacity: 0
			})
	timer = setInterval(next, 3000);
}
right.onclick = next;
left.onclick = prev;
for (var i = 0; i < oNavlist.length; i++) {
			oNavlist[i].index = i;
			oNavlist[i].onclick = function () {
				index = this.index + 1;
				navmove();
				animate(slider, {
					left: (-800 * index)
				});
			}

		}
function navmove() {
			for (var i = 0; i < oNavlist.length; i++) {
				oNavlist[i].className = "";
			}
			if (index > 6) {
				oNavlist[0].className = "active";
			} else if (index <= 0) {
				oNavlist[5].className = "active";
			} else {
				oNavlist[index - 1].className = "active";
			}
		}
function next(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index++;
	navmove();
	animate(slider,{left:-800*index},function(){
		if(index==7){
			slider.style.left = '-800px';
			index = 1;
		}
		isMoving = false;
	});
}
function prev(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index--;
	navmove();
	animate(slider,{left:-800*index},function(){
		if(index==0){
			slider.style.left = '-4800px';
			index = 6;
		}
		isMoving = false;
	});
}
function navmove(){
	for( var i=0; i<oNavlist.length; i++ ){
		oNavlist[i].className = "";
	}
	if(index >6 ){
		oNavlist[0].className = "active";
	}else if(index<=0){
		oNavlist[5].className = "active";
	}else {
		oNavlist[index-1].className = "active";
	}
}
timer = setInterval(next, 3000);



var select=document.getElementById("select");
var p=document.getElementById("p");
select.onchange=function(){
	p.innerHTML="￥"+""+select.value;
}
