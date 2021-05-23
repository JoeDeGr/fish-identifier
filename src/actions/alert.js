export const alertActions = {
    sucess,
    error,
    clear
};

function sucess(message) {
    return { type: 'ALERT_SUCCESS', message}
}

function error(message) {
    return { type: 'ALERT_ERROR', message }
}

function clear(message) {
    return { type: 'ALERT_ERROR', message }
}
