export async function getProduct() {
    return await fetch(`http://localhost:8080/api/product`)
        .then(response => response.json())
        
        .catch((error) => {
            console.log(error);
        })
}  