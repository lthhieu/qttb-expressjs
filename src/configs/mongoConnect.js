import mongoose from 'mongoose';
require("dotenv").config();

const mongoConnect = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        if (conn.connection.readyState === 1) {
            console.log('Connection has been established successfully.')
        } else {
            console.log('Something went wrong.')
        }
    } catch (error) {
        console.error('Unable to connect to the database:', error.message)
    }
}
export default mongoConnect