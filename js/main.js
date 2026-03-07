// Main js-file
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
*/
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
            console.log(projects);
});

const projectList = document.querySelector("#project-list");
const renderProjects = () => {
    projects.forEach(project => {
            projectList.insertAdjacentHTML(`beforeend`, `<li>${project.title}</li>`);
    })
    
}
