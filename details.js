window.onload = function(){

	var shang = document.getElementsByClassName('shang')[0];
	var headHeight = document.getElementById('headHeight');
	window.onscroll = function(){

		var st = document.documentElement.scrollTop||document.body.scrollTop;
		if (st>180) {
			shang.style.position = 'fixed';
			shang.style.top = "0px";
			headHeight.style.height = "153px"
		}
		else{
			shang.style.position = 'static';
			headHeight.style.height = "0px"
		}
	}

	// 选择商品规格
	var mlOption = document.getElementsByClassName("options");
	var selectedAmount = document.getElementById("selectedAmount");

	for (var i = 0; i < mlOption.length; i++) {
		mlOption[i].onclick = function () {
			for ( var j = 0; j < mlOption.length; j++){
				mlOption[j].classList.remove("active");
			}
			this.classList.add("active");
			selectedAmount.innerText = this.innerText;
		}
	}

	// 增减数量
	var sub =  document.getElementById("sub");
	var add =  document.getElementById("add");
	var buyAmountInput =  document.getElementById("buy-amount-input");
	var stock =  Number(document.getElementById("stock").innerText); // 库存数

	sub.onclick = function () {
		var amount = --buyAmountInput.value;
		if (amount <= 1) {
			sub.style.cursor = "not-allowed";
			buyAmountInput.value = 1;
		} else {
			if (amount < stock) { // 判断如果当前购买数量小于库存数量，让 +按钮变成手指状态（可加）
				add.style.cursor = "pointer";
			}
			sub.style.cursor = "pointer";
		}
	}
	add.onclick = function () {
		var amount = ++buyAmountInput.value;
		if (amount >= stock) {
			add.style.cursor = "not-allowed";
			buyAmountInput.value = stock;
		} else {
			if (amount > 1) {// 判断如果当前购买数量大于1，让 -按钮变成手指状态（可减）
				sub.style.cursor = "pointer";
			}
			sub.style.cursor = "pointer";
		}
	}

	var showImg =  document.getElementById("showImg");
	var bigImg =  document.getElementById("bigImg");
	
	var imgList =  document.getElementsByClassName("imgList");
	for (var i = 0; i < imgList.length; i++) {
		imgList[i].onclick = function() {
			for (var j = 0; j < imgList.length; j++){
				imgList[j].classList.remove("active");
			}
			this.classList.add("active");
			showImg.src = this.dataset['src'];
			bigImg.src = this.dataset['src'];
		}
	}


	
	// 放大镜效果
	var imgBox = document.getElementsByClassName("good-img-box")[0];
	var small = document.getElementsByClassName("good-img")[0];
	var slider = document.getElementsByClassName("slider")[0];
	var big = document.getElementById("big");
	var bigImg = document.getElementById("bigImg");
	//让slider跟随鼠标移动.给小的方块绑定事件
	small.onmousemove = function(e) {
	    var even = e || window.event; //兼容火狐浏览器
	    var x = even.clientX - imgBox.offsetLeft - slider.offsetWidth/2;
	    var y = even.clientY - imgBox.offsetTop - slider.offsetHeight/2;
		//水平方向的最大值
	    var maxX = small.clientWidth - slider.clientWidth;
		//竖直方向的最大值
	    var maxY = small.clientHeight - slider.clientHeight;
		
		x = x > maxX ? maxX : x < 0 ? 0 : x;
		y = y > maxY ? maxY : y < 0 ? 0 : y;
	    
	    slider.style.top = y + "px";
	    slider.style.left = x + "px";

	    big.scrollLeft = x/maxX * (bigImg.clientWidth - big.clientWidth);
	    big.scrollTop = y/maxY * (bigImg.clientHeight -big.clientHeight);
	};
	
	//鼠标移入事件
	small.onmouseenter = function(){
		//鼠标移入到缩略图时候让上面出现小的方块
		slider.style.display = "block";
		// 右侧的大图区域显示出来图片
		big.style.display = "block";
	};
	
	//移除事件
	//添加鼠标移出事件,鼠标移出缩略图的时候
	small.onmouseleave = function(){
		slider.style.display = "none";
		big.style.display = "none";
	};





	
	var continueBuy =  document.getElementById("continue");
	var closeLayer =  document.getElementById("closeLayer");
	var layer =  document.getElementById("layer");
	var addShopping =  document.getElementsByClassName("add-shopping")[0];

	// 显示模态框
	addShopping.onclick = function () {
		layer.style.display = "block";
	}

	continueBuy.onclick = function () {
		closelayer()
	}
	closeLayer.onclick = function () {
		closelayer()
	}
	// 关闭模态框
	function closelayer() {
		layer.style.display = "none";
	}
}