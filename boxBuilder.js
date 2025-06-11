let cursor = document.getElementById("cursor");


document.addEventListener("mouseenter", function(event) {
	cursor.style.display = "block";
	cursor.style.top = (event.pageY - (cursor.getBoundingClientRect().height / 2)) + "px";
	cursor.style.left = (event.pageX - (cursor.getBoundingClientRect().width / 2)) + "px";
});

document.addEventListener("mouseleave", function() {
	cursor.style.display = "none";
});

let map = document.querySelector("[name='Map']");
let interactables = document.querySelectorAll(".inter");
let tooltip = document.getElementById("tooltip");

interactables.forEach(obj => {
	obj.addEventListener("mouseover", function(event){
		tooltip.textContent = obj.getAttribute("name").toLocaleUpperCase();
		tooltip.style.display = "block";
		let bodyRect = obj.getBoundingClientRect();

		let dfrnc = tooltip.getBoundingClientRect().height - obj.getBoundingClientRect().height;
		tooltip.style.top = `${bodyRect.top - dfrnc/2}px`;
	});

	obj.addEventListener("mouseout", function(){
		tooltip.style.display = "none";
	});

	obj.addEventListener("click", function() {
		window.location.href = `${obj.getAttribute("name")}.html`;
	})
});


(function() {

	document.onmousemove = handleMouseMove;
	function handleMouseMove(event) {

		cursor.style.display = "block";
		cursor.style.top = `${event.pageY - (cursor.getBoundingClientRect().height / 2)}px`;
		cursor.style.left = `${event.pageX - (cursor.getBoundingClientRect().width / 2)}px`;
		tooltip.style.left = `${event.pageX + 40}px`

	}
})();