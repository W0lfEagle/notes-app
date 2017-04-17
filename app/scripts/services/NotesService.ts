import * as angular from 'angular';
import AuthService from './AuthService';
declare var firebaseDB: any;

export default class NotesService {

    static $inject = ['$q', 'AuthService'];
    constructor (private $q: ng.IQService, private AuthService: AuthService) {
    }

    // TODO implement pagination - get only updated
    public getNotes(): ng.IPromise<{}> {
        let defer = this.$q.defer();

        let notesRef = firebaseDB.ref('notes/').once('value', function(snapshot) {
            let notes = {};
            snapshot.forEach(element => {
                notes[element.key] = element.val();
            });
            defer.resolve(notes);
        });
        return defer.promise;
    }

    public getNote(noteId): ng.IPromise<{}> {
        let defer = this.$q.defer();
        firebaseDB.ref('notes/' + noteId).once('value').then(function(snapshot) {
            defer.resolve(snapshot.val());
        }).catch(err => {
            defer.reject(err);
        });

        return defer.promise;
    }

    public postNote(noteObj): ng.IPromise<{}> {
        noteObj.createdBy = {
            email: this.AuthService.getUser().email,
            name: this.AuthService.getUser().displayName
        };
        noteObj.date = new Date().getTime();
        let defer = this.$q.defer();

        // Append child note
        let newNoteId = firebaseDB.ref().child('notes').push().key;
        firebaseDB.ref('notes/' + newNoteId).set(noteObj).then(result => {
            console.log('Setting note at: ' + newNoteId);
            defer.resolve();
        }).catch(err => {
            defer.reject(err);
        });

        return defer.promise;
    }



    public patchNote(additionalNote, noteId): ng.IPromise<{}> {
        let additionalNoteObj = {
            note: additionalNote,
            createdBy: {
                email: this.AuthService.getUser().email,
                name: this.AuthService.getUser().displayName
            },
            date: new Date().getTime()
        };
        let defer = this.$q.defer();
        let newNoteId = firebaseDB.ref('notes/' + noteId).child('notes').push().key;
        firebaseDB.ref('notes/' + noteId + '/notes/' + newNoteId).set(additionalNoteObj)
        .then(result => {
            defer.resolve();
        }).catch(err => {
            defer.reject(err);
        });
        return defer.promise;
    }
}
