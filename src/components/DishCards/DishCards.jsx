import React from 'react'
import { MainButtonComponent } from '../Buttons/MainButtonComponent/MainButtonComponent'
import './DishCards.scss'


function DishCards({ dish, i, dishSelected }) {

  const getUrl = () => {
    let url = `${dish.img}`;
    let someUrl = url.slice(32);
    let mainUrl = someUrl.substring(0, someUrl.length - 17);
    const str = `https://drive.google.com/uc?id=${mainUrl}`
    return str
  }
  const mainUrl = getUrl()

  const slide = dishSelected;
  console.log('this is the number ', slide)
  const currentSlide = 'translateX(-' + slide + '00%)';
  const css = {
    transform: currentSlide
  }


  return (
    <div style={css} className='dish-card-wrapper' id={i}>
      <div className="set-title">
        <div className="title-wrapper">
          <span className="title">
            Featured Menu Items
          </span>
        </div>
      </div>
      <div className="main-content">
        <div className="left">
          <div className="img-wrapper">
            <div id="line-top"></div>
            <div id="line-right"></div>
            <div className="img-holder">
              <img className='picture' src={mainUrl} alt={dish.image_alt} />
            </div>
            <div id="line-bottom"></div>
            <div id="line-left"></div>
          </div>
        </div>
        <div className="right">
          <div className="dish-title">
            <span>{dish.name}</span>
          </div>
          <div className="content-spects">
            <div className="description-wrapper content-wrappers">
              <span className="label">
                Description
              </span>
              <span className="description">
                {dish.description}
              </span>
            </div>

            <div className="ingridients-wrapper content-wrappers">
              <span className="label">
                Main Ingredients
              </span>
              <span className="description">
                {dish.main_ingredients}
              </span>
            </div>
          </div>
          <div className="call-to-action">
            <MainButtonComponent />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DishCards