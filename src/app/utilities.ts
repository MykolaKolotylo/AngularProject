export class VarUtilities {
    id: number;
    name: string;
    previous: number;
    current: number;
    tariff: number;
    sum: number;
    persAcc: number;
}

export class FixedUtilities {
    id: number;
    name: string;
    sum: number;
    persAcc: number;
}

export class Address {
    id: number;
    city: string;
    street: string;
    numHouse: number;
    numApartment: number;
}

export class Payment {
    year: number;
    month: number;
    fixedUt: FixedUtilities[];
    varUt: VarUtilities[];

    constructor(year?: number, month?: number, fixedUt?: FixedUtilities[], varUt?: VarUtilities[]) {
        this.year = year;
        this.month = month;
        this.fixedUt = fixedUt;
        this.varUt = varUt;
    }

}
