"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DeleteProduct(product) {
  const [modal, setModal] = useState(false);
  const [isMutating, setIsMutating] = useState(false);
  const router = useRouter();
  async function handleDelete() {
    setIsMutating(true);
    await fetch(`http://localhost:5000/products/${product.id}`, {
      method: "DELETE",
    });
    setIsMutating(false);

    setModal(false);
    router.refresh();
  }

  function handleModal() {
    setModal(!modal);
  }
  return (
    <div>
      <button className="btn btn-error btn-sm" onClick={handleModal}>
        Delete
      </button>
      <input
        type="checkbox"
        checked={modal}
        onChange={handleModal}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are You Sure delete {product.name}
          </h3>
          <form>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleModal}>
                Close
              </button>
              {!isMutating ? (
                <button
                  type="button"
                  onClick={handleDelete}
                  className="btn btn-primary"
                >
                  Delete
                </button>
              ) : (
                <button type="button" className="btn btn-loading">
                  Deleting...
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
