// Add your code here
let theInfo = {
    name: "Steve",
    email: "steve@steve.com"
}
function submitData(name, email) {
const postRequest = {
    method:'POST',
    headers: {
        "content-type": 'application/json',
        "accept": 'application/json'
    },
    body: JSON.stringify(theInfo)
};
let fun = (
fetch('http://localhost:3000/users', postRequest)
.then(res => res.json())
.then(data => document.body.append(data.id))
.catch(function (error) {
    alert('Unauthorized Access')
    document.body.append(error.message)
}))
return fun
}