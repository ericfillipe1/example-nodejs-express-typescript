import { UserModel, UserRecord } from './models/user.model';

const create = (record: UserRecord): Promise<UserRecord> => {
  return UserModel.create(record);
};

const findOne = (id: string): Promise<UserRecord | null> => {
  return UserModel.findOne({ _id: id }).exec();
};

const find = (): Promise<UserRecord[]> => {
  return UserModel.find().exec();
};
const remove = async (id: string): Promise<void> => {
  await UserModel.deleteOne({ _id: id }).exec();
};

const update = async (
  id: string,
  record: Partial<UserRecord>,
): Promise<UserRecord | null> => {
  await UserModel.findOneAndUpdate({ _id: id }, { $set: record }).exec();
  return await findOne(id);
};

const UserRepo = { create, findOne, find, update, remove };
export default UserRepo;
