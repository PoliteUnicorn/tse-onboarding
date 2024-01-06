import { InferSchemaType, Schema, model } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true },
  profilePictureURL: { type: String },
  /* is profilePicture supposed to show a string or a link */
});

type User = InferSchemaType<typeof userSchema>;

export default model<User>("User", userSchema);
