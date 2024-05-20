import mongoose, {Schema} from "mongoose";

const postSchema = new Schema({
    title: {
        type:String,
        required:true,
    },
    name: {
        type:String,
        required:true,
    },
    description: {
        type:String,
        required:true,
    },
    breed: {
        type:String,
        required:true,
    },
    age: {
        type:String,
        required:true,
    },
    img: {
        type:String,
        required:true,
    },
    Price: {
        type:String,
        required:true,
    },

},
{timestamps: true}
);

export default mongoose.models.Post || mongoose.model('Post', postSchema)