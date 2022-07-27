import './Product-item.styles.css'
import ColorOption from '../color-option/Color-option.component'

const ProductItem = ({item}) => {

    const colorOptions = item.colorOptions.map((option, index) => <ColorOption key={index} color={option} selected={index === 0 ? true : false}/>)

    return (
        <div className='product-item'>
            <img className='product-img' src={item.img}/>
            <div className='item-title'>{item.title}</div>
            <div className='price-color-container flex between'>
                <div className='item-price'>{item.currency}{item.price}</div>
                <div className='color-options flex between'>
                    {colorOptions}
                </div>
            </div>
        </div>
    )
}

export default ProductItem