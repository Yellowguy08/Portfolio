class project {

	constructor (name, desc, tags, isCompleted, imgPth) {
		this.name = name;
		this.desc = desc;
        this.tags = tags;
        this.isCompleted = isCompleted;
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

    new project("Portfolio", "A portfolio website for my projects", "HTML", false, "supercell.png"),
	new project("Park Pin","Pin where you park", "Swift, IOS App, QoL", false, "images/pinPark.png"),
	new project("Ford Wellness", "School wellness block picker with live room updates.", "School, Mental Health, IOS APP, Swift", false, "images/fordsWellnessProfileView.png"),
	new project("Team Game", "SurvivalIO Clone Team game project", "Swift, IOS APP, Game Study, Team", true, "images/teamGame.png"),
	new project("Perhe", "Friends Card Game Mobile port.", "Swift, IOS APP, Game, Cards", false, "images/perheHand.png"),
	new project("Defog", "Vape detection app for school bathrooms.", "Swift, IOS APP, Firebase, School", true, "images/defogMap.png"),
	new project("Yellowgames", "Archive of games I have published under Yellowgames, with the website that I build to display them.", "HTML, Games", false, "images/yellowGamesAbout.png"),
	new project("Scratch", "My scratch account with some of the project I have worked on.", "Block Code, Games", true, "images/scratchProfile.png"),
	new project("Centrellas Website", "My first large website project remaking a resturaunt website.", "HTML, Site Study", true, "images/supercell.png"),
	new project("Gargoyle", "A custom google browser face for ease of access to my classes when I was in High School.", "HTML, Site Study", true, "images/supercell.png"),
	new project("Wind Data App", "An app that tracks wind and weather data and displays the loaction and decodes the value.", "Swift, IOS APP, API", true, "images/windDataApp.png"),
	new project("Fords Wellness", "A web app for my highschool for wellness day sign ups.", "HTML, School, Mental Health, Firebase", false, "images/fordsWellness.png")

];

function buildNav() {

    document.getElementById("nav").innerHTML = "" +
	'<div id="nav-container">' +
		'<svg name="map" class="inter" width="55" height="49" stroke="currentColor">' +
			'<path stroke-width="3" d="M5 11 L5 44 L20 38 L35 44 L50 38 L50 5 L35 11 L20 5 L5 11Z M12.125 24.5 L18.625 24.5 M21.875 24.5 L28.375 24.5 M34.875 20 L42.875 28 M34.875 28 L42.875 20"/>' +
		'</svg>' +
		'<svg name="inventory" class="inter" width="55" height="49" stroke-width="3" stroke="currentColor" fill="none">' +
			'<rect width="30" height="30" x="12.5" y="13" />' +
			'<rect width="30" height="15" x="12.5" y="13" />' +
			'<rect width="7.5" height="12.5" x="5" y="30.5" />' +
			'<rect width="7.5" height="12.5" x="42.5" y="30.5" />' +
			'<path d="M22.5 13 V6 H32.5 V13 M27.5 24 V31" />' +
		'</svg>' +
		'<svg name="skills" class="inter" width="55" height="49" stroke-width="3" stroke="currentColor">' +
			'<rect width="10" height="10" x="5" y="34" />' +
			'<path d="M15 39 H25 M30 34 L20 24 M30 34 L40 24" />' +
			'<rect width="10" height="10" x="25" y="34" />' +
			'<rect width="10" height="10" x="10" y="14" />' +
			'<rect width="10" height="10" x="40" y="14" />' +
		'</svg>' +
		'<svg name="quests" class="inter" width="55" height="49" stroke-width="3" stroke="currentColor" fill="none">' +
			'<rect width="10" height="10" x="5" y="5"/>' +
			'<rect stroke="none" fill="white" width="2.5" height="2.5" x="8.75" y="8.75"/>' +
			'<path d="M10 5 L40 5" /><path d="M15 10 L15 39" />' +
			'<path d="M40 3.5 L40 34" />' +
			'<rect width="10" height="10" x="15" y="34"/>' +
			'<rect stroke="none" fill="white" width="2.5" height="2.5" x="18.75" y="37.75"/>' +
			'<path d="M50 45.5 L50 32.5" />' +
			'<path d="M20 44 L50 44" />' +
			'<path d="M20 34 L50 34" />' +
			'<path d="M20 12.5 L35 12.5 M20 19.5 L35 19.5 M20 26.5 L35 26.5" />' +
		'</svg>' +
	'</div>';

}

document.body.onload = buildNav();