import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Familientzako Babesa</>,
    imageUrl: 'img/casa.png',
    description: (
      <>
        Babestu eta iragazi edukia haien adinerako egokiak ez diren 
        orrialde gaiztoak bisitatzea eragotziz.
      </>
    ),
  },
  {
    title: <>Ikasleentzako Pentsatuta</>,
    imageUrl: 'img/audience.png',
    description: (
      <>
        Hezkuntza-sektoreak eta familiek adingabeek Interneten 
        nabigazioa kontrolatzeko hainbat eskakizunek bultzatuta sortu zen.
      </>
    ),
  },
  {
    title: <>Segurtasuna Hezkuntza Zentroan</>,
    imageUrl: 'img/school.png',
    description: (
      <>
        Irakasleak ikasle bakoitzaren nabigazioaren eta gailuaren 
        erabileraren kontrol osoa izango du berehalako ekintzen bidez.
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
      description="Description will go into a meta tag in <head />">
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
