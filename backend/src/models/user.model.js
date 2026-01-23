import mongoose,{ Schema } from 'mongoose';

const userSchema = new Schema({   // mongoose.Schema or Schema returns a Schema Object.
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    token: {
        type: String,
    }
});

const User = mongoose.model("User", userSchema); // mongoos.model returns a Model class.

export { User };