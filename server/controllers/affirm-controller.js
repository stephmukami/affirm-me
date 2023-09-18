const Affirmation = require('../models/Affirmation')

//get all affirmations
async function getAffirmations(req,res,next){
    try{
        const affirmations = await Affirmation.find().lean();
        //toObject is for one document
        res.status(200).json(affirmations);
    }catch(err){
        res.status(500).json(err);
        console.log(err);
    };
}
//post affirmations  (find a way to get the username and user id when the person is logged in)
async function createAffirmation(req,res,next){
    const {affirmation,author} = req.body;
    try{
        const newAffirmation = new  Affirmation(
            { 
                affirmation:affirmation,
                author:author

            }
        );
        await newAffirmation.save();
        res.status(200).json(newAffirmation);

    }catch(err){
        res.status(500).json(err);
        };
}
// update affirmation //willl check if the correct item is being updates will secure with auth
// Update affirmation
async function updateAffirmation(req, res, next) {
    try {
        // Check if the Affirmation exists
        const existingAffirmation = await Affirmation.findById(req.params.id);

        if (!existingAffirmation) {
            return res.status(404).json({ error: 'Affirmation not found' });
        }

        // Update the Affirmation with the new data
        const updatedAffirmation = await Affirmation.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );

        res.status(200).json(updatedAffirmation);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

//delete affirmation

module.exports = {
    getAffirmations,
    createAffirmation,
    updateAffirmation
};