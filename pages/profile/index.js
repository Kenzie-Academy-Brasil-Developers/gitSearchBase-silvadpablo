const localUserName = localStorage.getItem("GitSearchUserName")
const fetchDetailsUrl = `https://api.github.com/users/${localUserName}`
const fetchReposUrl = `https://api.github.com/users/${localUserName}/repos`

async function renderDetails(){
    fetch(fetchDetailsUrl)
    .then(function (response) {
        return response.json()
    })
    .then(function (responseJson) {
        renderUserInfo(responseJson)
    })
}

async function renderRepos(){
    fetch(fetchReposUrl)
    .then(function (response) {
        return response.json()
    })
    .then(function (responseJson) {
        if (responseJson.length <= 4) {
            let main = document.querySelector("main")
            main.style.height = "100vh"
        }
        renderUserRepos(responseJson)
    })
}

renderDetails()
renderRepos()