import React, { Suspense } from "react";
import { myProjects } from "../constants";
const projectCount = myProjects.length;
const Projects = () => {
  const [selectedProjIndex, setSelectedProjIndex] = React.useState(0);
  const currentProject = myProjects[selectedProjIndex];

  const handleNavigation = (direction) => {
    setSelectedProjIndex((prevIndex) => {
      if (direction === "prev") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };
  return (
    <section className="c-space m-20">
      <p className="head-text text-center">Мои работы</p>
      <div className="grid lg:grid-cols-1 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <img
              src={currentProject.logo}
              alt="logo"
              className="w-10 h-10 shadow-sm"
            />
          </div>
          <div className="flex flex-col my-5 gap-5 text-white-600">
            <p className="text-white text-2xl font-semibold animatedText">
              {currentProject.title}
            </p>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>

            <a
              href={currentProject.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 cursor-pointer text-white-600"
            >
              <p>Перейти к просмотру</p>
              <img
                src={`${import.meta.env.BASE_URL}assets/arrow-up.png`}
                alt="arrow"
                className="w-3 h-3"
              />
            </a>
          </div>

          <div className="flex items-center justify-between mt-7">
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("prev")}
            >
              <img
                src={`${import.meta.env.BASE_URL}assets/left-arrow.png`}
                alt="left-arrow"
                className="w-4 h-4"
              />
            </button>
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("next")}
            >
              <img
                src={`${import.meta.env.BASE_URL}assets/right-arrow.png`}
                alt="right-arrow"
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
