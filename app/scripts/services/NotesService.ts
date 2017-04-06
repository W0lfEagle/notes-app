export class NotesService {
	
	public getNotes(): Array<Object> {
		let notes = [];
		return notes;
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