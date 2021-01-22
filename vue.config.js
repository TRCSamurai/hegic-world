const path = require("path");

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src/')
            },
        }
    },
    pluginOptions: {
        s3Deploy: {
            registry: undefined,
            awsProfile: 'default',
            overrideEndpoint: true,
            endpoint: 's3.amazonaws.com',
            region: 'us-west-2',
            bucket: 'hegic-world',
            createBucket: true,
            staticHosting: true,
            staticIndexPage: 'index.html',
            staticErrorPage: 'index.html',
            assetPath: 'dist',
            assetMatch: '**',
            deployPath: '/',
            acl: 'public-read',
            pwa: true,
            pwaFiles: 'index.html,service-worker.js,manifest.json',
            enableCloudfront: true,
            cloudfrontId: 'EYJGJ8V7E8FHB',
            cloudfrontMatchers: '/index.html,/service-worker.js,/manifest.json',
            pluginVersion: '4.0.0-rc3',
            uploadConcurrency: 5
        }
    }
}
