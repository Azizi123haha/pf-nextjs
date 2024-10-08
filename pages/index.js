import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Head>
        <title>Azizi | Spotify Music</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        <link rel="stylesheet" href="https://nyimpen.vercel.app/component/spotfy.css" />
      </Head>
      <div className="container">
        <header>
          <img src="https://filezone.my.id/file/064fd84ba0209c96368e" alt="Profile Picture" className="profile-pic" />
          <h1 className="nama">Muhammad Ramdhan Azizi</h1>
          <p className="lokasi">
            <i className="fas fa-globe-asia"></i> Bogor, Jonggol
          </p>
          <p className="bio">”Sed contra, beatitudo non est finis, sed modus vivendi.  Frui omne iter te fac et crea pulchra memorias.”</p>
        </header>

        <section className="spotify-section">
          <h2>The Playlist I Listen To</h2>
          <div className="iframe-container">
            {loading && (
              <div className="loading">
                <i className="fas fa-spinner"></i>
              </div>
            )}
            <iframe
              src="https://open.spotify.com/embed/playlist/6E0ZFnk5ixqtyPMqL0MKlQ"
              frameBorder="0"
              allowTransparency="true"
              allow="encrypted-media"
              style={{ display: loading ? 'none' : 'block' }}
            ></iframe>
          </div>
        </section>

        <div className="social-icons">
          <a href="https://github.com/Azizi123haha" target="_blank" className="social-link" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://wa.me/6285778037775?text=hi+Azizi" target="_blank" className="social-link" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="https://instagram.com/aziziazzasgwy_" target="_blank" className="social-link" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://wa.me/6285778037775?text=hi+Azizi" target="_blank" className="social-link" rel="noopener noreferrer">
            <i className="fas fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </div>
    </>
  )
}
