import './KeyProblems.css';

const KeyProblems = () => {
  return (
    <section id="key-problems">
      <div className="container">
        <h2>Key Problems Solved</h2>
        <div className="problems">
          <div className="problem card">
            <h3>Inventory Overload</h3>
            <p>Manage and reduce excess inventory, saving space and costs.</p>
          </div>
          <div className="problem card">
            <h3>Stockouts</h3>
            <p>Prevent stockouts and ensure you always have the right amount of stock on hand.</p>
          </div>
          <div className="problem card">
            <h3>Order Management</h3>
            <p>Streamline order management and fulfillment processes.</p>
          </div>
          <div className="problem card">
            <h3>Supply Chain Visibility</h3>
            <p>Gain full visibility into your supply chain operations.</p>
          </div>
          <div className="problem card">
            <h3>Data Accuracy</h3>
            <p>Ensure data accuracy and reliability with automated inventory tracking.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyProblems;
