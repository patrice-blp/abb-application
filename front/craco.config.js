const path = require("path");
module.exports = {
    webpack: {
        alias: {
            '@components': path.resolve(__dirname, "src/components"),
            '@common': path.resolve(__dirname, "src/common"),
            '@mocks': path.resolve(__dirname, "mocks"),
        },
    },
};