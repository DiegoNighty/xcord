import mongoose from "mongoose";

export const connect = async () => {
    const uri: string = process.env["MONGO_URI"]?.toString() || "";
    if (uri === "") {
        console.log("MONGO_URI is not set")
        return
    }

    try {
        await mongoose.connect(uri)
    } catch (error) {
        console.log(error)
    }
}