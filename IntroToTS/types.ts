//Types
type ID = number|string

function employee(id:ID):string{
    return `Employee ID: ${id}`
}

console.log(employee("SM69"))
employee(21)