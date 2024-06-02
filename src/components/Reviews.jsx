import './Reviews.css';

const Reviews = () => {
  return (
    <section id="reviews">
      <div className="container">
        <h2>What Our Users Say</h2>
        <div className="reviews">
          <div className="review card">
            <p>CleverBooks has transformed our inventory management process. It is efficient and easy to use.</p>
            <h4>John Doe</h4>
            <span>CEO, Example Company</span>
          </div>
          <div className="review card">
            <p>Thanks to CleverBooks, we have reduced our inventory costs significantly. Highly recommend!</p>
            <h4>Jane Smith</h4>
            <span>Operations Manager, Another Company</span>
          </div>
          <div className="review card">
            <p>The real-time updates are a game changer. Our team can now make data-driven decisions with confidence.</p>
            <h4>Emily Johnson</h4>
            <span>Inventory Specialist, Business Corp</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
