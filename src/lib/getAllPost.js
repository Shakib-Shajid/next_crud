export default async function getAllPosts (){
    const result = await fetch('https://jsonplaceholder.typicode.com/users')

    return result.json();
}
