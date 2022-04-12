import 'reflect-metadata';
import express, { Express, Request, Response } from 'express';
import http from 'http';
import logger from 'morgan';
import { DIContainer } from './inversify.config';
import router from './router';

const app: Express = express();
const port = process.env.NODE_PORT;
const host_port = process.env.HOST_PORT;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', router);

// error handler (4 params instead of 3)
app.use(function (err, req: Request, res: Response, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500).send('Internal Server Error');
});
app.use(function (req: Request, res: Response, next) {
  res.status(404).send('Error 404: Not Found');
});

app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`⚡️ Server running at http://localhost:${host_port}`);
});
