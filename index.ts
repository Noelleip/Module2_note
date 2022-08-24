let a: string = "bruce"

let str: string = 'bruce'
let str1: string;
str1 = "bruce2"

let num: number = 1000
let boo: boolean = true
let n: null = null
let un: undefined = undefined

let test: any = true //Can put string, number, boolean or anything else

//Array
let arr: string[] = ['a', 'b', 'c']
let arr2: string[][] = [['aa', 'bb']]

//
let tuple: [number, string, boolean] = [1, 'a', true]
let tuple2: [string, string][] = [['a', 'b']]

//Enum
enum LiveStatus {
    SUCCESS = 0,
    FAIL = -1,
    STREAMING = 1
}

const stem = LiveStatus.SUCCESS
console.log(stem)

//Union
let aaa: number | string
aaa = 1000
aaa = "str"

//Type

type A = number | string
type B = boolean | string
let a1: A
a1 = 999
a1 = "str"
let b1: B
b1 = true

//interface

interface User {
    name: string;
    age: number;
}

//object
type Card = {
    name: string
    desc: string
}
const obj: Card = {
    name: "bruce",
    desc: "abc"
}

interface Card2 {
    name: string
    desc: string
}

//function
function hello(a: string, b: string) {
    return a + b
}

function hello2(a: string, b: string): number {
    return 999
}

function hello3(a: number, b: boolean, c: string): number {
    return 100
}

//undefined


function test2(a: number) {
    console.log(a)
}
function hello4(name: string, age?: number) {

    if (age === undefined) return -1
    test2(age)
    return
}
