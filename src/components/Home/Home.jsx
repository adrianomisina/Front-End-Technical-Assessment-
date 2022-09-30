import React from 'react'
import styles from './Home.module.css'
import InviteImg from '../../assets/invite.png'

const Home = () => {
  return (
    <>
      <div className={styles.container_grid}>
        <div className={styles.grid_invite}>
          <img src={InviteImg} alt="hero-home" />
        </div>

        <div className={styles.grid_heroAction}>
          <div className={styles.heading_text}>
          <h1>Imagine if<br/>
            <span>Snapchat</span> <br/>
              had events.
          </h1>
          <p>Easily host and share events with your friends across any social media.</p>
          <button>🎉 Create my event</button>
          </div>


        </div>
      </div>
    </>
  )
}

export default Home