const list1=['Arjun', 'Adwait', 'Swapnil','Amit', 'Vishal', 'Adnan']

const list2=[ 'Adwait','Laxman','Amit', 'Adnan','Nitin','Gaurav']

//onsole.log(list1)
//console.log(list2)

const unique_users_of_list1 = []
const unique_users_of_list2 = []
const unique_users_of_list3 = []

for (let item of list1){
    if (list2.includes(item)) {
        continue;
    } else {
        unique_users_of_list1.push(item)
    }

}

for (let item of list2){
    if (list1.includes(item)) {
        continue;
    } else {
        unique_users_of_list2.push(item)
    }

}

for (let item of list1){
    if (list2.includes(item)) {
        unique_users_of_list3.push(item) 
    }
}


console.log(unique_users_of_list1)
console.log(unique_users_of_list2)
console.log(unique_users_of_list3)