module.exports = {
    type: 'api-lib',
    name: '@deepvision/translatio.js',
    shortname: 'translatio',
    description: 'Translatio JS',
    author: {
        name: 'Sergii Sadovyi',
        email: 's.sadovyi@deepvision.team',
    },
    contributors: [
        {
            name: 'Vitaliy Angolenko',
            email: 'v.angolenko@deepvision.team',
        }
    ],
    repository: {
        name: 'Translatio.JS',
        host: 'git.deepvision.team',
        path: 'translatio/translatio.js',
    },
    license: 'file LICENSE.md',
    headers: [
        {
            name: 'author',
            value: '💧DeepVision <support@deepvision.team>',
        },
    ],
    loopback: {
        oas2: '/oas2.json',
    },
};