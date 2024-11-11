


export default async function getAllPosts (){
    const result = await fetch('http://localhost:3000/read/api')
    const data = result.json();
    return data;
}
