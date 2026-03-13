import './App.css'

const agenda = [
  {
    time: '12:00',
    emoji: '👋',
    title: 'Velkommen & Introduksjon',
    description: 'Hvem er vi, hva gjør vi i dag, og hvorfor AI er en game-changer for WordPress-arbeid.',
    duration: '15 min',
    color: 'purple',
  },
  {
    time: '12:15',
    emoji: '🤖',
    title: 'Claude & Claude Code — Hva er det?',
    description: 'Kort innføring i verktøyene: Claude som AI-assistent, Claude Code som din smarte kodekompis i terminalen.',
    duration: '20 min',
    color: 'blue',
  },
  {
    time: '12:35',
    emoji: '🌐',
    title: 'Demo: WordPress med AI',
    description: 'Live demo — vi ber Claude om å analysere et tema, skrive innhold og justere CSS.',
    duration: '25 min',
    color: 'teal',
  },
  {
    time: '13:00',
    emoji: '🛠️',
    title: 'Hands-on: Din første prompt',
    description: 'Alle prøver selv! Skriv en prompt som hjelper Claude med en ekte WordPress-oppgave du har.',
    duration: '30 min',
    color: 'green',
  },
  {
    time: '13:30',
    emoji: '☕',
    title: 'Pause',
    description: 'Kaffe, te og snacks — og prat om det du nettopp oppdaget.',
    duration: '15 min',
    color: 'orange',
    isPause: true,
  },
  {
    time: '13:45',
    emoji: '⚡',
    title: 'Agents & Tools — Neste nivå',
    description: 'Hvordan gir du Claude tilgang til nettet, filer og APIer? Vi ser på agenter som løser oppgaver på egenhånd.',
    duration: '25 min',
    color: 'pink',
  },
  {
    time: '14:10',
    emoji: '🚀',
    title: 'Brukstilfeller for WordPress-byrå',
    description: 'Generere innhold, SEO-tekster, debugge temakode, kunderapporter — vi lager en personlig jukselapp sammen.',
    duration: '25 min',
    color: 'indigo',
  },
  {
    time: '14:35',
    emoji: '💬',
    title: 'Spørsmål & Åpen diskusjon',
    description: 'Spørsmål, tips & triks, og hvordan tar du dette med deg til jobben i morgen.',
    duration: '20 min',
    color: 'red',
  },
  {
    time: '14:55',
    emoji: '🎉',
    title: 'Avslutning',
    description: 'Ressurser, lenker og en stor klem. Vi ses neste gang!',
    duration: '5 min',
    color: 'yellow',
    isLast: true,
  },
]

const pills = ['Claude', 'Claude Code', 'WordPress', 'AI Agents', 'Hands-on', 'Norsk']

export default function App() {
  return (
    <div className="page">
      <div className="hero">
        <div className="hero-blur hero-blur-1" />
        <div className="hero-blur hero-blur-2" />
        <div className="hero-blur hero-blur-3" />
        <div className="hero-inner">
          <div className="pills">
            {pills.map((p) => (
              <span className="pill" key={p}>{p}</span>
            ))}
          </div>
          <h1>
            <span className="grad">AI & WordPress</span>
            <br />
            Jobb smartere,&nbsp;ikke&nbsp;hardere
          </h1>
          <p className="hero-sub">
            En dag full av inspirasjon, live demo-er og hands-on øvelser — spesielt for
            WordPress-fagfolk som vil oppdage hvordan{' '}
            <strong>Claude</strong> og <strong>Claude Code</strong> gjør jobben lettere,
            raskere og morsommere.
          </p>
          <div className="meta-row">
            <div className="meta-chip">🗓️ Fredag 14. mars 2026</div>
            <div className="meta-chip">🕛 Start: 12:00</div>
            <div className="meta-chip">🧑‍💻 WordPress-fagfolk</div>
          </div>
        </div>
      </div>

      <main className="main">
        <h2 className="section-title">
          <span className="section-title-accent">Agenda</span> for dagen
        </h2>

        <div className="timeline">
          <div className="timeline-line" />
          {agenda.map((item, i) => (
            <div
              className={`card card-${item.color}${item.isPause ? ' card-pause' : ''}${item.isLast ? ' card-last' : ''}`}
              key={i}
            >
              <div className="card-dot" />
              <div className="card-time-col">
                <span className="card-time">{item.time}</span>
                <span className="card-dur">{item.duration}</span>
              </div>
              <div className={`card-body card-body-${item.color}`}>
                <span className="card-emoji">{item.emoji}</span>
                <div className="card-text">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="footer">
        <p>Laget med ❤️ og litt hjelp fra <strong>Claude</strong> &nbsp;·&nbsp; 2026</p>
      </footer>
    </div>
  )
}
