import React from 'react';


const Blog = ({ blog }) => {
    const { author, title, description, url, urlToImage, publishedAt } = blog
    return (
        <div className="card card-compact bg-base-100 rounded-none hover:-translate-y-3 duration-700 ease-in-out">
            <figure><img src={urlToImage || 'https://image.cnbcfm.com/api/v1/image/107076295-Traders-OB-Photo-20220615-DN-186-PRESS4.jpg?v=1655309906&w=1920&h=1080'} alt={title} /></figure>
            <div className="card-body">
                <div className='flex justify-between'>
                    <p>{author || 'Sumathi Bala'}</p>
                    <p>{publishedAt}</p>
                </div>
                <h2 className="card-title">{title}</h2>
                <p>{description || 'This is currently not available, Please refresh or try again later'}</p>
                <div className="card-actions justify-start">
                    <a href={url} className="text-primary text-xl">Read more...</a>
                </div>
            </div>
        </div>
    );
};

export default Blog;