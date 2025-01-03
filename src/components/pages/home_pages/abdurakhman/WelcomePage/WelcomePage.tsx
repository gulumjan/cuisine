import React from 'react'
import scss from "./WelcomePage.module.scss"

const WelcomePage = () => {
  return (
    <section className={scss.Main}>
      <div className="container">
        <div className={scss.content}></div>
      </div>
    </section>
  )
}

export default WelcomePage;