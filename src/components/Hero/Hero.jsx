import Slider from "./Slider";
import Title from "./Title";
import Boxes from "../Boxes/Boxes";

const Hero = () => {
  return (
    <>
      <main
        id="hero"
        className="container mb-12 px-5  flex flex-col justify-between gap-16 sm:mx-auto sm:flex-row sm:h-[500px]"
      >
        <Title />
        <Slider />
      </main>
      <div></div>
    </>
  );
};

export default Hero;
