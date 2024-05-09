import { Link } from 'react-router-dom'

const ERROR_404_MESSAGE = '404 Страница не найдена'
const BACK_TO_HOME = 'Вернуться на главную'

export const NotFound = () => {
  return (
    <div>
      <div>{ERROR_404_MESSAGE}</div>
      <Link to="/">{BACK_TO_HOME}</Link>
    </div>
  )
}
