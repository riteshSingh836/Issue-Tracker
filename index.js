import express from 'express';
import expressEjsLayouts from 'express-ejs-layouts';
import path from 'path';
import ProjectController from './src/controllers/project.controller.js';
import BugsController from './src/controllers/bugs.controller.js';

const server = express();

server.set('views', path.resolve('src','views'));
server.set("view engine", "ejs");       // format declare
server.use(expressEjsLayouts);
server.use(express.urlencoded({extended:true}));

server.use(express.static('public'));    //expose statically to our client.

const projectController = new ProjectController();
server.get('/', projectController.getBody);

server.post('/createproject', projectController.addProject);
server.get('/details', projectController.getProjectDetails);

const bugsController = new BugsController();
server.post('/createbug', bugsController.addBug);
server.post('/label', bugsController.labelFilteration);


// server.get('/', (req,res) => {
//     res.send("Welcome to issue tracker");
// });

export default server;