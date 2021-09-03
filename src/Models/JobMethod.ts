import mongoose from 'mongoose';

const jobMethodSchema = new mongoose.Schema({
    name: String
});

export const JobMethod = mongoose.model('JobType', jobMethodSchema);