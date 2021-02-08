import Head from 'next/head'
import Footer from '../assets/components/footer'
import Image from 'next/image';
import { Button } from "@material-ui/core"
import Header from '../assets/components/header'
import HomeLayout from './pageComponents/homeLayout';
import Parallax from '../assets/components/Parallax';
import ComingSoon from './pageComponents/comingSoon'
import ConstructionHeader from '../assets/components/constructionHeader'

export default function Home() {
  return (
        <>
        <Head>
          <title>Tuani</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <HomeLayout />
        {/* <ConstructionHeader />
      <ComingSoon /> */}
    </>
  )
}
