import App from './_app.js';
import styles from '../styles/Home.module.css';
import Landing from '../components/landing';

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

      <Landing />
    </>
  )
}
