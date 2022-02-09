import { genderPopulationChartOptions } from '../../../services/configs'
import ReactApexChart from 'react-apexcharts'
import styles from './chartPieGenders.module.scss'

interface chartPieGendersProps {
  id: number,
  genderPopulation: [{
    gender: string,
    etary_groups: [{
      age_range: string,
      amount: number
    }]
  }]
}

export default function ChartPieGenders({ id, genderPopulation }: chartPieGendersProps) {

  let series = genderPopulation.map(serie => {
    let data = serie.etary_groups.map(data => data.amount)
      .reduce((acc, amount) => acc += amount)

    let formatData = Number((data / 1000000).toFixed(2))

    return formatData
  })

  return (
    <div className={styles.chartPieContainer}>
      <h2>População por Gênero</h2>

      <div>
        <ReactApexChart
          key={id}
          type="donut"
          width={380}

          series={series}
          options={genderPopulationChartOptions as any}
        />
      </div>

    </div>

  )
}