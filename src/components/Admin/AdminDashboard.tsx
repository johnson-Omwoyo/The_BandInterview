import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import AnalyticsSection from "./AnalyticsSection";
import ProductManagementSection from "./ProductManagementSection";

const AdminDashboard = () => {
  return (
    <Container fluid className="mt-4">
      <Row>
        <Col md={8}>
          <AnalyticsSection />
        </Col>
        <Col md={4}>
          <ProductManagementSection />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
