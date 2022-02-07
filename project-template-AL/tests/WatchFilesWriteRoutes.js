/* eslint-disable no-console */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { execSync } = require("child_process")
class WatchFilesWriteRoutes {
    apply(jestHooks) {
        jestHooks.onFileChange(function () {
            if (process.env.SKIP_ROUTES) {
                return
            }
            const start = Date.now()
            execSync("yarn tsoa:routes")
            console.log("Rotas escritas em " + (Date.now() - start) + "ms")
        })
    }
}
module.exports = WatchFilesWriteRoutes
