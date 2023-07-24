import style from './block.module.css'
export default function Blocks(){
    return(
        <div className={style.main}>
            <span>Science</span>
            <span>Maths</span>
            <span>Hindi</span>
            <span>&#x2b;</span>
        </div>
    )
}