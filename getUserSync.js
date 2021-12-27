const user = (data, callback) => {
    const time = data === 1 ? 2000 : 3000;
    setTimeout(() => {
        const id = data === 1 ? "Iko" : "Afianando";
        callback({data, id});
    }, time);
}

module.exports = user;