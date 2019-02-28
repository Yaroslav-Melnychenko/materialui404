module.exports = {
    "extends": ["react-airbnb-prettier"],
    "rules": {
        "linebreak-style": ["error", (process.platform === "win32" ? "windows" : "unix")],
        "global-require": 0,
        "no-plusplus": 0,
        "react/destructuring-assignment": 0,
        "react/jsx-one-expression-per-line": 0,
        "react/prefer-stateless-function": 0,
        "react/no-array-index-key": 0,
        "object-shorthand": 0,
        "class-methods-use-this": 0
    }
}