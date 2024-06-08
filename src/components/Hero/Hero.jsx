import Slider from "./Slider";
import Title from "./Title";
import Boxes from "../BoxesSlider/BoxesSlider";

const Hero = () => {
  return (
    <div
      id="hero"
      className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-16"
    >
      <Title />
      <Slider />
    </div>
  );
};

export default Hero;
