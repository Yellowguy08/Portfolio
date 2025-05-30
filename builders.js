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

    document.body.innerHTML = '<div id="nav-container"><svg name="map" class="inter" width="55" height="49" stroke="currentColor"><path stroke-width="3" d="M5 11 L5 44 L20 38 L35 44 L50 38 L50 5 L35 11 L20 5 L5 11Z M12.125 24.5 L18.625 24.5 M21.875 24.5 L28.375 24.5 M34.875 20 L42.875 28 M34.875 28 L42.875 20"/></svg><div><svg name="inventory" class="inter" width="55" height="49" stroke-width="3" stroke="currentColor" fill="none"><rect width="30" height="30" x="12.5" y="13" /><rect width="30" height="15" x="12.5" y="13" /><rect width="7.5" height="12.5" x="5" y="30.5" /><rect width="7.5" height="12.5" x="42.5" y="30.5" /><path d="M22.5 13 V6 H32.5 V13 M27.5 24 V31" /></svg><span name="skills" class="inter">Skills</span><svg name="skills" class="inter" width="55" height="49" stroke-width="3" stroke="currentColor"><rect width="10" height="10" x="5" y="34" /><path d="M15 39 H25 M30 34 L20 24 M30 34 L40 24" /><rect width="10" height="10" x="25" y="34" /><rect width="10" height="10" x="10" y="14" /><rect width="10" height="10" x="40" y="14" /></svg>';

}

function questListBuilder() {

    // <div class="quest">
    //     <div class="quest-border">
    //         <span>Title</span>
    //         <span>Tag1 Tag2 Tag3 Tag4</span>
    //         <span class="quest-status">Completed</span>
    //     </div>
    // </div>

    let quest_list = document.querySelector("#quest-list");

    if (quest_list) {

        projects.forEach(obj => {
            let quest = document.createElement("div");
            quest.classList.add("quest");

            quest.addEventListener("click", function() {
                let quest_view = document.querySelector("#quest-view");
                if (quest_view) {

                    quest_view.textContent = '';
                    // quest_view.removeChild(quest_view.lastChild);

                    let quest_view_box = document.createElement("div");
                    quest_view_box.classList.add("full-quest");

                    let border_view = document.createElement("div");
                    border_view.classList.add("full-border");


                    let title_view = document.createElement("span");
                    title_view.textContent = obj.name;

                    let description_view = document.createElement("span");

                    let tag_view = document.createElement("span");
                    tag_view.textContent = obj.tags;
                    tag_view.classList.add("full-tags");

                    let status_view = document.createElement("span");
                    status_view.classList.add("full-status");
                    if (obj.isCompleted) {
                        status_view.textContent = "Completed";
                    } else {
                        status_view.textContent = "Incomplete";
                    }

                    let desc_view = document.createElement("span");
                    desc_view.textContent = obj.desc;
                    desc_view.classList.add("full-desc");

                    let img_view = document.createElement("img");
                    img_view.id = "quest-image";
                    img_view.src = obj.imgPth;

                    png24b(obj.imgPth)
                    .then((value) => {

                        img_view.style.visibility = "visible"

                        if (value['w'] > value['h']) {
                            img_view.style.width = `75%`;
                            img_view.style.height = "auto";
                            
                        }
                    });

                    border_view.appendChild(title_view);
                    border_view.appendChild(status_view);
                    border_view.appendChild(tag_view);
                    border_view.appendChild(desc_view);
                    border_view.appendChild(img_view);

                    quest_view_box.appendChild(border_view);

                    quest_view.appendChild(quest_view_box);
                }
            });

            let border = document.createElement("div");
            border.classList.add("quest-border");


            let title = document.createElement("span");
            title.textContent = obj.name;

            let tags = document.createElement("span");
            tags.textContent = obj.tags;
            tags.classList.add("quest-tags");

            let status = document.createElement("span");
            status.classList.add("quest-status");
            if (obj.isCompleted) {
                status.textContent = "Completed";
            } else {
                status.textContent = "Incomplete";
            }

            border.appendChild(title);
            border.appendChild(tags);
            border.appendChild(status);

            quest.appendChild(border);

            quest_list.appendChild(quest);
        });

    }

}

function png24b(url) { 
    return new Promise(function(res, rej) {
      var xhr = new XMLHttpRequest;
  
      xhr.onreadystatechange = function () {
        if (xhr.readyState != 4) {
          return;
        }
  
        const PNG = new Uint8Array(xhr.response),
              decoder = new TextDecoder();
  
        // PNG.slice(0, 8)      === [  _  P  N  G CR LF  _  _ ]
        // PNG.slice(8, 16)     === [ CHUNKLENGTH CHUNKFORMAT ]
        // IHDR must be the first CHUNKFORMAT:
        // PNG.slice(16, 24)    === [ WIDTH------ HEIGHT----- ]
  
        if ( decoder.decode(PNG.slice(1, 4)) === 'PNG' ) {
          const view = new DataView(xhr.response);
          return res({ w: view.getUint32(16), h: view.getUint32(20) });
        }
  
        return rej({ w: -1, h: -1 });
      };
  
      xhr.open('GET', url, true);
      xhr.responseType = "arraybuffer";
      xhr.setRequestHeader('Range', 'bytes=0-24');
      xhr.send(null);
    });
}