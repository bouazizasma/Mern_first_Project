import mongoose from "mongoose"
var marqueSchema = mongoose.Schema({
    nommarque: String
});
const Marque = mongoose.model('Marque', marqueSchema);
export default Marque
