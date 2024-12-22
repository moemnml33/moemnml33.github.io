import { useTheme } from "@nextui-org/use-theme";
import "./App.css";
import SimpleNavbar from "./components/Navbar";
import AboutCard from "./sections/AboutCard";
import InformationSection from "./sections/InformationSection";
import PhotoGallery from "./sections/PhotoGallery";
const bg_color_dark = "bg-zinc-900";
const bg_color_white = "bg-white";
// const styling = `${bg_color_dark} container flex-col justify-center min-w-full px-5`;

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
        <InformationSection />
      </main>
    </>
  );
}

export default App;
