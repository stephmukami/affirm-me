const User = require('../models/User');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const Affirmation = require('../models/Affirmation');

//create a user
async function createUser(req,res,next){
    const {username,password,email} = req.body;
    try{
         // Hash the password using bcrypt
        bcrypt.hash(password,saltRounds,async(err,hashedPassword)=>{
            if(err){
                return next(err);
            } 
            const user = await User.findOne({email});
            if (!user){
                    const newUser = new User({
                        username : username,
                        email : email,
                        password : hashedPassword
                    });
                    await newUser.save();
                    const { password, ...others } = newUser._doc;
                    res.status(200).json(others);
            }else{
                console.log('email already in use')//or put  message through
                res.status(500).json('email in use')
            }

        })

    }catch(err){
        console.error(err);
        res.status(500).json(err);
    }
}

//get all users
async function getUsers(req,res,nex){
        try {
          const fetchedUsers = await User.find();
          // Create a new array with the `password` field removed from each user object
          //toObject only gets changes one record so you can destructure like this                
          // const {password, ...others} = updatedUser._doc;

          const usersWithoutPasswords = fetchedUsers.map(user => {
            const { password, ...others } = user.toObject();
            return others;
          });
      
          res.status(200).json(usersWithoutPasswords);
        } catch (err) {
          res.status(500).json(err);
        }
}

//edit user 
async function editUser(req,res,next){
    try{
        const user = await User.findById(req.params.id);
        if (user){
            try{
                const updatedUser = await User.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set:req.body,
                    },
                    {new:true}
                );
                const {password, ...others} = updatedUser._doc;
                res.status(200).json(others);

            }catch(err){
                res.status(500).json(err);
                console.log(err);
            }
        }else{
            res.status(401).json('You can only update your user details');
        }
    }catch(err){
        res.status(500).json(err);
    }
}

//delete user
async function deleteUser(req, res, next) {
    try {
      const user = await User.findById(req.params.id);
  
      if (user) {
        try {
            await Affirmation.deleteMany({ username: user.username });
          await User.findByIdAndDelete(req.params.id);
          res.status(200).json({ message: 'User deleted successfully' });
        } catch (err) {
          res.status(500).json({ error: 'An error occurred while deleting the user' });
        }
      } else {
        res.status(404).json({ error: 'User not found' });
      }
  
    } catch (err) {
      res.status(500).json({ error: 'An error occurred while processing the request' });
    }
  }
  
module.exports = {
    createUser,
    getUsers,
    editUser,
    deleteUser
};