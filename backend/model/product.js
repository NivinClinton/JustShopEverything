import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String    
  },
  image: {
    type: String,
    required: true  
  },
  price: {
    type: Number,
    required: true
    
  }
});

export default mongoose.model("Product", userSchema);
