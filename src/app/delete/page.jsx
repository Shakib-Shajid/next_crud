import getAllPosts from "@/lib/getAllPost";
import Link from "next/link";

const page = async() => {

const users = await getAllPosts();

    return (
        <div className='pt-5'>
            <div className='w-[50%] mx-auto text-center space-y-5 border-2 p-10 rounded-3xl'>
                <div className="overflow-x-auto">
                    <table className="table text-base">
                        <caption className='text-xl font-bold text-black p-2 rounded-xl bg-error mb-5 w-[50%] mx-auto'>Delete: {users.length}</caption>
                        {/* head */}
                        <thead className='text-white'>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th className='text-red-800'>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                users.map((user, index) =>
                                    <tr key={user.id}>
                                        <td>{index + 1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.address.zipcode}</td>
                                        <td className='btn btn-ghost pl-7 text-red-800'><Link href={`/delete/${user.id}`}>X</Link></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default page;