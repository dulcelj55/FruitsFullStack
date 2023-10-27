const mongoose= require ("mongoose")



const veggieSchema = new mongoose.Schema(
    {
    name: {
        type: String,
        required: true
    },
    color: String,
    readyToEat: Boolean,
    age: Number,
    isHealthy: Boolean
},

{
    timestamps: true
}
)
const Veggie = mongoose.model("Veggie",  veggieSchema)

module.exports = Veggie; 