import * as Minio from 'minio'

const minioClient = new Minio.Client({
    endPoint: '10.10.0.245',
    port: 9000,
    useSSL: false,
    accessKey: 'minioadmin',
    secretKey: 'minioadmin',
})
export default minioClient