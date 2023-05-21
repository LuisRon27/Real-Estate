import React from 'react';
import Back from '../components/back';
import assets from '../assets/about.jpg';
import RecentCard from '../components/recentCard';

const Blog = () => {
    return (
        < >
            <section className='blog-out mb'>
                <Back name="Blog" title="Blog Grid - Our Blogs" cover={assets}></Back>
                <div className='container recent'>
                    <RecentCard></RecentCard>
                </div>
            </section>
        </>
    );
}

export default Blog;
