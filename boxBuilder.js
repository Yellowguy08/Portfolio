
// let projects = ["Pin Park", "Fords Wellness", "Team Game", "Perhe", "Defog", "Yellowgames", "Scratch", "Gargoyle", "Centrellas Website", "Wind Data App"]
let project = [

				project("Park Pin","Pin where you park", "supercell.png"),
				project("Ford Wellness", "School wellness block picker with live room updates.", "supercell.png"),
				project("Team Game", "SurvivalIO Clone Team game project", "supercell.png"),
				project("Perhe", "Friends Card Game Mobile port.", "supercell.png"),
				project("Defog", "Vape detection app for school bathrooms.", "supercell.png"),
				project("Yellowgames", "Archive of games I have published under Yellowgames, with the website that I build to display them.", "supercell.png"),
				project("Scratch", "My scratch account with some of the project I have worked on.", "supercell.png"),
				project("Centrellas Website", "My first large website project remaking a resturaunt website.", "supercell.png"),
				project("Gargoyle", "A custom google browser face for ease of access to my classes when I was in High School.", "supercell.png"),
				project("Wind Data App", "An app that tracks wind and weather data and displays the loaction and decodes the value.", "supercell.png")

]

class project {

	constructor (name, desc, imgPth) {
		this.name = name;
		this.desc = desc;
		this.imgPth = imgPth;
	}

}


function projectPageBuilder(index) {

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


}

function loadBoxes() {
	for (let i = 0; i < projects.length; i++) {
		boxBuilder(i);
	}
}
function boxBuilder(index) {

// 		HTML STRUCTURE
//-------------------------------------------------------------------------
// 		<div class="project-box">
//  	   	<div class="project-title-box">
//      	   <span class="project-title">Pin Park</span>
//     		</div>
// 		</div>

	let grid = document.getElementById("Grid");


	let project_box = document.createElement("div");
	let project_title_box = document.createElement("div");
	let project_title = document.createElement("span");


	project_title.textContent = projects[index].name;


	project_title.classList.add("project-title");
	project_title_box.classList.add("project-title-box");
	project_box.classList.add("project-box");


	project_title_box.appendChild(project_title);
	project_box.appendChild(project_title_box);


	grid.appendChild(project_box);

}