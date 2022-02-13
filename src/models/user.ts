import { model, models, Schema } from "mongoose";

interface IUser {
  _id: Schema.Types.ObjectId;
  username: string;
  password: string;
  lists: [listID: Schema.Types.ObjectId];
}

const UserSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  lists: [
    {
      type: Schema.Types.ObjectId,
      ref: "list",
    },
  ],
});

export default models.user || model("user", UserSchema);
