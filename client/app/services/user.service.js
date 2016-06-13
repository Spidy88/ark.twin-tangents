class UserService {
    constructor($http, $q) {
        'ngInject';

        this.$http = $http;
        this.$q = $q;
        this.lastQuery = null;
        this.currentUser = null;
    }

    getCurrentUser(useCached = true) {
        if( !useCached || !this.lastQuery ) {
            let deferred = this.$q.defer();

            this.$http
                .get('/api/me')
                .then((result) => {
                    this.lastQuery = Date.now();
                    this.currentUser = result.data.user;

                    deferred.resolve(this.currentUser);
                })
                .catch((reason) => {
                    console.error('Failed to get current user: ', reason);

                    deferred.reject(reason);
                });

            return deferred.promise;
        }

        return $q.resolve(this.currentUser);
    }
}

export default UserService;