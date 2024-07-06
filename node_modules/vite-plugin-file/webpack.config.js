const path = require('path')

module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        path:path.resolve(__dirname, "lib"), // string (default),
        filename: "index.js", // string (default)
    },
    resolve: {
        fallback: {
            "assert": false,
            "stream": false,
            "constants": false
        }
    }
}
