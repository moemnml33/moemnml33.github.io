import "./App.css";
import SimpleNavbar from "./components/Navbar";
import AboutCard from "./components/AboutCard";
import PhotoGallery from "./components/PhotoGallery";
import InformationSection from "./components/InformationSection";

function App() {
  return (
    <>
      {/* <div className="container flex-col justify-center sm:w-11/12 bg-zinc-900 sm:border-x sm:border-zinc-700"> */}
      <div className="container flex-col justify-center bg-zinc-900 min-w-full px-5">
        <SimpleNavbar />
        <AboutCard />
        <PhotoGallery />
        <InformationSection />
      </div>
    </>
  );
}

export default App;
