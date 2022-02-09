import { countryProps } from '../../../services/types'
import styles from './cardProfileCountrie.module.scss'

interface aboutCountrieProps {
  countrie: countryProps
}

export function CardProfileCountrie({ countrie }: aboutCountrieProps) {
  return (

    <div className={styles.profileContainer}>

      <div className={styles.profileBanner}>
        <img src={countrie.url_flag} alt="" />

        <h3>
          {countrie.name} | {countrie.iso_a2}
        </h3>
      </div>

      <div className={styles.profileContent}>
        <div className={styles.row}>

          <div>
            <p>Capital:</p>
            <h5>{countrie.capital}</h5>
          </div>

          <div>
            <p>Continente:</p>
            <h5>{countrie.continent}</h5>
          </div>
        </div>

        <div>
          <div>
            <p>Índice de Complixadade <br />Econômica (ICE) </p>
            <h5>{countrie.ice_position}</h5>
          </div>

          <div>
            <p>Expectativa de Vida</p>
            <h5>{countrie.life_expectancy} anos</h5>
          </div>

          <div>
            <p>Despesa com Saúde <br />(Per Capta)</p>
            <h5>$ {countrie.health_expenditure_percap}</h5>
          </div>
        </div>

      </div>

    </div>

  )
}