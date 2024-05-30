import Slider from "./Slider";
import Title from "./Title";
import Boxes from "../Boxes/Boxes";

const Hero = () => {
  return (
    <div id="hero" className="flex flex-col gap-16 sm:flex-row">
      <Title />
      <Slider />
    </div>
  );
};

export default Hero;
