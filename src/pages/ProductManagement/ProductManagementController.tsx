import CreateProductModal from "./CreateProductModal";
import ProductsTable from "./ProductsTable";

const ProductManagementController = () => {
  return (
    <div className=" min-h-screen mt-12 mb-28 px-4 lg:px-24 ">
      <CreateProductModal></CreateProductModal>
      <ProductsTable></ProductsTable>
    </div>
  );
};

export default ProductManagementController;
