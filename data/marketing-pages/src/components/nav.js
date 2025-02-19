import React, { useState } from "react"
import { Link } from "gatsby"

import isDOMavailable from "../isDOMavailable.js"

import "@cloudflare/cloudflare-brand-assets/css/components/cloudflare-workers-logo.css"
import "@cloudflare/cloudflare-brand-assets/css/components/button.css"

const Nav = ({ showInput = true }) => {
  const [value, setValue] = useState("")

  const handleOnChange = event => {
    const value = event.target.value
    setValue(value)
  }

  const handleOnSubmit = event => {
    event.preventDefault()
    if (isDOMavailable) {
      window.location.href = `https://www.cloudflare.com/searchresults/?q=${encodeURIComponent(value)}`
    }
  }

  return (
    <nav className="Nav">
      <Link className="Nav--link Nav--link-logo" to="/">
        <div className="CloudflarePagesLogo CloudflarePagesLogo-horizontal-combination-mark">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 174 68">
            <defs><linearGradient id="cloudflare-pages-logo-gradient" x1="118.18%" x2="10.8%" y1="-2.39%" y2="101.62%"><stop offset="0%" stopColor="#fbb743" /><stop offset="100%" stopColor="#f28333" /><stop offset="100%" stopColor="#ea6b00" /></linearGradient></defs>
            <path fill="currentColor" d="M75.94 54V30h9.47c5.44 0 8.6 3.36 8.6 8.13 0 4.8-3.21 8.09-8.73 8.09H81V54h-5.07zM81 42.15h3.45c2.9 0 4.32-1.64 4.32-4.02 0-2.39-1.42-3.98-4.35-3.98h-3.42v8zm19.48 12.19c-3.43 0-5.98-1.8-5.98-5.37 0-4.02 3.2-5.21 6.77-5.54 3.12-.3 4.35-.46 4.35-1.62v-.07c0-1.47-.97-2.33-2.67-2.33-1.79 0-2.86.88-3.2 2.07l-4.61-.37c.69-3.28 3.52-5.34 7.84-5.34 4 0 7.64 1.8 7.64 6.09V54h-4.74v-2.5h-.14c-.88 1.68-2.6 2.84-5.26 2.84zm1.43-3.45c2.2 0 3.75-1.44 3.75-3.32v-1.91c-.6.4-2.38.65-3.47.8-1.76.25-2.92.94-2.92 2.35 0 1.37 1.1 2.08 2.64 2.08zm19.32 10.23c-4.86 0-7.63-2.17-8.23-5.01l4.62-.62c.4 1.09 1.52 2.05 3.72 2.05 2.17 0 3.75-.96 3.75-3.43v-3.3h-.2c-.66 1.5-2.27 2.93-5.14 2.93-4.06 0-7.3-2.79-7.3-8.78 0-6.12 3.34-9.2 7.29-9.2 3 0 4.47 1.8 5.14 3.26h.19V36h4.96v18.18c0 4.6-3.66 6.94-8.8 6.94zm.1-11.13c2.4 0 3.79-1.87 3.79-5.05 0-3.15-1.36-5.2-3.79-5.2-2.47 0-3.78 2.14-3.78 5.2 0 3.1 1.33 5.05 3.78 5.05zm19.5 4.36c-5.54 0-8.93-3.56-8.93-9.27 0-5.55 3.44-9.31 8.73-9.31 4.76 0 8.46 3.02 8.46 9.14v1.37h-12.25c0 2.7 1.58 4.35 4.08 4.35 1.66 0 2.95-.72 3.45-2.1l4.62.31c-.7 3.34-3.7 5.51-8.16 5.51zm-4-11.17h7.57a3.55 3.55 0 00-3.68-3.69 3.8 3.8 0 00-3.88 3.7zm29.12-2.05l-4.57.28c-.25-1.16-1.28-2.1-3.01-2.1-1.55 0-2.77.7-2.76 1.78 0 .86.61 1.44 2.29 1.8l3.26.66c3.49.71 5.19 2.27 5.2 4.87-.01 3.55-3.35 5.93-8.02 5.93-4.77 0-7.7-2.12-8.16-5.56l4.9-.26c.31 1.46 1.5 2.22 3.28 2.22 1.74 0 2.9-.76 2.92-1.82-.02-.9-.73-1.48-2.3-1.8l-3.12-.62c-3.52-.7-5.22-2.45-5.2-5.14-.02-3.47 3.02-5.6 7.62-5.6 4.55 0 7.22 2.05 7.67 5.36z" />
            <path fill="currentColor" fillOpacity=".6" d="M84.14 17.86h-2.02c-.15-1.04-.94-1.68-2.03-1.68-1.47 0-2.43 1.13-2.43 3.1 0 2.01.98 3.08 2.41 3.08 1.07 0 1.86-.58 2.05-1.6l2.02.02c-.21 1.74-1.68 3.35-4.1 3.35-2.53 0-4.4-1.77-4.4-4.86 0-3.09 1.9-4.85 4.4-4.85 2.19 0 3.84 1.25 4.1 3.44zm2.83-3.31V24H85v-9.45h1.97zm4.23 9.59c-2.16 0-3.5-1.47-3.5-3.66 0-2.2 1.34-3.66 3.5-3.66 2.15 0 3.49 1.46 3.49 3.66 0 2.19-1.34 3.66-3.5 3.66zm0-1.52c.98 0 1.49-.91 1.49-2.15 0-1.24-.51-2.15-1.49-2.15-.99 0-1.5.91-1.5 2.15 0 1.24.51 2.15 1.5 2.15zm8.77-1.64v-4.07h1.97V24h-1.89v-1.29h-.07c-.32.83-1.09 1.38-2.15 1.38-1.43 0-2.4-1-2.4-2.67v-4.51h1.96v4.16c0 .84.49 1.36 1.23 1.36.7 0 1.36-.5 1.35-1.45zm5.6 3.14c-1.6 0-2.87-1.28-2.87-3.66 0-2.43 1.32-3.64 2.87-3.64 1.19 0 1.76.7 2.02 1.28h.06v-3.55h1.96V24h-1.94v-1.14h-.08a2.1 2.1 0 01-2.01 1.26zm.63-1.57c.95 0 1.5-.83 1.5-2.1 0-1.26-.54-2.07-1.5-2.07-.97 0-1.49.85-1.49 2.07 0 1.24.53 2.1 1.5 2.1zm8.3-5.64v1.48h-1.42V24h-1.96v-5.61h-1V16.9h1v-.51c0-1.55 1-2.3 2.32-2.3.61 0 1.15.12 1.4.2l-.35 1.47c-.16-.05-.4-.1-.63-.1-.58 0-.78.28-.78.76v.48h1.41zm2.62-2.36V24h-1.97v-9.45h1.97zm3.04 9.58c-1.35 0-2.35-.7-2.35-2.11 0-1.58 1.26-2.05 2.66-2.18 1.24-.12 1.72-.18 1.72-.64v-.03c0-.58-.38-.92-1.05-.92-.7 0-1.13.35-1.26.82l-1.82-.15c.27-1.3 1.39-2.1 3.09-2.1 1.58 0 3 .7 3 2.4V24h-1.86v-.98h-.05c-.35.66-1.03 1.11-2.08 1.11zm.57-1.35c.86 0 1.47-.57 1.47-1.31v-.76c-.23.16-.93.26-1.36.32-.7.1-1.15.37-1.15.92s.43.83 1.04.83zm4.41 1.22v-7.1h1.9v1.25h.08c.26-.88.91-1.34 1.7-1.34.2 0 .45.03.62.07v1.74a3.3 3.3 0 00-.83-.1c-.86 0-1.5.6-1.5 1.47V24h-1.97zm7.67.14c-2.18 0-3.52-1.4-3.52-3.65 0-2.2 1.36-3.67 3.44-3.67 1.88 0 3.34 1.19 3.34 3.6v.54h-4.83c0 1.06.62 1.71 1.6 1.71.66 0 1.17-.28 1.36-.82l1.82.12c-.27 1.31-1.46 2.17-3.2 2.17zm-1.57-4.4h2.97c0-.85-.6-1.46-1.45-1.46a1.5 1.5 0 00-1.52 1.46z" />
            <path fill="#b7bbbd" d="M45.94 10H60l2 2v44l-2 2H40.84l.97-1.5h17.57l1.12-1.12V12.62l-1.12-1.12H47.26l-1.43 7.39H44.3l1.37-7.46.28-1.43zM12 58l-2-2V12l2-2h19.9l-1.01 1.5H12.62l-1.12 1.12v42.76l1.12 1.12H27.1l-.24 1.5H12zm3-5h8.5l-.3 1.5H14l-.5-.5v-9l1.5 3v5zm34 0l1.5 1.5H43l1-1.5h5z" />
            <path fill="url(#cloudflare-pages-logo-gradient)" d="M32.67 40H19l-1.66-3.12 23-34 3.62 1.5L39.42 28H53l1.68 3.09-22 34-3.66-1.4L32.67 40zM15.5 17a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm4 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm4 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
          </svg>
        </div>
      </Link>

      <div className="Nav--main-links">
        <div className="Nav--item">
          <a className="Nav--link" href="https://developers.cloudflare.com/pages">Docs</a>
        </div>

        <div className="Nav--item">
          <a className="Nav--link" href="https://discord.gg/cloudflaredev">Discord</a>
        </div>
      </div>

      <div className="Nav--search">
        {showInput ? (
          <form
            id="search-input"
            className="Nav--search-form"
            onSubmit={handleOnSubmit}
          >
            <div className="Nav--search-icon">
              <svg
                viewBox="0 0 16 16"
                fill="currentcolor"
                role="img"
                aria-labelledby="title-6713060681049814"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title id="title-6713060681049814">
                  Search icon (depiction of a magnifying glass)
                </title>
                <path d="M11.999 10.585l3.458 3.458a1 1 0 01-1.414 1.414L10.585 12a6.5 6.5.0 111.414-1.414zM6.75 11.5a4.75 4.75.0 100-9.5 4.75 4.75.0 000 9.5z"></path>
              </svg>
            </div>
            <input
              className="Nav--search-input"
              type="text"
              value={value}
              placeholder="Search Cloudflare"
              autoComplete="off"
              onChange={handleOnChange}
            />
          </form>
        ) : null}
      </div>

      <div className="Nav--account-management">
        <div className="Nav--item Nav--item-sign-in">
          <a className="Button Button-is-secondary" href="https://dash.cloudflare.com/login?redirect_uri=https%3A%2F%2Fdash.cloudflare.com%2F%3Faccount%3Dpages">Log in</a>
        </div>

        <div className="Nav--item Nav--item-sign-up">
          <a className="Button Button-is-primary" href="https://dash.cloudflare.com/sign-up/workers-and-pages">Sign up</a>
        </div>
      </div>
    </nav>
  )
}

export default Nav
