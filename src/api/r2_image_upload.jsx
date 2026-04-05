import { PutObjectCommand } from "@aws-sdk/client-s3";
import { r2Client } from "../r2/r2_connection";

const R2_BUCKET = process.env.REACT_APP_R2_BUCKET
const R2_PUBLIC_URL = process.env.REACT_APP_R2_PUBLIC_URL

export async function UploadImage(file) {
  const filename = `${Date.now()}-${file.name}`
  
  const arrayBuffer = await file.arrayBuffer() 
  const uint8Array = new Uint8Array(arrayBuffer) 

  await r2Client.send(new PutObjectCommand({
    Bucket: R2_BUCKET,
    Key: filename,
    Body: uint8Array,       
    ContentType: file.type,
  }))

  const imageUrl = `${R2_PUBLIC_URL}/${filename}`
  return imageUrl
}