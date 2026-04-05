import { useState } from "react"
import UpdateData from "./updateProduct"
import { ProductDelete } from "../api/product_handler"

export default function ProductCard({ product, onUpdate }) {
  const [showEdit, setShowEdit] = useState(false)

  const handleDelete = async () => {
    await ProductDelete(product.id)
    onUpdate()
  }

  return (
    <>
      {product.image_url && <img src={product.image_url} alt={product.title} width={200}/>}
      <h1>{product.title}</h1>
      <p>{product.price}</p>
      <p>{product.category}</p>
      <p>{product.in_stock ? 'In Stock' : 'Sold Out'}</p>
      <button onClick={() => setShowEdit(!showEdit)}>
        {showEdit ? 'Cancel' : 'Edit'}
      </button>
      <button onClick={handleDelete}>Delete</button>
      {showEdit && (
        <UpdateData
          product={product}
          onUpdate={() => {
            onUpdate()
            setShowEdit(false)
          }}
        />
      )}
    </>
  )
}