import Head from "next/head"

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Create Next App Bulma</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="section">
          <div className="container">
            <h1 className="title">Welcome to NextJS + Bulma</h1>
            <p className="subtitle">
              Get started by editing <code>index.tsx</code>!
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
