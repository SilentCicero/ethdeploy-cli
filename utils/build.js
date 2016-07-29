const fs = require('fs');
const chalk = require('chalk');

// throw abstraction for more control
const throwError = function(error) {
  throw error;
};

// log abstraction for more control
const log = function() {
  const args = Array.prototype.slice.call(arguments);

  // output console log
  console.log.apply(console.log, [`ethdeploy-build [${(new Date()).toISOString()}]: `].concat(args));
};

// write build file
// this will write the end environments.json file
// this will also output the final write return
const writeBuildFile = function(buildObject, outputPath) {
  const numContractsDeployed = 0;
  const buildFileLocation = `${outputPath}environments.json`;

  // generated
  var environmentsFileGenerated = true;

  fs.readFile(buildFileLocation, function(buildFileStatError, buildFileStateData){
    // if `envionrments.json` file exists, get data override where necessary
    // i.e. get but dont override already existing contract data from other envionrments
    if (!buildFileStatError) {
      // environments file generated bool, and existing file data
      environmentsFileGenerated = false;
      const existingBuildFileObject = JSON.parse(buildFileStateData.toString());

      // log whats happening
      log('build output file already exists... morphing and modifying with Object.assign...');

      // build override object
      buildObject = Object.assign(buildObject, existingBuildFileObject);
    }

    // build string build object
    var stringBuildObject = JSON.stringify(buildObject, null, 2);

    // write final environments json file to selected directory
    fs.writeFile(buildFileLocation, stringBuildObject, 'utf8', function(writeBuildFileError, writeBuildFileResult) {
      // generated or modified string helper
      const generatedOrModifiedString = environmentsFileGenerated && 'generated' || 'modified';

      // check for build file errors
      if (writeBuildFileError) {
        return throwError(`Error while writing build file: ${writeBuildFileError}`);
      }

      // final output log
      log(`${chalk.green(`File Generated: '${buildFileLocation}' [${generatedOrModifiedString}] successfully!`)}

    Details:
      Generation Time: ${(new Date()).toISOString()}
      File Generated: ${buildFileLocation} [${generatedOrModifiedString}]
  `); // Contracts Deployed: ${numContractsDeployed}
    });
  });
};

module.exports = writeBuildFile;
