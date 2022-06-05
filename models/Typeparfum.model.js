import mongoose from "mongoose"
var typeparfumSchema = mongoose.Schema({
    nomtype: String
})
const Typeparfum = mongoose.model('Typeparfum', typeparfumSchema);
export default Typeparfum
