document.body.onload = questListBuilder();

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