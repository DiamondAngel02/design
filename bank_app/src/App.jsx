import styles from './style';
<link rel="stylesheet" href="./index.css"/>

import { Navbar,
  Billing,
  CardDeal,
  Business,
  Button,
  Clients,
  CTA, 
  FeedbackCards,
  Footer,
  GetStarted,
  Hero,
  Stats,
  Testimonials } from "./components";

/* Use of dynamic classes */
const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div> 
);


export default App;
//react arrow function