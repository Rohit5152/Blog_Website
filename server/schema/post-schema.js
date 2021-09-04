import mongoose from 'mongoose';


const Postschema=mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique:true
    },
    description:{
        type: String,
        required: true
    },
    picture:{
        type: String,
        required:false
    },
    user:{
        type:String,
        required: true
    },
    categories:{
        type:String,
        required:false
    },
    createdate:{
        type:Date
    }
});

const post= mongoose.model('post',Postschema);
export default  post;
