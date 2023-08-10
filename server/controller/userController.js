import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";
import bcrypt from "bcrypt"
import additionalDetailModel from "../models/additionalDetailModel.js";




export const login = async (req, res) => {
    const { email, password } = req.body;
  console.log(req.body)
    const user = await userModel.findOne({email})
    if (!user) {
      return res.status(401).json({
        success:false, 
        message: 'Authentication failed' });
    }
  
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({
        success:false,
        message: 'Incorrect password' });
    }
  
    // Generate JWT token
    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
   return res.status(200).json({ 
      success:true,
      message:'login successfully',
      user:{
        id:user._id,
        name:user.name,
        email:user.email,
        interests:user.interests,
        token   
      },
    });
  }

  export const signup=async (req, res) => {
    try {
      console.log(req.body)
    const { email, password,name } = req.body;
  
    const user = await userModel.findOne({email})
  
    if(user)
    return res.status(400).json({
  success:false,
  message:'user already exist'
  })

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);
  
    userModel.create({email,name,password:hashedPassword});
  
   return res.status(201).json({
    success:true, 
    message: 'User registered successfully' });
    } catch (error) {
      console.log('error in signup',error)
    }
    
  }
  export const updateTags=async (req, res) => {
    try {
      
      const userId=req.params.id

      const find=await userModel.findById({_id:userId})
  
      
    let newArr;
 
     newArr=find.readLater
     newArr.push(req.body)
  
    


   await userModel.findByIdAndUpdate({_id:userId},{readLater:newArr})
  
  
   return res.status(201).json({
    success:true, 
    readLater:newArr,
    message: 'tag updated successfully' });
    } catch (error) {
      console.log('error in signup',error)
    }
    
  }
  export const readlater=async (req, res) => {
    try {
      
      
    let newArr;
    if(user)
    if(user.interests.includes(tag)){
    newArr=user.interests.filter(it=>{return it!=tag})
    }else{
     newArr=user.interests
     newArr.push(tag)
    }
    else
    


   await userModel.findByIdAndUpdate({_id:id},{interests:newArr})
  
  
   return res.status(201).json({
    success:true, 
    message: 'tag updated successfully' });
    } catch (error) {
      console.log('error in signup',error)
    }
    
  }


  export const recommendation=async (req, res) => {
    try {
      const userInterests = req.query.interests; // Get user's selected interests
  
      // Implement your recommendation logic here based on userInterests and saved articles
      // For simplicity, let's assume you have a list of articles with categories and tags
      const recommendedArticles = articles.filter(article => {
        return (
          userInterests.some(interest => article.categories.includes(interest)) &&
          !userSavedArticles.includes(article.id) // Exclude already saved articles
        );
      });
  
      res.status(200).json(recommendedArticles);
    } catch (error) {
      res.status(500).json({ message: 'An error occurred' });
    }
  }