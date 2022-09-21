function readPackage(pkg, context) {
 // return pkg;
  console.log('start');
  for (let workspaceProject of [
    "@react-navigation/core",
    "react"
  ]) {
    if (pkg.peerDependencies && pkg.peerDependencies[workspaceProject]) {
      delete pkg.peerDependencies[workspaceProject];
      if (!pkg.dependencies) {
        pkg.dependencies = {};
      }
      pkg.dependencies[workspaceProject] = "workspace:*";
    }
  }
  return pkg;
}

module.exports = { hooks: { readPackage } };