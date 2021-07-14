export default function Post({post}){
    console.log(post)
    return <div> 
           
          <h1>hello</h1>
        </div>
}

export async function getStaticProps({params}){
    console.log(params.id)
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
    const post = await res.json()
  

    return {
        props : {
            post,
        }
    }
}

export async function getStaticPaths(){
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/')
    const posts = await res.json()
    const paths = []
    paths.forEach((post) => paths.push(`/posts/${post.id}`) )

    return {
        paths,
        fallback: false
       
    }
}