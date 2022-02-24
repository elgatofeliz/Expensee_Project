export async function fetchUserData() {
    const response = await fetch(`http://localhost:9000/allUserData`, {
        method: 'get',
        credentials: "include",
        mode: 'cors',
        headers: {
            "Content-type": "application/json"
        }
    })
    return await response.json()
}