
import { ProjectModel } from "./project.schema.js";

export default class ProjectRepository {

    async getAllProjects() {
        try{
            const allProjects = await ProjectModel.find();
            return allProjects;
        }catch(err) {
            console.log(err);
        }
    }

    async addProject(project) {
        try{
            const newProject = new ProjectModel(project);
            await newProject.save();
            return newProject;
        }catch(err) {
            console.log(err);
        }
    }

}