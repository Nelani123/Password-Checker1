let Mytest = require("../src/password_checker");

describe("funtion Password_is_Ok", function() {
  it("should provide outcome for password checker", function() {
    expect(password_is_ok).toBe("False");
  });

  it("should provide outcome for password checker", function() {
    expect(password_is_Ok).toBe("True");
  });

  it("should provide outcome for password checker", function() {
    expect(password_is_Ok).toBe("False");
  });
});
