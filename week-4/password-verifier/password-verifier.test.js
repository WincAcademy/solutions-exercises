const passwordVerifier = require('./password-verifier');

describe("Password verifier", () => {
    test("Password should not be blank", () => {
        const bad = passwordVerifier('');
        const better = passwordVerifier('x');
        expect(better.score).toBeGreaterThan(bad.score);
    });
    test("Password should be at most 8 characters", () => {
        const bad = passwordVerifier('blaatschaap');
        const better = passwordVerifier('blaat');
        expect(better.score).toBeGreaterThan(bad.score);
    });
    test("Password should have a lowercase character", () => {
        const bad = passwordVerifier('$^@#%');
        const better = passwordVerifier('blaat');
        expect(better.score).toBeGreaterThan(bad.score);
    });
    test("Password should have an uppercase character", () => {
        const bad = passwordVerifier('blaat');
        const better = passwordVerifier('Blaat');
        expect(better.score).toBeGreaterThan(bad.score);
    });
    test("Password should have a digit character", () => {
        const bad = passwordVerifier('Blaat');
        const better = passwordVerifier('Blaat5');
        expect(better.score).toBeGreaterThan(bad.score);
    });
    test("Password should always be false if it doesn't have a lowercase character", () => {
        const result = passwordVerifier('BLAAT5');
        expect(result.valid).toBeFalsy();
    });
    test("Password should only be valid if score is at least 3", () => {
        const test1 = passwordVerifier('');
        const test2 = passwordVerifier('blaatschaap');
        const test3 = passwordVerifier('BLAATSCHAAP');
        const test4 = passwordVerifier('blaat5');
        const test5 = passwordVerifier('BlaatSchaap5');
        expect(test1.valid).toBeFalsy();
        expect(test2.valid).toBeFalsy();
        expect(test3.valid).toBeFalsy();
        expect(test4.valid).toBeTruthy();
        expect(test5.valid).toBeTruthy();
    });
});