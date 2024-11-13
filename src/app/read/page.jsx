
"use client";
import getAllPosts from "@/lib/getAllPost";
import Link from "next/link";
import { useEffect, useState } from "react";

// const users = getAllPosts();

const Page = () => {

    const [users, setUsers] = useState([]);

    const fetchData = async () => {
        const { users } = await getAllPosts();
        setUsers(users);
    };


    useEffect(() => {
        fetchData();
    }, []);

    const handleDelete = async (id) => {

        const response = await fetch(`http://localhost:3000/delete/api/${id}`, {
            method: "DELETE",
        });
        if (response.ok) {
            // setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
            fetchData();
        }

    };

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
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={user._id}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.password}</td>
                                    <td><Link href={`/update/${user._id}`}>Edit</Link></td>
                                    <td
                                        onClick={() => handleDelete(user._id)}
                                        className="btn btn-ghost pl-7 text-red-800 cursor-pointer"
                                    >
                                        X
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Page;