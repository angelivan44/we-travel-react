import Navbar from "../components/UI/Navbar";
import HeroBanner from "../components/UI/HeroBanner"
import Categories from "../components/UI/Categories";
import FeaturedPosts from "../components/UI/FeaturedPost";

export default function Main() {
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <Categories />
      <FeaturedPosts />
    </div>
  )
}