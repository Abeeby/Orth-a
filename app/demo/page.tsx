'use client'

export default function DemoPage() {
  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#FAFAF8', // porcelain
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    header: {
      backgroundColor: 'white',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      padding: '20px'
    },
    hero: {
      backgroundColor: '#2A6041', // jade
      color: '#FAFAF8',
      padding: '80px 20px',
      textAlign: 'center' as const
    },
    title: {
      fontSize: '48px',
      marginBottom: '20px',
      fontWeight: 'bold'
    },
    section: {
      padding: '60px 20px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    card: {
      backgroundColor: 'white',
      padding: '30px',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      marginBottom: '20px'
    },
    button: {
      backgroundColor: '#E3B23C', // gold
      color: '#1C1C1C', // ink
      padding: '12px 30px',
      borderRadius: '30px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: '500',
      marginRight: '10px'
    }
  }

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
            <div style={{width: '40px', height: '40px', backgroundColor: '#2A6041', borderRadius: '50%'}}></div>
            <span style={{fontSize: '24px', fontWeight: 'bold', color: '#1C1C1C'}}>Orthéa</span>
          </div>
          <nav style={{display: 'flex', gap: '30px'}}>
            <a href="/boutique" style={{color: '#1C1C1C', textDecoration: 'none'}}>Boutique</a>
            <a href="/a-propos" style={{color: '#1C1C1C', textDecoration: 'none'}}>À Propos</a>
            <a href="/blog" style={{color: '#1C1C1C', textDecoration: 'none'}}>Blog</a>
            <a href="/contact" style={{color: '#1C1C1C', textDecoration: 'none'}}>Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section style={styles.hero}>
        <h1 style={styles.title}>L'Orient rencontre la Suisse</h1>
        <p style={{fontSize: '20px', marginBottom: '30px'}}>
          Découvrez l'excellence du thé oriental sublimée par la précision suisse.
        </p>
        <button style={styles.button}>Découvrir la Collection</button>
        <button style={{...styles.button, backgroundColor: 'transparent', border: '2px solid #FAFAF8', color: '#FAFAF8'}}>
          Notre Histoire
        </button>
      </section>

      {/* Content */}
      <section style={styles.section}>
        <h2 style={{fontSize: '36px', marginBottom: '40px', textAlign: 'center', color: '#1C1C1C'}}>
          Nos Collections Signatures
        </h2>
        
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px'}}>
          <div style={styles.card}>
            <div style={{width: '80px', height: '80px', backgroundColor: '#2A6041', borderRadius: '50%', margin: '0 auto 20px'}}>
              <span style={{fontSize: '40px', display: 'block', textAlign: 'center', lineHeight: '80px'}}>🌅</span>
            </div>
            <h3 style={{fontSize: '24px', marginBottom: '10px', color: '#2A6041'}}>Collection Éveil</h3>
            <p style={{color: '#666'}}>Des thés énergisants pour commencer la journée avec sérénité et vitalité</p>
          </div>
          
          <div style={styles.card}>
            <div style={{width: '80px', height: '80px', backgroundColor: '#E3B23C', borderRadius: '50%', margin: '0 auto 20px'}}>
              <span style={{fontSize: '40px', display: 'block', textAlign: 'center', lineHeight: '80px'}}>🧘</span>
            </div>
            <h3 style={{fontSize: '24px', marginBottom: '10px', color: '#E3B23C'}}>Collection Zen</h3>
            <p style={{color: '#666'}}>L'équilibre parfait entre concentration et relaxation pour votre journée</p>
          </div>
          
          <div style={styles.card}>
            <div style={{width: '80px', height: '80px', backgroundColor: '#E8D5D0', borderRadius: '50%', margin: '0 auto 20px'}}>
              <span style={{fontSize: '40px', display: 'block', textAlign: 'center', lineHeight: '80px'}}>🌙</span>
            </div>
            <h3 style={{fontSize: '24px', marginBottom: '10px', color: '#E8D5D0'}}>Collection Sérénité</h3>
            <p style={{color: '#666'}}>Des infusions apaisantes pour clôturer votre journée en douceur</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{backgroundColor: '#1C1C1C', color: '#FAFAF8', padding: '40px 20px', textAlign: 'center'}}>
        <p>&copy; 2024 Orthéa. Tous droits réservés. Fait avec ❤️ en Suisse.</p>
      </footer>
    </div>
  )
} 