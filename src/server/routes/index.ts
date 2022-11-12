import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CidadeController } from './../controllers';

const router = Router();

router.get('/', (req, res) => {
  return res.status(StatusCodes.OK).send('Funcionando!');
});

router.post('/cidades', CidadeController.create);

export { router };