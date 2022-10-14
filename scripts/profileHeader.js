function renderUserInfo (data) {
    let userInfo = document.getElementById("user-header")
    
    let userDiv = document.createElement("div")
    userDiv.classList = "user-info flex"
    userInfo.insertAdjacentElement("afterbegin", userDiv)

    let userImg = document.createElement("img")
    userImg.src = `${data.avatar_url}`
    userImg.alt = "user avatar"
    userImg.classList = "user-pic"
    userDiv.append(userImg)

    let userSpecsDiv = document.createElement("div")
    userSpecsDiv.classList = "user-specs flex flex-col justify-around"
    userDiv.append(userSpecsDiv)

    let userName = document.createElement("h2")
    userName.classList = "user-name"
    userName.innerText = `${data.name}`
    userSpecsDiv.append(userName)

    let userJob = document.createElement("p")
    userJob.classList = "user-job"
    userJob.innerText = `${data.bio}`
    userSpecsDiv.append(userJob)
}