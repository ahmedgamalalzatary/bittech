import { useEffect, useState } from 'react'
import { ArrowUpRight, BrandMark } from './icons.jsx'

const LINKS = [
  ['#services', 'Services'],
  ['#work', 'Work'],
  ['#process', 'Process'],
  ['#about', 'Studio'],
  ['#contact', 'Contact'],
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled((window.scrollY || window.pageYOffset) > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={'nav' + (scrolled ? ' scrolled' : '')} id="nav">
      <a className="brand" href="#top">
        <span className="mark"><BrandMark /></span>
        BitTech<sup>®</sup>
      </a>
      <div className="nav-links">
        {LINKS.map(([href, label]) => (
          <a key={href} href={href}>{label}</a>
        ))}
      </div>
      <div className="nav-right">
        <div className="lang">
          <button type="button" className="on">EN</button>
          <button type="button" className="off">عربى</button>
        </div>
        <a href="#contact" className="btn btn-gold btn-sm" data-magnetic>
          Start a Project
          <ArrowUpRight />
        </a>
      </div>
    </nav>
  )
}
