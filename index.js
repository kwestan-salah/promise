const posts = [{
        title: "title 1",
        content: "content 1"
    },
    {
        title: "title 2",
        content: "content 2"
    },
    {
        title: "title 3",
        content: "content 3"
    },
    {
        title: "title 4",
        content: "content 4"
    },
];

function getallposts() {
    setTimeout(() => {
        let postslist = "";
        posts.forEach(post => {
            postslist += `<li>${post.title} - ${post.content}`;
        });
        document.write(postslist);
    }, 1000);
}



const newpromise = new Promise((resolve, reject) => {
    let postadded = false;
    setTimeout(() => {
        posts.push({
            title: "title 5",
            content: "content 5"
        });

        postadded = true;

        if (postadded) {
            resolve("RESOLVE");
        } else {
            reject("we got a new error");
        }
    }, 2000);


});


newpromise.then((value) => {
        getallposts();
    }).then(() => {
        console.log("goodbye");
    })
    .catch(err => {
        console.log(err);
    });