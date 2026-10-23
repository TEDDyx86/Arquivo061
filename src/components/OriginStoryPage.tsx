import { ArrowLeft } from 'lucide-react'

export function OriginStoryPage() {
  return (
    <div className="origin-page">
      <header className="origin-header">
        <a className="origin-wordmark" href="/" aria-label="ARQUIVO061 — voltar à loja">
          ARQUIVO<span>061</span>
        </a>
        <a className="origin-back" href="/">
          <ArrowLeft size={16} aria-hidden="true" /> Voltar à loja
        </a>
      </header>

      <main>
        <section className="origin-opening" aria-labelledby="origin-title">
          <p className="origin-location">CEILÂNDIA, DISTRITO FEDERAL <span>·</span> CÓDIGO 061</p>
          <h1 id="origin-title">Como tudo<br /><em>começou</em></h1>
          <div className="origin-opening-copy">
            <p>
              E a moda lá sempre refletiu essa vivência. Na Ceilândia, moda nunca foi sobre a etiqueta cara do shopping, é sobre demarcar território. É a modelagem mais larga para ter liberdade no corre e no skate, o moletom pesado para aguentar o vento frio da madrugada no ponto do BRT, o tênis impecável. A rua dita o que é estilo, e não a passarela.
            </p>
            <p>
              O retalho que compõe o seu casaco "Satélite" veio exatamente daí: garimpado de uma pequena confecção no P Sul. Ele tem a gramagem pesada e a textura de quem foi feito para durar. O que a grande indústria ia jogar no lixo, virou streetwear de verdade.
            </p>
          </div>
        </section>

        <section className="origin-pioneer" aria-labelledby="pioneer-title">
          <figure className="origin-portrait">
            <img src="/assets/brand/gog.jpg" alt="Retrato do rapper GOG, Genival Oliveira Gonçalves" loading="lazy" />
            <figcaption>GOG · GENIVAL OLIVEIRA GONÇALVES</figcaption>
          </figure>
          <div className="origin-pioneer-copy">
            <p className="origin-section-label">O PIONEIRO</p>
            <h2 id="pioneer-title">A voz: <em>GOG</em><br />o pioneiro de rap do DF</h2>
            <p>
              Não tem como falar de Ceilândia e de cultura de rua sem falar de GOG (Genival Oliveira Gonçalves). Nos anos 90, enquanto o Brasil inteiro só associava o DF a políticos de terno e gravata, ele pegou o microfone e mostrou a realidade de quem morava nas satélites.
            </p>
            <p>
              O som dele é o documento de quem vive a correria. E o caimento oversized do seu casaco não é só uma tendência, é uma homenagem direta à cultura Hip Hop que ele ajudou a consolidar nas ruas da cidade. Você não comprou só uma roupa de frio, você destrancou um pedaço da nossa história.
            </p>
          </div>
        </section>
      </main>

      <footer className="origin-footer">
        <span>ARQUIVO061 · CEILÂNDIA / DF</span>
        <a href="/"><ArrowLeft size={15} aria-hidden="true" /> Voltar à loja</a>
      </footer>
    </div>
  )
}
