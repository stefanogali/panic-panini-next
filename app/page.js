import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
// import Listen from "./components/Listen/Listen";
import Schedule from "./components/Schedule/Schedule";
import ContactUs from "./components/ContactUs/ContactUs";
import Sponsors from "./components/Sponsors/Sponsors";
import FAQ from "./components/FAQ";
import Theme from "./components/Theme";
import Grid from "./components/Grid";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-white">
        <Intro />
        <About />
        <Theme />
        {/* <Listen /> */}
        <Schedule />
        <Sponsors />
        <Grid />
        <FAQ />
        <ContactUs />
      </main>
    </>
  );
}
