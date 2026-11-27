import React, { useEffect } from 'react';
import OtherServicesSlider from '../components/OtherServicesSlider';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './EmailMarketing.css';

export default function EmailMarketing() {
    const base = import.meta.env.BASE_URL || '/';
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="email-marketing-page">
            <Helmet>
                <title>Bulk Email Marketing Service in Noida &amp; Delhi NCR, India - Sociapa</title>
                <meta name="description" content="Sociapa is the best email marketing agency in Noida & Delhi NCR - Create, send, and analyse email marketing campaigns with ease.we can assist you in growing your email list and producing high-quality content that engages and converts your target audience." />
                <meta name="keywords" content="Digital Marketing" />
                <link rel="canonical" href="https://sociapa.com/email-marketing-services" />
                <meta property="og:title" content="Bulk Email Marketing Service in Noida & Delhi NCR, India - Sociapa" />
                <meta property="og:description" content="Sociapa is the best email marketing agency in Noida & Delhi NCR - Create, send, and analyse email marketing campaigns with ease.we can assist you in growing your email list and producing high-quality content that engages and converts your target audience." />
                <meta property="og:url" content="https://sociapa.com/email-marketing-services" />
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:site_name" content="SOCIAPA" />
                <meta property="og:image" content="https://sociapa.com/images/services/Email-Marketing.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@sociapa" />
                <meta name="twitter:title" content="Bulk Email Marketing Service in Noida & Delhi NCR, India - Sociapa" />
                <meta name="twitter:description" content="Sociapa is the best email marketing agency in Noida & Delhi NCR - Create, send, and analyse email marketing campaigns with ease.we can assist you in growing your email list and producing high-quality content that engages and converts your target audience." />
                <meta name="twitter:image" content="https://sociapa.com/images/services/Email-Marketing.jpg" />
            </Helmet>

            {/* Hero Banner Section */}
            <section className="hero-banner-section">
                <h1 style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: 0 }}>
                    Email Marketing That Drives Revenue - Sociapa
                </h1>
                <picture>
                    <img
                        src={`${base}assets/images/services_banner/email_market/email_marketing.webp`}
                        alt="Email Marketing That Drives Revenue - Sociapa"
                        className="hero-banner-img"
                        decoding="async"
                        width="1920"
                        height="700"
                        loading="eager"
                        fetchpriority="high"
                    />
                </picture>
            </section>

            {/* Premium Services Grid */}
            <section className="services-section">
                <div className="section-inner">
                    <div className="services-header">
                        <span className="section-tag">Why Email Marketing?</span>
                        <h2 className="section-title section-title-center">Engage Your Audience & Boost Conversions</h2>
                        <p className="section-sub section-sub-center">
                            Email marketing is an amazing advertising channel that utilizes email to advance your business' products or services. The idea of email showcasing is basic: you send a promotional message and trust that your possibility taps on it. However, the execution is considerably more perplexing. We ensure your messages are needed and effectively convert.
                        </p>
                    </div>

                    <div className="services-grid">
                        <div className="svc-card">
                            <div className="svc-icon">
                                <img
                                    src={`${base}assets/images/services_icons/email_marketing/Personalize the Message.png`}
                                    alt="Personalize the Message"
                                    width="60"
                                    height="60"
                                    style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                                    loading="lazy"
                                />
                            </div>
                            <h3>Personalize the Message</h3>
                            <p>Individualizes the content, both in the body and in the title. Personalizing the content depends on the group of people or person you are sending.</p>
                        </div>

                        <div className="svc-card">
                            <div className="svc-icon">
                                <img
                                    src={`${base}assets/images/services_icons/email_marketing/Low Costs.png`}
                                    alt="Low Costs"
                                    width="60"
                                    height="60"
                                    style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                                    loading="lazy"
                                />
                            </div>
                            <h3>Low Costs</h3>
                            <p>It costs low as compared to mainstream marketing channels. There are no extra charges and we can easily track, automate and evaluate their mails.</p>
                        </div>

                        <div className="svc-card">
                            <div className="svc-icon">
                                <img
                                    src={`${base}assets/images/services_icons/email_marketing/Reach Engaged Audience.png`}
                                    alt="Reach Engaged Audience"
                                    width="60"
                                    height="60"
                                    style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                                    loading="lazy"
                                />
                            </div>
                            <h3>Reach Engaged Audience</h3>
                            <p>It is the only channel that asks consumers to receive the mail or not, allowing you to message an audience who already has an interest in your brand.</p>
                        </div>

                        <div className="svc-card">
                            <div className="svc-icon">
                                <img
                                    src={`${base}assets/images/services_icons/email_marketing/Drive Revenue.png`}
                                    alt="Drive Revenue"
                                    width="60"
                                    height="60"
                                    style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                                    loading="lazy"
                                />
                            </div>
                            <h3>Drive Revenue</h3>
                            <p>Email marketing is great for taking advantage of impulse buying. With a tempting call to action and a link to checkout, it drives sales like no other channel.</p>
                        </div>

                        <div className="svc-card">
                            <div className="svc-icon">
                                <img
                                    src={`${base}assets/images/services_icons/email_marketing/Flexibility.png`}
                                    alt="Flexibility"
                                    width="60"
                                    height="60"
                                    style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                                    loading="lazy"
                                />
                            </div>
                            <h3>Flexibility</h3>
                            <p>Email Marketing offers the individuals subscribe/unsubscribe choice. It coordinates both conditional and promotional messages seamlessly.</p>
                        </div>

                        <div className="svc-card">
                            <div className="svc-icon">
                                <img
                                    src={`${base}assets/images/services_icons/email_marketing/Reach a Global Audience.png`}
                                    alt="Reach a Global Audience"
                                    width="60"
                                    height="60"
                                    style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                                    loading="lazy"
                                />
                            </div>
                            <h3>Reach a Global Audience</h3>
                            <p>Email marketing can instantly send a message to thousands of people amongst a global audience, scaling your reach rapidly.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Other Services Carousel */}
      <OtherServicesSlider />

      {/* Call to Action Section */}
            <section className="cta-section">
                <div className="section-inner">
                    <h2>Ready to Grow Your Email List?</h2>
                    <p>At Sociapa we offer expert email marketing services. We know exactly what it takes to provide quality content that engages and converts your target audience.</p>
                    <Link to="/contact-us" className="btn-primary">Request a Free Proposal</Link>
                </div>
            </section>
        </div>
    );
}
