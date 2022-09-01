import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <><center>Protección para las familias</center></>,
    imageUrl: 'img/casa.png',
    description: (
      <>
        <center>Proteja y filtre el contenido evitando que visiten páginas 
        maliciosas no aptas para su edad</center>
      </>
    ),
  },
  {
    title: <><center>Pensado para los alumnos</center></>,
    imageUrl: 'img/audience.png',
    description: (
      <>
        <center>Creado por una serie de demandas desde el sector educativo y 
        desde las familias para el control de la navegación en internet 
        realizada por los menores</center>
      </>
    ),
  },
  {
    title: <><center>Seguridad en el centro educativo</center></>,
    imageUrl: 'img/school.png',
    description: (
      <>
        <center>El profesorado tendrá el control absoluto de la navegación de cada 
        alumno y el uso del dispositivo mediante acciones inmediatas</center>
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
                'button button--outline button--success button--lg',
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
