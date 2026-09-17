import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { PipelineSection } from "./components/PipelineSection";
import { Footer } from "./components/Footer";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfService } from "./pages/TermsOfService";

function Home() {
  return (
    <main>
      <HeroSection />
      <PipelineSection />
    </main>
  );
}

export function App() {
  return (
    <div className="min-h-screen bg-canvas text-ink antialiased flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
