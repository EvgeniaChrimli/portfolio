import { Canvas } from "@react-three/fiber";
import { about } from "../constants";

const Experience = () => {
  return (
    <section className="c-space my-20">
      <div className="w-full text-white-600">
        <h3 className="head-text text-center mb-10">О себе</h3>
        <div className="flex justify-center">
          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {about.map((item) => (
                <div className="work-content_container group" key={item.id}>
                  <div className="flex items-center flex-col h-full justify-start py-2">
                    <div className="work-content_logo">
                      <img
                        src={item.icon}
                        alt="iconExperience"
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="group-hover:text-white transition ease-in-out duration-500">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
