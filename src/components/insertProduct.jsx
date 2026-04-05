import { useState, useRef } from "react"  
import { ProductInsert } from "../api/product_handler";
import { UploadImage } from "../api/r2_image_upload";

export default function InsertData({ onInsert }) {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null)
  const fileInputRef = useRef(null) 

  const handleInsert = async () => {
    let imageUrl = null
    if (image) {
      imageUrl = await UploadImage(image);
    }
    await ProductInsert(title, price, category, imageUrl)
    onInsert()
    setTitle('')
    setPrice(0)
    setCategory('')
    setImage(null)
    fileInputRef.current.value = ''  
  }

  return (
    <>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="title"/>
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="price"/>
      <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="category"/>
      <input type="file" accept="image/*" ref={fileInputRef} onChange={(e) => setImage(e.target.files[0])}/>
      <button onClick={handleInsert}>Insert</button>
    </>
  )
}