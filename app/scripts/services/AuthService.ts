import * as angular from 'angular';
import 'ngstorage';

export default class AuthService {
	useLocalStorage: Boolean = true;
    user: any;
    defaultUsers: any;

	static $inject = ['$localStorage', '$q']
    constructor (private storage: angular.storage.IStorageService, private $q: ng.IQService) {
    	this.init();
    }

    public init() {
        if(this.useLocalStorage) {
            this.defaultUsers = [
                {
                    username: "user",
                    password: "letMeIn"
                }
            ]
        }
    }

	public login(username, password):ng.IPromise<{}> {
		let defer = this.$q.defer();
        if (this.useLocalStorage) {

            // TODO check db for auth
        	let user = this.defaultUsers.filter( o => o.username == username && o.password == password);
            if (!user.length) throw new Error('Can not find user');
            this.user = user[0];
        	defer.resolve(this.user);
        } else {
        	// TODO get from API - then set to storage
            throw new Error('Can not login');
        }
        return defer.promise;
	}
}