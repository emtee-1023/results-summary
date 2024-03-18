fetch('./data.json')
    .then(res => {
        return res.json()
            .then(data=> {

                data.forEach(entry => {
                
                    const html  = `
                    <div class="placeholder ${entry.class}">
                    <img src="${entry.icon}" alt="${entry.class}">
                    <p class="definition ${entry.class}">${entry.category}</p>
                    <p class="score">${entry.score}</p> <p class="total">/ 100</p>`

                    document.querySelector('button.continue').insertAdjacentHTML('beforebegin',html);
                    
                });
            
            })
        
    })