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

// Map image filenames to display names
const IMAGE_NAME_MAP = {
  'figma_nutrela.png': 'NUTRELA',
  'figma_nutrela_nutrition.png': 'NUTRELA NUTRITION',
  'figma_nutrela_sports.png': 'NUTRELA SPORTS',
  'figma_madhusudan.png': 'MADHUSUDAN',
  'figma_apis.png': 'APIS',
  'figma_house_of_veda.png': 'HOUSE OF VEDA',
  'figma_la_americana.png': 'LA AMERICANA GOURMET',
  'figma_americana.png': 'AMERICANA',
  'nutrela-clt.png': 'NUTRELA',
  'nutrela-logo.png': 'NUTRELA NUTRITION',
  'pat-Sports.png': 'NUTRELA SPORTS',
  'madhusudan.png': 'MADHUSUDAN',
  'apisClt.png': 'APIS',
  'bonnClt.png': 'BONN',
  'houseVeda200.png': 'HOUSE OF VEDA',
  'laClt.png': 'LA AMERICANA GOURMET',
  'AmericanaLogo.png': 'AMERICANA',
  'pansari200.png': 'PANSARI GROUP',
  'pansari-epicure.png': 'PANSARI EPICURE',
  'waiwaiLogo.png': 'WAI WAI',
  'proquest.png': 'PROQUEST',
  'mahakClt.png': 'MAHAK',
  'mintClt.png': 'MINT',
  'tatva-logo.png': 'TATVA',
  'Kesari-Logo.png': 'KESARI',
  'Gyan.png': 'GYAN',
  'Kruti.png': 'KRUTI',
  'Zone.png': 'ZONE',
  'trdpmario-Logo.png': 'TRDP MARIO',
  '9am-Logo.png': '9AM',
  'Nambisan.png': 'NAMBISAN',
  'myday200.png': 'MY DAY',
  'Nature-pearls.png': 'NATURE PEARLS',
  'Star-rice.png': 'STAR RICE',
  'moofarmClint.png': 'MOOFARM',
  'Alishan.png': 'ALISHAN',
  'Chancellor.png': 'CHANCELLOR',
  'kapilClt.png': 'KAPIL',
  'himo-logo.png': 'HIMO',
  'moospring.png': 'MOOSPRING',
  'Nongshim.png': 'NONGSHIM',
  'Kachi-Rasoi.png': 'KACHI RASOI',
  'Barsana-Magic.png': 'BARSANA MAGIC',
  'bicano.png': 'BICANO',
  'ozone.png': 'OZONE',
  'luxor.png': 'LUXOR',
  'snackpure-logo.png': 'SNACK PURE',
  'crown-rice-logo.png': 'CROWN RICE',
  'jass-meami-logo.png': 'JASS MEAMI',
  'jetklin-logo.png': 'JETKLIN',
  'skyrrup-logo.png': 'SKYRRUP',
  'sanjeevani-logo.png': 'SANJEEVANI',
  'twc-logo.png': 'TWC',
  'sun-stellar.png': 'SUN STELLAR',
  'unnati-logo.png': 'UNNATI',
  'habitat-nlogo.png': 'HABITAT',
  'cash-gold-logo.png': 'CASH GOLD',
  'V-Pure.png': 'V-PURE',
  'fackellmenn.png': 'FACKELLMENN',
  'gyandhara-logo.png': 'GYANDHARA',
  'tupperware-logo.png': 'TUPPERWARE',
  'ketan-logo.png': 'KETAN',
  'tClt.png': 'TBOSTON',
  'bakerClt.png': 'BAKER',
  'MobiliaLogo.png': 'MOBILIA',
  'itx.png': 'ITX',
  'kashmirWadi200.png': 'KASHMIR WADI',
  'sudrive.png': 'SUDRIVE',
  'bis.png': 'BIS',
  'PH-logo.png': 'PH',
  'm-plus.png': 'M-PLUS',
  'cnc.png': 'CNC',
  'TTB.png': 'TTB',
  'Wello.png': 'WELLO',
  'modicare-logo.png': 'MODICARE',
  'apnaklub-Logo.png': 'APNA KLUB',
  'Hero.png': 'HERO',
  'coatee-logo.png': 'COATEE',
  'jubilant-logo.png': 'JUBILANT',
  'cg-corp-logo.png': 'CG CORP',
  'vanesa.png': 'VANESA',
  'dsis.png': 'DSIS',
  'motherPride.png': 'MOTHER PRIDE',
  'gyan-heritage-logo.png': 'GYAN HERITAGE',
  'epsLogo.png': 'EPS',
  'frenchEssense.png': 'FRENCH ESSENCE',
  'fabally.png': 'FABALLY',
  'indya.png': 'INDYA',
  'Sebum.png': 'SEBUM',
  'pankhclothing.jpg': 'PANKH CLOTHING',
  'threadvibe.png': 'THREADVIBE',
  'prismara-logo.png': 'PRISMARA',
  'tennishub.png': 'TENNIS HUB',
}

function getClientName(imagePath) {
  const filename = imagePath.split('/').pop()
  return IMAGE_NAME_MAP[filename] || filename.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ').toUpperCase()
}

export default function ClientsGrid() {
  const [activeFilter, setActiveFilter] = useState('new-fmcg')
  const [isExpanded, setIsExpanded] = useState(false)
  const VISIBLE_COUNT = 8

  const filteredClients = useMemo(() => {
    return clientsData.filter(client => client.category === activeFilter)
  }, [activeFilter])

  const visibleClients = isExpanded ? filteredClients : filteredClients.slice(0, VISIBLE_COUNT)

  return (
    <section className="clients-section-figma" id="clients">
      <div className="container">

        {/* Header Row */}
        <div className="clients-header-row animate-on-scroll">
          <h2 className="clients-heading-fig">KNOW OUR CLIENTS</h2>
          {filteredClients.length > VISIBLE_COUNT ? (
            <button
              type="button"
              className="clients-view-more-link"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? 'View less' : 'View more'} <span className="clients-arrow">{isExpanded ? '↑' : '→'}</span>
            </button>
          ) : (
            <button
              type="button"
              className="clients-view-more-link"
              onClick={() => {
                setActiveFilter('new-fmcg')
                setIsExpanded(true)
              }}
            >
              View all clients <span className="clients-arrow">→</span>
            </button>
          )}
        </div>

        {/* Description */}
        <p className="clients-desc-fig animate-on-scroll">
          These are our giants, our strengthening bond is a testament to the success that we have helped them achieve. At sociapa we believe in modern marketing, creative ideas and big hearts.
        </p>

        {/* Category Tabs - plain underline style */}
        <div className="clients-tabs-fig-wrap animate-on-scroll delay-1">
          <div className="clients-tabs-fig">
            {Object.entries(CATEGORY_MAP).map(([key, label]) => (
              <button
                key={key}
                type="button"
                className={`clients-tab-fig-btn${activeFilter === key ? ' active' : ''}`}
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

        {/* Grid - table style */}
        <div className="clients-grid-fig animate-on-scroll delay-2">
          {visibleClients.map((client, i) => (
            <div key={i} className="client-cell-fig">
              <span className="client-cell-name">{getClientName(client.image)}</span>
              <div className="client-cell-logo">
                <img
                  src={`${import.meta.env.BASE_URL}${client.image}`}
                  alt={getClientName(client.image)}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom View More / View Less button */}
        {filteredClients.length > VISIBLE_COUNT && (
          <div className="clients-expand-wrap-fig">
            <button
              type="button"
              className="clients-viewmore-btn"
              onClick={() => {
                const nextState = !isExpanded
                setIsExpanded(nextState)
                if (!nextState) {
                  const el = document.getElementById('clients')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              {isExpanded ? 'View Less ↑' : `View More (${filteredClients.length - VISIBLE_COUNT} More Clients) ↓`}
            </button>
          </div>
        )}

      </div>
    </section>
  )
}
