export async function isAuthenticated() {
    const response = await fetch(`http://localhost:9000/user/authenticationCheck`, {
        method: 'get',
        credentials: "include",
        mode: 'cors',
        headers: {
            "Content-type": "application/json"
        }
    })
    return response.json()
}