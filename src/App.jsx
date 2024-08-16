import "./App.css";
import SimpleNavbar from "./components/Navbar";
import AboutCard from "./components/AboutCard";
import { Button, Avatar } from "@material-tailwind/react";
import PhotoGallery from "./components/PhotoGallery";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div className=" container flex-col justify-center sm:w-11/12 sm:bg-zinc-900 sm:border-x sm:border-zinc-700">
        <SimpleNavbar />
        <AboutCard />
        <PhotoGallery />
        <Skills />
      </div>
    </>
  );
}

export default App;
