import { BugModel } from "./bugs.schema.js";

export default class BugsRepository {

    async getAllBugs() {
        try{
            const allBugs = await BugModel.find();
            return allBugs;
        }catch(err) {
            console.log(err);
        }
    }

    async addBug(bug) {
        try{
            const newBug = new BugModel(bug);
            await newBug.save();
            return newBug;
        }catch(err) {
            console.log(err);
        }
    }

    async labelFilteration(selectedOption) {
        try{
            const newBug = await BugModel({selectedOption});
            return newBug;
        }catch(err) {
            console.log(err);
        }
    }
}