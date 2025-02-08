import React, { useState } from "react";
import { Card, Button, ListGroup, Modal } from "react-bootstrap";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

const ProductManagementSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [editProduct, setEditProduct] = useState<Product | null>(null); // Updated for type safety
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "Product A", price: 20, stock: 50 },
    { id: 2, name: "Product B", price: 15, stock: 100 },
  ]);

  const handleShowModal = (product: Product) => {
    setEditProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setEditProduct(null);
    setShowModal(false);
  };

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const ProductSchema = Yup.object().shape({
    name: Yup.string().required("Product name is required"),
    price: Yup.number()
      .required("Price is required")
      .min(1, "Price must be greater than 0"),
    stock: Yup.number()
      .required("Stock is required")
      .min(0, "Stock must be greater than or equal to 0"),
  });

  return (
    <Card>
      <Card.Body>
        <Card.Title>Product Management</Card.Title>
        <Button
          variant="primary"
          onClick={() =>
            handleShowModal({ id: 0, name: "", price: 0, stock: 0 })
          }
        >
          Create New Product
        </Button>
        <ListGroup className="mt-3">
          {products.map((product) => (
            <ListGroup.Item key={product.id}>
              <div>
                <strong>{product.name}</strong>
                <p>Price: ${product.price}</p>
                <p>Stock: {product.stock} units</p>
                <Button
                  variant="warning"
                  onClick={() => handleShowModal(product)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteProduct(product.id)}
                >
                  Delete
                </Button>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>
              {editProduct?.id ? "Edit Product" : "Create Product"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Formik
              initialValues={{
                name: editProduct?.name || "",
                price: editProduct?.price || 0,
                stock: editProduct?.stock || 0,
              }}
              validationSchema={ProductSchema}
              onSubmit={(values) => {
                if (editProduct?.id) {
                  setProducts(
                    products.map((product) =>
                      product.id === editProduct.id
                        ? { ...product, ...values }
                        : product
                    )
                  );
                } else {
                  setProducts([...products, { id: Date.now(), ...values }]);
                }
                handleCloseModal();
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div>
                    <label>Product Name</label>
                    <Field type="text" name="name" className="form-control" />
                    {errors.name &&
                      touched.name &&
                      typeof errors.name === "string" && (
                        <div className="text-danger">{errors.name}</div>
                      )}
                  </div>
                  <div className="mt-2">
                    <label>Price</label>
                    <Field
                      type="number"
                      name="price"
                      className="form-control"
                    />
                    {errors.price &&
                      touched.price &&
                      typeof errors.price === "string" && (
                        <div className="text-danger">{errors.price}</div>
                      )}
                  </div>
                  <div className="mt-2">
                    <label>Stock</label>
                    <Field
                      type="number"
                      name="stock"
                      className="form-control"
                    />
                    {errors.stock &&
                      touched.stock &&
                      typeof errors.stock === "string" && (
                        <div className="text-danger">{errors.stock}</div>
                      )}
                  </div>
                  <div className="mt-3">
                    <Button type="submit" variant="primary">
                      Save
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={handleCloseModal}
                      className="ms-2"
                    >
                      Cancel
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </Modal.Body>
        </Modal>
      </Card.Body>
    </Card>
  );
};

export default ProductManagementSection;
