import Hero from './components/Hero';
import KeyProblems from './components/keyProblems';
import KeyMetrics from './components/KeyMatrics';
import Reviews from './components/Reviews';
import ProblemTarget from './components/ProblemTarget';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <KeyProblems />
      <KeyMetrics />
      <Reviews />
      <ProblemTarget />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
