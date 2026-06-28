import { CTA } from "./components/CTA.jsx";
import Demo from "./components/Demo.jsx";
import { Features } from "./components/Features.jsx";
import { Footer } from "./components/Footer.jsx";
import { Hero } from "./components/Hero.jsx";
import { Problem } from "./components/Problem.jsx";
import { Solution } from "./components/Solution.jsx";

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-canvas text-ink">
      <Hero />
      <Problem />
      <Solution />
      <Demo />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
}
