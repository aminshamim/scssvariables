const ScssVariables = require("./index");

describe("ScssVariables", () => {
  const scssText = `
    $color: #333;
    $font-size: 14px;
    $background-color: white;
  `;

  it("parses SCSS variables correctly", () => {
    const scssVariables = new ScssVariables(scssText);
    expect(scssVariables.get("color")).toBe("#333");
    expect(scssVariables.get("font-size")).toBe("14px");
    expect(scssVariables.get("background-color")).toBe("white");
  });

  it("lazily loads and caches SCSS variables", () => {
    const scssVariables = new ScssVariables(scssText);
    scssVariables.get("color");
    expect(scssVariables.scssVariables.size).toBe(1);
    scssVariables.get("font-size");
    expect(scssVariables.scssVariables.size).toBe(2);
    scssVariables.get("background-color");
    expect(scssVariables.scssVariables.size).toBe(3);
  });

  it("purges cache if SCSS text changes", () => {
    const scssVariables = new ScssVariables(scssText);
    scssVariables.get("color");
    scssVariables.get("font-size");
    scssVariables.get("background-color");
    expect(scssVariables.scssVariables.size).toBe(3);
    scssVariables.scssText = "$new-variable: #999;";
    scssVariables.get("new-variable");
    expect(scssVariables.scssVariables.size).toBe(1);
  });
});
