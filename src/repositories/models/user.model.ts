import mongoose, { Schema } from 'mongoose';
import z from 'zod';

export const UserRecordZ = z.object({
  _id: z.string().optional(),
  password: z.string(),
  email: z.string(),
  username: z.string(),
});

export type UserRecord = z.infer<typeof UserRecordZ>;
const UserSchema = new Schema<UserRecord>({
  username: String,
  password: String,
  email: String,
});

const UserModel = mongoose.model('users', UserSchema);
export default UserModel;
