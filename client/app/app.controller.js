class AppController {
    constructor(currentUser) {
        'ngInject';

        this.currentUser = currentUser;
    }

    isAuthenticated() {
        return this.currentUser !== null;
    }
}

export default AppController;