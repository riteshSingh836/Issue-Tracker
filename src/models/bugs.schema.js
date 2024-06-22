import mongoose from "mongoose";

const bugSchema = new mongoose.Schema({
    title: {type: String, required: [true, "Please enter the project name"]},
    description: {type: String, required: [true, "Please enter the description"]},
    labels: [{type: String, required: [true, "Please enter the description"]}], // multiple labels (therefore an array).
    author: {type: String, required: [true, "Please enter the author name"]}
});

export const BugModel = mongoose.model('Bugs', bugSchema);