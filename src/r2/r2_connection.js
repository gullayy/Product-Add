import { S3Client } from "@aws-sdk/client-s3";

export const r2Client = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.REACT_APP_R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.REACT_APP_R2_ACCESS_KEY,
    secretAccessKey: process.env.REACT_APP_R2_SECRET_KEY,
  },
})