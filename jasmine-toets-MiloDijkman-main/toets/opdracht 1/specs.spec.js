describe('Testje 1: Voorbeeld Titel', function() {
    it('Dit is een voorbeeld Titel', function () {
        expect(document.title).toBe('Voorbeeld toets');
        expect(document.charset).toBe('UTF-8');
    });
});

describe('Testje 2: Bestand Knop', function () {
    it('Test Knop Unit 1 (Beschijving Jasmin Testen)', function () {
        expect(unitTest.item).toBe('voorbeeld');
    });

    it('Test Knop Unit 2 (Beschijving Jasmin Testen)', function () {
        expect(unitTest.nummer).toEqual(3);
    });
});

describe('Testje 3: Bestand Knop', function () {
    it('Test Knop Unit 3 (Beschijving Jasmin Testen)', function () {
        expect(unitTest.beschrijving).toBe('Beschrijving');
    });
    describe('Testje 4: Bestand Knop', function () {
        it('Test Knop Unit 4 (Beschijving Jasmin Testen)', function () {
            expect(unitTest.boodschap).toEqual('Hallo');
        });
    });
});
