// type assertion

console.log('type assertion');

let data: any = ['your','data','is','here']

let lenghtOfData = (data as []).length;

console.log('length of data ', lenghtOfData);


type User = {
    name: string,
    age: number,
    group: string,
    crashFun: Function
}


let strData = '{"name": "name123","age": 456,"group": "B"}';

let pureData = (JSON.parse(strData) as User)

console.log(pureData);


//DOM elements

let element = document.querySelector('a');
let idSelector = document.querySelector('.myID');



//any --type

let anyValue: any = 'it will be changed';

anyValue = 'changeddd'
anyValue = 12   // it doesn,t know its own value 




//unknown --type

let unknown: unknown = 'stringgg'

unknown = 'saar you are a string'
unknown = 234

if(typeof unknown === 'number'){
    unknown.toString()
}
else if(typeof unknown === 'string'){
    unknown.toUpperCase()
}


// try catch --error 

try {
    
} catch (error) {
    if(error instanceof Error){
        console.log(error.message);
    }
    console.log(error);
    
}

//forcefully declear a type

let res: unknown = 'response is here!';
let finalRes: string = res as string



//never --type

type Role = 'admin' | 'user';

function redirect(role: Role){
  if(role === 'admin'){
    return 'redirect to admin dashboard'
  }
  else if(role === 'user'){
    return 'redirect to user dashboard'
  }


  role  //type is never --useless code detected


}

