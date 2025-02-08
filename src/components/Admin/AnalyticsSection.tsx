
import { Card } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AnalyticsSection = () => {
  // Sample data for sales performance graph
  const salesData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales Performance",
        data: [30, 40, 70, 60, 90, 110],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  };

  // Product comparison data
  const productComparisonData = {
    labels: ["Product A", "Product B", "Product C"],
    datasets: [
      {
        label: "Sales",
        data: [120, 80, 95],
        backgroundColor: ["#FF5733", "#33FF57", "#3357FF"],
      },
    ],
  };

  // Inventory status
  const inventoryStatus = [
    { product: "Product A", stock: 15 },
    { product: "Product B", stock: 5 },
    { product: "Product C", stock: 20 },
  ];

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>Sales Performance</Card.Title>
          <Line data={salesData} />
        </Card.Body>
      </Card>
      <Card className="mt-4">
        <Card.Body>
          <Card.Title>Product Comparison</Card.Title>
          <Line data={productComparisonData} />
        </Card.Body>
      </Card>
      <Card className="mt-4">
        <Card.Body>
          <Card.Title>Inventory Status</Card.Title>
          <ul>
            {inventoryStatus.map((item) => (
              <li key={item.product}>
                {item.product}: {item.stock} units in stock
              </li>
            ))}
          </ul>
        </Card.Body>
      </Card>
    </>
  );
};

export default AnalyticsSection;
