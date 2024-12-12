const licenseKeyFormatting = require("./main");

test('licenseKeyFormatting when k is 2 and s > 2', () => {
    s = "2-5g-3-J";
    k = 2;
    expect(licenseKeyFormatting(s,k)).toBe("2-5G-3J");
});

test('licenseKeyFormatting when k is 4 and s > 4', () => {
    s = "5F3Z-2e-9-w";
    k = 4;
    expect(licenseKeyFormatting(s,k)).toBe("5F3Z-2E9W");
});

test('licenseKeyFormatting when s.length == 1', () => {
    s = "5";
    k = 1;
    expect(licenseKeyFormatting(s,k)).toBe("5");
});

test('licenseKeyFormatting when s.length < k', () => {
    s = "5";
    k = 2;
    expect(licenseKeyFormatting(s,k)).toBe("5");
});