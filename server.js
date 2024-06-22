import { connectUsinMongoose } from './config/mongoose.js';
import server from './index.js';

server.listen(5400, () => {
    console.log("server is listening to 5400");
    connectUsinMongoose();
})