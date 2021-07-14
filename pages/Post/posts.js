import Link from "next/link"

export default function Posts({posts}){
    console.log(posts)
    return <div> {
            posts?.map(post => (
                <div key={post.id}>
                    <Link href={`/posts/${post.id}`}>{post.title}</Link>
                    {/* <h5>{post.title}</h5> */}
                                   
                    
                </div>
            ))
        } 
        </div>
}

export async function getStaticProps(){
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const posts = await res.json()
  

    return {
        props : {
            posts,
        }
    }
}