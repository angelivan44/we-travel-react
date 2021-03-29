import Navbar from "../components/UI/Navbar";
import HeroBanner from "../components/UI/HeroBanner";
import Categories from "../components/UI/Categories";
import NewPosts from "../components/UI/NewPosts";
import FeaturedPosts from "../components/UI/FeaturedPost";
import TravelTips from "../components/UI/TravelTips";
import BloggerCard from "../components/containers/BloggerCard";

export default function Main() {
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <Categories />
      <FeaturedPosts />
      <NewPosts />
      <TravelTips />
      <BloggerCard
        src={"https://www.playas-peru.com/wp-content/uploads/2019/01/playas-en-piura-3.jpg"}
        nameUser={"@John"}
        content={
          "Suspendisse Ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat toyror nutlrices massa turpis. Arcu pulvinar Benean nam laoreet nulla"
        }
      ></BloggerCard>
      <BloggerCard
        
        nameUser={"@John"}
        content={
          "Suspendisse Ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat toyror nutlrices massa turpis. Arcu pulvinar Benean nam laoreet nulla"
        }
      ></BloggerCard>
    </div>
  );
}
