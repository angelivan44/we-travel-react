import Navbar from "../components/UI/Navbar";
import HeroBanner from "../components/Landing/HeroBanner";
import Categories from "../components/Landing/Categories";
import NewPosts from "../components/Landing/NewPosts";
import FeaturedPosts from "../components/Landing/FeaturedPost";
import TravelTips from "../components/Landing/TravelTips";
import MeetTeam from "../components/Landing/MeetTeam";
import TopBloggers from "../components/Landing/TopBloggers";
import Footer from "../components/UI/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchIndexPost } from "../features/post/postSlice";

export default function Main() {

  const dispatch = useDispatch()
  
  useEffect((()=>{
    dispatch(fetchIndexPost())
  }),[])


  return (
    <div>
      <HeroBanner />
      <Categories />
      <FeaturedPosts />
      <NewPosts />
      <TravelTips />
      <TopBloggers />
      <MeetTeam />
    </div>
  );
}
