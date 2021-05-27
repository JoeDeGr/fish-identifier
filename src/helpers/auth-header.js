export function authHeader() {
    let user = JSON.parse(localstorage.getItem('user'));

    if (user && user.token) {
        return {'Authorization' : 'Bearer ' + user.token };
    } else {
        return {};
    }
}