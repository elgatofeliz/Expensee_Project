export async function requestTransactions(route, userData) {
    const response = await fetch(`http://localhost:9000/transaction/${route}`, {
        method: 'get',
        mode: 'cors',
        body: JSON.stringify(userData),
        headers: {
            "Content-type": "application/json"
        }
    })
    return response.json()
}