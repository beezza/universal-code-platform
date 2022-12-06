const {execSync} = require("child_process");
const {printOut} = require("./util");
try {
    console.log("Deploying to github...")
    console.log("[GIT] Adding files")
    execSync("git add *")
    console.log("  OK")
    console.log("[GIT] Committing...")
    execSync(`git commit -am "Updated - ${new Date().toLocaleString({ timeZone: 'Asia/Tokyo' })}"`)
    console.log("[GIT] Pushing...")
    execSync("git push")
    printOut("SUCCESS!")
}catch (ex) {
    printOut(ex)
}