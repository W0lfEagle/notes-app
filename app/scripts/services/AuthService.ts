import * as angular from 'angular';
declare var firebaseAuth: any;

export default class AuthService {
    static $inject = ['$q'];
    constructor (private $q: ng.IQService) {
        this.init();
    }

    public init() {
        firebaseAuth.onAuthStateChanged(function(user) {
            if (!user) {
                console.log('no user logged in');
                // No user is signed in.
                // TODO redirect to login.root
            }
        });
    }

    public getUser(): any {
        return firebaseAuth.currentUser;
    }

    public login(email, password): ng.IPromise<{}> {
        let defer = this.$q.defer();
        if (firebaseAuth.currentUser) {
            firebaseAuth.signOut();
        } else {
            firebaseAuth.signInWithEmailAndPassword(email, password)
            .then(result => {
                defer.resolve();
            })
            .catch(function(error) {
                defer.reject(error);
            });
        }
        return defer.promise;
    }

    public logout(): void {
        firebaseAuth.signOut();
    }

    public register(user): ng.IPromise<{}> {
        let defer = this.$q.defer();
        firebaseAuth.createUserWithEmailAndPassword(user.email, user.password)
        .then(result => {
            defer.resolve();
        }).catch(error => {
            defer.reject(error);
        });
        return defer.promise;

        // TODO verify email
    }

    public updateProfile(profile): ng.IPromise<{}> {
        let defer = this.$q.defer();
        firebaseAuth.currentUser.updateProfile({displayName: profile.name})
        .then(result => {
            defer.resolve();
        }).catch(error => {
            defer.reject(error);
        });
        return defer.promise;
    }

}
