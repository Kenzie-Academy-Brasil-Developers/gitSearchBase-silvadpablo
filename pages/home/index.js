let userInfo = JSON.parse(localStorage.getItem("recentUserSearched"))

if (userInfo == null) {

} else if (Array.isArray(userInfo)){
    renderRecent(userInfo)
} else {
    userInfo = [userInfo]
    renderRecent(userInfo)
}

function renderRecent(data) {
    let ulRecent = document.getElementById("recent-users")
    ulRecent.innerHTML = ""
    data.forEach(element => {
        let liRecent = document.createElement("li")
        liRecent.classList = "btn-profile-img recent-users"
        liRecent.style.backgroundImage = `url("${element.avatar_url}")`
        ulRecent.append(liRecent)

        liRecent.addEventListener("click", () => {
            localStorage.setItem("GitSearchUserName", element.login)
            location.replace("./pages/profile/index.html")
        })

        let textSpan = document.createElement("span")
        textSpan.classList = "btn-access"
        textSpan.innerText = "Acessar este perfil"
        liRecent.append(textSpan)
    });
}


function updateRecentStorage(userObject) {
    let repeated = userInfo.find((element) => element.id == userObject.id)
    if (repeated == undefined && userInfo.length < 3) {
        setStorage(userObject)
    } else if (repeated == undefined && userInfo.length == 3) {
        userInfo.shift()
        setStorage(userObject)
    } else if (repeated) {
        let position = userInfo.indexOf(repeated)
        userInfo.splice(position, 1)
        setStorage(userObject)
    }
}

function setStorage (userObject) {
    let nextStorage = [...userInfo, userObject]
    localStorage.setItem("recentUserSearched", JSON.stringify(nextStorage))
}
