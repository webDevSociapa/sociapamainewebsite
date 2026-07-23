import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './Sitemap.css';

export default function Sitemap() {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <>
            <Helmet>
                <title>Sitemap | SOCIAPA</title>
                <meta name="description" content="Sociapa Sitemap" />
                <meta name="keywords" content="Sociapa" />
                <link rel="canonical" href="https://www.sociapa.com/sitemap" />
            </Helmet>
            <div className="legal-page-container sitemap-wrapper">
                <div className="container">
                    <h1 className="poppins-bold mb-5">Sitemap</h1>
                    <div className="sitemap">
                        <nav className="primaryNav">
                            <ul>
                                <li id="home">
                                    <Link className="black-text" to="/">
                                        <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGcgaWQ9ImhvbWUiPg0KCQk8cG9seWdvbiBwb2ludHM9IjIwNCw0NzEuNzUgMjA0LDMxOC43NSAzMDYsMzE4Ljc1IDMwNiw0NzEuNzUgNDMzLjUsNDcxLjc1IDQzMy41LDI2Ny43NSA1MTAsMjY3Ljc1IDI1NSwzOC4yNSAwLDI2Ny43NSANCgkJCTc2LjUsMjY3Ljc1IDc2LjUsNDcxLjc1IAkJIi8+DQoJPC9nPg0KPC9nPg0KPC9zdmc+DQo=" width="16" height="16" alt="homepage" /> 
                                        Home page
                                    </Link>
                                </li>
                                <li><Link className="black-text" to="/about">About Us</Link></li>
                                <li><Link className="black-text" to="/our-services">Services</Link></li>
                                <li><Link className="black-text" to="/best-digital-marketing-services-india">Digital Marketing</Link></li>
                                <li><Link className="black-text" to="/pay-per-click-ppc-services-india">Ad Experience</Link></li>
                                <li><Link className="black-text" to="/polygon">Polygon Ads</Link></li>
                                <li><Link className="black-text" to="/geofencing">Geofencing Ads</Link></li>
                                <li><Link className="black-text" to="/best-packaging-design-agency-india">Packaging and Design</Link></li>
                                <li><Link className="black-text" to="/best-social-media-marketing-agency-india">Social Media Marketing</Link></li>
                                <li><Link className="black-text" to="/influencer-marketing-services">Influencer Marketing</Link></li>
                                <li><Link className="black-text" to="/creative-designing">Creative Designing</Link></li>
                                <li><Link className="black-text" to="/influencers-marketplace">Influencer</Link></li>
                                <li><Link className="black-text" to="/blog">Blog</Link></li>
                                <li><Link className="black-text" to="/career">Career</Link></li>
                                <li><Link className="black-text" to="/best-creative-and-digital-agency-award">Awards</Link></li>
                                <li><Link className="black-text" to="/sociapas-press-release">Press Release</Link></li>
                                <li><Link className="black-text" to="/free-website-audit">Audit</Link></li>
                                <li><Link className="black-text" to="/stories">Stories</Link></li>
                                <li><Link className="black-text" to="/contact-us">Contact Us</Link></li>
                                <li><Link className="black-text" to="/privacy-policy">Privacy Policy</Link></li>
                                <li><Link className="black-text" to="/terms-condition">Terms &amp; Condition</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}
