import React from 'react'
import styles from './EventPage.module.css'
import Cake from '../../assets/cake.png'
import Calendar from '../../assets/calendar.png'
import Ponit from '../../assets/point.png'

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

              <div>
                <img src={Calendar} alt="calendar-icon" />
              </div>

              <div className={styles.cointainer_p}>
                <p className={styles.date_titles1_p1}>18 August 6:00PM</p>
                <p>to <span className={styles.date_titles1_p1_span}>19 August 1:00PM</span> UTC +10</p>
              </div>
            </div>

            <div className={styles.date_titles2}>

              <div>
                <img src={Ponit} alt="point-icon" />
              </div>

              <div className={styles.cointainer_p}>
                <p className={styles.date_titles2_p2}>Street name</p>
                <p>Suburb, State, Postcode</p>
              </div>
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