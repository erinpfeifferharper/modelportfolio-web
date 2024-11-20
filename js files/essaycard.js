const cardData = [
    {
        heading: 'essay one',
        body: 'topic: the daily sun',
        link: 'essay pages/essayone.html'
    },
    {
        heading: 'essay two',
        body: 'topic: the impact of algorithmic culture and AI on the internet ',
        link: 'essay pages/essaytwo.html'
    },

]

{/* <div class="card">
         <h3 class="card-head">card heading</h3>
         <p class="card-body">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
           architecto fugiat ex ea aspernatur officia vitae, aperiam porro
           aliquam minus provident. Temporibus nisi veniam nihil ut vel sed
           provident quae.
        </p>
        <a href="essay pages/essayone.html"></a>
</div> */}

const postContainer = document.querySelector('.essay-card-con');

const postMethods = ()=>{
    cardData.map((postData)=>{
        const postElement = document.createElement('div');
        postElement.classList.add('card');
        postElement.innerHTML = `
        <h3 class = "card-head">${postData.heading}</h3>
        <p class="card-body">${postData.body}</p>
        <a href="${postData.link}" target="_self">read more...</a>
        `
        postContainer.appendChild(postElement)
    })
}
postMethods()