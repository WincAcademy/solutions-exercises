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
        expect(result.valid).toBe(false);
    });

    test("Password should only be valid if score is at least 3", () => {

        const test1 = passwordVerifier('');
        expect(test1.valid).toBe(false);
        
        const test2 = passwordVerifier('wincacademy');
        expect(test2.valid).toBe(false);
        
        const test3 = passwordVerifier('WINCACADEMY');
        expect(test3.valid).toBe(false);
        
        const test4 = passwordVerifier('winc5');
        expect(test4.valid).toBe(true);
        
        const test5 = passwordVerifier('WincAcademy5');
        expect(test5.valid).toBe(true);
    });
});