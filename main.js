async function init() {
    fetch("users.json")
    .then(usersResp => usersResp.json())
    .then(users => console.log(users));
}