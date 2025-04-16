/* eslint-disable */
import { Router } from 'express';


import authMiddleware from './app/middleware/auth.js';

import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController';
import InstituicaoController from './app/controllers/InstituicaoController.js';
import ContaController from './app/controllers/ContaController.js';

const routes = new Router();

//rotas da instituição
routes.post('/instituicao', InstituicaoController.store);


//rotas do usuário
routes.post('/users',UserController.store);

routes.post('/sessions',SessionController.store);

//precisa autenticar.

routes.use(authMiddleware);

routes.put('/users',UserController.update);

//rotas da conta

routes.post('/conta', ContaController.store );

export default routes;

