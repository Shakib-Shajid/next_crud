
import getAllPosts from '@/lib/getAllPost';
import React from 'react';

// const users = getAllPosts();

const page = async () => {

    const {users} = await getAllPosts();

    return (
        <div className='pt-5'>
            <div className='w-[50%] mx-auto text-center space-y-5 border-2 p-10 rounded-3xl'>
                <div className="overflow-x-auto">
                    <table className="table text-base">
                        <caption className='text-xl font-bold text-black p-2 rounded-xl bg-warning mb-5 w-[50%] mx-auto'>Read: {users.length}</caption>
                        {/* head */}
                        <thead className='text-white'>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) =>
                                    <tr key={user.id}>
                                        <td>{index + 1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.password}</td>
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