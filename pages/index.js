import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, Marlon M. Tungol. I'm an IT student from University of the Assumption.</p>
      

        <ul>
          <li>I expect my teacher to provide me with the opportunity to learn and understand.</li>
          <li>I expect to learn a lot from the language <strong>Java</strong>.</li>
          <li>I expect to learn how to customize and upload websites.</li>
        </ul>

    
        <p>10 Things That Require Zero Talent:</p>
    <ul>
      <li>1. Being On Time.</li>
      <li>2. Making An Effort.</li>
      <li>3. Being High Energy.</li>
      <li>4. Having A Positive Attitude.</li>
      <li>5. Being Passionate.</li>
      <li>6. Using Good body Language.</li>
      <li>7. Being Caochable.</li>
      <li>8. Doing A Little Extra.</li>
      <li>9. Being Prepared.</li>
      <li>10. Having A Strong Work Ethic.</li>
  </ul>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
