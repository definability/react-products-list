import React from 'react';

import { Layout, Panel } from 'react-toolbox';

import ProductsForm from './ProductsForm';
import ProductsTable from './ProductsTable';

const Application = () => (
  <Layout>
    <Panel>
      <h1>Bucket</h1>

      <h2>Add products</h2>
      <ProductsForm />

      <h2>Products</h2>
      <ProductsTable />
    </Panel>
  </Layout>
);

export default Application;
