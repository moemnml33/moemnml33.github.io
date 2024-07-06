import "./App.css";
import SimpleNavbar from "./components/Navbar";
import CustomCard from "./components/CustomCard";
import { Button, Avatar } from "@material-tailwind/react";
import PhotoGallery from "./components/PhotoGallery";

function App() {
  return (
    <>
      <div className=" container flex-col justify-center w-10/12 bg-zinc-900 border-x border-zinc-700">
        <SimpleNavbar />
        <CustomCard />
        <PhotoGallery />
      </div>
    </>
  );
}

export default App;
