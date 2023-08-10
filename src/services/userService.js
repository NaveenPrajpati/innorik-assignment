import axios from "axios";
import { Context } from "../Context/Mycontext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
const baseUrl='http://localhost:4000/api'

export const signup=async(body)=>{
 return await axios.post(baseUrl+'/signup',body)
}
export const login=async(body)=>{

   return await axios.post(baseUrl+'/login', body)
}
export const readlat=async(body)=>{

   return await axios.post(baseUrl+`/readlater/${body.id}`,{ readLater:body.readLater})
}
export const updateTags=async(body)=>{

   return await axios.post(baseUrl+`/updateTag/${body.id}`,{interests:body.interests})
}
export const getUserDetail=async(id)=>{

   return await axios.get(baseUrl+`/getUserDetail/${id}`)
}