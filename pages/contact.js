import Header from '../components/header'
import Footer from '../components/footer'
import Head from 'next/head'


export default function Contact() {
    return (
        <body className="light">
        <div className="container">
      <Head>
        <title>Tuani</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="grid">
        <div className="contact">
          <p className="">Contact Me!</p>
        </div>
      </div>
        </div>

      <Footer />
        </body>
    )
}