import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Listen from "./components/Listen/Listen";
import Schedule from "./components/Schedule/Schedule";
import ContactUs from "./components/ContactUs/ContactUs";
import PhotoGallery from "./components/PhotoGallery/PhotoGallery";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-white">
        <Intro />
        <About />
        {/* <Listen /> */}
        <Schedule />
        <ContactUs />
        {/* <PhotoGallery /> */}
      </main>
    </>
  );
}
