import { Schema, model } from "mongoose";

interface DogInfo {
    name: string;
    breed: string;
    description: string;
    url_image: string;
    phone: string;
}

const dogSchema = new Schema<DogInfo>({
    name: { type: String, required: true },
    breed: { type: String, required: true },
    description: String,
    url_image: String,
    phone: String,
});

const Dog = model<DogInfo>("Dog", dogSchema);

export default Dog;
