import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import { WhatsApp } from './components/icons.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
      <a
        className="wa"
        href="https://wa.me/201011125116"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        data-magnetic
      >
        <WhatsApp />
      </a>
    </>
  )
}
