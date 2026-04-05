import { supabase } from "../supabase/supabase_connection";
import { useEffect, useState } from "react";
import ProductCard from "../components/productCard";
import InsertData from "../components/insertProduct";

export default function ProductData() {
  const [productData, setProductData] = useState([]);

  const productFetch = async () => {
    const { data, error } = await supabase.from('product').select('*')
    if (error) console.error(error);
    else setProductData(data);
  }

  useEffect(() => {
    productFetch();
  }, [])

  return (
    <>
      <InsertData onInsert={productFetch} />
      {productData.map(product => (
        <ProductCard key={product.id} product={product} onUpdate={productFetch} />
      ))}
    </>
  )
}