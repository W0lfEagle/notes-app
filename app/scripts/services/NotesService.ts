import * as angular from 'angular';
import 'ngstorage';
// TODO put defaults in settings module
// import Settings from '../../settings'
//  --- private settings: Settings

export default class NotesService {
	useLocalStorage: Boolean = true;

	static $inject = ['$localStorage', '$q']
    constructor (private storage: angular.storage.IStorageService, private $q: ng.IQService) {
    	this.init();
    }

    public init() {
    	// TODO implement properly - use server db storage
    	function randomDate(start, end) {
    	    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    	}

    	// this.storage.$reset();
    	// Set example note in storage
        if (this.useLocalStorage && !this.storage.notes) {
        	this.storage.notes = [
			    {   
			        id: 123456,
			        createdBy: 'Henry Jones',
			        title: 'This is an example note',
			        date: randomDate(new Date(2017, 0, 1), new Date(2017, 2, 1)),
			        image: '/images/henry.jpg',
			        note: 'Lorem ipsum dolor sit amet, noluisse consectetuer ad vim, eu pro numquam partiendo, nam no modo labores appetere. Feugiat insolens deserunt ex sea, at debet argumentum pro, aliquam prodesset theophrastus ea sea. Ne qui sale nonumes, id facer scriptorem usu. Novum tamquam laoreet ea quo. Forensibus appellantur ea pri.',
			        notes: [
			            {
			                id: 54782,
			                createdBy: 'Sarah Folley',
			                date: randomDate(new Date(2017, 2, 1), new Date()),
			                image: '/images/sarah.jpg',
			                note: 'Lorem ipsum dolor sit amet, eos id consul minimum, debet dicant vituperata est no, qui ad ocurreret gubergren. Vel ne porro feugiat philosophia, porro volutpat comprehensam est et. Commodo alienum copiosae in pri, in eam esse primis ponderum. Mei no wisi impetus disputationi, ex alii delicata sed. Ferri ipsum liber in sed, at vim labore volumus voluptaria, ei atomorum disputationi sea. Ex persius eleifend postulant eam, quo deserunt tractatos an.'
			            },
			            {
			                id: 885574,
			                createdBy: 'Henry Jones',
			                date: randomDate(new Date(2017, 2, 1), new Date()),
			                image: '/images/henry.jpg',
			                note: 'Lorem ipsum dolor sit amet, te quo stet meliore, est te scaevola ponderum. Te enim copiosae euripidis his, etiam tritani albucius vix te? Quod vero putant mel te, nam sapientem intellegebat id, nec ne vidisse liberavisse. Habeo iuvaret vel an, eos ornatus pertinacia voluptatibus eu. Sed falli labitur eripuit ad, errem voluptatum est at, pri an meliore consectetuer.'
			            }
			        ]
			    }
			];
        }

    }


    // TODO implement pagination - get only updated
	public getNotes():ng.IPromise<{}> {
		let defer = this.$q.defer();
        if (this.useLocalStorage) {
        	let notes = this.storage.notes;
        	defer.resolve(notes);
        } else {
        	// TODO get from API - then set to storage
            throw new Error('Can not update notes - Lost connection to the server');
        }
        return defer.promise;
	}

	public getNote(noteId):ng.IPromise<{}> {
		let defer = this.$q.defer();
        if (this.useLocalStorage) {
        	let note = this.storage.notes.filter( o => o.id == noteId);
        	if (!note.length) throw new Error('Can not find note');
        	defer.resolve(note[0]);
        } else {
        	// TODO get from API - then set to storage
            throw new Error('Can not find notes - Lost connection to the server');
        }
        return defer.promise;
	}

	public postNote(noteObj):ng.IPromise<{}> {

		noteObj.id = Math.floor(Math.random() * (9999999999 - 100000000)) + 100000000;
		// TODO add user details to note
		noteObj.createdBy = "Guest";
		noteObj.date = new Date();
		let defer = this.$q.defer();
        if (this.useLocalStorage) {
        	this.storage.notes.push(noteObj);
        	let response = {
        		success: true
        	}
        	defer.resolve(response);
        } else {
        	// TODO get from API - then set to storage
            throw new Error('Can not find notes - Lost connection to the server');
        }
        return defer.promise;
	}



	public patchNote(additionalNote, noteId):ng.IPromise<{}> {
		let additionalNoteObj = {
			note: additionalNote,
			createdBy: "Guest",
			date: new Date()
		};
		// TODO add user details to note
		let defer = this.$q.defer();
        if (this.useLocalStorage) {
        	let note = this.storage.notes.find( o => o.id == noteId);
        	console.log(note);
        	if (note.hasOwnProperty('notes')) {

        		note.notes.push(additionalNoteObj);
        	} else {
        		note.notes = [additionalNoteObj];
        	}
        	// let note = this.storage.notes.splice(this.storage.notes.indexOf(item), 1);( o => o.id == noteId);
        	// if (!note.length) throw new Error('Can not find note');
        	defer.resolve(note);
        } else {
        	// TODO get from API - then set to storage
            throw new Error('Can not find notes - Lost connection to the server');
        }
        return defer.promise;
	}
}