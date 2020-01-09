const passwordVerifier = require('./password-verifier');

describe("Password verifier", () => {
    test("Password should not be blank", () => {
        const bad = passwordVerifier('');
        const better = passwordVerifier('x');
        expect(better.score).toBeGreaterThan(bad.score);
    });
    test("Password should be at most 8 characters", () => {
        const bad = passwordVerifier('wincacademy');
        const better = passwordVerifier('winc');
        expect(better.score).toBeGreaterThan(bad.score);
    });
    test("Password should have a lowercase character", () => {
        const bad = passwordVerifier('$^@#%');
        const better = passwordVerifier('winc');
        expect(better.score).toBeGreaterThan(bad.score);
    });
    test("Password should have an uppercase character", () => {
        const bad = passwordVerifier('winc');
        const better = passwordVerifier('Winc');
        expect(better.score).toBeGreaterThan(bad.score);
    });
    test("Password should have a digit character", () => {
        const bad = passwordVerifier('Winc');
        const better = passwordVerifier('Winc5');
        expect(better.score).toBeGreaterThan(bad.score);
    });
    test("Password should always be false if it doesn't have a lowercase character", () => {
        const result = passwordVerifier('WINC5');
        expect(result.valid).toBeFalsy();
    });
    test("Password should only be valid if score is at least 3", () => {
        const test1 = passwordVerifier('');
        const test2 = passwordVerifier('wincacademy');
        const test3 = passwordVerifier('WINCACADEMY');
        const test4 = passwordVerifier('winc5');
        const test5 = passwordVerifier('WincAcademy5');
        expect(test1.valid).toBeFalsy();
        expect(test2.valid).toBeFalsy();
        expect(test3.valid).toBeFalsy();
        expect(test4.valid).toBeTruthy();
        expect(test5.valid).toBeTruthy();
    });
});