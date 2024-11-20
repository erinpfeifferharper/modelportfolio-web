const cardData = [
    {
        heading: 'week one',
        link: 'devblog pages/blogone.html'
    },

    {
        heading: 'week two',
        link: 'devblog pages/blogtwo.html'
    },

    {
        heading: 'week three',
        link: 'devblog pages/blogthree.html'
    },

    {
        heading: 'week four',
        link: 'devblog pages/blogfour.html'
    },

    {
        heading: 'week five',
        link: 'devblog pages/blogfive.html'
    },

    {
        heading: 'week six',
        link: 'devblog pages/blogsix.html'
    },

    {
        heading: 'week seven',
        link: 'devblog pages/blogseven.html'
    },

    {
        heading: 'week eight',
        link: 'devblog pages/blogeight.html'
    },

    {
        heading: 'week nine',
        link: 'devblog pages/blognine.html'
    },

    {
        heading: 'week ten',
        link: 'devblog pages/blogten.html'
    },
    
    {
        heading: 'week eleven',
        link: 'devblog pages/blogeleven.html'
    },

    {
        heading: 'week twelve',
        link: 'devblog pages/blogtwelve.html'
    },

    {
        heading: 'week thirteen',
        link: 'devblog pages/blogthirteen.html'
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

const postContainer = document.querySelector('.card-con');

const postMethods = ()=>{
    cardData.map((postData)=>{
        const postElement = document.createElement('div');
        postElement.classList.add('card');
        postElement.innerHTML = `
        <h3 class = "card-head">${postData.heading}</h3>
        <a href="${postData.link}" target="_self">read more...</a>
        `
        postContainer.appendChild(postElement)
    })
}
postMethods()