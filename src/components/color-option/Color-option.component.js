import './Color-option.styles.css'

const ColorOption = ({color, selected}) => {

  return (
    <div className='color-option'>
        {
            selected ? <div className='selected'></div> : null
        }
        <div className={`color ${selected ? 'selected-color' : ''}`} style={{backgroundColor: `#${color}`}}>
        </div>
    </div>
  )
}

export default ColorOption