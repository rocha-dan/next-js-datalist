import mongoose from "mongoose";

const connection = {};

(async function dbConnect() {
	if (connection.isConnected) {
		return;
	}

	try {mongoose.connect('mongodb+srv://chapola:chapola@cluster0.z0ejs.mongodb.net/', {dbName: 'myFirstDatabase'});

		const db = await mongoose.connect('mongodb+srv://chapola:chapola@cluster0.z0ejs.mongodb.net/', {dbName: 'myFirstDatabase'});
		
		connection.isConnected = db.connections[0].readyState;

		console.log("MongoDB Connected");
	} catch (error) {
		console.log(error);
	}
})();
