# Setup WSO2 APICTL Github Action

[![Integration Tests](https://github.com/yasassri/setup-wso2-apictl/actions/workflows/tests.yml/badge.svg)](https://github.com/yasassri/setup-wso2-apictl/actions/workflows/tests.yml) [![Release](https://img.shields.io/github/v/release/yasassri/setup-wso2-apictl)](https://github.com/yasassri/setup-wso2-apictl/releases) [![License](https://img.shields.io/github/license/yasassri/setup-wso2-apictl?logoColor=yellow)](https://github.com/yasassri/setup-wso2-apictl/blob/main/LICENSE)

WSO2 API Controller (apictl) is a command-line tool providing the capability to move APIs, API Products, and Applications across environments and to perform CI/CD operations. Furthermore, it can perform WSO2 Micro Integrator (WSO2 MI) server specific operations such as monitoring Synapse artifacts and performing MI management/administrative tasks from the command line.

This custom GH action will setup WSO2 APICTL in a Linux environment. Since there are no usecases for setting up on Windows environments, currently only Linux environments are supported.

## Inputs

## `version`

**Optional** The version of the APICTL to setup. Default `"4.1.0"`.

The version will be picked from the Github releases : https://github.com/wso2/product-apim-tooling/releases. Ex: 4.1.0 or v4.1.0

## `tarball_location`

**Optional** A location to an APICTL Tarball if it needs to be downloaded from custom location. No Default

## Example usage

```yaml
uses: yasassri/setup-wso2-apictl@v1.2
with:
  version: '4.1.0'
```

```yaml
uses: yasassri/setup-wso2-apictl@v1.2
with:
  tarball_location: 'https://github.com/wso2/product-apim-tooling/releases/download/v4.1.0/apictl-4.1.0-linux-x64.tar.gz'
```

### Full workflow

```yaml
name: WSO2_APIM
on: [push, pull_request_target, issues]

jobs:
  wso2:
    runs-on: ubuntu-latest
    permissions:
      issues: write
      pull-requests: write
    steps:
    - uses: yasassri/setup-wso2-apictl@v1.2
      with:
        version: 'v3.2.5'
    - run: apictl version
```
