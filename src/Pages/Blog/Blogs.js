import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Loading from '../Shared/Loading/Loading';
import Blog from './Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(false)
    const loads = [1,2,3,4,5,6,7,8]

    useEffect(() => {
        setLoading(true)
        fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=88ac0292ace04a29baf8cc8cd07f9824')
            .then(res => res.json())
            .then(data => {
                setBlogs(data.articles)
                setLoading(false)
            })
    }, [])
    return (
        <>
            <section className='grid grid-cols-1 md:grid-cols-2 gap-10 w-4/5 my-10 mx-auto'>
                {
                    loading && loads.map((index) => <Loading key={index} />)
                }
                {
                    blogs.map((blog, index) => <Blog key={index} blog={blog}></Blog>)
                }
            </section>
            <Footer />
        </>
    );
};

export default Blogs;