import CreateProductModal from "./ProductManagement/CreateProductModal";
import ProductsTable from "./ProductManagement/ProductsTable";

const ProductManagementPage = () => {
  return (
    <div className=" min-h-screen mt-12">
      <CreateProductModal />
      <ProductsTable />
    </div>
  );
};

export default ProductManagementPage;
