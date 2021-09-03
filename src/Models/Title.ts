import mongoose from 'mongoose';

const titleSchema = new mongoose.Schema({
    name: String
});

export const Title = mongoose.model('Title', titleSchema);