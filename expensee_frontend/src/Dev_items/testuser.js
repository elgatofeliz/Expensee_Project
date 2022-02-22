const testUser = {
    _id: 0,
    email: 'bdr@super.de',
    passwordHash: '0',
    isAuth: true,
    authCode: '0',
    EASS: {
        Einkommen: 12345.09,
        Ausgeben: 14587.98,
        Sparen: 12345.33,
        Sonstiges: 9876.99,
    },
    sumEASS: 5000,
    transactions: [
        {
            transactionId: 0,
            Category: 'Einkommen',
            description: 'Gehalt',
            amount: 121,
            date: '15.2.2022, 11:51:36'
        },
        {
            transactionId: 1,
            Category: 'Lebensmittel',
            description: 'Milch',
            amount: -1.5,
            date: '16.2.2022, 10:51:36'
        },
        {
            transactionId: 2,
            Category: 'Shopping',
            description: 'Jacke',
            amount: -170.23,
            date: '17.2.2022, 11:51:36'
        },
        {
            transactionId: 3,
            Category: 'Wohnung',
            description: 'Miete',
            amount: -620,
            date: '17.2.2022, 17:27:36'
        },
        {
            transactionId: 4,
            Category: 'Sontiges',
            description: 'Steuer',
            amount: -50,
            date: '11.2.2022, 17:27:36'
        },
        {
            transactionId: 6,
            Category: 'Sparen',
            description: 'Lamborgini',
            amount: 300,
            date: '22.2.2022, 17:27:36'
        },
        {
            transactionId: 2,
            Category: 'Shopping',
            description: 'Jacke',
            amount: -20.23,
            date: '17.2.2022, 11:51:36'
        },
        {
            transactionId: 3,
            Category: 'Wohnung',
            description: 'Miete',
            amount: -120,
            date: '17.2.2022, 17:27:36'
        },
        {
            transactionId: 2,
            Category: 'Shopping',
            description: 'Jacke',
            amount: -10.23,
            date: '17.2.2022, 11:51:36'
        },
        {
            transactionId: 3,
            Category: 'Einkommen',
            description: 'Gehalt',
            amount: 1620,
            date: '17.2.2022, 17:27:36'
        },
        {
            transactionId: 2,
            Category: 'Shopping',
            description: 'Jacke',
            amount: -170.23,
            date: '17.2.2022, 11:51:36'
        },
        {
            transactionId: 3,
            Category: 'Wohnung',
            description: 'Miete',
            amount: -620,
            date: '17.2.2022, 17:27:36'
        },
        {
            transactionId: 2,
            Category: 'Shopping',
            description: 'Jacke',
            amount: -10.23,
            date: '17.2.2022, 11:51:36'
        },
        {
            transactionId: 3,
            Category: 'Wohnung',
            description: 'Miete',
            amount: -620,
            date: '17.2.2022, 17:27:36'
        },
        {
            transactionId: 2,
            Category: 'Shopping',
            description: 'Jacke',
            amount: -10.23,
            date: '17.2.2022, 11:51:36'
        },
        {
            transactionId: 3,
            Category: 'Wohnung',
            description: 'Miete',
            amount: -620,
            date: '17.2.2022, 17:27:36'
        },
        {
            transactionId: 2,
            Category: 'Shopping',
            description: 'Jacke',
            amount: -30.23,
            date: '17.2.2022, 11:51:36'
        },
        {
            transactionId: 3,
            Category: 'Wohnung',
            description: 'Miete',
            amount: -20,
            date: '17.2.2022, 17:27:36'
        },
    ]
}

export default testUser
