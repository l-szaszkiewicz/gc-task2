import Head from 'next/head'
import FormWrapper from '../components/FormWrapper'

export default function Home() {
  return (
    <>
      <Head>
        <title>Wyceń projekt</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <h1>Wyceń projekt</h1>
        <h2>
          Zainteresowała Cię nasza oferta? Wypełnij krótki formularz, powiedz nam o swoich oczekiwaniach - przygotujemy ofertę dopasowaną do twoich wymagań
        </h2>
        <FormWrapper />
      </main>
    </>
  )
}
