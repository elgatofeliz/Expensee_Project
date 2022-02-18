export async function submitUserForm(route, data) {
    const response = await fetch(`http://localhost:9000/user/${route}`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json"
        }
    })
    return response.json()
}