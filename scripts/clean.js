const {execSync} = require("child_process");
const {printOut} = require("./util");
try {
    console.log("Cleaning... (dist directory)")
    if (process.platform === "win32") {
        execSync("rd /q /s dist")
        execSync("mkdir dist")
    }else if (process.platform === "darwin" || process.platform === "linux") {
        execSync("rm -rf dist/*")
    }else {
        console.log("Unsupported platform")
        process.exit(1)
    }

    printOut("SUCCESS!")
}catch (ex) {
    printOut(ex)
}
