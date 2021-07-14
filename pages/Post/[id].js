export default function todos(){
    console.log(post)
    return <div> 
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