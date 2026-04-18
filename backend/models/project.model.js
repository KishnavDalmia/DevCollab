import mongoose from 'mongoose';

const projectSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    team:{
        type: mongoose.Schema.Types.ObjectId, 
        required: true,
        ref: 'Team'
    },
    deadline:{
        type: Date,
        required: true
    }
},{timestamps: true});

const Project = mongoose.model('Project',projectSchema);

export default Project;

