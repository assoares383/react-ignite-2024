import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CycleContext'

import { HistoryContainer, HistoryList, Status } from './styles'

export const History = () => {
  const { cycles } = useContext(CyclesContext)

  return (
    <HistoryContainer>
      <h1>Meu Historico</h1>

      <pre>{JSON.stringify(cycles, null, 2)}</pre>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duracao</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Ha 2 meses</td>
              <td>
                <Status statusColor="green">Concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Ha 2 meses</td>
              <td>
                <Status statusColor="green">Concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Ha 2 meses</td>
              <td>
                <Status statusColor="green">Concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Ha 2 meses</td>
              <td>
                <Status statusColor="green">Concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Ha 2 meses</td>
              <td>
                <Status statusColor="green">Concluido</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
