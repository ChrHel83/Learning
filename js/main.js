// Main js-file

const box1 = document.getElementById("box1");
  let posX = window.getComputedStyle(box1).getPropertyValue("left"); // Startposition X
  let posY = window.getComputedStyle(box1).getPropertyValue("bottom"); // Startposition Y

  const step = 10; // Hur många pixlar per knapptryck

  // Lyssna på tangenttryckningar
  document.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "ArrowUp":
        posY = Math.max(0, posY - step); // Förhindra att gå utanför toppen
        break;
      case "ArrowDown":
        posY = Math.min(window.innerHeight - box1.offsetHeight, posY + step);
        break;
      case "ArrowLeft":
        posX = Math.max(0, posX - step);
        break;
      case "ArrowRight":
        posX = Math.min(window.innerWidth - box1.offsetWidth, posX + step);
        break;
      default:
        return; // Ignorera andra tangenter
    }
    // Uppdatera position
    box1.style.bottom = posY + "px";
    box1.style.left = posX + "px";
//box2.style.bottom = posY + "px";
  //  box2.style.left = posX + "px";
  });







  /*
const box = document.getElementById("box");
  let posX = 0;       // Startposition
  let speed = 1;      // Pixlar per frame

  function moveBox() {
    posX += speed;

    // Om vi når kanten, vänd riktning
    if (posX + box.offsetWidth >= container.offsetWidth || posX <= 0) {
      speed *= -1;
    }

    box.style.left = posX + "px";

    // Kör nästa frame
 
  }
  moveBox();
  // Starta rörelsen



class Project {
    #title;
    #createdDate;
    #participants;

    constructor(title){
        this.#title = title;
        this.#createdDate = Date();
        this.#participants = [{firstName: "Random", lastName: "Randomsson"}];
    }

    addParticipant(participant){
       return this.#participants.push(participant);
    }
    showParticipants(){
        return this.#participants;
    }

    showTitle(){
        return this.#title;
    }
    changeTitle(newTitle){
        this.#title = newTitle;
    }
    showDateOfCreation(){
        return this.#createdDate;
    }
}
class ProjectParticipant {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    }



const myProject = new Project("Mitt första projekt");
console.log(myProject.showTitle());
myProject.changeTitle("Mitt ändrade projekt");
console.log(myProject.showTitle());
console.log(myProject.showDateOfCreation());
    const user = new ProjectParticipant("Christian","Hellberg");
    const user2 = new ProjectParticipant("Anders","Andersson");
    myProject.addParticipant(user);
    myProject.addParticipant(user2);
    console.log(myProject.showParticipants().forEach(participant => {
        if(participant !== null){
        console.log(`${participant.firstName} ${participant.lastName}`);}
    }));

/*import {ProjectParticipant} from "./ProjectParticipant.js";

const person1 = new ProjectParticipant("Christian","Hellberg");
person1.dateOfBirth="831102";
person1.company = "HRC Bygg och Projekt AB";
const person2 = new ProjectParticipant("Anders","Andersson");
console.log(person1);
console.log(person2);
const person3 = new ProjectParticipant("Sven", "Svensson");
const user = document.querySelector("#user");
user.textContent = `${person1.firstName} ${person1.lastName}, ${person1.company}`;
console.log(user.textContent);
const projectPatricipants = [person1, person2];
projectPatricipants.push(person3); 

console.log(JSON.stringify(projectPatricipants))

const projects = [];
const addProject  = (project => {
    projects.push(project);
})
class Project {
    constructor(title){
        this.title = title;
        this.createdDate = Date();
    }
}
document.querySelector("#amp-reg-form").addEventListener("submit", event => {
    event.preventDefault();
    try {
        const newProject = new Project(document.querySelector("#amp-title").value)
        addProject(newProject);
        renderProjects();

    } catch (error) {
        console.error(error);
    }
            //console.log(projects);
});

const projectList = document.querySelector("#project-list");
const renderProjects = () => {
    projects.forEach(project => {
            projectList.insertAdjacentHTML(`beforeend`, `<li>${project.title}</li>`);
    })
   
}
 */