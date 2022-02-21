const { writeFileSync } = require("fs")

module.exports = function sitemapToJson() {
    return {
        name: "docusaurus-plugin-sitemap-to-json",

        postBuild({ routesPaths }) {
            writeFileSync(
                "./misc/sitemaptojson.json",
                JSON.stringify({ routesPaths })
            )
        },
    }
}
