import {useState,useEffect} from 'react';

function FetchUsers(){
    const[users,setUsers] = useState([])
    // const[loading,setloading] = useState(true)
  

    useEffect(()=>{
        const fetchData = async()=>{
       try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data  = await response.json()
        setUsers(data)

       } catch (error) {
        console.error('Error fetching data:', error);
       }

        }
        fetchData()
    },[])

    return(
        <>

<h2>Users:</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
        
        </>
    )
}

export default FetchUsers

// import {useState,useEffect} from 'react'

// function FetchPost(){
//   const [posts,setPosts] = useState([])

//   useEffect(()=>{
//     const fetchData = async ()=>{
//       const response = await fetch("https://jsonplaceholder.typicode.com/posts")
//       const data = await response.json()
//       setPosts(data)
//     }
//     fetchData()
//   },[])

//   return(
//     <>
//     <h2>Posts:</h2>
//     <ul>
//       {posts.map(post=>(
//         <li key={post.id}>{post.body}</li>
//       ))}
//     </ul>
    
//     </>
//   )
// }
// export default FetchPost