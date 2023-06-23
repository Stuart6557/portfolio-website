import App from './_app.js';
import styles from '../styles/Home.module.css';
import Landing from '../components/landing';
import Navbar from '../components/navbar.js';
import LargeCardSection from '../components/largeCardSection.js';
import SmallCardsSection from '../components/smallCardsSection.js';
import Footer from '../components/footer.js';

export default function Home() {
  return (
    <>
      <div className={styles.background}>
        {/* figure this particle stuff out later
        <div>
          <div id="particles-js"></div>
          <script src="particles.js"></script>
        </div> */}
      </div>

      <Navbar />

      <Landing />
      <LargeCardSection />
      <SmallCardsSection />
      <SmallCardsSection />
      <LargeCardSection />
      <Footer />
    </>
  )
}
