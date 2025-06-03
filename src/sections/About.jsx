import Globe from "react-globe.gl";
import Button from "../components/Button";

{
  `${import.meta.env.BASE_URL}assets/grid1.png`;
}
const About = () => {
  return (
    <section className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-1 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src={`${import.meta.env.BASE_URL}assets/grid1.png`}
              alt="grid-1"
              className="w-20 sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Привет! Я Женя</p>
              <p className="grid-subtext">Frontend разработчик</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src={`${import.meta.env.BASE_URL}assets/grid3.png`}
              alt="grid2"
              className="w-full h-[150px] sm:h-[276px]  object-cover"
            />
            <div>
              <p className="grid-headtext">Технологии:</p>
              <p className="grid-subtext">
                JavaScript, TypeScript, React, React-router, Redux-toolkit,
                Tailwind, Three.js, SCSS
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              />
            </div>
            <div>
              <p className="grid-headtext">Нахожусь в Санкт-Петербурге</p>
              <Button isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
