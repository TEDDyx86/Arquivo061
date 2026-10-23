import { ArrowUpRight } from 'lucide-react'

const embedUrl =
  'https://open.spotify.com/embed/playlist/5pbJ42jJ9g4GOxWt5VWNxF?utm_source=generator&theme=0'
const playlistUrl =
  'https://open.spotify.com/playlist/5pbJ42jJ9g4GOxWt5VWNxF?si=VQbk2HszRtGIAfePhJf1yA'

export function PlaylistSection() {
  return (
    <section aria-labelledby="playlist-title" className="playlist-section" id="trilha">
      <div className="playlist-topline">
        <span>ARQUIVO SONORO / 001</span>
        <span>CEILÂNDIA · DF</span>
      </div>
      <div className="playlist-layout">
        <div className="playlist-copy">
          <p className="section-label">SOM QUE ACOMPANHA AS PEÇAS</p>
          <h2 id="playlist-title">Trilha do<br /><em>arquivo.</em></h2>
          <p className="playlist-description">
            A identidade sonora que guia o ARQUIVO061. Escute a seleção musical que inspirou esta coleção.
          </p>
          <a className="playlist-link" href={playlistUrl} rel="noreferrer" target="_blank">
            Abrir playlist no Spotify <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
        <div className="playlist-frame-wrap">
          <iframe
            allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen
            height="352"
            loading="lazy"
            src={embedUrl}
            title="Playlist ARQUIVO061 no Spotify"
          />
        </div>
      </div>
    </section>
  )
}
