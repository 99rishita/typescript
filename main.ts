export {}
let message = 'welcome back';
console.log(message);

let x = 10;
const y = 20;

let sum;
const title = 'codevoltuion';

let isBeginner: boolean = true;
let total: number = 10;
let myname: string = 'revati';

let sentence: string = `My name is ${myname}
I am a beginner in typescript`;

console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let ishello: boolean = undefined;
let name: string = null;

let list1: number[] = [1,2,3,4];
let list2: Array<number> = [1,2,3];
let list3: [string, number] = ['revati', 20];

enum color {re=7, green, blue}
let c: color = color.green;
console.log(c);

let randomvalue: any = 10;
randomvalue = true;
randomvalue = 'revati';
console.log(randomvalue.name);

let myvariable: unknown = 10;

function hasname(obj: any): obj is {name: string} {
    return !!obj &&
    typeof obj === "object" &&
    "name" in obj
}

if (hasname(myvariable)) {
    console.log(myvariable.name);
}


let multitype: number | string;
multitype = 20;
multitype = 'revati';

function add(num1: number , num2: number) {
    return num1+num2;
}
console.log(add(5,10));

function add1(num1: number, num2?: number): number {
    if (num2) {
        return num1+num2;//optional param
    }
    else {
        return num1;
    }
}
add1(5);

function add2(num1: number, num2: number=10): number {
    if (num2) {
        return num1+num2;//default param
    }
    else {
        return num1;
    }
}
add2(5);

interface Person {
    firstname: string;
    lastname: string;
}

function fullname(person: Person) {
    console.log(`${person.firstname} ${person.lastname}`);
}

let p = {
    firstname: 'revati',
    lastname: 'pinninti'
};
fullname(p);

class employee {
    employeename: string;

    constructor(name: string) {
        this.employeename = name;
    }

    greet() {
        console.log(`good morning ${this.employeename}`);
    }
}

let emp1 = new employee('revati');
console.log(emp1.employeename);
emp1.greet();

class manager extends employee {
    constructor(managername: string) {
        super(managername);
    }
    work() {
        console.log(`lot of work is there`);
    }
}

let m1 = new manager('rishita');
m1.work();
m1.greet();
console.log(m1.employeename);