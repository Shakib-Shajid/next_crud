
"use client";
import getAllPosts from "@/lib/getAllPost";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

// const users = getAllPosts();

const Details = () => {

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

    const handleCreate = async (event) => {
        event.preventDefault();

        const newCreate = {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value,
        }

        axios.post('http://localhost:3000/create/api', newCreate)
            .then(res => console.log(res))
            .catch(error => console.log(error))
    }


    return (
        <div className="flex gap-10 flex-col md:flex-row items-center">
            <div className='pt-5 w-[50%] mx-auto'>
                <div className='text-center space-y-5 border-2 p-10 rounded-3xl'>
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
                                            className="btn btn-ghost pl-7 text-red-800 cursor-pointer text-lg"
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






            <div className='text-center border-2 p-20 space-y-5 rounded-3xl w-[30%] mx-auto'>
                <h3 className='text-xl font-bold text-black p-2 rounded-3xl bg-green-600'>Create</h3>

                <form onSubmit={handleCreate} className='space-y-5'>
                    <label className="input input-bordered flex items-center gap-2 text-black">
                        Name
                        <input type="text" className="grow" placeholder="Daisy" name="name" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 text-black">
                        Email
                        <input type="email" className="grow" placeholder="daisy@site.com" name="email" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 text-black">
                        Password
                        <input type="password" className="grow" placeholder="Password" name="password" />
                    </label>
                    <button className='btn w-full btn-success'>Create</button>
                </form>

            </div>
        </div>
    );
};

export default Details;