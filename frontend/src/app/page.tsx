import CorporateServicesSection from "@/components/CorporateServices/CorporateServicesSection";
import FAQSection from "@/components/FAQSection/FAQSection";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import TopBar from "@/components/Header/TopBar";
import WhyEntrexSection from "@/components/Header/WhyEntrexSection";
import InCarProvisionsSection from "@/components/InCarProvisions/InCarProvisionsSection";
import KeyHighlightsSection from "@/components/KeyHighlights/KeyHighlightsSection";
import LetsTalkSection from "@/components/LetsTalkSection";
import NewsUpdatesSection from "@/components/NewsUpdates/NewsUpdatesSection";
import PreferredSection from "@/components/prefferedUiCard/preferred";

export default function HomePage() {
  return (
    <>
      <TopBar />
      <Header />
      <WhyEntrexSection />
      <CorporateServicesSection />
      <InCarProvisionsSection />
      <PreferredSection />
      <KeyHighlightsSection />
      <FAQSection />
      <NewsUpdatesSection />
      <LetsTalkSection />
      <Footer />
    </>
  );
}
