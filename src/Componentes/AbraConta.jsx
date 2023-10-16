import Style from '../css/AbraConta.module.css'
import Free from '../img/free_img.png'
import Desconto from '../img/desconto_img.png'
import cartao from '../img/cartao_img.png'
import anuidade from '../img/anuidades_img.png'
import {motion} from 'framer-motion'

function AbraConta() {
    return (

        <motion.section className={Style.AbraConta}
            initial={{width: 0 }}
            animate={{width: '100%' }}
        >
            <h1 className={Style.h1_title}>Serviços</h1>
            <footer>
            <div className={Style.Caixa}>
                <h1 className={Style.h1_icons}>
                    <img className={Style.icons} src={Free} alt="Free" />
                    Conta 100% Gratuita
                </h1>
            </div>

            <div className={Style.Caixa}>
                <h1 className={Style.h1_icons}>
                    <img className={Style.icons} src={Desconto} alt="Desconto" />
                    Descontos exclusivos!
                </h1>
            </div>

            <div className={Style.Caixa}>
                <h1 className={Style.h1_icons}>
                    <img className={Style.icons} src={cartao} alt="cartao" />
                    Cartão digital e Cartão de crédito
                </h1>
            </div>

            <div className={Style.Caixa}>
                <h1 className={Style.h1_icons}>
                    <img className={Style.icons} src={anuidade} alt="anuidade" />
                    Sem anuidades
                </h1>
            </div>

            <div className={Style.Botao}>
                <button className={Style.Abra}>Abra sua conta</button>
            </div>
            </footer>
        </motion.section>

    )
}

export default AbraConta