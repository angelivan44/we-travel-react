import Navbar from "../components/UI/Navbar";
import HeroBanner from "../components/UI/HeroBanner"
import Categories from "../components/UI/Categories";
import NewPosts from "../components/UI/NewPosts";
import FeaturedPosts from "../components/UI/FeaturedPost";
import TravelTips from "../components/UI/TravelTips";
import BloggerCard from "../components/UI/BloggerCard";

export default function Main() {
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <Categories />
      <FeaturedPosts />
      <NewPosts />
      <TravelTips />
      <BloggerCard></BloggerCard>
    </div>
  )
}