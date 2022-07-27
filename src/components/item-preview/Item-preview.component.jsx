import './Item-preview.styles.css'

import greenHooide from '../../assets/images/bg-1.svg';
import creamJean from '../../assets/images/bg-2.svg';
import blueHoodie from '../../assets/images/bg-3.svg';
import rightArrowIcon from '../../assets/icons/Path (Stroke).svg';
import ProductItem from '../product-item/Product-item.component';
import { useRef, useState, useEffect } from 'react';

const recomendedItemsArray = [
    {
      id:1,
      title: '365 Signature Hoodie',
      img:greenHooide,
      price: '33.95',
      currency: '€',
      colorOptions: ['99C3CC', 'CC9999', 'CB99CC', 'A6CC99']
    },
    {
      id:2,
      img: creamJean,
      title: 'Organic Skinny High Waist Jeans',
      price: '33.95',
      currency: '€',
      colorOptions: ['99C3CC', 'CC9999', 'CB99CC', 'A6CC99']
    },
    {
      id:3,
      title: 'Organic Skinny High Waist Jeans',
      img:blueHoodie,
      price: '33.95',
      currency: '€',
      colorOptions: ['99C3CC', 'CC9999', 'CB99CC', 'A6CC99']
    },
    
  ]


const ItemPreview = () => {
    const itemsRef = useRef(null);
    const [horizontalScroll, setHorizontalScroll] = useState({
      isScrolling: false,
      clientX:0,
      scrollX: 0,
    })
  
    const handleMouseDown = (e)=>{
        setHorizontalScroll({...horizontalScroll, clientX: e.clientX, isScrolling: true})
        
    }
  
    const handleMouseUp = () => {
      let scrollX = horizontalScroll.scrollX;
      const maxScroll = itemsRef.current.scrollWidth - itemsRef.current.offsetWidth;
      if(-scrollX > maxScroll){
        scrollX = -maxScroll
      }else if(scrollX > 0){
        scrollX = 0
      }
      setHorizontalScroll({...horizontalScroll, isScrolling:false, scrollX});
    }

    const handleMouseMove = (e) => {
      const { scrollX, clientX } = horizontalScroll;
      if(horizontalScroll.isScrolling){
        const sX = scrollX + e.clientX - clientX;
            itemsRef.current.scrollLeft = -(scrollX + clientX - e.clientX);
            setHorizontalScroll({...horizontalScroll, clientX: e.clientX, scrollX: sX});
      }
    }

    useEffect(()=>{
        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', handleMouseUp);
        return ()=>{
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseup', handleMouseUp)
        }
    })
    const productItems = recomendedItemsArray.map(item => <ProductItem key={item.id} item={item}/>);

    return (
        <div className='item-preview-section' ref={itemsRef} onMouseDown={handleMouseDown} >
        <div className='item-preview flex start'>
          {productItems}
          <img className='right-arrow' src={rightArrowIcon} alt="" />
        </div>
      </div>
    )
}

export default ItemPreview