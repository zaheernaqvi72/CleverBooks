import './CTA.css';
import { CTA_TITLE, CTA_DESCRIPTION, CTA_BUTTON_TEXT } from './constants';

export default function CTA() {
  return (
    <section id="cta">
      <div className="container">
        <h2>{CTA_TITLE}</h2>
        <p>{CTA_DESCRIPTION}</p>
        <button className="cta-button">{CTA_BUTTON_TEXT}</button>
      </div>
    </section>
  );
}