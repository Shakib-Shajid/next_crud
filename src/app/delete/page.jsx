import React from 'react';

const page = () => {
    return (
        <div className='pt-32'>
            <div className='w-[50%] mx-auto text-center space-y-5 border-2 p-20 rounded-3xl'>
                <div className="overflow-x-auto">
                    <table className="table text-base">
                        <caption className='text-xl font-bold text-black p-2 rounded-xl bg-error mb-5 w-[50%] mx-auto'>Delete</caption>
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
                            <tr>
                                <th>1</th>
                                <td>user1</td>
                                <td>user1@gmail.com</td>
                                <td>123456</td>
                                <td className='btn btn-ghost pl-7 text-red-800'>X</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th>2</th>
                                <td>user2</td>
                                <td>user2@gmail.com</td>
                                <td>654321</td>
                                <td className='btn btn-ghost pl-7 text-red-800'>X</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th>3</th>
                                <td>user3</td>
                                <td>user3@gmail.com</td>
                                <td>123654</td>
                                <td className='btn btn-ghost pl-7 text-red-800'>X</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default page;