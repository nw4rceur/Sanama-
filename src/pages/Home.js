import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Home.css';

const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const [isLoading, setIsLoading] = useState(true);

    // Projets de rénovation
    const projects = [
        {
            id: 1,
            title: "Projet 1 ",
            category: "Rénovation Complète",
            image: "/projet_1.jpg",
            description: "..."
        },
        {
            id: 2,
            title: "Projet 2",
            category: "Cuisine",
            image: "/projet_2.jpg",
            description: "..."
        },
        {
            id: 3,
            title: "Projet 3",
            category: "Salle de Bain",
            image: "/projet_3.jpg",
            description: "..."
        },
        {
            id: 4,
            title: "Projet 4",
            category: "Rénovation Complète",
            image: "/projet_4.jpg",
            description: "..."
        }
    ];

    // Services proposés avec images au lieu d'icônes
    const services = [
        {
            id: 1,
            title: "Service 1",
            image: "/api/placeholder/300/200",
            description: "..."
        },
        {
            id: 2,
            title: "Service 1",
            image: "/api/placeholder/300/200",
            description: "..."
        },
        {
            id: 3,
            title: "Service 3",
            image: "/api/placeholder/300/200",
            description: "..."
        },
    ];

    // Étapes du processus
    const process = [
        {
            id: 1,
            title: "Consultation",
            description: "Première prise de contact pour comprendre vos besoins et vos goûts."
        },
        {
            id: 3,
            title: "Devis Détaillé",
            description: "Proposition commerciale transparente et sans surprise."
        },
        {
            id: 4,
            title: "Réalisation",
            description: "Mise en œuvre par nos artisans qualifiés avec suivi rigoureux."
        }
    ];

    // Effet de chargement
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    }, []);

    // Effet pour détecter la section active au scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['hero', 'projects', 'services', 'process', 'contact'];

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Navigation smooth scroll
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth'
            });
            setIsMenuOpen(false);
        }
    };

    if (isLoading) {
        return (
            <div className="loading-screen">
                <div className="loader">
                    <div className="logo">SANAMA RENOV'</div>
                    <div className="spinner"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="site-container">
            {/* Navigation - maintenant fixée en haut et alignée à droite */}
            <header className={`site-header fixed ${isMenuOpen ? 'menu-open' : ''}`}>
                <div className="header-content">
                    <div className="logo" onClick={() => scrollToSection('hero')}>
                        SANAMA RENOV'
                    </div>
                    <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
                        <ul>
                            <li className={activeSection === 'hero' ? 'active' : ''}>
                                <a onClick={() => scrollToSection('hero')}>Accueil</a>
                            </li>
                            <li className={activeSection === 'projects' ? 'active' : ''}>
                                <a onClick={() => scrollToSection('projects')}>Réalisations</a>
                            </li>
                            <li className={activeSection === 'services' ? 'active' : ''}>
                                <a onClick={() => scrollToSection('services')}>Services</a>
                            </li>
                            <li className={activeSection === 'process' ? 'active' : ''}>
                                <a onClick={() => scrollToSection('process')}>Notre Processus</a>
                            </li>
                            <li className={activeSection === 'contact' ? 'active' : ''}>
                                <a onClick={() => scrollToSection('contact')}>Contact</a>
                            </li>
                        </ul>
                    </nav>
                    <div className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </header>

            <main>
                {/* Hero Section avec logo ajouté à droite */}
                <section id="hero" className="hero-section">
                    <div className="hero-content">
                        <h1 className="reveal-text">
                            <span>La résine </span>
                            <span>qui donne du style</span>
                            <span>à vos sols ! </span>
                        </h1>
                        <p className="subtitle reveal-text-delay">
                            Finitions brillantes, mates ou marbrées
                        </p>
                        <div className="hero-buttons">
                            <button className="primary-button" onClick={() => scrollToSection('projects')}>
                                Découvrir nos réalisations
                            </button>
                            <button className="outline-button" onClick={() => scrollToSection('contact')}>
                                Nous contacter
                            </button>
                        </div>
                    </div>
                    <div className="hero-logo">
                        <img src="/sanama_renov.png" alt="Logo SANAMA RENOV'"/>
                    </div>
                    <div className="scroll-indicator" onClick={() => scrollToSection('projects')}>
                        <span>Découvrir</span>
                        <div className="arrow-down"></div>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="projects-section">
                    <div className="section-heading">
                        <h2>Nos réalisations</h2>
                        <p>Des projets qui témoignent de notre expertise et de notre engagement</p>
                    </div>
                    <div className="projects-grid">
                        {projects.map((project) => (
                            <div className="project-card" key={project.id}>
                                <div className="project-image">
                                    <img src={project.image} alt={project.title} />
                                    <div className="project-overlay">
                                        <span className="project-category">{project.category}</span>
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                        <button className="view-project-button">Voir le projet</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="section-cta">
                    </div>
                </section>

                {/* Services Section - blocs centrés avec images au lieu d'icônes */}
                <section id="services" className="services-section">
                    <div className="section-heading">
                        <h2>Nos services</h2>
                        <p>Des solutions complètes pour tous vos projets de rénovation</p>
                    </div>
                    <div className="services-grid centered">
                        {services.map((service) => (
                            <div className="service-card" key={service.id}>
                                <div className="service-image">
                                    <img src={service.image} alt={service.title} />
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <button className="tertiary-button">En savoir plus</button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Process Section */}
                <section id="process" className="process-section">
                    <div className="section-heading">
                        <h2>Notre processus</h2>
                        <p>Une approche structurée pour une rénovation sans stress</p>
                    </div>
                    <div className="process-timeline">
                        {process.map((step, index) => (
                            <div className="process-step" key={step.id}>
                                <div className="step-number">{index + 1}</div>
                                <div className="step-content">
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </div>
                                {index < process.length - 1 && <div className="step-connector"></div>}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="testimonials-section">
                    <div className="section-heading">
                        <h2>Ce que disent nos clients</h2>
                        <p>La satisfaction client est notre priorité absolue</p>
                    </div>
                    <div className="testimonials-slider">
                        <div className="testimonial-card">
                            <div className="quote-icon">"</div>
                            <p className="testimonial-text">
                                Merci la zone
                            </p>
                            <div className="testimonial-author">
                                <div className="author-info">
                                    <h4>L2'🏴</h4>
                                    <p>Rénovation sol</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="contact-section">
                    <div className="contact-content">
                        <div className="contact-info">
                            <div className="section-heading">
                                <h2>Contactez-nous</h2>
                                <p>Discutons de votre projet de rénovation</p>
                            </div>
                            <div className="contact-details">
                                <div className="contact-item">
                                    <div className="contact-icon">📍</div>
                                    <div>
                                        <h3>Adresse</h3>
                                        <p>Votre adresse</p>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <div className="contact-icon">📞</div>
                                    <div>
                                        <h3>Téléphone</h3>
                                        <p>Votre numéro</p>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <div className="contact-icon">✉️</div>
                                    <div>
                                        <h3>Email</h3>
                                        <p>contact@sanamarenov.fr</p>
                                    </div>
                                </div>
                            </div>
                            <div className="social-links">
                                <a href="https://www.instagram.com/sanama_renov/"  // Remplacez par l'URL de votre compte
                                   className="social-icon"
                                   target="_blank"  // Ouvre le lien dans un nouvel onglet
                                   rel="noopener noreferrer" // Pour des raisons de sécurité avec target="_blank"
                                >
                                    <FontAwesomeIcon icon={faInstagram} size="lg" />  {/* Taille de l'icône */}
                                </a>
                            </div>
                        </div>
                        <div className="contact-form">
                            <h3>Envoyez-nous un message</h3>
                            <form>
                                <div className="form-group">
                                    <input type="text" placeholder="Nom" required />
                                </div>
                                <div className="form-group">
                                    <input type="email" placeholder="Email" required />
                                </div>
                                <div className="form-group">
                                    <input type="tel" placeholder="Téléphone" />
                                </div>
                                <div className="form-group">
                                    <textarea placeholder="Votre message" rows="4" required></textarea>
                                </div>
                                <button type="submit" className="primary-button">Envoyer</button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="site-footer">
                <div className="footer-content">
                    <div className="footer-logo">
                        SANAMA RENOV'
                    </div>
                    <div className="footer-links">
                        <div className="footer-col">
                            <h4>Navigation</h4>
                            <ul>
                                <li><a onClick={() => scrollToSection('hero')}>Accueil</a></li>
                                <li><a onClick={() => scrollToSection('projects')}>Réalisations</a></li>
                                <li><a onClick={() => scrollToSection('services')}>Services</a></li>
                                <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Services</h4>
                            <ul>
                                <li><a href="#">Service 1</a></li>
                                <li><a href="#">Service 2</a></li>
                                <li><a href="#">Service 3</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Contact</h4>
                            <ul>
                                <li>Votre numéro</li>
                                <li>contact@sanamarenov.fr</li>
                                <li>Votre adresse</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2025 SANAMA RENOV' - Site réalisé par <a href="https://www.beyond31.fr">Beyond31</a></p>
                    <p><a href="#">Mentions légales</a> | <a href="#">Politique de confidentialité</a></p>
                </div>
            </footer>
        </div>
    );
};

export default Home;