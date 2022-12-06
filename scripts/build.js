const {execSync} = require("child_process");
const {printOut} = require("./util");
try {
    console.log("Building...")
    execSync("tsc")
    printOut("SUCCESS!")
}catch (ex) {
    console.log("[ERROR] An error occurred while building")
    printOut(ex)
}