import Link from 'next/link';
import React from 'react';

const Details = () => {
    return (
        <div>
            <Link href="/create"><button className='btn btn-lg mx-10 btn-success'>Create</button></Link>
            <Link href="/read"><button className='btn btn-lg mx-10 btn-info'>Read</button></Link>
            <Link href="/update"><button className='btn btn-lg mx-10 btn-warning'>Update</button></Link>
            <Link href="/delete"><button className='btn btn-lg mx-10 btn-error'>Delete</button></Link>
        </div>
    );
};

export default Details;
