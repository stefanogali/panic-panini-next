import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Schedule from "./components/Schedule/Schedule";
import ContactUs from "./components/ContactUs/ContactUs";
import Sponsors from "./components/Sponsors/Sponsors";
import FAQ from "./components/FAQ";
import Theme from "./components/Theme";
import Grid from "./components/Grid";
import Judges from "./components/Judges/Judges";
import Prizes from "./components/Prizes/Prizes";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-white">
        <Intro />
        <About />
        <Theme />
        <Prizes />
        <Schedule />
        <Sponsors />
        <Judges />
        <Grid />
        <FAQ />
        <ContactUs />
      </main>
    </>
  );
}
