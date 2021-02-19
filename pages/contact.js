import ContactLayout from '../pages/pageComponents/contactLayout'
import Head from 'next/head'

export default function Contact() {
  return (
    <body className="light">
      <div className="container">
        <Head>
          <title>Tuani</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
          <ContactLayout />
      </div>
    </body>
  )
}
