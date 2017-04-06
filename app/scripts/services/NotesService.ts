import * as angular from 'angular';
import 'ngstorage';

const staticContent = true;

export default class NotesService {
	static $inject = ['$localStorage', '$q']
    constructor (private storage: angular.storage.IStorageService, private $q: ng.IQService) {}


	public getNotes():ng.IPromise<{}> {
		let defer = this.$q.defer();
        if (staticContent) {
        	let notes = this.storage.notes;
        	defer.resolve(notes);
        } else {
            throw new Error('Lost connection to the server');
        }
        return defer.promise;
	}

	public getNote(noteId): Object {
		let note = {};
		return note;
	}

	public postNote(noteObj): Object {
		let response = noteObj;
		response.success = true;
		return response;
	}

	public patchNote(noteObj): Object {
		let response = {};
		return response;
	}
}