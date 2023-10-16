import Style from '../css/Rodape.module.css'
import LogoFoot from '../img/Logo.png'

function Rodape(){
    return(

        <footer>

            <div className={Style.LogoFoot}>
                <img className={Style.LogoIt} src={LogoFoot} alt="Logo" />
            </div>


            <div className={Style.Navegacao}>
                <li className={Style.NavFoot}>Inicio</li>
                <li className={Style.NavFoot}>Sobre Nós</li>
                <li className={Style.NavFoot}>Serviços</li>
            </div>


            <div className={Style.FaleConosco}>
                <h2 className={Style.h2_fale}>Fale Conosco</h2>
                <h4 className={Style.h4_fale}>(11) 91234-5678</h4>
                <h4 className={Style.h4_fale}>Email: suport@bancoIT</h4>
            </div>

            <div className={Style.Copyright}>
                <h5> ©Copyright 2023 Banco-IT Dev: Italo Araujo</h5>
            </div>

        </footer>

    )
}

export default Rodape