import { useState } from "react"
import { UploadImage } from "../api/r2_image_upload";

export default function UpdateData({ product, onUpdate }) {
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [category, setCategory] = useState(product.category);
  const [image, setImage] = useState(null)

  const handleUpdate = async () => {

    const updates = {}
    if (title !== product.title) updates.title = title
    if (price !== product.price) updates.price = price
    if (category !== product.category) updates.category = category

    if (image) {
      console.log('uploading image...')
      const imageUrl = await UploadImage(image)

      updates.image_url = imageUrl
    }
    onUpdate()
  
  }

  return (
    <>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="title"/>
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="price"/>
      <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="category"/>
      <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])}/>
      <button onClick={handleUpdate}>Update</button>
    </>
  )
}