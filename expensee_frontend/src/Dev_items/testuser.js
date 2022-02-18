const testUser = {
    id: 0,
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
            Beschreibung: 'Gehalt',
            Geldbetrag: 121,
            Datum: '15.2.2022, 11:51:36'
        },
        {
            transactionId: 1,
            Category: 'Lebensmittel',
            Beschreibung: 'Milch',
            Geldbetrag: -1.5,
            Datum: '16.2.2022, 10:51:36'
        },
        {
            transactionId: 2,
            Category: 'Shopping',
            Beschreibung: 'Jacke',
            Geldbetrag: -170.23,
            Datum: '17.2.2022, 11:51:36'
        },
        {
            transactionId: 3,
            Category: 'Wohnung',
            Beschreibung: 'Miete',
            Geldbetrag: -620,
            Datum: '17.2.2022, 17:27:36'
        },
        {
            transactionId: 4,
            Category: 'Sontiges',
            Beschreibung: 'Steuer',
            Geldbetrag: -50,
            Datum: '11.2.2022, 17:27:36'
        },
        {
            transactionId: 6,
            Category: 'Sparen',
            Beschreibung: 'Lamborgini',
            Geldbetrag: 300,
            Datum: '22.2.2022, 17:27:36'
        },
        {
            transactionId: 2,
            Category: 'Shopping',
            Beschreibung: 'Jacke',
            Geldbetrag: -20.23,
            Datum: '17.2.2022, 11:51:36'
        },
        {
            transactionId: 3,
            Category: 'Wohnung',
            Beschreibung: 'Miete',
            Geldbetrag: -120,
            Datum: '17.2.2022, 17:27:36'
        },
        {
            transactionId: 2,
            Category: 'Shopping',
            Beschreibung: 'Jacke',
            Geldbetrag: -10.23,
            Datum: '17.2.2022, 11:51:36'
        },
        {
            transactionId: 3,
            Category: 'Einkommen',
            Beschreibung: 'Gehalt',
            Geldbetrag: 1620,
            Datum: '17.2.2022, 17:27:36'
        },
        {
            transactionId: 2,
            Category: 'Shopping',
            Beschreibung: 'Jacke',
            Geldbetrag: -170.23,
            Datum: '17.2.2022, 11:51:36'
        },
        {
            transactionId: 3,
            Category: 'Wohnung',
            Beschreibung: 'Miete',
            Geldbetrag: -620,
            Datum: '17.2.2022, 17:27:36'
        },
        {
            transactionId: 2,
            Category: 'Shopping',
            Beschreibung: 'Jacke',
            Geldbetrag: -10.23,
            Datum: '17.2.2022, 11:51:36'
        },
        {
            transactionId: 3,
            Category: 'Wohnung',
            Beschreibung: 'Miete',
            Geldbetrag: -620,
            Datum: '17.2.2022, 17:27:36'
        },
        {
            transactionId: 2,
            Category: 'Shopping',
            Beschreibung: 'Jacke',
            Geldbetrag: -10.23,
            Datum: '17.2.2022, 11:51:36'
        },
        {
            transactionId: 3,
            Category: 'Wohnung',
            Beschreibung: 'Miete',
            Geldbetrag: -620,
            Datum: '17.2.2022, 17:27:36'
        },
        {
            transactionId: 2,
            Category: 'Shopping',
            Beschreibung: 'Jacke',
            Geldbetrag: -30.23,
            Datum: '17.2.2022, 11:51:36'
        },
        {
            transactionId: 3,
            Category: 'Wohnung',
            Beschreibung: 'Miete',
            Geldbetrag: -20,
            Datum: '17.2.2022, 17:27:36'
        },
    ]
}

export default testUser
