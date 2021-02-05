import Head from 'next/head';
import Layout from '../assets/components/textileLayout';
import Products from '../assets/components/textileGrid'
import ProductCard from '../assets/components/productComponents/textileCard';

export default function Textile() {
    return (
        <div>
            <Head>
                <title>Tuani</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
        <Layout>
            <Products />
                <ProductCard />
        </Layout>
        </div>
    )
};
