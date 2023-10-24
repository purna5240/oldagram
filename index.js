const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]
const postEl=document.getElementById("post-el")
for(let i=0;i<3;i++)
{   
const postDiv=document.createElement("div")
postDiv.innerHTML= `<div class="name-sec">
                <img src=${posts[i].avatar} class="user-img">
                <div>
                    <p class="no-margin"><strong>${posts[i].name}</strong></p>
                    <p class="no-margin">${posts[i].location}</p>
                </div>
                </div>
                <img src=${posts[i].post} class="post-img">
                <div>
                    <img src="images/icon-heart.png" class="icon-img">
                    <img src="images/icon-comment.png" class="icon-img">
                    <img src="images/icon-dm.png" class="icon-img">
                </div>
                <div class="container">
                <p class="no-margin"><strong>${posts[i].likes} Likes</strong></p>
                <p><strong>vincey1853 </strong>${posts[i].comment}</p>
                </div>`                               
postEl.append(postDiv)
}
