class project {

	constructor (name, desc, imgPth) {
		this.name = name;
		this.desc = desc;
		this.imgPth = imgPth;
	}

	getName() {
		return this.name;
	}

	getDesc() {
		return this.desc;
	}

	getImgPth() {
		return this.imgPth;
	}

}

// let projects = ["Pin Park", "Fords Wellness", "Team Game", "Perhe", "Defog", "Yellowgames", "Scratch", "Gargoyle", "Centrellas Website", "Wind Data App"]
let projects = [

	new project("Park Pin","Pin where you park", "images/pinPark.png"),
	new project("Ford Wellness", "School wellness block picker with live room updates.", "images/fordsWellnessProfileView.png"),
	new project("Team Game", "SurvivalIO Clone Team game project", "images/teamGame.png"),
	new project("Perhe", "Friends Card Game Mobile port.", "images/perheHand.png"),
	new project("Defog", "Vape detection app for school bathrooms.", "images/defogMap.png"),
	new project("Yellowgames", "Archive of games I have published under Yellowgames, with the website that I build to display them.", "images/yellowGamesAbout.png"),
	new project("Scratch", "My scratch account with some of the project I have worked on.", "images/scratchProfile.png"),
	new project("Centrellas Website", "My first large website project remaking a resturaunt website.", "images/supercell.png"),
	new project("Gargoyle", "A custom google browser face for ease of access to my classes when I was in High School.", "images/supercell.png"),
	new project("Wind Data App", "An app that tracks wind and weather data and displays the loaction and decodes the value.", "images/windDataApp.png"),
	new project("Fords Wellness", "A web app for my highschool for wellness day sign ups.", "images/fordsWellness.png")

];

let cursor = document.getElementById("cursor");


document.addEventListener("mouseenter", function(event) {
	cursor.style.display = "block";
	cursor.style.top = (event.pageY - (cursor.getBoundingClientRect().height / 2)) + "px";
	cursor.style.left = (event.pageX - (cursor.getBoundingClientRect().width / 2)) + "px";
});

document.addEventListener("mouseleave", function() {
	cursor.style.display = "none";
});


// (function() {

// document.onmouseover = handleMouseMove;
// 	function handleMouseMove(event) {

// 		if (event.relatedTarget) {
// 			if (event.relatedTarget.classList.contains("inter")) {
// 				console.log("in");
// 				let tooltip = document.getElementById("tooltip");
// 				tooltip.textContent = event.relatedTarget.getAttribute("name");
// 				tooltip.style.top = `${event.pageY}px`;
// 				tooltip.style.left = `${event.pageX}px`;
// 				tooltip.style.display = "block";
// 			}
// 		}
// 	}
// })();

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

// map.addEventListener("mouseover", function(){
// 	let tooltip = document.getElementById("tooltip");
// 	tooltip.textContent = map.getAttribute("name");
// 	tooltip.style.display = "block";
// });

// map.addEventListener("mouseout", function(){
// 	// let tooltip = document.getElementById("tooltip");
// 	// tooltip.textContent = map.getAttribute("name");
// 	tooltip.style.display = "none";
// });

// let tools = document.querySelector("[name='Inventory']");

// tools.addEventListener("mouseover", function(){
// 	let tooltip = document.getElementById("tooltip");
// 	tooltip.textContent = tools.getAttribute("name");
// 	tooltip.style.display = "block";
// });

// tools.addEventListener("mouseout", function(){
// 	// let tooltip = document.getElementById("tooltip");
// 	// tooltip.textContent = map.getAttribute("name");
// 	tooltip.style.display = "none";
// });

// (function() {

// document.onmouseout = handleMouseMove;
// 	function handleMouseMove(event) {

// 		if (event.relatedTarget) {
// 			if (event.relatedTarget.classList.contains("inter")) {
// 				console.log("out");
// 				let tooltip = document.getElementById("tooltip");
// 				tooltip.style.display = "none";
// 			}
// 		}
// 	}
// })();


(function() {

	document.onmousemove = handleMouseMove;
	function handleMouseMove(event) {

		cursor.style.display = "block";
		cursor.style.top = `${event.pageY - (cursor.getBoundingClientRect().height / 2)}px`;
		cursor.style.left = `${event.pageX - (cursor.getBoundingClientRect().width / 2)}px`;
		tooltip.style.left = `${event.pageX + 40}px`

	}
})();

function projectPageBuilder() {

	// <div class="title">Title</span>
	// <div class="content-container">
	// 		<div class="desc">Desc</div>
	// 		<img src="imgName.png">
	// </div>

	const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    indx = urlParams.get('project-id');

	title = document.getElementById("title");
	title.textContent = projects[indx].getName();

	body = document.getElementById("project-body");

	project_title = document.createElement("div");
	project_title.classList.add("title");
	project_title.textContent = projects[indx].getName();

	content_container = document.createElement("div");
	content_container.classList.add("content-container");

	desc = document.createElement("div");
	desc.classList.add("desc");
	desc.textContent = projects[indx].getDesc();

	img = document.createElement("img");
	img.setAttribute("src", projects[indx].getImgPth());

	content_container.appendChild(desc);
	content_container.appendChild(img);

	body.appendChild(project_title);
	body.appendChild(content_container);

}

function openNav() {
	let nav_title = document.getElementById("nav-title");
	let nav = document.getElementById("nav");
	let nav_container = document.getElementById("nav-container");

	let language_button = document.getElementById("language-button");

	let button = document.createElement("button");
	button.textContent = "!";

	// language_box.appendChild(button);
	nav_container.style.animationName = "buffer";

	nav_container.addEventListener("animationstart", function(){
		nav_title.textContent = "Ben Scotti - Portfolio";
		language_button.replaceChild(button, language_button.lastChild);
	});
	
}

function loadBoxes() {
	for (let i = 0; i < projects.length; i++) {
		boxBuilder(i);
	}
}

function boxBuilder(index) {

// 		HTML STRUCTURE
//-------------------------------------------------------------------------
// 		<a href="">
//			<div class="project-box">
//  	   		<div class="project-title-box">
//      	   		<span class="project-title">Pin Park</span>
//     			</div>
// 			</div>
// 		</a>

	let grid = document.getElementById("Grid");

	let link = document.createElement("a");
	link.setAttribute("href", ("project_page.html?project-id=" + index));

	let project_box = document.createElement("div");
	let project_title_box = document.createElement("div");
	let project_title = document.createElement("span");


	project_title.textContent = projects[index].name;


	project_title.classList.add("project-title");
	project_title_box.classList.add("project-title-box");
	project_box.classList.add("project-box");
	project_box.setAttribute("style", "background-image: url(" + projects[index].getImgPth() + ");");


	project_title_box.appendChild(project_title);
	project_box.appendChild(project_title_box);

	link.appendChild(project_box);

	grid.appendChild(link);

}
