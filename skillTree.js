const GAP = 150;
const END = 2 * Math.PI;
const R = 50;

var lastXOffSet = 0;
var lastYOffset = 0;

class Skill {

    constructor (name, unlocked, parent, orient_X, orient_Y, x, y) {
        this.name = name;
        this.unlocked = unlocked;
        this.parent = parent;
        this.svgKey = name + "_KEY";
        this.orient_X = orient_X * GAP;
        this.orient_Y = orient_Y * GAP;
    }

}

/*

Skills Brainstorming

Web Dev,

Structure I, II, III
Styles I, II, III

Interactions I, II
API I, II
Firebase I, II

Game Dev

General

Functions,
Classes I, II,
Recursion I,

Strings,
REGEX

Arrays I, II,
2D Arrays I, II,
3D Arrays


*/

let skills = [
    new Skill("Parent", true, "", 0, 0),
    
    new Skill("Web Dev", true, "Parent", -1, 1),
    
    new Skill("Structure I", true, "Web Dev", 0, 2),
    new Skill("Structure II", true, "Structure I", 0, 3),
    new Skill("Structure III", false, "Structure II", 0, 4),
    
    new Skill("Styles I", true, "Web Dev", -1, 2),
    new Skill("Styles II", true, "Styles I", -1, 3),
    new Skill("Styles III", false, "Styles II", -1, 4),
    
    new Skill("Interactions I", true, "Web Dev", -2, 2),
    new Skill("Interactions II", false, "Interactions I", -2, 3),
    new Skill("APIs I", true, "Interactions I", -3, 3),
    new Skill("APIs II", false, "APIs I", -3, 4),
    new Skill("Firebase I", true, "APIs I", -4, 4),
    new Skill("Firebase II", false, "Firebase I", -4, 5),
    
    new Skill("General", true, "Parent", -1, -1),

    new Skill("Functions", true, "General", -1, -2),
    new Skill("Recursion I", false, "Functions", -1, -3),
    new Skill("Classes I", true, "Functions", 0, -3),
    new Skill("Classes II", false, "Classes I", 0, -4),

    new Skill("Strings", true, "General", -2, -2),
    new Skill("REGEX", false, "Strings", -3, -3),

    new Skill("Arrays I", true, "General", -2, -1),
    new Skill("Arrays II", false, "Arrays I", -3, -1),
    new Skill("2D Arrays I", true, "Arrays I", -3, 0),
    new Skill("2D Arrays II", false, "2D Arrays I", -4, 0),
    new Skill("3D Arrays", false, "2D Arrays I", -4, 1),

    new Skill("Game Dev", true, "Parent", 1, -
        1)
];

let c = document.querySelector("#canvas");
let tooltipC = document.querySelector("#tooltipC");

function getMaxWidth() {
  var max = 0;
  skills.forEach(skill => {
    if (Math.abs(skill.orient_X) > max) {
      max = Math.abs(skill.orient_X);
    }
  });

  return max;
}

function getMaxHeight() {
  var max = 0;
  skills.forEach(skill => {
    if (Math.abs(skill.orient_Y) > max) {
      max = Math.abs(skill.orient_Y);
    }
  });

  return max;
}

c.width = innerWidth;
c.height = innerHeight;

let ctx = c.getContext("2d");

function draw(offsetX, offsetY) {
  skills.forEach(skill => {

    createSkillTree(skill, offsetX, offsetY);

  });
}

draw(0,0);

function createSkillTree(skill, offsetX, offsetY) {

    ctx.beginPath();

    if (skill.parent != "") {
        ctx.arc(c.width / 2 + skill.orient_X + offsetX, c.height / 2 + skill.orient_Y + offsetY, R, 0, END);
    } else {
        ctx.arc(c.width / 2 + offsetX, c.height / 2 + offsetY, R, 0, END);
    }

    // console.log((c.width / 2 + offsetX));
    // console.log((c.height / 2 + offsetY));

    ctx.strokeStyle = "white";
    ctx.lineWidth = 15;
    ctx.fillStyle = "black";
    ctx.globalCompositeOperation = "destination-over";
    ctx.fill();
    ctx.stroke();

    let parent = skills.find(obj => {
        return obj.name === skill.parent
    });


    if (parent) {
        ctx.beginPath();

        ctx.moveTo(c.width / 2 + parent.orient_X + offsetX, c.height / 2 + parent.orient_Y + offsetY);
        ctx.lineTo(c.width / 2 + skill.orient_X + offsetX, c.height / 2 + skill.orient_Y + offsetY);
        ctx.strokeStyle = "white";
        ctx.lineWidth = 10;
        ctx.stroke();
    }


// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Add lock for contain drag

dragElement(c);

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    // pos3 = e.clientX;
    // pos4 = e.clientY;
    
    offsetX = pos1;
    offsetY = pos2;

    ctx.clearRect(0,0, c.width,c.height);
    draw(-clamp(getMaxWidth() / -2, getMaxWidth() / 2, lastXOffSet + offsetX), -clamp(getMaxHeight() / -2, getMaxHeight() / 2, lastYOffset + offsetY));


  }

  function closeDragElement() {
    // stop moving when mouse button is released:

    lastXOffSet = clamp(getMaxWidth() / -2, getMaxWidth() / 2, lastXOffSet + pos1);
    lastYOffset= clamp(getMaxHeight() / -2, getMaxHeight() / 2, lastYOffset + pos2);


    document.onmouseup = null;
    document.onmousemove = null;
  }
}
    
    // let newSkill = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    // newSkill.classList.add("skill");
    // newSkill.setAttribute("name", skill.name.replace(" ", "_"));

    // newSkill.innerHTML = "<circle r='50' cx='50' cy='50' fill='#fab308'/>";
    
    // if (skill.parent != "") {
    //     let parent = document.querySelector(`[name='${skill.parent.replace(" ", "_")}']`);
        
    //     // console.log(skill.name + " / " + parent.getAttribute("name") + " " + parent.getBoundingClientRect().top + " + " + skill.orient_Y + " = " + (parent.getBoundingClientRect().top + skill.orient_Y));
        
    //     newSkill.style.top = `calc(50% - 50px + ${(skill.orient_Y)}px)`;
    //     newSkill.style.left = `calc(50% - 50px + ${(skill.orient_X)}px)`;
    // } else {
    //     newSkill.firstElementChild.setAttribute("fill", "red");
    // }

    // main.appendChild(newSkill);
}

function clamp(floor, ceiling, num) {

  return Math.max(floor, Math.min(ceiling, num));

}

document.addEventListener("mousemove", function(event) {
  handleMouseMove(event);
});

function handleMouseMove(e) {
  if (e.buttons == 0) {

    let trueR = R + 15;

    mouseX = parseInt(e.clientX - 0);
    mouseY = parseInt(e.clientY - 0); // 0 is a stand in for offset

    // Put your mousemove stuff here
    var hit = false;
    for (var i = 0; i < skills.length; i++) {
        var skill = skills[i];
        
        var xFloor = c.width / 2 + skill.orient_X - lastXOffSet - trueR;
        var yFloor = c.height / 2 + skill.orient_Y - lastYOffset - trueR;

        if (mouseX > xFloor && mouseX < xFloor + 2 * trueR && mouseY > yFloor && mouseY < yFloor + 2 * trueR) {
            tooltipC.style.display = "block";
            tooltipC.style.left = e.clientX + (document.getElementById("cursor").getBoundingClientRect().width / 2) + "px";
            tooltipC.style.top = e.clientY - (document.getElementById("cursor").getBoundingClientRect().height / 2) + "px";
            tooltipC.textContent = skill.name;
            hit = true;
        }
    }
    if (!hit) {
      tooltipC.style.display = "none";
      tooltipC.style.left = 0;
      tooltipC.style.top = 0;
    }
  } else {
    tooltipC.style.display = "none";
    tooltipC.style.left = 0;
    tooltipC.style.top = 0;
  }

}