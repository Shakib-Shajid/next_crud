import React from 'react';

const page = () => {
    return (
        <div className='pt-32'>
            <div className='w-[30%] mx-auto text-center space-y-5 border-2 p-20 rounded-3xl'>
                <h3 className='text-xl font-bold text-black p-2 rounded-3xl bg-green-600'>Create</h3>

                <label className="input input-bordered flex items-center gap-2 text-black">
                    Name
                    <input type="text" className="grow" placeholder="Daisy" />
                </label>
                <label className="input input-bordered flex items-center gap-2 text-black">
                    Email
                    <input type="text" className="grow" placeholder="daisy@site.com" />
                </label>
                <label className="input input-bordered flex items-center gap-2 text-black">
                    Password
                    <input type="password" className="grow" placeholder="Password" />
                </label>

                <button className='btn w-full btn-success'>Create</button>
            </div>
        </div>
    );
};

export default page;