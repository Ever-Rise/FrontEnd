import styles from "./styles.module.css";
import {
    BenefitsSection,
    CtaSection,
    FaqSection,
    HeroSection,
    PlansSection,
    TestimonialsSection,
    UseCasesSection,
} from "./components";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

export default function VendasPage() {
    return (
        <main className={styles.page} style={{ paddingTop: "76px" }}>
            <Header />
            <HeroSection />
            <BenefitsSection />
            <PlansSection />
            <UseCasesSection />
            <TestimonialsSection />
            <FaqSection />
            <CtaSection />
            <Footer />
        </main>
    );
}
