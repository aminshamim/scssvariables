const crypto = require("crypto");

class ScssVariables {
  constructor(scssText) {
    this.scssVariables = new Map();
    this.scssText = scssText;
    this.hash = crypto.createHash("sha256").update(scssText).digest("hex");
  }

  parseScssVariables(variableName) {
    if (!this.scssVariables.has(variableName)) {
      const variableRegex = new RegExp(`\\$${variableName}\\s*:\\s*([^;]+);`);
      const match = variableRegex.exec(this.scssText);
      if (match) {
        const value = match[1].trim();
        this.scssVariables.set(variableName, value);
      }
    }
  }

  get(variableName) {
    if (this.hash !== this.previousHash) {
      this.scssVariables.clear();
      this.previousHash = this.hash;
    }
    this.parseScssVariables(variableName);
    return this.scssVariables.get(variableName);
  }
}

module.exports = ScssVariables;
