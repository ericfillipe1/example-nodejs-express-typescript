import { Request, Response } from 'express';
import UserRepo from '../repositories/user.repo';
import returnError from '#/shared/returnError.shared';

const create = async (req: Request, res: Response) => {
  try {
    res.json(await UserRepo.create(req.body));
  } catch (e) {
    returnError(e, res);
  }
};
const findOne = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    res.json(await UserRepo.findOne(id));
  } catch (e) {
    returnError(e, res);
  }
};
const find = async (_: Request, res: Response) => {
  try {
    res.json(await UserRepo.find());
  } catch (e) {
    returnError(e, res);
  }
};
const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    res.json(await UserRepo.update(id, req.body));
  } catch (e) {
    returnError(e, res);
  }
};
const remove = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    res.json(await UserRepo.remove(id));
  } catch (e) {
    returnError(e, res);
  }
};

const UserController = { create, findOne, find, update, remove };
export default UserController;
