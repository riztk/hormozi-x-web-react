import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { TrustBar } from "./components/TrustBar";
import { ProductMockup } from "./components/ProductMockup";
import { PipelineSection } from "./components/PipelineSectionNew";
import { EvidenceSection } from "./components/EvidenceSection";
import { ComparisonSection } from "./components/ComparisonSection";
import { AutonomySection } from "./components/AutonomySection";
import { EnterpriseTrustSection } from "./components/EnterpriseTrustSection";
import { ROISection } from "./components/ROISection";
import { LiveActivityStream } from "./components/LiveActivityStream";
import { FinalCTASection } from "./components/FinalCTASection";
import { Footer } from "./components/Footer";
import { BookDemo } from "./pages/BookDemo";
import { DemoBooked } from "./pages/DemoBooked";
import { Legal } from "./pages/Legal";
import { NotFound } from "./pages/NotFound";

function Home() {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <ProductMockup />
      <PipelineSection />
      <EvidenceSection />
      <ComparisonSection />
      <AutonomySection />
      <EnterpriseTrustSection />
      <ROISection />
      <LiveActivityStream />
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
          {/* R1 screens */}
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<BookDemo />} />
          <Route path="/demo/booked" element={<DemoBooked />} />
          <Route path="/legal/:doc" element={<Legal />} />

          {/* Legacy redirects — old routes to new legal hub */}
          <Route
            path="/privacy-policy"
            element={<Navigate to="/legal/privacy" replace />}
          />
          <Route
            path="/terms"
            element={<Navigate to="/legal/terms" replace />}
          />

          {/* MW15 — 404 catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
