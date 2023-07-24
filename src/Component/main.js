
import style from '../Component/first.module.css'
import Profile from './Profile/Profile'
import Awards from './Awards/awards'
import Desc from './Description/desc'
import Img from './Img/img'
export default function Main(){
    return(
        <div className={style.main}>
            <div className={style.img}>
                <Img></Img>
            </div>
         
         <div className={style.desc}>
        <Desc></Desc>
          </div>
          <div className={style.awards}>
            <Awards></Awards>
          </div>
          <div>
            <Profile></Profile>
          </div>

        </div>
    )
}