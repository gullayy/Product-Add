import { supabase } from "../supabase/supabase_connection";

export async function ProductInsert(product_title, product_price, product_category ,image_url) {
  const { error } = await supabase.from('product')
    .insert({ title: product_title, price: product_price, category: product_category, in_stock: true , image_url : image_url})
  
  if (error) console.error(error);
}

export async function ProductUpdate(product_id, updated_data) {
  const { data, error } = await supabase.from('product')
    .update(updated_data)
    .eq('id', product_id)
    .select() 
  if (error) console.error('supabase error:', error)
  return { data, error }
}
export async function ProductDelete(product_id) {
  const { error } = await supabase.from('product')
    .delete()
    .eq('id', product_id)
  
  if (error) console.error(error);
}


    
