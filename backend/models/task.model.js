import mongoose from 'mongoose';

const taskSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true,
        default: 'pending'
    },
    assignedTo:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    projectId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Project'
    }
},{timestamps: true});

const Task = mongoose.model('Task', taskSchema);

export default Task;