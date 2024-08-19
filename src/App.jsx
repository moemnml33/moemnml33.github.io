import "./App.css";
import SimpleNavbar from "./components/Navbar";
import AboutCard from "./components/AboutCard";
import PhotoGallery from "./components/PhotoGallery";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      {/* <div className="container flex-col justify-center sm:w-11/12 bg-zinc-900 sm:border-x sm:border-zinc-700"> */}
      <div className="container flex-col justify-center bg-zinc-900 min-w-full lg:px-10">
        <SimpleNavbar />
        <AboutCard />
        <PhotoGallery />
        <Skills />
      </div>
    </>
  );
}

export default App;
