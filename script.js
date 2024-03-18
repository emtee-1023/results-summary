fetch('./data.json')
    .then(res => {
        return res.json()
        .then(data=> {
            data.forEach(result => {
                const item = `${result.score}`

                document.querySelector('.score').innerHTML('<p>fuck</p>')
            });
        })
    })