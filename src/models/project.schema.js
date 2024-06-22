import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Please enter the project name"]},
    description: {type: String, required: [true, "Please enter the description"]},
    author: {type: String, required: [true, "Please enter the author name"]}
});

export const ProjectModel = mongoose.model('Project', projectSchema);