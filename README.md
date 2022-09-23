# Setup WSO2 APICTL Github Action

This action will Setup WSO2 API-CTL in a Lunux environment. Since there are no usecases for setting up on Windows environments, currently only Linux environments are supported.

## Inputs

## `version`

**Optional** The version of the APICTL to setup. Default `"4.1.0"`.

The version will be picked from the Github releases : https://github.com/wso2/product-apim-tooling/releases. Ex: 4.1.0

## `tarball_location`

**Optional** A location to an APICTL Tarball if it needs to be downloaded from custom location. No Default

## Example usage

```
uses: yasassri/setup-wso2-apictl@v1.0
with:
  version: '4.1.0'
```

```
uses: yasassri/setup-wso2-apictl@v1.0
with:
  tarball_location: 'https://github.com/wso2/product-apim-tooling/releases/download/v4.1.0/apictl-4.1.0-linux-x64.tar.gz'
```