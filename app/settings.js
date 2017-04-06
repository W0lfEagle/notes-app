const settings = module.exports = {}; 

settings.notesOverview = [
    {   
        "id": 123456,
        "createdBy": "Henry Jones",
        "title": "This is a note",
        "date": new Date()
    },
    {
        "id": 875421,
        "createdBy": "Sarah Smith",
        "title": "This is also a note",
        "date": new Date()
    }
]

settings.users = [
	{
		username: "admin",
		password: 'letMeIn',
		firstName: "Adminton",
		firstName: "Roggers",
	},
	{
		username: "wilf",
		password: 'pass',
		firstName: "Wilf",
		lastName: "Engel",
	}
]

settings.staticContent = true;