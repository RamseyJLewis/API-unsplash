let query = 'whales';
let url = `https://api.unsplash.com/search/photos/?query=${query}=whales&client_id=tkcY6b1MhaXg4rVZGnVWkgE0nUhewNdRkxsKqwUZ-ZY`;
let content = document.getElementById('content');


    function search(){
        query = document.getElementById('search').value || 'whales';
        console.log(query)
        url = `https://api.unsplash.com/search/photos/?query=${query}=&client_id=tkcY6b1MhaXg4rVZGnVWkgE0nUhewNdRkxsKqwUZ-ZY`;
        content.innerHTML=''

        fetch(url)
            .then (res => res.json())
            .then(res => { 
               
                for(let i = 0; i < res.results.length; i++){
                    console.log(res.results[i])
                    
                    let picture = document.createElement('img')
                    let card = document.createElement('div')
                    let likes = document.createElement('likes')
                    let description = document.createElement('p')

                    card.setAttribute('class', 'card')
                    description.setAttribute('class', 'description')

                    picture.src = res.results[i].urls.full
                    description.innerText = res.results[i].description
                    likes.innerText = 'LIKES: ' + res.results[i].likes
                    
                    card.appendChild(likes)
                    card.appendChild(picture)
                    card.appendChild(description)

                    content.appendChild(card)

                }
            })
    }



window.onload = search