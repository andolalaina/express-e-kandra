import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
    title: String,
    description: String,
    type: Number,
    method: Number,
    experience: Number,
    company: Number,
    mail: String,
    uploadDate: Date,
    deadline: Date
});

export const Job = mongoose.model('Job', jobSchema);