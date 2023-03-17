const s3 = require('aws-sdk/clients/s3')
const fs = require('fs')

const region = process.env.AWS_REGION
const accesKeyId = process.env.AWS_ACCES_KEY
const secretAccessKey = process.env.AWS_SECRET_KEY

const storage = new s3({
    region,
    accesKeyId,
    secretAccessKey
})

const getBuckets = () => {
    return storage.listBuckets().promise()
}

const uploadToBucket=(bucketName,file)=>{
    const stream = fs.createReadStream(file.tempFilePath)
        const params = {
            Bucket:bucketName,
            Key:file.name,
            Body:stream
        }
    return storage.upload(params).promise()

}

module.exports = {
    
    getBuckets,
    uploadToBucket
}