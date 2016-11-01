function isInArray<T>(array: T[], ...rest: T[]): boolean {
    for(let i = 0, count = rest.length; i < count; i++) {
        if(array.indexOf(rest[i]) === -1) {
            return false;
        }
    }

    return true;
}

//console.log(isInArray<number>([1, 2, 3], 1, 4, 2));
//console.log(isInArray<string>(['1', '2', '3'], '1', '3', '2'));
//console.log(isInArray<number>([1, 2, 3], 1, 1, 2));

function summator(...rest: number[]): number;
function summator(...rest: string[]): number;
function summator(...rest: (number|string)[]): number {
    let ret: number = 0;

    for(let i = 0, count = rest.length; i < count; i++) {
        if(typeof rest[i] === 'number') {
            //тут не работает без асершна
            ret += rest[i] as number;
        }
        if(typeof rest[i] === 'string') {
            ret += Number(rest[i]);
        }
    }

    return ret;
}

//console.log(summator(1, 2, 3));
//console.log(summator('1', '2', '3'));

function getUnique<T>(...rest: T[]): T[] {
    let ret: T[] = [];

    for(let i = 0, count = rest.length; i < count; i++) {
        if(ret.indexOf(rest[i]) === -1) {
            ret.push(rest[i]);
        }
    }

    return ret;
}

//console.log(getUnique<number>(1, 2, 3, 2));
//console.log(getUnique<number>(1, 2, 1, 3, 2));
//console.log(getUnique<string>('1', '2', '3', '2'));
//console.log(getUnique<boolean>(false, true, false));