let MyTest = require("../src/password_checker");

let password_is_valid = MyTest.password_is_valid;

describe("funtion password_is_valid", function() {
  it("should provide outcome for password checker", function() {
    expect(password_is_valid).toBe("password should exist");
  });

  it("should provide outcome for password checker", function() {
    expect(password_is_valid).toBe("password should be longer than 8 characters");
  });

  it("should provide outcome for password checker", function() {
    expect(password_is_valid).toBe("password should  have at least one lowercase letter");
  });

  it("should provide outcome for password checker", function() {
    expect(password_is_valid).toBe("password should have at least one uppercase letter");
  });

  it("should provide outcome for password checker", function() {
    expect(password_is_valid).toBe("password should  at least have atleast one digit");
  });

  it("should provide outcome for password checker", function() {
    expect(password_is_valid).toBe("password should  have atleast one special character");
  });
});
