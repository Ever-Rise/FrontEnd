import styles from "./styles.module.css";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import {
    AudienceSection,
    CtaSection,
    HeroSection,
    PlansSection,
    ProcessSection,
    StorySection,
} from "./components";

const LandingPage = () => {
    return (
        <div className={styles.page}>
            <Header />

            <main className={styles.main}>
                <HeroSection />
                <ProcessSection />
                <StorySection />
                <PlansSection />
                <AudienceSection />
                <CtaSection />
            </main>

            <Footer />
        </div>
    );
};

export default LandingPage;
