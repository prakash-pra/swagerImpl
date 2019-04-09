import express from 'express';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import bodyParser from 'body-parser';
import config from './config';

/* External routes import */
import routes from './routes';

/* swagger json documentation */
import swaggerDocument from './swagger.json';


const app = express();

/* app configuration */
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




/* swagger documentation route */
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

/* Base Router */
app.get('/', (req, res) => {
  res.json({
    sucess: true,
    message: 'welcome to base api',
  });
});


/* server port */

app.listen(config.port, () => {
  console.log(`The app is now running on port ${config.port}`);
});
