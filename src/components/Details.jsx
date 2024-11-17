"use client"

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import getAllPosts from "@/lib/getAllPost";

const Details = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({});
    const params = useParams();

    // ....................................................................................................


    // create
    const handleCreate = async (event) => {
        event.preventDefault();

        const newCreate = {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value,
        };

        axios.post('http://localhost:3000/create/api', newCreate)
            .then(res => {
                // window.location.reload();
                fetchData();
                console.log(res)
            }
            )
            .catch(error => console.log(error));
    };

    // ....................................................................................................

    // read
    const fetchData = async () => {
        const { users } = await getAllPosts();
        setUsers(users);
    };

    useEffect(() => {
        fetchData();
    }, []);


    // ....................................................................................................


    // update
    const handleEdit = (selectedUser) => {
        setUser(selectedUser); // Populate the Update card with selected user's data
    };

    const handleUpdate = async (event) => {
        event.preventDefault();
        const form = event.target;
        const updateInfo = {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value,
        };

        axios.patch(`http://localhost:3000/read/api/getOne/${user._id}`, updateInfo)
            .then((res) => {
                {
                    // window.location.reload();
                    fetchData();
                    console.log(res)
                }
            }
            )
            .catch((error) => console.log(error));
    };

    // try {
    //     const res = await axios.patch(`http://localhost:3000/read/api/getOne/${user._id}`, updateInfo);
    //     console.log(res);

    //     // Fetch the updated data
    //     fetchData();
    // } catch (error) {
    //     console.error(error);
    // }


    // ....................................................................................................


    // delete


    const handleDelete = async (id) => {
        // const response = await fetch(`http://localhost:3000/delete/api/${id}`, {
        //     method: "DELETE",
        // });
        // if (response.ok) {
        //     fetchData();
        // }

        axios.delete(`http://localhost:3000/delete/api/${id}`)
            .then(res => {
                fetchData();
                console.log(res)
            })
            .catch(error => console.log(error))
    };

    return (
        <div>
            <div className="flex flex-col lg:flex-row gap-10 justify-center">

                {/* Create Card */}
                <div className='w-full md:w-[65%] lg:w-[31%] md:mx-auto lg:mx-0 text-center border-2 p-20 space-y-5 rounded-3xl'>
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

                {/* Update Card */}
                <div className="w-full md:w-[65%] lg:w-[31%] md:mx-auto lg:mx-0 text-center space-y-5 border-2 p-20 rounded-3xl">
                    <h3 className="text-xl font-bold text-white p-2 rounded-3xl bg-info">Update</h3>
                    <form onSubmit={handleUpdate} className="space-y-5">
                        <label className="input input-bordered flex items-center gap-2 text-black">
                            Name
                            <input
                                type="text"
                                className="grow"
                                defaultValue={user.name || ""}
                                placeholder="Daisy"
                                name="name"
                            />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 text-black">
                            Email
                            <input
                                type="email"
                                className="grow"
                                defaultValue={user.email || ""}
                                placeholder="daisy@site.com"
                                name="email"
                            />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 text-black">
                            Password
                            <input
                                type="password"
                                className="grow"
                                defaultValue={user.password || ""}
                                placeholder="Password"
                                name="password"
                            />
                        </label>
                        <button className="btn w-full btn-info">Update</button>
                    </form>
                </div>
            </div>

            {/* read */}
            <div className='pt-5 md:w-[65%] mx-auto'>
                <div className='text-center space-y-5 border-2 p-10 rounded-3xl'>
                    <div className="overflow-x-auto">
                        <table className="table text-base">
                            <caption className='text-xl font-bold text-black p-2 rounded-xl bg-warning mb-5 w-[50%] mx-auto'>
                                Read: {users.length}
                            </caption>
                            <thead className='text-white'>
                                <tr>
                                    <th>#</th>
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
                                        <td
                                            onClick={() => handleEdit(user)}
                                            className="text-blue-800 cursor-pointer text-lg"
                                        >
                                            Edit
                                        </td>
                                        <td
                                            onClick={() => handleDelete(user._id)}
                                            className="pl-7 text-red-800 cursor-pointer text-lg"
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
        </div>
    );
};

export default Details;
