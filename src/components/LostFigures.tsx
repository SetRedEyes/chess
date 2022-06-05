import { Figure } from '../models/figures/Figure'

interface LostFiguresProps {
  title: string
  figures: Figure[]
}

const LostFigures = ({ title, figures }: LostFiguresProps) => {
  return (
    <div className='lost-figures-board'>
      <div className='lost-figures'>
        <h2>{title}:</h2>
        {figures.map((figure) => (
          <div className='figure' key={figure.id}>
            <span className='figure-name'>{figure.name}</span>{' '}
            {figure.logo && <img src={figure.logo} alt={figure.name} />}
          </div>
        ))}
      </div>
    </div>
  )
}

export default LostFigures
