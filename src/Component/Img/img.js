import img from '../../pngwing.com.png'
import style from './img.module.css'
export default function Img(){
    return(
        <div className={style.main}>
            <img src={img}></img>
         <div className={style.ratings}>
         <span className={style.bold}>4.5</span><span className={style.star}>&#9734;</span>
         </div>
         <span>Rating</span>
        </div>
    )
}