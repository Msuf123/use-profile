import style from './award.module.css'
export default function Awards(){
    return(
        
        <div className={style.main}>
            <div className={style.button}>
                <button>&#9734;</button>
                <button>&#9734;</button>
                <button>&#9734;</button>
                <button>&#9734;</button>
            </div>
            <span>Awards</span>
        
        </div>
    )
}