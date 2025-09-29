export default function HomePage() {
  return (
    <div style={{ 
      padding: '20px', 
      textAlign: 'center',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
        📚 VocabWorld
      </h1>
      <p style={{ fontSize: '1.2rem', opacity: 0.9, marginBottom: '2rem' }}>
        AI Language Learning App
      </p>
      <p style={{ fontSize: '1rem', opacity: 0.8 }}>
        Ready for Capacitor iOS build!
      </p>
    </div>
  )
}