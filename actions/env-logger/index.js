const core = require('@actions/core');

try {
  const env_file = core.getInput('env_file');
  console.log("ENV file data: ", env_file);
} catch (error) {
  core.setFailed(error.message);
}
