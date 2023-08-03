import AddProduct from "./AddProduct";
import DeleteProduct from "./DeleteProduct";
import EditProduct from "./EditProdct";

async function getDataProduct() {
  const res = await fetch("http://localhost:5000/products", {
    cache: "no-store",
  });
  return res.json();
}
export default async function ProductList() {
  const products = await getDataProduct();
  console.log(products);
  return (
    <div className="py-10 px-10">
      <div className="py-2">
        <AddProduct />
      </div>
      <table className="table w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            return (
              <tr key={product.id}>
                <td>{index}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td className="flex">
                  <EditProduct {...product} />
                  <DeleteProduct {...product} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
