import userModel from "../models/userModel";
import bcrypt from 'bcrypt'
import { sign } from 'jsonwebtoken';



export const login = async (req, res) => {
    const { email, password } = req.body;
  
    const user = userModel.find((user) => user.email === email);
    if (!user) {
      return res.status(401).json({ message: 'Authentication failed' });
    }
  
    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Authentication failed' });
    }
  
    // Generate JWT token
    const token = sign({ email: user.email }, 'your-secret-key', { expiresIn: '1h' });
  
    res.status(200).json({ token });
  }

  export const signup=async (req, res) => {
    const { email, password } = req.body;
  
    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);
  
    userModel.push({ email, password: hashedPassword });
  
    res.status(201).json({ message: 'User registered successfully' });
  }