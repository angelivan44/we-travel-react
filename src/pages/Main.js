import Navbar from "../components/UI/Navbar";
import HeroBanner from "../components/Landing/HeroBanner"
import Categories from "../components/Landing/Categories";
import NewPosts from "../components/Landing/NewPosts";
import FeaturedPosts from "../components/Landing/FeaturedPost";
import TravelTips from "../components/Landing/TravelTips";

export default function Main() {
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <Categories />
      <FeaturedPosts />
      <NewPosts />
      <TravelTips />
    </div>
  )
}