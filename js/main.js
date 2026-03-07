// Main js-file
class Project {
    #title;
    #createdDate;
    #participants;

    constructor(title){
        this.#title = title;
        this.#createdDate = Date();
        this.#participants = [];
    }

    addParticipant(participant){
        this.#participants.push(participant);
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
        console.log(`${participant.firstName} ${participant.lastName}`);
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