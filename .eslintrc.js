module.exports = {
    "extends": [
        "react-airbnb-prettier", 
        "airbnb"
    ],
    "rules": {
        "linebreak-style": ["error", (process.platform === "win32" ? "windows" : "unix")],
        "react/jsx-one-expression-per-line": 0,
        "padding-line-between-statements": [
            "error",
            { blankLine: "always", prev: ["const", "let", "var"], next: "*"},
            { blankLine: "any",    prev: ["const", "let", "var"], next: ["const", "let", "var"]}
        ]
    }
}