// all the logic related to blog posts are here.

function index(req, res){
    const posts = "Posts Lists";
    res.send(posts);
}

// export this method
module.exports = {
    index : index
}