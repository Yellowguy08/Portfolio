class project {

    constructor(name, desc, imgPth, buttons) {
        this.name = name;
        this.desc = desc;
        this.imgPth = imgPth;
        this.buttons = buttons;
    }

    getTitle() {
        return this.name;
    }

    getDesc() {
        return this.desc;
    }

    getImgPth() {
        return this.imgPth;
    }

    getButtons() {
        return this.buttons;
    }
}


let projects = [
    new project("Park Pin", "Pin where you park", "supercell.png", ["download"]),
    new project("Other Project", "Some Description", "supercell.png", ["download", "steam", "other"])
];

// projects.forEach(createPod);
var index = 0;

createPod(projects[index]);

function createPod(item) {

    let main = document.getElementById("project-wrapper");

    // <div class="pod">
    // 	<span class="title">Name</span>
    // 	<img src="supercell.png" alt="Game Image">
    // 	<span>Lorem Ipsum</span>
    // 	<div class="button-options">
    // 		<a href="#">Steam</a>
    // 		<a href="#">Download</a>
    // 		<a href="#">Web</a>
    // 		<a href="#">Other</a>
    // 	</div>
    // </div>

    const pod = document.createElement("div");

    const title = document.createElement("span");
    const titleTxt = document.createTextNode(item.getTitle());
    title.appendChild(titleTxt);
    title.classList.add("title");

    const pic = document.createElement("img");
    pic.setAttribute("src", item.getImgPth());

    const body = document.createElement("span");
    const bodyTxt = document.createTextNode(item.getDesc());
    body.appendChild(bodyTxt);

    const buttons = document.createElement("div");
    buttons.classList.add("button-options");

    let itemButtons = item.getButtons();

    for (var i = 0; i < itemButtons.length; i++) {
        const button = document.createElement("a");

        const bText = document.createTextNode(capFirstLetter(itemButtons[i]))

        button.appendChild(bText);

        buttons.appendChild(button);
    }

    pod.appendChild(title);
    pod.appendChild(pic);
    pod.appendChild(body);
    pod.appendChild(buttons);

    main.appendChild(pod);
    // main.appendChild(title);
}

function capFirstLetter(word) {
    let letters = word.split("");
    letters[0] = letters[0].toUpperCase();

    var newString = "";

    for (var j = 0; j < letters.length; j++) {
        newString += letters[j];
    }

    return newString;
}