export const userToken ={
    checkLogin,
};

function checkLogin() {
    const token = localStorage.getItem('token')
    return token
}