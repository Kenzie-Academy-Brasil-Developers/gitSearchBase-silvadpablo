function renderUserRepos(data) {
    data.forEach(element => {
        let {name, description, html_url, homepage} = element
        let ulCards = document.querySelector(".all-cards")
    
        let cardLi = document.createElement("li")
        cardLi.classList = "card flex flex-col justify-around"
        ulCards.append(cardLi)
    
        let titleH2 = document.createElement("h2")
        titleH2.classList = "card-title"
        titleH2.innerText = name
        cardLi.append(titleH2)
    
        let pDesc = document.createElement("p")
        pDesc.classList = "card-info"
        pDesc.innerText = description
        cardLi.append(pDesc)
    
        let divLinks = document.createElement("div")
        divLinks.classList = "card-buttons flex"
        cardLi.append(divLinks)
    
        let aRepo = document.createElement("a")
        aRepo.classList = "btn btn-small"
        aRepo.target = "_blank"
        aRepo.innerText = "Repositório"
        aRepo.href = html_url
        divLinks.append(aRepo)
        
        if (homepage != null){
            let aDemo = document.createElement("a")
            aDemo.classList = "btn btn-small"
            aDemo.innerText = "Demo"
            aDemo.target = "_blank"
            aDemo.href = homepage
            divLinks.append(aDemo)
        }
    });
}