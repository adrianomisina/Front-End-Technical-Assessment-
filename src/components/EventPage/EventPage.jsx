import React from 'react'
import styles from './EventPage.module.css'
import Cake from '../../assets/cake.png'

const EventPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.birthday_container}>
        <div className={styles.birthday_container_title}>
          <h1>Birthday Bash</h1>
          <p>Hosted by Elysia</p>
        </div>

        <div className={styles.date_container}>
          <div className={styles.date_titles}>
            <div className={styles.date_titles1}>
              <span></span>
              <p className={styles.date_titles1_p1}>18 August 6:00PM</p>
              <p>to 19 August 1:00PM UTC +10</p>
            </div>

            <div className={styles.date_titles2}>
              <span></span>
              <p>Street name</p>
              <p>Suburb, State, Postcode</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.cake}>
        <img src={Cake} alt="cake" />
      </div>
    </div>
  )
}

export default EventPage