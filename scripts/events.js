let findButton = document.getElementById("btn-find")
let switchButton = document.getElementById("switch-button")
let inputUser = document.getElementById("input-user")

if (findButton) {
    findButton.addEventListener("click", (event) => {
        fetch(`https://api.github.com/users/${inputUser.value}`)
        .then(function(response) {
            if (!response.ok){ throw response }
            return response.json()
        })
        .then(function(responseJson) {
            findButton.classList.toggle("btn-loading")
            let previousStorage = localStorage.getItem("recentUserSearched")
            if (previousStorage == null) {
                localStorage.setItem("recentUserSearched", JSON.stringify(responseJson))
            } else {
                updateRecentStorage(responseJson)
            }
            localStorage.setItem("GitSearchUserName", inputUser.value)
            location.replace("./pages/profile/index.html")
        })
        .catch(err => {
            if (err.status == 404) {
                findButton.classList.toggle("btn-loading")
                let button = document.getElementById("btn-find")
                let notFound = document.querySelector(".not-found")
                if (!notFound) {
                    button.insertAdjacentHTML("beforebegin", `<p class="not-found">Usuário não encontrado</p>`)
                }
                findButton.classList.toggle("btn-loading")
            }
        })
    })
}

if (switchButton) {
    switchButton.addEventListener("click", () => {
        localStorage.removeItem("GitSearchUserName")
        location.replace("../../index.html")
    })
}