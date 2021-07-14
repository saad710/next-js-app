export default function Post({post}){
    console.log(post)
    return <div> {
            post?.map(pt => (
                <div key={pt.id}>
                    {pt.title}
                </div>
            ))
        } 
        </div>
}

export async function getStaticProps(){
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const post = await res.json()
  

    return {
        props : {
            post,
        }
    }
}