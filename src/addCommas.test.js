const addCommas = require("./addCommas").default;

describe("#addCommas", () => {
  test("Is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
  
  test("Undefined input", () => {
    const result = addCommas();
    expect(result).toBe("Undefined");
  });

  test("Thousand-digit numbers", () => {
    const result = addCommas(1234);
    expect(result.props.children[0].props.children).toBe(1234);
    expect(result.props.children[1].props.children).toBe("\"1,234\"");
  });

  test("One Million", () => {
    const result = addCommas(1000000);
    expect(result.props.children[1].props.children).toBe("\"1,000,000\"");
  });

  test("9 Billion", () => {
    const result = addCommas(9876543210);
    expect(result.props.children[1].props.children).toBe("\"9,876,543,210\"");
  });

  test("Single-digit numbers", () => {
    const result = addCommas(6);
    expect(result.props.children[0].props.children).toBe(6);
    expect(result.props.children[1].props.children).toBe("\"6\"");
  });

  test("Negative Numbers", () => {
    const result = addCommas(-10);
    expect(result.props.children[0].props.children).toBe(-10);
    expect(result.props.children[1].props.children).toBe("\"-10\"");
  });

  test("Bonus", () => {
    const result = addCommas(12345.678);
    expect(result.props.children[0].props.children).toBe(12345.678);
    expect(result.props.children[1].props.children).toBe("\"12,345.678\"");
  });

  test("Bonus 2", () => {
    const result = addCommas(-3141592.65);
    expect(result.props.children[0].props.children).toBe(-3141592.65);
    expect(result.props.children[1].props.children).toBe("\"-3,141,592.65\"");
  });
});
