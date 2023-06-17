import { Request, Response } from 'express';
import { UserRecordZ } from '../repositories/models/user.model';
import UserRepo from '../repositories/user.repo';

const create = async (req: Request, res: Response) => {
  try {
    const user = UserRecordZ.parse(req.body);
    res.json(await UserRepo.create(user));
  } catch (e) {
    res.status(500).json({ msg: 'Erro' });
  }
};
const findOne = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    res.json(await UserRepo.findOne(id));
  } catch (e) {
    res.status(500).json({ msg: 'Erro' });
  }
};
const find = async (_: Request, res: Response) => {
  try {
    res.json(await UserRepo.find());
  } catch (e) {
    res.status(500).json({ msg: 'Erro' });
  }
};
const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = UserRecordZ.parse(req.body);
    res.json(await UserRepo.update(id, user));
  } catch (e) {
    res.status(500).json({ msg: 'Erro' });
  }
};
const remove = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    res.json(await UserRepo.remove(id));
  } catch (e) {
    res.status(500).json({ msg: 'Erro' });
  }
};

const UserController = { create, findOne, find, update, remove };
export default UserController;
