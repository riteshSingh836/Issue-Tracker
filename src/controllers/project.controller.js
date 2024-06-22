import BugsRepository from "../models/bugs.repository.js";
import ProjectRepository from "../models/project.repository.js";

const projectRepository = new ProjectRepository();
const bugsRepository = new BugsRepository();


export default class ProjectController {

    async getBody(req,res) {
        try{
            const allProjects = await projectRepository.getAllProjects();
            res.render('body', {allProjects});      // on loading the first page, here rendering the allProjects is important. since it is defined on body.ejs file
        }catch(err) {
            console.log(err);
        }
    }

    async addProject(req,res) {
        try{
            await projectRepository.addProject(req.body);
            const allProjects = await projectRepository.getAllProjects();
            res.render('body', {allProjects});
        }catch(err) {
            console.log(err);
        }
    }

    async getProjectDetails(req,res) {
        try{
            const filteredBugs = await bugsRepository.getAllBugs();
            const allBugs = await bugsRepository.getAllBugs();
            res.render('details', {allBugs});
        }catch(err) {
            console.log(err);
        }
    }


}