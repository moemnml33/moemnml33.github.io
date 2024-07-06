import "./App.css";
import SimpleNavbar from "./components/Navbar";
import AboutCard from "./components/AboutCard";
import { Button, Avatar } from "@material-tailwind/react";
import PhotoGallery from "./components/PhotoGallery";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div className=" container flex-col justify-center md:w-10/12 bg-zinc-900 border-x border-zinc-700">
        <SimpleNavbar />
        <AboutCard />
        <PhotoGallery />
        {/* <div>
          <img
            className="mx-auto"
            src="https://skillicons.dev/icons?i=java,python,react,html,css,js,bootstrap,php"
          />
        </div> */}
        <Skills />
      </div>
    </>
  );
}

export default App;
