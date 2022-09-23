const core = require('@actions/core');
const github = require('@actions/github');
const tc = require('@actions/tool-cache');

const { getDownloadURL } = require('./lib/utils');

async function setup() {

  var version = core.getInput('version');
  var url = core.getInput('tarball_location');
  

  console.log("version:::: " +version)
  console.log("URL:::: " +url)
  // If a URL not set, generate the URL based on the version
  if(url == null || url.trim() == '') {
    url = getDownloadURL(version)
  }
  console.log(`Downloading the APICTL Binary from ${url}`);
  // Download the binary tarball
  const pathToTarball = await tc.downloadTool(url);

  // Extract the tarball onto the runner
  const pathToCLI = await tc.extractTar(pathToTarball);

  // Expose the ctl by adding to the PATH
  core.addPath(pathToCLI + '/apictl')
}

module.exports = setup

if (require.main === module) {
  setup();
}