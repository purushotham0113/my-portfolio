import mongoose from 'mongoose'

async function connectDB() {
    try {
        console.log("hre")
        // await client.connect();
        //         console.log("coonected to database")

        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error('Database connection error:', error);
        process.exit(1);
    }
}
export default connectDB 