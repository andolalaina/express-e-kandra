import express from 'express';
import { Job } from '../Models/Job';

const router = express.Router();

router.get('/', async (req, res) => {
    const q = req.query.q?.toString()!
    const xp = req.query.xp?.toString()!
    const type = req.query.type?.toString()!
    const mode = req.query.mode?.toString()!
    const jobs = await Job.find({title: {"$regex": q, "$options": "i"}, experience: parseInt(xp), type: parseInt(type), method: parseInt(mode) })
        .catch((err) => res.status(400).send(err));
    res.send(jobs);
});

router.get('/:id', async (req, res) => {
    const job = await Job.findById(req.params.id)
        .catch((err) => res.status(400).send(err));
    res.send(job);
})

module.exports = router;