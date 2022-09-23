// Two locations to download the Binary 
// https://apim.docs.wso2.com/en/4.1.0/assets/attachments/learn/api-controller/apictl-4.1.0-linux-x64.tar.gz
// https://github.com/wso2/product-apim-tooling/releases/download/v4.1.0/apictl-4.1.0-linux-x64.tar.gz


function getDownloadURL(version) {

    // If the version is provided like v4.1.0 strippingout the 'v'
    if(version.toLowerCase().includes("v")) {
        version = version.substring(version.toLowerCase().indexOf('v') + 1)
    }
    const url = `https://github.com/wso2/product-apim-tooling/releases/download/v${version}/apictl-${version}-linux-x64.tar.gz`;

    return url
  }
  
  module.exports = { getDownloadURL }