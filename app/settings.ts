export default class Settings {
	notesOverview: any; 
	users: any;
	staticContent: any;
	apiUrl: string;

	constructor() {

		this.notesOverview = [
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
		];

		this.users = [
			{
				username: "admin",
				password: 'letMeIn',
				firstName: "Adminton",
				lastName: "Roggers"
			},
			{
				username: "wilf",
				password: 'pass',
				firstName: "Wilf",
				lastName: "Engel",
			}
		];

		this.staticContent = true;
	};


}