import './style.css'

let views: string | number = 10

views = '12M'

let status: 'suscess' | 'error' | 'pending' = 'pending';

// status = 'crash'  --- wrong!!
status = 'error'    //correct


let coffe: 'black' | 'cold' | 'hot' = 'cold'

coffe = 'hot'


const array = ['12','22','32','42'];
let undef: string | undefined;

for(const value of array){
    if(value === '22'){
        undef = value
        break
    }
}


console.log(undef,'saar');
