import mongoose from 'mongoose';

const jobTypeSchema = new mongoose.Schema({
    name: String
});

export const JobType = mongoose.model('JobType', jobTypeSchema);