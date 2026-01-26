

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


let threeName: 'name1' | 'name2' | 'name3' = 'name1'

threeName = 'name2'
// threeName = 'name4'


const numbers: (string|number|boolean)[] = ['12','24',12,24];

numbers[0] = true


let order = [
    {order: 24455,},
    {order: 25655,},
    {order: 24675,},
    {order: 22355,},
]

let currentOrder: number | undefined;

for(let i = 0; i < order.length; i++){
    if(order[i].order === 24675 ){
        currentOrder = order[i].order;
        break;
    }
}

console.log(currentOrder);

