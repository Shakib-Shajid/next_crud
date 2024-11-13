"use client";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

const Page = () => {
    const [user, setUser] = useState([]);
    const params = useParams();


    useEffect(() => {
        const loadUser = async () => {
            const response = await fetch(`http://localhost:3000/read/api/getOne/${params.id}`);
            const data = await response.json();
            setUser(data);
        };
        loadUser();
    }, [params]);

    const handleUpdate = (event) => {
        event.preventDefault();
        const updateInfo = {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value,
        };

        axios.patch(`http://localhost:3000/read/api/getOne/${params.id}`, updateInfo)
            .then((res) => console.log(res))
            .catch((error) => console.log(error));
    };

    return (
        <div className="pt-32">
            <div className="w-[30%] mx-auto text-center space-y-5 border-2 p-20 rounded-3xl">
                <h3 className="text-xl font-bold text-white p-2 rounded-3xl bg-info">Update</h3>
                <form className="space-y-5" onSubmit={handleUpdate}>
                    <label className="input input-bordered flex items-center gap-2 text-black">
                        Name
                        <input type="text" className="grow" defaultValue={user.name} placeholder="Daisy" name="name" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 text-black">
                        Email
                        <input type="text" className="grow" defaultValue={user.email} placeholder="daisy@site.com" name="email" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 text-black">
                        Password
                        <input type="password" className="grow" defaultValue={user.password} placeholder="Password" name="password" />
                    </label>
                    <button className="btn w-full btn-info">Update</button>
                </form>
            </div>
        </div>
    );
};

export default Page;
