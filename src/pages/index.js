import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <><center>FAMILIENTZAKO BABESA</center></>,
    imageUrl: 'img/casa.png',
    description: (
      <>
        <center>Babestu eta iragazi edukia haien adinerako desegokiak diren
        orrialde maltzurren bisitak saihestuz</center>
      </>
    ),
  },
  {
    title: <><center>IKASLEENTZAKO PENTSATUTA</center></>,
    imageUrl: 'img/audience.png',
    description: (
      <>
        <center>Hezkuntza-sektoreak eta familiek adingabeen Interneten 
        abigazioa kontrolatzeko hainbat eskakizunek sortua</center>
      </>
    ),
  },
  {
    title: <><center>SEGURTASUNA ZENTROAN</center></>,
    imageUrl: 'img/school.png',
    description: (
      <>
        <center>Irakasleek ikasle bakoitzaren nabigazioa eta gailuaren 
        erabileraren erabateko kontrola izango dute berehalako ekintzen bidez</center>
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Kirikiño Ikastola`}
      description="Kirikiño Ikastolako wikia, hemen aurkituko duzu IMTLazarus-aren informazioa.">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/hasiera')}>
              Klikatu hemen!
            </Link>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/comienzo')}>
              Haz click aquí!
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
