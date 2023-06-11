const mongoose = require('mongoose')
const Joi = require('joi')
const jwt= require('jsonwebtoken')

const userschema= new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
      },
      age: {
        type: Number,
        required: true,
        min: 16,
      },
      salary:{
        type:Number,
        required:true,
      },
      gender: {
        type: String,
        required: true,
        enum: ['male', 'female'],
      },
      taxCreditPoints: {
        type: Number,
        required: true,
      },
      periferia: {
        type: Boolean,
        
      },
    });

userschema.methods.generateJWT =function(){
    const token = jwt.sign({ _id : this._id},'thatsTheWordIuseToEncrypt')
    return token;
}
const User=  new mongoose.model('User',userschema)


function validateUser(user){
    const schema = {
        fullName: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(5).max(255).required(),
        age: Joi.number().integer().min(16).required(),
        salary:Joi.number().required(),
        gender: Joi.string().valid('male', 'female').required(),
        taxCreditPoints: Joi.number().required(),
        periferia: Joi.boolean()
    };

    return Joi.validate(user,schema)
}


module.exports.validate= validateUser
module.exports.User= User