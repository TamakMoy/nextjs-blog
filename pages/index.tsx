import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';

interface HomeProps {
    allPostsData: any[],
}

const Home = ({ allPostsData }: HomeProps) => {
    console.log(allPostsData)
    return (
        <>
            <header>
                <div>
                    {/* <img src="/images/head.jpg" alt="" /> */}
                    <Image src="/images/head.jpg" alt="head" height={144} width={144} />
                </div>
            </header>
            <Link href="/music">Music</Link>
            <section>
                <h2>Blog</h2>
                <ul>
                    {/* {allPostsData.map(({ id, date, title }) => (
                        <li key={id}>
                            {title}
                            <br />
                            {id}
                            <br />
                            {date}
                        </li>
                    ))} */}
                    {allPostsData.map(({ id, title }) => {
                        return <li key={id}><Link href={`/music/${id}`}>{title}</Link></li>
                    })}
                </ul>
            </section>
        </>
    );
};

export default Home;

export async function getServerSideProps(context: any) {
    console.log(context.req)
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}
