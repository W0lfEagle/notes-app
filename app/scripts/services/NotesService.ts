import * as angular from 'angular';
declare var firebaseDB: any;

export default class NotesService {
    useLocalStorage: Boolean = false;

    static $inject = ['$q'];
    constructor (private $q: ng.IQService) {
    }

    // TODO implement pagination - get only updated
    public getNotes(): ng.IPromise<{}> {
        let defer = this.$q.defer();

        let notesRef = firebaseDB.ref('notes/').once('value', function(snapshot) {
            let notes = {};
            snapshot.forEach(element => {
                notes[element.key] = element.val();
            });
            console.log(notes);
            defer.resolve(notes);
        });
        return defer.promise;
    }

    public getNote(noteId): ng.IPromise<{}> {
        // console.log('getting note')
        let defer = this.$q.defer();

        firebaseDB.ref('notes/' + noteId).once('value').then(function(snapshot) {
            // console.log(snapshot);
            defer.resolve(snapshot.val());
        }).catch(err => {
            defer.reject(err);
        });

        return defer.promise;
    }

    public postNote(noteObj): ng.IPromise<{}> {

        // TODO get user from authservice
        noteObj.createdBy = 'Guest';
        noteObj.image = '/images/guest.jpg';
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
            createdBy: 'Guest',
            image: '/images/guest.jpg',
            date: new Date().getTime()
        };
        let defer = this.$q.defer();
        let newNoteId = firebaseDB.ref('notes/' + noteId).child('notes').push().key;
        firebaseDB.ref('notes/' + noteId + '/notes/' + newNoteId).set(additionalNoteObj)
        .then(result => {
            console.log('Setting note at: ' + newNoteId);
            defer.resolve();
        }).catch(err => {
            defer.reject(err);
        });
        return defer.promise;
    }
}
