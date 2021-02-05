import Head from 'next/head';
import Layout from '../assets/components/leatherLayout';
import Products from '../assets/components/leatherGrid'
import ProductCard from '../assets/components/productComponents/leatherCard';
import Typography from '@material-ui/core/Typography'

export default function Leather() {
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
