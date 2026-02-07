// #TYPE GUARDS & NARROWING 

let str: string = 'Good morning saars!';

console.log(str)


function getData(data: string | number) {
  if (typeof (data) === 'string') {
    return `String: ${data}`;
  }
  else {
    return data + 10
  }
}


console.log(getData('saars data'));


function getResponse(res?: string) {
  if (res) {
    return res
  }
  else {
    return 'error saar'
  }
}


function createName(length: 'small' | 'medium' | number) {
  if (length === 'small') {
    return 'jeet';
  }
  else if (length === 'medium') {
    return 'akshit';
  }
  else {
    const str: string = 'ABCDEFGHIJKLMNOPQ';
    let name: string = ''

    for (let i = 1; i <= length; i++) {
      let rndmNumber: number = Math.round(Math.random() * str.length - 1);
      name += str[rndmNumber]
    }
    return name
  }
}

console.log(createName(12));




class NumData {
  getData() {
    return 134
  }
}

class StrData {
  getData() {
    return `saars good morning`
  }
}

function dispatchData(data: NumData | StrData) {
  if (data instanceof NumData) {
    return data.getData()
  }
  else {
    return data.getData()
  }
}

let number = new NumData()
let strr = new StrData()

console.log(dispatchData(number))
console.log(dispatchData(strr))


type custom = [number, string, boolean];


function arrayCreater(): custom {
  return [23, 'saar', true]
}

let ar1 = arrayCreater()

console.log(ar1);



function falsey(value?: string) {
  if (value) {
    return value + 'sam';
  }
  return 'sam'
}


type customObj = {
  name: string,
  age: number,
  blood: string,
}

function createUser(name: string, age: number, blood: string): customObj {
  return {
    name: name,
    age: age,
    blood: blood
  }
}


let user1 = createUser('saar', 34, 'pureAryan');

console.log(user1);




type adminType = {
  password: string,
  code: '2144' | '4561',
}

function adminCreater(admin?: string): adminType {
  return {
    password: '2455w443645',
    code: '2144'
  }
}


type User = {
  name: string,
  age: number,
}

function isUser(user: any): user is User {
  return user !== null && typeof user === 'object' && typeof (user.name) === 'string'
}

function userData(user: User | string) {
  if (isUser(user)) {
    return `the username is ${user.name} and his age is ${user.age}`;
  }
  else {
    return user
  }
}

console.log(userData(user1))


type AdminType = {
  permission: true,
  code: 202,
}

type UserType = {
  permission: false,
  code: 101
}

type HelperType = {
  permission: true,
  code: 303,
}


type Roles = AdminType | UserType | HelperType

function setRole(roles: Roles) {
  switch (roles.code) {
    case 101:
      return 'user-role'
    case 202:
      return 'admin-role'
    case 303:
      return 'helper-role'
  }
}

function getRoles(roles: AdminType | UserType | HelperType){
  if('code' in roles){
    return roles
  }
} 


function isArrayString(arr: unknown):arr is string[]{
   return Array.isArray(arr) && 
   arr.every(item=>typeof item === 'string')
}

let testArray = [23,'saar','sar']
let testArray2 = ['saar','sar']

if(isArrayString(testArray)){
  testArray[0].toUpperCase()
}
else if(isArrayString(testArray2)){
 console.log(testArray2[0].toUpperCase());
 
  
}












