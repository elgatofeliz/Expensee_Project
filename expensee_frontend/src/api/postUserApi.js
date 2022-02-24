export async function submitUserForm(route, data) {
    const response = await fetch(`http://localhost:9000/user/${route}`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(data),
        credentials: 'include',
        headers: {
            "Content-type": "application/json"
        }
    })
    console.log(response)
    return response.json()
}

/*
export async function submitUserForm(route, data) {
    const response = await axios({
        method: 'POST',
        //url: `http://localhost:9000/user/${route}`,
        mode: 'cors',
        data: data,
        cwithCredentials: true,
        headers: {
            "Content-type": "application/json"
        }
    })
    return response.json()
}
*/