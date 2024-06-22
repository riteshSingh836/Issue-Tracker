import BugsRepository from "../models/bugs.repository.js";
import ProjectRepository from "../models/project.repository.js";

const bugsRepository = new BugsRepository();
const projectRepository = new ProjectRepository();


export default class BugsController {

    async addBug(req,res) {
        try{
            const {title, description, author} = req.body;
            const labels = req.body.labels || []; // Capture labels as an array

            const newBug = {title, description, labels, author};
            await bugsRepository.addBug(newBug);
            const allBugs = await bugsRepository.getAllBugs();
            res.render('details', {allBugs});
        }catch(err) {
            console.log(err);
        }
    }

    async labelFilteration(req,res) {
        try{
            const {selectedOption} = req.body;
            const filteredBugs = await bugsRepository.labelFilteration(selectedOption);
            const allBugs = await bugsRepository.getAllBugs();
            res.render('details', {allBugs});
        }catch(err) {
            console.log(err);
        }
    }

}