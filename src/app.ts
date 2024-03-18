showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt!.innerText = `Hello from ${name}`;
}

/*
Вам потрібно створити тип `DeepReadonly` який буде робити доступними тільки для читання навіть  властивості вкладених обʼєктів.
 */
type DeepReadonly<T>= {
    readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

interface Car {
    make: string;
    model: string;
    color: string
    year: number;
    specs: {
        engine: string;
        horsepower: number;
    }
}

const carExample: DeepReadonly<Car> = {
    make: 'Lamborghini',
    model: 'Aventador',
    color: 'red',
    year: 2021,
    specs: {
        engine: 'V12',
        horsepower: 700
    }
};

/*
Вам потрібно створити тип `DeepRequireReadonly` який буде робити доступними тільки для читання навіть
властивості вкладених обʼєктів та ще й робити їх обовʼязковими.
 */
type DeepRequireReadonly<T> = {
    readonly [K in keyof Required<T>]: Required<T>[K] extends object ? DeepRequireReadonly<Required<T>[K]> : Required<T>[K];
};

interface Person {
    name: string,
    profession: string;
    age: number;
    address: {
        email: string;
        phone: number;
    }
}

const personExample: DeepRequireReadonly<Person> = {
    name: 'Bob',
    profession: 'doctor',
    age: 42,
    address: {
        email: 'bob@gmail.com',
        phone: 380937007070,
    }
};

/*
Вам потрібно сворити тип `UpperCaseKeys`, який буде приводити всі ключі до верхнього регістру.
 */
type UpperCaseKeys<T> = {
    [K in keyof T as Uppercase<string & K>]: T[K]
};

interface Laptop {
    model: string;
    color: string;
    year: number;
}

const laptopExample: Laptop = {
    model: 'MacBook Air',
    color: 'SpaceGray',
    year: 2020
};

type UpperCaseLaptopExample = UpperCaseKeys<Laptop>;

/*
Створіть тип `ObjectToPropertyDescriptor`, який перетворює звичайний обʼєкт на обʼєкт де кожне `value` є дескриптором.
 */

type ObjectToPropertyDescriptor<T> = {
    [K in keyof T]: PropertyDescriptor;
};

interface Animal {
    name: string;
    age: number;

}

const animalExample: ObjectToPropertyDescriptor<Animal> = {
    name: { value: 'dog', writable: true, enumerable: true, configurable: true },
    age: {  value: 3, writable: true, enumerable: true, configurable: true }
};

