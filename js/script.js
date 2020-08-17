let blogArray = []; //Define array of posts

//loop through all posts
for (i = 1; i < (2); i++) {
	blogArray.push("/blog-posts/Thisis" + i + ".html"); //Add to array
}

document.getElementById("blogposts").innerHTML ="<a href="+blogArray+"/>"


console.log(blogArray)