this.scrollBtn = document.querySelector(".agencies-slogan .scrol-button");
this.scrollBtn.addEventListener("click", scroll);
		      
function scroll() {
	let itr = setInterval(() => {		
		let viewport = document.documentElement.clientHeight;
		let yOffset = window.pageYOffset;
		let documentHeight = document.body.offsetHeight;

		if(viewport + yOffset == documentHeight)
			clearInterval(itr) 
		else 
			window.scrollBy(0, 20);
	}, 0.5);
}
  
let burger = document.querySelector(".site-header .burger");
let burgerBtn = burger.querySelectorAll(".burger-button");
let menu = document.querySelector(".site-header .menu");
let transforFlag = true;
burger.addEventListener("click", btnAnimation);
burger.addEventListener("click", menuAnimation);
  

function btnAnimation() {
	burgerBtn.forEach(item => item.classList.toggle("active"));
}

function menuAnimation() {
	transforFlag ? menu.style.transform = "translate(0px)" : menu.style.transform = "translate(12000px)";
	transforFlag = !transforFlag;
	console.log(transforFlag);
}



