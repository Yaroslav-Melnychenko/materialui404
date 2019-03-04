module.exports = {
    "extends": ["react-airbnb-prettier"],
    "rules": {
        "linebreak-style": ["error", (process.platform === "win32" ? "windows" : "unix")],
        "react/jsx-one-expression-per-line": 0
    }
}