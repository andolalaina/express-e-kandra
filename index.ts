const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jobRoutes = require('./src/Routes/jobs.router');

const PORT = 8000;
const DB_NAME = 'ekandra';

	mongoose
		.connect("mongodb://localhost:27017/"+DB_NAME, { useNewUrlParser: true })
		.then(() => {
			const app = express();
			app.use(cors());
			app.use("/jobs", jobRoutes);
			app.listen(PORT, () => {
				console.log("Server has started!")
			})
		})
		.catch((err:Error) => {
			console.log(err)
		});