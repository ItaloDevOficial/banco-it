import Style from '../css/Celular.module.css'
import Telefone from '../img/OutraMoça.png'
import Baixar from '../img/Ios_Android.png'

function Celular(){
    return(

        <section className={Style.Celular}>

            <div className={Style.Texto_1}>

            <h1 className={Style.h1_Celular}> O banco digital feito para você! </h1>
            <img className={Style.Baixar} src={Baixar} alt="Ios e Android" />

            </div>

            <div className={Style.Cel}>
                <img className={Style.Telefone} src={Telefone} alt="Celular" />
            </div>

        </section>

    )
}

export default Celular