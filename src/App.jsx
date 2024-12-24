import { useTheme } from "@nextui-org/use-theme";
import "./App.css";
import SimpleNavbar from "./components/Navbar";
import AboutCard from "./sections/AboutCard";
import PhotoGallery from "./sections/PhotoGallery";
const bg_color_dark = "bg-zinc-900";
const bg_color_white = "bg-white";
// const styling = `${bg_color_dark} container flex-col justify-center min-w-full px-5`;
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

function App() {
  const { theme, setTheme } = useTheme("dark");
  const handleTheme = (theme) => {
    if (theme === "dark") {
      setTheme("light");
    } else setTheme("dark");
  };

  return (
    <>
      {/* <div className="container flex-col justify-center sm:w-11/12 bg-zinc-900 sm:border-x sm:border-zinc-700"> */}
      {/* <div className={styling}> */}
      <main
        className={`${theme} text-foreground bg-background container flex-col justify-center min-w-full px-5 h-full`}
      >
        <SimpleNavbar />
        <AboutCard />
        {/* <button
          onClick={() => handleTheme(theme)}
          className="text-deep-orange-900"
        >
          button
        </button> */}
        <PhotoGallery />
        <div className="grid xl:grid-cols-2 md:grid-cols-1 container gap-x-20 mx-auto items-start">
          <Education />
          <Experience />
        </div>
        <Skills />
        <Projects />
      </main>
    </>
  );
}

export default App;
