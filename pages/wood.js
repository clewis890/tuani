import Head from 'next/head';
import Layout from '../assets/components/woodLayout';
import Products from '../assets/components/woodGrid'
import ProductCard from '../assets/components/productComponents/woodCard';

export default function Wood() {
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
