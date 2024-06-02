import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FaBoxOpen, FaChartLine, FaCalendarAlt, FaTruck, FaMapMarkerAlt } from 'react-icons/fa';
import 'react-tabs/style/react-tabs.css';
import './ProblemTarget.css';

const ProblemTarget = () => {
  return (
    <section id="problem-target">
      <div className="container">
        <h2>Our Features</h2>
        <Tabs>
          <TabList>
            <Tab>
              <div className="tab-icon"><FaBoxOpen /></div>
              Real-time Inventory Tracking
            </Tab>
            <Tab>
              <div className="tab-icon"><FaChartLine /></div>
              Customizable Reports
            </Tab>
            <Tab>
              <div className="tab-icon"><FaCalendarAlt /></div>
              Forecasting and Demand Planning
            </Tab>
            <Tab>
              <div className="tab-icon"><FaTruck /></div>
              Supplier Relationship Management
            </Tab>
            <Tab>
              <div className="tab-icon"><FaMapMarkerAlt /></div>
              Multi-location Management
            </Tab>
          </TabList>

          <div className="tab-content">
            <TabPanel>
              <h3>Real-time Inventory Tracking</h3>
              <p>Efficiently track your inventory in real-time to stay updated with stock levels and product availability. Get instant notifications on low stock and manage inventory seamlessly.</p>
            </TabPanel>
            <TabPanel>
              <h3>Customizable Reports</h3>
              <p>Generate detailed reports tailored to your business needs, providing insights into sales, inventory turnover, and more. Customize report formats and schedule automated report generation for streamlined operations.</p>
            </TabPanel>
            <TabPanel>
              <h3>Forecasting and Demand Planning</h3>
              <p>Utilize advanced forecasting algorithms to predict demand trends and optimize inventory levels accordingly. Plan future inventory requirements based on accurate demand forecasts to minimize stockouts and excess inventory.</p>
            </TabPanel>
            <TabPanel>
              <h3>Supplier Relationship Management</h3>
              <p>Streamline communication and collaboration with suppliers, ensuring timely deliveries and efficient inventory replenishment. Build strong relationships with suppliers through transparent communication and automated order processes.</p>
            </TabPanel>
            <TabPanel>
              <h3>Multi-location Management</h3>
              <p>Effortlessly manage inventory across multiple locations or warehouses, ensuring consistent stock levels and distribution. Centralize inventory control and streamline operations across all locations for enhanced efficiency and scalability.</p>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default ProblemTarget;
