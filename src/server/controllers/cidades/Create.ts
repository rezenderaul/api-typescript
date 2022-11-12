import { Request, Response } from 'express';
import * as yup from 'yup';

interface ICidade {
  nome: string;
}

const bodyValidation: yup.SchemaOf<ICidade> = yup.object().shape({
  nome: yup.string().required().min(3),
});

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {

  let validateData: ICidade | undefined = undefined;

  try {
    validateData = await bodyValidation.validate(req.body);
  } catch (error) {
    const yupError = error as yup.ValidationError;

    return res.json({
      erros: {
        default: yupError.message,
      }
    });
  }

  return res.send(validateData);
};