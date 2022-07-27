import './App.css';
import introImage from  './assets/images/bg.svg'
import ItemPreview from './components/item-preview/Item-preview.component';

function App() {
  return (
    <div className="product-details flex between">
        <img className='intro-img' src={introImage} alt='intro'/>
        <div className='content'>
          <h4 className='intro'>Everyday items, we have something to suit every occasion.</h4>
          <div className='description'>At suspendisse augue lectus arcu, accumsan ut sit posuere vitae sit tincidunt semper eu proin leo gravida cursus.</div>
          <div className='shop-item'>Shop all everyday items</div>
          <ItemPreview/>
        </div>
    </div>
  );
}

export default App;
