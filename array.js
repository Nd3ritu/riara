const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let array = []

function add(n,i){
    if(i < 0 || i > array.length){
        console.log("Invalid index")
    }
    else{
        array.splice(i,0,n)
    }
    return array
}

function del(n,i){
    if(i < 0 || i > array.length){
        console.log("Invalid index")
    }
    else{
        let remove = array.splice(i,1)
    }
    return array
}

function display(){
    console.log(array)
    return array
}


function user(){
    display()
    rl.question("Enter 'add' to add, 'del' to delete, 'display' to display, 'exit' to exit:  ",(operation)=>{
        if (operation == "add"){
            rl.question("Enter the number you want to add: ",(n)=>{
                rl.question("Enter the index you want to add: ",(i)=>{
                    add(n,parseInt(i))
                    user()
                })
            })
        }
        else if(operation == "del"){
            rl.question("Enter the index you want to delete: ",(i)=>{
                del(parseInt(i))
                user()
            })
        }
        else if(operation == "display"){
            display()
            user()
        }
        else if(operation == "exit"){
            rl.close()
        }
        else{
            console.log("Invalid operation")
            user()
        }

    })
}


user()

