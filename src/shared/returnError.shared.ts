import { Response } from 'express';
import { ZodError } from 'zod';

const returnError = async (err: unknown, res: Response) => {
  if (err instanceof ZodError) {
    return res.status(400).json({ message: err.flatten().fieldErrors });
  }
  return res.status(500).json({ message: 'internal server error' });
};

export default returnError;
