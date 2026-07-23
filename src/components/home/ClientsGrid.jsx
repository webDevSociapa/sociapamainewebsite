import { useState, useMemo } from 'react'
import clientsData from '../../data/clients_full.json'

const CATEGORY_MAP = {
  'new-fmcg': 'FMCG/FMCD',
  'new-decor': 'DECOR',
  'services': 'SERVICES',
  'corporate': 'CORPORATE',
  'education': 'EDUCATION',
  'lifestyle': 'LIFESTYLE',
  'sports': 'SPORTS'
}

export default function ClientsGrid() {
  const [activeFilter, setActiveFilter] = useState('new-fmcg')
  const [isExpanded, setIsExpanded] = useState(false)
  const VISIBLE_COUNT = 10

  const filteredClients = useMemo(() => {
    return clientsData.filter(client => client.category === activeFilter)
  }, [activeFilter])

  const visibleClients = isExpanded ? filteredClients : filteredClients.slice(0, VISIBLE_COUNT)

  return (
    <section className="section section-pad bg-light" id="clients">
      <div className="container">
        
        <div className="section-title animate-on-scroll">
          <h2 className="text-red poppins-semibold mb-2 clients-title">
            Know Our <span className="text-black">Clients</span>
          </h2>
          <p className="mx-auto clients-desc">
            These are our giants, our strengthening bond is a testament to the success that we have helped them achieve. At sociapa we believe in modern marketing, creative ideas and big hearts.
          </p>
        </div>

        <div className="client-tabs-container animate-on-scroll delay-1">
          <div className="custom-tabs flex-wrap justify-center">
            {Object.entries(CATEGORY_MAP).map(([key, label]) => (
              <button
                key={key}
                className={`tab-btn ${activeFilter === key ? 'active' : ''}`}
                onClick={() => {
                  setActiveFilter(key)
                  setIsExpanded(false)
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="client-grid-wrapper mt-5 animate-on-scroll delay-2">
          <div className="fade-in-up clients-grid-flex">
            {visibleClients.map((client, i) => (
              <div key={i} className="client-card">
                <img src={client.image} alt="Client Logo" className="hover-scale client-card-img" loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>

        {filteredClients.length > VISIBLE_COUNT && (
          <div className="mt-5 clients-expand-wrap">
             <button className="btn btn-outline btn-large" onClick={() => setIsExpanded(!isExpanded)}>
               {isExpanded ? 'View Less' : 'View More'}
             </button>
          </div>
        )}

      </div>
    </section>
  )
}
