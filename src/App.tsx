import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ProductMockup } from "./components/ProductMockup";
import { PipelineSection } from "./components/PipelineSectionNew";
import { EvidenceSection } from "./components/EvidenceSection";
import { ComparisonSection } from "./components/ComparisonSection";
import { AutonomySection } from "./components/AutonomySection";
import { EnterpriseTrustSection } from "./components/EnterpriseTrustSection";
import { ROISection } from "./components/ROISection";
import { FinalCTASection } from "./components/FinalCTASection";
import { Footer } from "./components/Footer";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfService } from "./pages/TermsOfService";

function Home() {
  return (
    <main>
      <HeroSection />
      <ProductMockup />
      <PipelineSection />
      <EvidenceSection />
      <ComparisonSection />
      <AutonomySection />
      <EnterpriseTrustSection />
      <ROISection />
      <FinalCTASection />
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
