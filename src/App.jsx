import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./components/Experience";

function App() {
  return (
    <>
      <main className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-2 text-white p-2">
          <div className="font-bold">Хримли Евгения Юрьевна</div>
          <a href="tel:+79081732728">Контактный номер: +79081732728</a>
          <a
            className="flex items-center gap-2"
            href="https://github.com/EvgeniaChrimli"
          >
            GitHub{" "}
            <img className="w-3 h-3" src="/assets/arrow-up.png" alt="arrow" />
          </a>
        </div>
        <Hero />
        <About />
        <Projects />
        <Experience />
      </main>
    </>
  );
}

export default App;
