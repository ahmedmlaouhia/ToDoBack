import { Schema, models, model } from "mongoose";

interface IList {
  _id: Schema.Types.ObjectId;
  listName: string;
  tasks?: [
    {
      todo: String;
      isDone: Boolean;
    }
  ];
}

const listSchema = new Schema<IList>({
  listName: {
    type: String,
    required: true,
  },
  tasks: [
    {
      todo: String,
      isDone: Boolean,
    },
  ],
});

export default models.list || model("list", listSchema);
