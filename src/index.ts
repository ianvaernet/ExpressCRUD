import 'reflect-metadata';
import express, { Express, Request, Response } from 'express';
import http from 'http';
import router from './router';
import { appDataSource } from './data-source';
import { BaseException } from './exceptions';

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', router);

// error handler (4 params instead of 3)
app.use(function (err: BaseException, req: Request, res: Response, next: CallableFunction) {
  res.locals.message = err.internalMsg;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.statusCode || 500).send({ message: err.message || 'Internal Server Error', details: err.details });
});
app.use(function (req: Request, res: Response, next: CallableFunction) {
  res.status(404).send('Error 404: Not Found');
});

app.set('port', process.env.PORT);
const server = http.createServer(app);
server.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`⚡️ Server running at http://localhost:${process.env.HOST_PORT}`);
});
