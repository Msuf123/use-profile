import Blocks from "./Blocks/blocks";
import style from './desc.module.css'
export default function Desc(){
    return(
        <div className={style.main}>
            <h1>Jonhn Deo,<span> 5 </span><span className={style.small}>YRS Exp.</span></h1>
            <span>Details</span>
            <p>I am not intrested in Science and Web technology,Basic Lorem ipsum</p>
            <div>
                <Blocks></Blocks>
            </div>
        </div>
    )
}