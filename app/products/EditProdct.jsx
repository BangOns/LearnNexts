"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EditProduct(product) {
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const router = useRouter();
  async function handleSubmit(e) {
    e.preventDefault();
    await fetch(`http://localhost:5000/products/${product.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: title,
        price: price,
      }),
    });

    setModal(false);
    router.refresh();
  }

  function handleModal() {
    setModal(!modal);
  }
  return (
    <div>
      <button className="btn btn-info btn-sm" onClick={handleModal}>
        Edit
      </button>
      <input
        type="checkbox"
        checked={modal}
        onChange={handleModal}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit Product</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label font-bold">Title</label>
              <input
                type="text"
                placeholder="title"
                className="input w-full input-bordered"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label font-bold">Price</label>
              <input
                type="text"
                placeholder="Price"
                className="input w-full input-bordered"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleModal}>
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}