import express from 'express';
import { Server } from 'http';
import { DbMongo } from '../src/config/mongodb.conn';
import { MongoCluster, DbName, port } from '../src/utils/constant';
import cors from 'cors';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import { MainApi } from '../src/routes/index';
import { Request, Response, NextFunction } from 'express';
const health = require('@cloudnative/health-connect');
import dotEnv from 'dotenv';

const healthCheck = new health.HealthChecker();

let server: Server | null = null;
const PORT = process.env.PORT || 5000;
function initApplication(): express.Application {
	dotEnv.config();
	new DbMongo().connect(MongoCluster, DbName, '', '', port);
	const app = express();
	app.use(cors());
	app.use(morgan('tiny'));
	app.use(express.static('public'));
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));
	app.use(MainApi);
	app.use(
		'/swagger',
		swaggerUi.serve,
		swaggerUi.setup(undefined, {
			swaggerOptions: {
				url: '/swagger.json',
			},
		})
	);
	console.log(process.env.ACCESS_KEY);
	app.use((error: any, req: Request, res: Response, next: NextFunction) => {
		res.locals.message = error.message;
		const status = error.statusCode || 500;
		res.locals.status = status;
		res.locals.error = req.app.get('env') === 'development' ? error : {};
		res.status(status);
		res.json({
			error: {
				message: error.message,
			},
		});
	});
	app.use('/health', health.LivenessEndpoint(healthCheck));
	app.use('/ready', health.ReadinessEndpoint(healthCheck));
	return app;
}

function start() {
	const app = initApplication();
	server = app.listen(PORT, () => {
		console.log(`App is running at http://localhost:${PORT}/swagger`);
	});
}
start();
