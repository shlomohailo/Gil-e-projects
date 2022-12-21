export async function createUser(user) {
    return await fetch(`http://localhost:8080/api/users/register`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'},
            body:JSON.stringify(user)
    })
        .then(response => response.json())
        .catch((error) => {
            console.log(error);
        })
}  