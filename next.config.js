/** @type {import('next').NextConfig} */
const dns = require("dns");

dns.setDefaultResultOrder("ipv4first")
const nextConfig = {

    images:{
        domains:[
        "images.pexels.com",
        "example.com",
        "res.cloudinary.com",
        "homepage-related.s3.us-west-1.amazonaws.com",
        ]
    },
}

module.exports = nextConfig
