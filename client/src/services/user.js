export async function getUsers() {
    return await fetch(`http://localhost:8080/api/users`)
        .then(response => response.json())
        .catch((error) => {
            console.log(error);
        })
}  