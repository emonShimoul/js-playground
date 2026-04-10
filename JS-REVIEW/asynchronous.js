// api : https://jsonplaceholder.typicode.com/users

// 1. Fetch users using async/await
const getData = async() => {
    try{
        // 4. Add Loading Simulation
        console.log("Loading started...");
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const res1 = await fetch("https://jsonplaceholder.typicode.com/posts");

        const data = await res.json();
        const posts = await res1.json();

        console.log("Loading finished");
        // console.log(data);
        // console.log(posts);


        // 2. Extract
        console.log(data.map(d =>  (
            {
                name: d.name,
                email: d.email
            }
        )));

        // 5. Advanced (Important) - Create function: Should return only names
        const getUserNames = (users) => {
            return users.map(user => user.name);
        }
        
        console.log(getUserNames(data));

        // 6. Bonus (Real-world thinking) // For each user → loops all posts - Complexity: O(n²)
        const result = data.map(d => {
            const userPosts = posts.filter(post => post.userId === d.id);

            return{
                name: d.name,
                postCount: userPosts.length
            }
        })
        console.log(result);

        // 6. Bonus (Real-world thinking) - Optimized Version (Real-world level)
        // Using reduce - Much faster - Scalable (important for large data)
        const postCountMap = posts.reduce((acc, post) => {
        acc[post.userId] = (acc[post.userId] || 0) + 1;
        return acc;
        }, {});

        const result1 = data.map(user => ({
        name: user.name,
        postCount: postCountMap[user.id] || 0
        }));
        console.log(result1);
        
        
        // 3. Handle Error
    } catch(error){
        console.log(error);
    }
} 
getData();



