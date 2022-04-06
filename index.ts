import app from './app';
import http from 'http';
import dotenv from 'dotenv';
dotenv.config();

const port = '3000';
const host_port = '8000'

app.set('port', port);
const server = http.createServer(app);
server.listen(port, ()=>{
    console.log(`⚡️ Server running at http://localhost:${host_port}`)
});
