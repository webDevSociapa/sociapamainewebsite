import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import './EmailMarketing.css';

export default function EmailMarketing() {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <>
            <Helmet>
                <title>Bulk Email Marketing Service in Noida &amp; Delhi NCR, India - Sociapa</title>
                <meta name="description" content="Sociapa is the best email marketing agency in Noida & Delhi NCR - Create, send, and analyse email marketing campaigns with ease.we can assist you in growing your email list and producing high-quality content that engages and converts your target audience." />
                <meta name="keywords" content="Digital Marketing" />
                <link rel="canonical" href="https://www.sociapa.com/email-marketing/" />
                <meta property="og:title" content="Bulk Email Marketing Service in Noida & Delhi NCR, India - Sociapa" />
                <meta property="og:description" content="Sociapa is the best email marketing agency in Noida & Delhi NCR - Create, send, and analyse email marketing campaigns with ease.we can assist you in growing your email list and producing high-quality content that engages and converts your target audience." />
                <meta property="og:url" content="https://www.sociapa.com/email-marketing/" />
            </Helmet>

            {/* Premium Hero Section */}
            <section className="emailmarketing-hero">
                <div className="emailmarketing-hero-inner">
                    <div className="section-tag emailmarketing-hero-tag">Email Automation & Strategy</div>
                    <h1>Email Marketing That <span>Drives Revenue</span></h1>
                    <p className="emailmarketing-hero-desc">
                        Unlock the power of direct marketing. We design, execute, and automate email campaigns that build relationships, nurture leads, and maximize your ROI.
                    </p>
                    <a href="#quote" className="btn-primary modal-trigger">Start Your Campaign</a>
                </div>
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
                            <div className="svc-icon">🎯</div>
                            <h3>Personalize the Message</h3>
                            <p>Individualizes the content, both in the body and in the title. Personalizing the content depends on the group of people or person you are sending.</p>
                        </div>
                        
                        <div className="svc-card">
                            <div className="svc-icon">💰</div>
                            <h3>Low Costs</h3>
                            <p>It costs low as compared to mainstream marketing channels. There are no extra charges and we can easily track, automate and evaluate their mails.</p>
                        </div>
                        
                        <div className="svc-card">
                            <div className="svc-icon">👥</div>
                            <h3>Reach Engaged Audience</h3>
                            <p>It is the only channel that asks consumers to receive the mail or not, allowing you to message an audience who already has an interest in your brand.</p>
                        </div>
                        
                        <div className="svc-card">
                            <div className="svc-icon">📈</div>
                            <h3>Drive Revenue</h3>
                            <p>Email marketing is great for taking advantage of impulse buying. With a tempting call to action and a link to checkout, it drives sales like no other channel.</p>
                        </div>
                        
                        <div className="svc-card">
                            <div className="svc-icon">⚙️</div>
                            <h3>Flexibility</h3>
                            <p>Email Marketing offers the individuals subscribe/unsubscribe choice. It coordinates both conditional and promotional messages seamlessly.</p>
                        </div>
                        
                        <div className="svc-card">
                            <div className="svc-icon">🌍</div>
                            <h3>Reach a Global Audience</h3>
                            <p>Email marketing can instantly send a message to thousands of people amongst a global audience, scaling your reach rapidly.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="cta-section">
                <div className="section-inner">
                    <h2>Ready to Grow Your Email List?</h2>
                    <p>At Sociapa we offer expert email marketing services. We know exactly what it takes to provide quality content that engages and converts your target audience.</p>
                    <a className="btn-primary modal-trigger" href="#queryModal">Request a Free Proposal</a>
                </div>
            </section>
        </>
    );
}
