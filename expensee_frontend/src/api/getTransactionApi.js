export async function requestTransactions(route, userData) {
    const response = await fetch(`http://localhost:9000/transaction/${route}`, {
        method: 'get',
        credentials: "include",
        mode: 'cors',
        headers: {
            "Content-type": "application/json"
        }
    })
    return response.json()
}