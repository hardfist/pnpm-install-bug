function readPackage(pkg, context) {
  for (let workspaceProject of [
    "@react-navigation/core",
    "react"
  ]) {
    if (pkg.peerDependencies && pkg.peerDependencies[workspaceProject]) {
      console.log("Rewrite " + pkg.name + "peeerDep " + workspaceProject);

      delete pkg.peerDependencies[workspaceProject];
      if (!pkg.dependencies) {
        pkg.dependencies = {};
      }
      pkg.dependencies[workspaceProject] = "workspace:*";
    }
  }
  console.log('pkg:', pkg);
  return pkg;
}

module.exports = { hooks: { readPackage } };