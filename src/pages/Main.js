import Navbar from "../components/UI/Navbar";
import HeroBanner from "../components/UI/HeroBanner"
import Categories from "../components/UI/Categories";
import NewPosts from "../components/UI/NewPosts";

export default function Main() {
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <Categories />
      <NewPosts />
    </div>
  )
}