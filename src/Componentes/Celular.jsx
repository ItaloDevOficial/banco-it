import Style from '../css/Celular.module.css'
import Telefone from '../img/OutraMoça.png'

function Celular(){
    return(

        <section className={Style.Celular}>

            <div className={Style.Texto_1}>

            <h1 className={Style.h1_Celular}> O banco digital feito para você! </h1>


            </div>

            <div className={Style.Cel}>
                <img className={Style.Telefone} src={Telefone} alt="Celular" />
            </div>

        </section>

    )
}

export default Celular