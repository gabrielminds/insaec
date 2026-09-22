import { useEffect, useRef, useState } from 'react'

import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'

import './App.css'

import heroPhoto from './assets/insaec/IMG_1130.webp'
import institutionHeroPhoto from './assets/insaec/IMG_1092.webp'
import vidaEscolarHeroPhoto from './assets/insaec/IMG_1088.webp'
import institutionAboutPhoto from './assets/insaec/2022-10-20(9).webp'
import studentsPhoto from './assets/insaec/Estudiantes-1.webp'
import proposalPhoto from './assets/insaec/2022-10-20(10).webp'
import contactPhoto from './assets/insaec/2022-10-20.webp'
import heroDivider from './assets/insaec/hero-organic-divider.svg'

import puzzle1 from './assets/insaec/puzzle-decorativo-1.svg'
import puzzle2 from './assets/insaec/puzzle-decorativo-2.svg'
import puzzle3 from './assets/insaec/puzzle-decorativo-3.svg'
import puzzle4 from './assets/insaec/puzzle-decorativo-4.svg'
import stemIcon from './assets/insaec/stem-icon.svg'
import roboticIcon from './assets/insaec/robotic-icon2.svg'
import inglesIcon from './assets/insaec/ingles-icon.svg'
import proyectIcon from './assets/insaec/proyect-icon.svg'
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}


const WHATSAPP_NUMBER = '593995473500'

function createWhatsAppLink(section: string) {
  const message =
    `Hola, quisiera recibir información sobre INSAEC. ` +
    `Llegué a través del sitio web de INSAEC, desde la sección ${section}.`

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

/* =========================================================
   HEADER
========================================================= */

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <Link
        to="/"
        className="brand"
        onClick={closeMenu}
      >
        <img
          src="/images/LOGO-PC.svg"
          alt="Educación Básica Integral INSAEC"
          className="brand-logo"
        />
      </Link>

      <button
        type="button"
        className="mobile-menu-button"
        aria-label={
          menuOpen
            ? 'Cerrar menú'
            : 'Abrir menú'
        }
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        onClick={() =>
          setMenuOpen((open) => !open)
        }
      >
        <span>
          {menuOpen ? '✕' : '☰'}
        </span>
      </button>

      <nav
        id="main-navigation"
        className={`main-nav ${
          menuOpen ? 'main-nav-open' : ''
        }`}
        aria-label="Navegación principal"
      >
        <Link
          to="/"
          onClick={closeMenu}
        >
          Inicio
        </Link>

        <Link
          to="/institucion"
          onClick={closeMenu}
        >
          Institución
        </Link>

        <Link
          to="/propuesta-educativa"
          onClick={closeMenu}
        >
          Propuesta Educativa
        </Link>

        <Link
          to="/vida-escolar"
          onClick={closeMenu}
        >
          Vida Escolar
        </Link>

        <Link
          to="/admisiones"
          onClick={closeMenu}
        >
          Admisiones
        </Link>

        <Link
          to="/contacto"
          onClick={closeMenu}
        >
          Contacto
        </Link>
      </nav>

      <a
        className="button button-primary header-contact-button"
        href={createWhatsAppLink(
          'el menú principal'
        )}
        target="_blank"
        rel="noreferrer"
        onClick={closeMenu}
      >
        Solicitar información
      </a>
    </header>
  )
}

/* =========================================================
   HOME
========================================================= */
/* =========================================================
   HOME
========================================================= */


function useRevealOnScroll<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      {
        threshold: 0.22,
        rootMargin: '0px 0px -10% 0px',
      },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

function Home() {
  const introReveal = useRevealOnScroll<HTMLElement>()
  const learningReveal = useRevealOnScroll<HTMLElement>()
  const proposalReveal = useRevealOnScroll<HTMLElement>()
  const philosophyReveal = useRevealOnScroll<HTMLElement>()
  const contactReveal = useRevealOnScroll<HTMLElement>()


  return (
    <main>

      {/* =====================================================
         HOME — SECCIÓN 01
         HERO
      ===================================================== */}

      <section className="hero">

        {/* CONTENIDO */}

        <div className="hero-content">

          <p className="eyebrow">
            Educación Básica Integral INSAEC
          </p>

          <h1>
            Educación para el futuro
          </h1>

          <p className="hero-text">
            Formamos niños y niñas con conocimientos,
            valores y habilidades para afrontar los
            desafíos del futuro.
          </p>

          <div className="hero-actions">

            <a
              className="button button-primary hero-button-primary"
              href={createWhatsAppLink('Inicio - Hero')}
              target="_blank"
              rel="noreferrer"
            >
              Solicitar información
            </a>

            <Link
              className="button button-secondary hero-button-secondary"
              to="/propuesta-educativa"
            >
              Conocer nuestra propuesta
            </Link>

          </div>

          {/* MENSAJE INFERIOR */}

          <div className="hero-bottom-message">

            <img
              src={puzzle1}
              alt=""
              aria-hidden="true"
            />

            <span className="hero-bottom-line" />

            <p>
              Cada pieza cuenta
              <br />
              en su gran historia
            </p>

          </div>

        </div>

        {/* ÁREA FOTOGRÁFICA */}

        <div className="hero-visual">

          <img
            src={heroPhoto}
            alt="Niños y niñas de INSAEC"
            className="hero-photo"
          />

          <img
            src={heroDivider}
            alt=""
            aria-hidden="true"
            className="hero-divider"
          />

          {/* PIEZA SUPERIOR */}

          <img
            src={puzzle2}
            alt=""
            aria-hidden="true"
            className="hero-decoration hero-decoration-top"
          />

          {/* PIEZA INFERIOR */}

          <img
            src={puzzle3}
            alt=""
            aria-hidden="true"
            className="hero-decoration hero-decoration-bottom"
          />

        </div>

      </section>


      {/* =====================================================
         HOME — SECCIÓN 02
         UNA EDUCACIÓN QUE ACOMPAÑA
      ===================================================== */}

      <section
        ref={introReveal.ref}
        className={`intro-section ${
          introReveal.isVisible ? 'is-visible' : ''
        }`}
      >

        <div className="intro-layout">

          <div className="intro-content">

            <p className="intro-eyebrow">
              UNA EDUCACIÓN QUE ACOMPAÑA
            </p>

            <h2 className="intro-title">
              Aprender,
              crecer y descubrir.
            </h2>

            <p className="intro-lead">
              En INSAEC combinamos conocimientos,
              valores, habilidades socioemocionales
              y competencias tecnológicas para
              acompañar el desarrollo integral
              de cada estudiante.
            </p>

          </div>

          <div className="intro-visual">

            <img
              src={studentsPhoto}
              alt="Estudiantes de INSAEC durante una actividad educativa"
              className="intro-photo"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
         HOME — SECCIÓN 03
         APRENDER HACIENDO
      ===================================================== */}

      <section
        ref={learningReveal.ref}
        className={`learning-section ${
          learningReveal.isVisible ? 'is-visible' : ''
        }`}
      >

        <div className="learning-section-inner">

          <div className="learning-section-header">

            <p className="learning-eyebrow">
              NUESTRA PROPUESTA EDUCATIVA
            </p>

            <h2 className="learning-title">
              Aprender haciendo.
            </h2>

            <p className="learning-intro">
              Exploramos, creamos y experimentamos para convertir
              cada aprendizaje en una experiencia significativa.
            </p>

          </div>

          <div className="learning-grid">

            <article className="learning-card">

              <span className="learning-number">
                01
              </span>
              <img
              src={stemIcon}
              alt=""
              className="learning-icon"
              />

              <h3>
                STEAM
              </h3>

              <p>
                Integramos ciencia, tecnología, ingeniería,
                arte y matemáticas en experiencias de aprendizaje.
              </p>

            </article>

            <article className="learning-card">

              <span className="learning-number">
                02
              </span>
              <img
              src={roboticIcon}
              alt=""
              className="learning-icon"
              /> 
              <h3>
                Robótica y programación
              </h3>

              <p>
                Desarrollamos creatividad, pensamiento lógico
                y resolución de problemas mediante la tecnología.
              </p>

            </article>

            <article className="learning-card">

              <span className="learning-number">
                03
              </span>
              <img
                src={inglesIcon}
                alt=""
                className="learning-icon"
                />
              <h3>
                Inglés
              </h3>

              <p>
                El aprendizaje del idioma inglés forma parte
                de nuestra propuesta desde edades tempranas.
              </p>

            </article>

            <article className="learning-card">

              <span className="learning-number">
                04
              </span>
              <img
                src={proyectIcon}
                alt=""
                className="learning-icon"
              />
              <h3>
                Proyectos
              </h3>

              <p>
                Investigamos, colaboramos y transformamos
                ideas en experiencias de aprendizaje.
              </p>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
         HOME — SECCIÓN 04
         NUESTRA PROPUESTA EDUCATIVA
      ===================================================== */}

      <section
        ref={proposalReveal.ref}
        className={`proposal-section ${
          proposalReveal.isVisible ? 'is-visible' : ''
        }`}
      >

        <div className="proposal-section-inner">

          <div className="proposal-copy">

            <p className="proposal-eyebrow">
              NUESTRA PROPUESTA EDUCATIVA
            </p>

            <h2 className="proposal-title">
              Aprender para el futuro.
            </h2>

            <p className="proposal-intro">
              En INSAEC promovemos una educación integral que combina
              conocimientos, valores, innovación y experiencias de
              aprendizaje para acompañar el desarrollo de cada estudiante.
            </p>

            <div className="proposal-levels">

              <article className="proposal-level">
                <span className="proposal-level-number">01</span>
                <div>
                  <h3>Educación Inicial</h3>
                  <p>
                    Estimulación temprana, desarrollo psicomotor y juego
                    como estrategia de aprendizaje para acompañar los
                    primeros descubrimientos.
                  </p>
                </div>
              </article>

              <article className="proposal-level">
                <span className="proposal-level-number">02</span>
                <div>
                  <h3>Educación General Básica</h3>
                  <p>
                    Desarrollo de competencias académicas, pensamiento
                    crítico, creatividad, valores y habilidades para la vida.
                  </p>
                </div>
              </article>

            </div>

          </div>

          <div className="proposal-visual">

            <div className="proposal-photo-frame">
              <img
                src={proposalPhoto}
                alt="Estudiantes de INSAEC durante una actividad educativa"
                className="proposal-photo"
              />
            </div>

            <img
              src={puzzle2}
              alt=""
              aria-hidden="true"
              className="proposal-decoration proposal-decoration-top"
            />

            <img
              src={puzzle4}
              alt=""
              aria-hidden="true"
              className="proposal-decoration proposal-decoration-bottom"
            />

            <img
              src={puzzle1}
              alt=""
              aria-hidden="true"
              className="proposal-decoration proposal-decoration-side"
            />

          </div>

        </div>

      </section>

                  {/* =====================================================
         HOME — SECCIÓN 05
         NUESTRA FILOSOFÍA
      ===================================================== */}

      <section
        ref={philosophyReveal.ref}
        className={`philosophy-section ${
          philosophyReveal.isVisible ? 'is-visible' : ''
        }`}
      >

        <div className="philosophy-section-inner">

          {/* CONTENIDO */}

          <div className="philosophy-copy">

            <p className="philosophy-eyebrow">
              NUESTRA FILOSOFÍA
            </p>

            <h2 className="philosophy-title">
              Cada niño tiene
              <br />
              una pieza única.
            </h2>

            <p className="philosophy-intro">
              Cada estudiante tiene talentos, capacidades y formas
              de aprender que lo hacen único. En INSAEC acompañamos
              ese proceso con respeto, innovación y afecto.
            </p>

            <div className="philosophy-closing">

              <p className="philosophy-closing-lead">
                Educar es mucho más que transmitir conocimientos.
              </p>

              <p className="philosophy-closing-text">
                Formamos personas capaces de transformar
                positivamente su mundo.
              </p>

            </div>

          </div>


          {/* PIEZAS DECORATIVAS */}

          <div className="philosophy-visual">

            <img
              src={puzzle1}
              alt=""
              aria-hidden="true"
              className="philosophy-decoration philosophy-decoration-one"
            />

            <img
              src={puzzle2}
              alt=""
              aria-hidden="true"
              className="philosophy-decoration philosophy-decoration-two"
            />

            <img
              src={puzzle3}
              alt=""
              aria-hidden="true"
              className="philosophy-decoration philosophy-decoration-three"
            />

            <img
              src={puzzle4}
              alt=""
              aria-hidden="true"
              className="philosophy-decoration philosophy-decoration-four"
            />

          </div>

        </div>

      </section>
            {/* =====================================================
         HOME — SECCIÓN 06
         UBICACIÓN Y CONTACTO
      ===================================================== */}

      <section
  ref={contactReveal.ref}
  className={`contact-section ${
    contactReveal.isVisible ? 'is-visible' : ''
  }`}
>

        <div className="contact-section-inner">

          <div className="contact-copy">

            <p className="contact-eyebrow">
              UBICACIÓN Y CONTACTO
            </p>

            <h2 className="contact-title">
              Estamos cerca
              <br />
              de tu familia.
            </h2>

            <p className="contact-intro">
              Queremos acompañarte en el proceso de conocer
              nuestra propuesta educativa y resolver tus
              inquietudes.
            </p>

            <div className="contact-details">

              <div className="contact-detail">

                <span className="contact-detail-label">
                  VISÍTANOS
                </span>

                <p>
                  Madroños N47-219
                  <br />
                  y Av. el Inca
                  <br />
                  Quito, Ecuador
                </p>

              </div>

              <div className="contact-detail">

                <span className="contact-detail-label">
                  ESCRÍBENOS
                </span>

                <p>
                  <a
                    href={createWhatsAppLink(
                      'Ubicación y contacto'
                    )}
                    target="_blank"
                    rel="noreferrer"
                  >
                    099 547 3500
                  </a>
                  <br />

                  <a href="mailto:edusamahel_ec@hotmail.com">
                    edusamahel_ec@hotmail.com
                  </a>
                </p>

              </div>

            </div>

            <div className="contact-actions">

              <a
                className="button button-primary"
                href={createWhatsAppLink(
                  'Ubicación y contacto'
                )}
                target="_blank"
                rel="noreferrer"
              >
                Solicitar información
              </a>

              <a
                
  className="button button-secondary"
  href="https://maps.app.goo.gl/xUFQNWHEaf5nG33C8"
  target="_blank"
  rel="noreferrer"
>
  Ver ubicación

              </a>

            </div>

          </div>


          <div className="contact-visual">

            <div className="contact-location-card">

              <div className="contact-location-card">

  <img
    src={contactPhoto}
    alt="Estudiantes de INSAEC"
    className="contact-location-photo"
  />

  <div className="contact-location-overlay">

  <span className="contact-location-marker">
    INSAEC
  </span>

</div>

</div>

              <div className="contact-location-lines">

                <span />
                <span />
                <span />

              </div>

              <div className="contact-location-address">

                <strong>
                  Educación Básica
                  <br />
                  Integral INSAEC
                </strong>

                <p>
                  Madroños N47-219
                  <br />
                  y Av. el Inca
                </p>

              </div>

            </div>

            <img
              src={puzzle1}
              alt=""
              aria-hidden="true"
              className="contact-decoration contact-decoration-one"
            />

            <img
              src={puzzle4}
              alt=""
              aria-hidden="true"
              className="contact-decoration contact-decoration-two"
            />

          </div>

        </div>

      </section>

    </main>
  )
}
function Footer() {
  return (
    <footer className="site-footer">

      <div className="site-footer-inner">

        <div className="site-footer-brand">

          <Link
            to="/"
            className="site-footer-logo"
          >
            INSAEC
          </Link>

          <p className="site-footer-tagline">
            Educamos para el Futuro.
          </p>

        </div>

        <div className="site-footer-column">

          <h3>
            Navegación
          </h3>

          <nav className="site-footer-nav">

            <Link to="/">
              Inicio
            </Link>

            <Link to="/institucion">
              Institución
            </Link>

            <Link to="/propuesta-educativa">
              Propuesta Educativa
            </Link>

            <Link to="/vida-escolar">
              Vida Escolar
            </Link>

            <Link to="/admisiones">
              Admisiones
            </Link>

            <Link to="/contacto">
              Contacto
            </Link>

          </nav>

        </div>

        <div className="site-footer-column">

          <h3>
            Contacto
          </h3>

          <address className="site-footer-contact">

            <span>
              Madroños N47-219
              <br />
              y Av. el Inca
            </span>

            <a
              href={createWhatsAppLink('Footer')}
              target="_blank"
              rel="noreferrer"
            >
              099 547 3500
            </a>

            <a href="mailto:edusamahel_ec@hotmail.com">
              edusamahel_ec@hotmail.com
            </a>

          </address>

        </div>

        <div className="site-footer-column">

          <h3>
            Conversemos
          </h3>

          <p className="site-footer-message">
            Conoce nuestra propuesta educativa
            y descubre cómo podemos acompañar
            a tu familia.
          </p>

          <a
            className="site-footer-whatsapp"
            href={createWhatsAppLink('Footer')}
            target="_blank"
            rel="noreferrer"
          >
            Solicitar información
          </a>

          <a
            className="site-footer-facebook"
            href="https://www.facebook.com/insaecschool"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>

        </div>

      </div>

      <div className="site-footer-bottom">

        <p>
          © {new Date().getFullYear()} Educación Básica Integral INSAEC.
          Todos los derechos reservados.
        </p>

      </div>

    </footer>
  )
}
/* =========================================================
   HERO DE PÁGINAS INTERNAS
========================================================= */

function InnerHero({
  eyebrow,
  title,
  image,
  puzzle,
}: {
  eyebrow: string
  title: string
  image: string
  puzzle: string
}) {
  return (
    <section className="inner-hero">

      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="inner-hero-image"
      />

      <div
        className="inner-hero-overlay"
        aria-hidden="true"
      />

      <div className="inner-hero-content">

        <p className="inner-hero-eyebrow">
          {eyebrow}
        </p>

        <h1>
          {title}
        </h1>

      </div>

      <img
        src={puzzle}
        alt=""
        aria-hidden="true"
        className="inner-hero-puzzle"
      />

    </section>
  )
}

/* =========================================================
   PÁGINAS INTERNAS
========================================================= */

function InstitutionPage() {
  return (
    <main>

      <InnerHero
        eyebrow="Educación Básica Integral INSAEC"
        title="Institución"
        image={institutionHeroPhoto}
        puzzle={puzzle4}
      />

      {/* =====================================================
          QUIÉNES SOMOS
          ===================================================== */}

      <section className="institution-about-section">

        <div className="institution-about-inner">

          <div className="institution-about-copy">

            <img
              src={puzzle2}
              alt=""
              aria-hidden="true"
              className="institution-about-copy-puzzle institution-about-copy-puzzle-one"
            />

            <img
              src={puzzle4}
              alt=""
              aria-hidden="true"
              className="institution-about-copy-puzzle institution-about-copy-puzzle-two"
            />

            <p className="eyebrow">
              QUIÉNES SOMOS
            </p>

            <h2>
              Una educación que forma
              <br />
              para la vida.
            </h2>

            <p className="institution-about-intro">
              En INSAEC creemos en una educación integral que
              combina conocimiento, valores, desarrollo humano
              y habilidades para enfrentar los desafíos del futuro.
            </p>

            <p className="institution-about-text">
              Nuestra propuesta busca acompañar a cada estudiante
              de manera cercana, promoviendo el aprendizaje
              significativo, la innovación pedagógica y el desarrollo
              de sus capacidades.
            </p>

          </div>

          <div className="institution-about-visual">

            <div className="institution-about-photo">
              <img
                src={institutionAboutPhoto}
                alt="Estudiantes de INSAEC durante una actividad escolar"
              />
            </div>

            <div className="institution-about-highlight">
              <span>INSAEC</span>

              <strong>
                Conocimiento,
                <br />
                valores y
                <br />
                desarrollo humano.
              </strong>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          NUESTRA IDENTIDAD
          ===================================================== */}

      <section className="institution-identity-section">

        <div className="institution-identity-inner">

          <div className="institution-identity-heading">

            <p className="eyebrow">
              NUESTRA IDENTIDAD
            </p>

            <h2>
              Una institución que
              <br />
              educa para el futuro.
            </h2>

          </div>

          <div className="institution-identity-grid">

            <article className="institution-identity-card institution-identity-card-mission">

              <span className="institution-identity-number">
                01
              </span>

              <h3>
                Nuestra Misión
              </h3>

              <p>
                Ofrecer formación personalizada basada en el aprendizaje
                significativo, la metodología STEAM, la robótica educativa
                y el inglés desde edades tempranas.
              </p>

            </article>

            <article className="institution-identity-card institution-identity-card-vision">

              <span className="institution-identity-number">
                02
              </span>

              <h3>
                Nuestra Visión
              </h3>

              <p>
                Ser una institución líder en educación integral reconocida
                por la calidad de sus procesos pedagógicos, innovación
                educativa y formación de ciudadanos capaces de transformar
                positivamente su comunidad.
              </p>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          NUESTRA FILOSOFÍA
          ===================================================== */}

      <section className="institution-philosophy-section">

        <div className="institution-philosophy-inner">

          <div className="institution-philosophy-copy">

            <p className="eyebrow">
              NUESTRA FILOSOFÍA
            </p>

            <h2>
              Cada niño tiene
              <br />
              una pieza única.
            </h2>

            <p className="institution-philosophy-intro">
              En INSAEC creemos que cada niño posee talentos únicos.
              Nuestro propósito es descubrirlos, fortalecerlos y
              acompañarlos para que alcancen su máximo potencial.
            </p>

            <p className="institution-philosophy-text">
              Educamos en un ambiente de respeto, innovación y afecto,
              entendiendo que formar no consiste únicamente en enseñar
              contenidos, sino en acompañar a personas capaces de
              transformar el mundo con conocimiento, valores y compromiso.
            </p>

          </div>

          <div className="institution-philosophy-visual">

            <div className="institution-philosophy-piece institution-philosophy-piece-one">

              <img
                src={puzzle1}
                alt=""
                aria-hidden="true"
              />

            </div>

            <div className="institution-philosophy-piece institution-philosophy-piece-two">

              <img
                src={puzzle2}
                alt=""
                aria-hidden="true"
              />

            </div>

            <div className="institution-philosophy-piece institution-philosophy-piece-three">

              <img
                src={puzzle4}
                alt=""
                aria-hidden="true"
              />

            </div>

            <div className="institution-philosophy-message">

              <span>
                EDUCAR
              </span>

              <strong>
                Descubrir.
                <br />
                Fortalecer.
                <br />
                Acompañar.
              </strong>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONOZCAMOS INSAEC
          ===================================================== */}

      <section className="institution-contact-section">

        <div className="institution-contact-inner">

          <div className="institution-contact-copy">

            <p className="eyebrow">
              CONOZCAMOS INSAEC
            </p>

            <h2>
              Una educación
              <br />
              pensada para crecer.
            </h2>

            <p className="institution-contact-intro">
              Estamos en el norte de Quito, acompañando a familias que
              buscan una educación integral, cercana y orientada al futuro.
            </p>

            <a
              href={createWhatsAppLink('Institución')}
              target="_blank"
              rel="noreferrer"
              className="institution-contact-button"
            >
              Solicitar información
            </a>

          </div>

          <div className="institution-contact-location">

            <div className="institution-contact-location-card">

              <span>
                VISÍTANOS
              </span>

              <h3>
                INSAEC
              </h3>

              <p>
                Madroños N47-219
                <br />
                y Av. El Inca
                <br />
                Quito, Ecuador
              </p>

              <a
                href="https://maps.app.goo.gl/Dxnzi13VR5GwgDGA6"
                target="_blank"
                rel="noreferrer"
                className="institution-contact-map-link"
              >
                Ver ubicación
              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}
function VidaEscolarPage() {
  return (
    <main>

      {/* =====================================================
          1. HERO
      ===================================================== */}

      <InnerHero
  eyebrow="Educación Básica Integral INSAEC"
  title="Vida Escolar"
  image={vidaEscolarHeroPhoto}
  puzzle={puzzle2}
/>


      {/* =====================================================
          2. VIVIMOS EL APRENDIZAJE
      ===================================================== */}

      <section className="vida-escolar-learning-section">

        <div className="vida-escolar-learning-inner">

          <div className="vida-escolar-learning-copy">

            <p className="eyebrow">
              VIVIMOS EL APRENDIZAJE
            </p>

            <h2>
              Aprender también es
              <br />
              descubrir.
            </h2>

            <p>
              La vida escolar en INSAEC se construye a través
              de experiencias que permiten aprender, convivir,
              explorar y desarrollar nuevas habilidades.
            </p>

            <p>
              Cada actividad forma parte de un proceso educativo
              cercano, donde el acompañamiento y la participación
              ayudan a nuestros estudiantes a crecer.
            </p>

          </div>

          <div className="vida-escolar-learning-visual">

            <div className="vida-escolar-learning-photo">

              <img
                src={studentsPhoto}
                alt="Estudiantes de INSAEC compartiendo una actividad escolar"
              />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          3. MOMENTOS QUE FORMAN PARTE DE NUESTRA HISTORIA
      ===================================================== */}

      <section className="vida-escolar-gallery-section">

        <div className="vida-escolar-gallery-inner">

          <div className="vida-escolar-gallery-heading">

            <p className="eyebrow">
              MOMENTOS QUE FORMAN PARTE DE NUESTRA HISTORIA
            </p>

            <h2>
              Cada experiencia
              <br />
              deja una huella.
            </h2>

          </div>

          <div className="vida-escolar-gallery-grid">

            <div className="vida-escolar-gallery-main">

              <img
                src={vidaEscolarHeroPhoto}
                alt="Actividad escolar de estudiantes de INSAEC"
              />

            </div>

            <div className="vida-escolar-gallery-secondary">

              <img
                src={institutionAboutPhoto}
                alt="Estudiantes de INSAEC durante una experiencia educativa"
              />

            </div>

            <div className="vida-escolar-gallery-tertiary">

              <img
                src={proposalPhoto}
                alt="Experiencia educativa en INSAEC"
              />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          4. MÁS ALLÁ DEL AULA
      ===================================================== */}

      <section className="vida-escolar-beyond-section">
  <div className="vida-escolar-beyond-inner">

    <div className="vida-escolar-beyond-visual">
      <div className="vida-escolar-beyond-photo vida-escolar-beyond-photo-one">
        <img
          src={contactPhoto}
          alt="Estudiantes de INSAEC participando en una actividad escolar"
        />
      </div>

      <div className="vida-escolar-beyond-photo vida-escolar-beyond-photo-two">
        <img
          src={vidaEscolarHeroPhoto}
          alt="Experiencia escolar de estudiantes de INSAEC"
        />
      </div>

      <img
        src={puzzle3}
        alt=""
        aria-hidden="true"
        className="vida-escolar-beyond-puzzle"
      />
    </div>

    <div className="vida-escolar-beyond-copy">
      <p className="eyebrow">
        MÁS ALLÁ DEL AULA
      </p>

      <h2>
        Cada experiencia
        <br />
        también forma parte
        <br />
        del aprendizaje.
      </h2>

      <p>
        El juego, el movimiento, la música, la convivencia
        y las actividades compartidas enriquecen la experiencia
        escolar y ayudan a nuestros estudiantes a desarrollar
        habilidades para la vida.
      </p>

      <a
        href={createWhatsAppLink('Vida Escolar')}
        target="_blank"
        rel="noreferrer"
        className="button button-primary"
      >
        Solicitar información
      </a>
    </div>

  </div>
</section>

    </main>
  )
}
function AdmisionesPage() {
  return (
    <main>

      <InnerHero
        eyebrow="Educación Básica Integral INSAEC"
        title="Admisiones"
        image={vidaEscolarHeroPhoto}
        puzzle={puzzle3}
      />

      <section className="admisiones-intro-section">
        <div className="admisiones-intro-inner">

          <div className="admisiones-intro-copy">
            <p className="eyebrow">
              ACOMPAÑAMOS A CADA FAMILIA
            </p>

            <h2>
              Un proceso pensado
              <br />
              para las familias.
            </h2>

            <p>
              En INSAEC acompañamos a las familias durante cada etapa
              del proceso de admisión, brindando información clara y
              cercana para que puedan conocer nuestra propuesta
              educativa y tomar el siguiente paso.
            </p>

            <a
              href={createWhatsAppLink('Admisiones')}
              target="_blank"
              rel="noreferrer"
              className="button button-primary"
            >
              Solicitar información
            </a>
          </div>

          <div className="admisiones-intro-visual">
            <div className="admisiones-intro-photo">
              <img
                src={institutionAboutPhoto}
                alt="Experiencia educativa de INSAEC"
              />
            </div>

            <img
              src={puzzle1}
              alt=""
              aria-hidden="true"
              className="admisiones-intro-puzzle"
            />
          </div>

        </div>
      </section>

      <section className="admisiones-process-section">
        <div className="admisiones-process-inner">

          <div className="admisiones-process-heading">
            <p className="eyebrow">
              NUESTRO PROCESO
            </p>

            <h2>
              Un camino claro
              <br />
              para comenzar.
            </h2>

            <p>
              Queremos que cada familia conozca el proceso de admisión
              de manera sencilla y pueda avanzar con el acompañamiento
              de nuestra institución.
            </p>
          </div>

          <div className="admisiones-process-grid">

            <article className="admisiones-process-step">
              <span>01</span>
              <h3>Solicitud de información</h3>
              <p>
                Primer contacto para conocer nuestra institución,
                propuesta educativa y proceso de admisión.
              </p>
            </article>

            <article className="admisiones-process-step">
              <span>02</span>
              <h3>Visita guiada</h3>
              <p>
                Un espacio para conocer nuestras instalaciones
                y resolver las inquietudes de la familia.
              </p>
            </article>

            <article className="admisiones-process-step">
              <span>03</span>
              <h3>Entrevista familiar</h3>
              <p>
                Un encuentro para conocer a la familia y acompañar
                de manera cercana el proceso de admisión.
              </p>
            </article>

            <article className="admisiones-process-step">
              <span>04</span>
              <h3>Evaluación diagnóstica</h3>
              <p>
                Cuando corresponda, se realiza una evaluación
                diagnóstica como parte del proceso.
              </p>
            </article>

            <article className="admisiones-process-step">
              <span>05</span>
              <h3>Documentación</h3>
              <p>
                Presentación de la documentación requerida
                para continuar con el proceso.
              </p>
            </article>

            <article className="admisiones-process-step">
              <span>06</span>
              <h3>Matrícula</h3>
              <p>
                Culminación del proceso de admisión
                e incorporación a la institución.
              </p>
            </article>

          </div>

        </div>
      </section>

      <section className="admisiones-closing-section">
        <div className="admisiones-closing-inner">

          <div className="admisiones-closing-visual">
            <div className="admisiones-closing-photo">
              <img
                src={contactPhoto}
                alt="Comunidad educativa de INSAEC"
              />
            </div>

            <img
              src={puzzle4}
              alt=""
              aria-hidden="true"
              className="admisiones-closing-puzzle"
            />
          </div>

          <div className="admisiones-closing-copy">
            <p className="eyebrow">
              ESTAMOS PARA ACOMPAÑARTE
            </p>

            <h2>
              El primer paso
              <br />
              también forma parte
              <br />
              del aprendizaje.
            </h2>

            <p>
              Estamos aquí para acompañarte, resolver tus inquietudes
              y brindarte la información que necesitas para conocer INSAEC.
            </p>

            <a
              href={createWhatsAppLink('Admisiones')}
              target="_blank"
              rel="noreferrer"
              className="button button-primary"
            >
              Solicitar información
            </a>
          </div>

        </div>
      </section>

    </main>
  )
}

function ContactoPage() {
  return (
    <main>

      <InnerHero
        eyebrow="Educación Básica Integral INSAEC"
        title="Contacto"
        image={contactPhoto}
        puzzle={puzzle4}
      />

      <section className="contacto-intro-section">
        <div className="contacto-intro-inner">

          <div className="contacto-intro-copy">

            <p className="eyebrow">
              ESTAMOS PARA ATENDERTE
            </p>

            <h2>
              Estamos aquí
              <br />
              para acompañarte.
            </h2>

            <p>
              Si deseas conocer nuestra propuesta educativa,
              visitar la institución o recibir información sobre
              el proceso de admisión, estaremos encantados de atenderte.
            </p>

            <div className="contacto-details">

              <div className="contacto-detail">
                <span className="contacto-detail-label">
                  TELÉFONO
                </span>
                <a href={createWhatsAppLink('Contacto')}>
                  099 547 3500
                </a>
              </div>

              <div className="contacto-detail">
                <span className="contacto-detail-label">
                  CORREO ELECTRÓNICO
                </span>
                <a href="mailto:edusamahel_ec@hotmail.com">
                  edusamahel_ec@hotmail.com
                </a>
              </div>

              <div className="contacto-detail">
                <span className="contacto-detail-label">
                  DIRECCIÓN
                </span>
                <p>
                  Madroños N47-219 y Av. El Inca
                  <br />
                  Quito, Ecuador
                </p>
              </div>

            </div>

            <a
              href={createWhatsAppLink('Contacto')}
              target="_blank"
              rel="noreferrer"
              className="button button-primary"
            >
              Escribir por WhatsApp
            </a>

          </div>

          <div className="contacto-intro-visual">

            <div className="contacto-intro-photo">
              <img
                src={contactPhoto}
                alt="Comunidad educativa de INSAEC"
              />
            </div>

            <img
              src={puzzle2}
              alt=""
              aria-hidden="true"
              className="contacto-intro-puzzle"
            />

          </div>

        </div>
      </section>

      <section className="contacto-map-section">
        <div className="contacto-map-inner">

          <div className="contacto-map-heading">

            <p className="eyebrow">
              ENCUÉNTRANOS
            </p>

            <h2>
              Estamos en
              <br />
              Quito.
            </h2>

            <p>
              Visítanos en nuestra institución y conoce de cerca
              el espacio donde acompañamos el aprendizaje de
              nuestros estudiantes.
            </p>

            <div className="contacto-map-address">
              <strong>
                Educación Básica Integral INSAEC
              </strong>

              <span>
                Madroños N47-219 y Av. El Inca
              </span>

              <span>
                Quito, Ecuador
              </span>
            </div>

            <a
              href="https://maps.app.goo.gl/yMsNVAjH9gMkfYZ5A"
              target="_blank"
              rel="noreferrer"
              className="button button-secondary"
            >
              Cómo llegar
            </a>

          </div>

          <div className="contacto-map-frame">

            <iframe
              src="https://www.google.com/maps?q=-0.1523299,-78.4704919&z=17&output=embed"
              title="Ubicación de INSAEC en Quito"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>

        </div>
      </section>

      <section className="contacto-closing-section">
        <div className="contacto-closing-inner">

          <div className="contacto-closing-copy">

            <p className="eyebrow">
              HABLEMOS
            </p>

            <h2>
              El primer paso
              <br />
              comienza con
              <br />
              una conversación.
            </h2>

            <p>
              Estamos listos para responder tus preguntas
              y ayudarte a conocer mejor INSAEC.
            </p>

            <a
              href={createWhatsAppLink('Contacto')}
              target="_blank"
              rel="noreferrer"
              className="button button-primary"
            >
              Solicitar información
            </a>

          </div>

          <div className="contacto-closing-visual">
            <img
              src={puzzle4}
              alt=""
              aria-hidden="true"
              className="contacto-closing-puzzle"
            />
          </div>

        </div>
      </section>

    </main>
  )
}

function PropuestaEducativaPage() {
  return (
    <main>

      <InnerHero
        eyebrow="Educación Básica Integral INSAEC"
        title="Aprender, descubrir y desarrollar nuevas habilidades."
        image={proposalPhoto}
        puzzle={puzzle1}
      />

      <section className="propuesta-intro-section">
        <div className="propuesta-intro-inner">

          <div className="propuesta-intro-copy">

            <p className="eyebrow">
              NUESTRA PROPUESTA EDUCATIVA
            </p>

            <h2>
              Una educación
              <br />
              pensada para el futuro.
            </h2>

            <p>
              En INSAEC desarrollamos una formación personalizada
              que combina conocimientos, valores, innovación y
              experiencias de aprendizaje para acompañar el desarrollo
              integral de cada estudiante.
            </p>

            <p>
              Buscamos que nuestros estudiantes aprendan de manera
              significativa, desarrollen nuevas habilidades y encuentren
              herramientas para enfrentar los desafíos de su entorno.
            </p>

          </div>

          <div className="propuesta-intro-visual">

            <div className="propuesta-intro-photo">
              <img
                src={proposalPhoto}
                alt="Experiencia educativa de INSAEC"
              />
            </div>

            <img
              src={puzzle2}
              alt=""
              aria-hidden="true"
              className="propuesta-intro-puzzle"
            />

          </div>

        </div>
      </section>

      <section className="propuesta-learning-section">
        <div className="propuesta-learning-inner">

          <div className="propuesta-learning-heading">

            <p className="eyebrow">
              CÓMO APRENDEMOS
            </p>

            <h2>
              Aprender haciendo.
            </h2>

            <p>
              Integramos diferentes experiencias y metodologías
              para convertir el aprendizaje en una experiencia
              activa, significativa y cercana.
            </p>

          </div>

          <div className="propuesta-learning-grid">

            <article className="propuesta-learning-card">
              <span>01</span>
              <img src={stemIcon} alt="" aria-hidden="true" />
              <h3>STEAM</h3>
              <p>
                Integramos ciencia, tecnología, ingeniería,
                arte y matemáticas en experiencias de aprendizaje.
              </p>
            </article>

            <article className="propuesta-learning-card">
              <span>02</span>
              <img src={roboticIcon} alt="" aria-hidden="true" />
              <h3>Robótica y programación</h3>
              <p>
                Desarrollamos creatividad, pensamiento lógico
                y resolución de problemas mediante la tecnología.
              </p>
            </article>

            <article className="propuesta-learning-card">
              <span>03</span>
              <img src={inglesIcon} alt="" aria-hidden="true" />
              <h3>Inglés</h3>
              <p>
                El aprendizaje del idioma inglés forma parte
                de nuestra propuesta desde edades tempranas.
              </p>
            </article>

            <article className="propuesta-learning-card">
              <span>04</span>
              <img src={proyectIcon} alt="" aria-hidden="true" />
              <h3>Aprendizaje basado en proyectos</h3>
              <p>
                Investigamos, colaboramos y transformamos
                ideas en experiencias de aprendizaje.
              </p>
            </article>

          </div>

        </div>
      </section>

      <section className="propuesta-integral-section">
        <div className="propuesta-integral-inner">

          <div className="propuesta-integral-heading">

            <p className="eyebrow">
              FORMACIÓN INTEGRAL
            </p>

            <h2>
              Aprender también
              <br />
              es crecer.
            </h2>

            <p>
              Nuestra propuesta va más allá de los contenidos
              académicos. Acompañamos el desarrollo de habilidades,
              valores y competencias que forman parte de la vida.
            </p>

          </div>

          <div className="propuesta-integral-grid">

            <article className="propuesta-integral-card">
              <span>01</span>
              <h3>Cultura digital</h3>
              <p>
                Desarrollamos competencias para utilizar la tecnología
                de manera responsable y creativa.
              </p>
            </article>

            <article className="propuesta-integral-card">
              <span>02</span>
              <h3>Educación emocional</h3>
              <p>
                Fortalecemos habilidades socioemocionales y una
                convivencia basada en el respeto y la empatía.
              </p>
            </article>

            <article className="propuesta-integral-card">
              <span>03</span>
              <h3>Pensamiento crítico</h3>
              <p>
                Promovemos la capacidad de analizar, cuestionar,
                crear y buscar soluciones.
              </p>
            </article>

            <article className="propuesta-integral-card">
              <span>04</span>
              <h3>Educación ambiental</h3>
              <p>
                Fomentamos una relación responsable con el entorno
                y el desarrollo de una conciencia ambiental.
              </p>
            </article>

            <article className="propuesta-integral-card">
              <span>05</span>
              <h3>Habilidades para la vida</h3>
              <p>
                Acompañamos el desarrollo de competencias que ayudan
                a nuestros estudiantes a desenvolverse en diferentes contextos.
              </p>
            </article>

            <article className="propuesta-integral-card">
              <span>06</span>
              <h3>Valores y convivencia</h3>
              <p>
                Fortalecemos el respeto, la responsabilidad, la solidaridad
                y el trabajo en equipo como parte de la formación integral.
              </p>
            </article>

          </div>

        </div>
      </section>

      <section className="propuesta-closing-section">
        <div className="propuesta-closing-inner">

          <div className="propuesta-closing-copy">

            <p className="eyebrow">
              EDUCACIÓN PARA EL FUTURO
            </p>

            <h2>
              Cada aprendizaje
              <br />
              es una nueva pieza.
            </h2>

            <p>
              Conoce nuestra propuesta educativa y descubre
              cómo acompañamos el crecimiento de nuestros estudiantes.
            </p>

            <a
              href={createWhatsAppLink('Propuesta Educativa')}
              target="_blank"
              rel="noreferrer"
              className="button button-primary"
            >
              Solicitar información
            </a>

          </div>

          <div className="propuesta-closing-visual">
            <img
              src={puzzle3}
              alt=""
              aria-hidden="true"
              className="propuesta-closing-puzzle"
            />
          </div>

        </div>
      </section>

    </main>
  )
}

function App() {
  return (
    <BrowserRouter>

      <div className="site">

        <Header />
<ScrollToTop />
        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
  path="/institucion"
  element={<InstitutionPage />}
/>

          <Route
            path="/propuesta-educativa"
            element={<PropuestaEducativaPage />}
          />

          <Route
  path="/vida-escolar"
  element={<VidaEscolarPage />}
/>

          <Route
            path="/admisiones"
            element={<AdmisionesPage />}
          />

          <Route
            path="/contacto"
            element={<ContactoPage />}
          />

              </Routes>

        <Footer />

      </div>

    </BrowserRouter>
  )
}

export default App