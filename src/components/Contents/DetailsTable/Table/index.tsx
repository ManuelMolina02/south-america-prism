import styles from './styles.module.scss'

export function Table({ details }) {
  return (
    <table className={styles.tableContainer}>

      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Valor</th>
          <th>Referencia</th>
        </tr>
      </thead>

      <tbody>
        {
          details.map(data => (
            <tr key={data.id} >
              <td>{data.id}<a href={data.reference} target="_blank"></a></td>
              <td>{data.name}</td>
              <td>{data.value} - {data.unit}</td>
              <td>Acessar Conteúdo</td>
            </tr>
          ))
        }

      </tbody>
    </table>
  )
}