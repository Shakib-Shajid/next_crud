export default async function getAllPosts (){
    const result = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = result.json();

    return data;
}
