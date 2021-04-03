import HeroBanner from "../components/Landing/HeroBanner";
import Categories from "../components/Landing/Categories";
import NewPosts from "../components/Landing/NewPosts";
import FeaturedPosts from "../components/Landing/FeaturedPost";
import TravelTips from "../components/Landing/TravelTips";
import MeetTeam from "../components/Landing/MeetTeam";
import TopBloggers from "../components/Landing/TopBloggers";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchIndexPost } from "../features/post/postSlice";
import { fetchIndexDepartment } from "../features/department/departmentSlice";
import { fetchIndexUser } from "../features/user/userSlice";

export default function Main() {
 
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
