import BoxesSlider from "@/components/BoxesSlider/BoxesSlider";
import Boxes from "@/components/Boxes/Boxes";
import Hero from "@/components/Hero/Hero";
import Numbers from "@/components/Numbers/Numbers";

const Home = () => {
  return (
    <main className="container mb-12 px-5 flex flex-col sm:px-0 justify-between gap-16 sm:mx-auto">
      <Hero />
      <BoxesSlider />
      <Boxes />
      <Numbers />
    </main>
  );
};

export default Home;
