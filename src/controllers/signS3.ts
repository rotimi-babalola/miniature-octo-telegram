import aws from 'aws-sdk';
import { Request, Response } from 'express';

require('dotenv').config();

const S3_BUCKET = process.env.S3BUCKET;

// configure aws with secret key and accessID
aws.config.update({
  region: 'us-east-1',
  accessKeyId: process.env.AWSAccessKeyId,
  secretAccessKey: process.env.AWSSecretKey,
});

const signS3 = (request: Request, response: Response) => {
  const { fileName, fileType } = request.body;
  const s3 = new aws.S3();

  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 50,
    ContentType: fileType,
    ACL: 'public-read',
  };

  // Make a request to the S3 API to get a signed URL which we can use to upload our file
  try {
    const data = s3.getSignedUrl('putObject', s3Params);

    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`,
    };

    response.json({
      success: true,
      data: returnData,
    });
  } catch (error) {
    response.json({
      success: false,
      error,
    });
  }
};

export default signS3;
