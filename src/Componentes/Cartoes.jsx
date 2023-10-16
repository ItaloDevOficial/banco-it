import Style from '../css/Cartoes.module.css'
import CartoesBack from '../img/CartõesBack2.png'
import cartB1 from '../img/CartõesBlack/CartãoBlackk.png'
import cartB2 from '../img/CartõesBlack/CartãoBlackk2.png'
import cartB3 from '../img/CartõesBlack/CartãoBlackk3.png'
import cartB4 from '../img/CartõesBlack/CartãoBlackk4.png'
import cartB5 from '../img/CartõesBlack/CartãoBlackk5.png'
import cartG1 from '../img/CartõesGold/CartãoGoldd.png'
import cartG2 from '../img/CartõesGold/CartãoGoldd2.png'
import cartG3 from '../img/CartõesGold/CartãoGoldd3.png'
import cartG4 from '../img/CartõesGold/CartãoGoldd4.png'
import cartG5 from '../img/CartõesGold/CartãoGoldd5.png'
import cartP1 from '../img/CartõesPlatinum/CartãoPlatinum.png'
import cartP2 from '../img/CartõesPlatinum/CartãoPlatinum2.png'
import cartP3 from '../img/CartõesPlatinum/CartãoPlatinum3.png'
import cartP4 from '../img/CartõesPlatinum/CartãoPlatinum4.png'
import cartP5 from '../img/CartõesPlatinum/CartãoPlatinum5.png'
import {motion} from 'framer-motion'

function Cartoes(){
    return(

        <motion.section className={Style.Cartoes}
            initial={{width: 0 }}
            animate={{width: '100%' }}
        >

            <section className={Style.CartInicio}>

            <div className={Style.Title_h1}>
                <h1 className={Style.Beneficios}>Personalize seu cartão e conheça seus beneficios!</h1>
            </div>

            <div className={Style.Carts}>
                <img className={Style.CartBack} src={CartoesBack} alt="Cartões Juntos" />
            </div>

            </section>

            <div className={Style.CartoesGold}>
                <div className={Style.Titulo_h1}>
                    <h2 className={Style.h2_title}>Cartões <h2>Gold</h2></h2>
                </div>

                <div className={Style.Coluna}>
                    <img className={Style.Tamanho_Cartão} src={cartG1} alt="Cartão Gold 1" />
                </div>

                <div className={Style.Coluna}>
                    <img className={Style.Tamanho_Cartão} src={cartG2} alt="Cartão Gold 2" />
                </div>

                <div className={Style.Coluna}>
                    <img className={Style.Tamanho_Cartão} src={cartG3} alt="Cartão Gold 3" />
                </div>

                <div className={Style.Coluna}>
                    <img className={Style.Tamanho_Cartão} src={cartG4} alt="Cartão Gold 4" />
                </div>

                <div className={Style.Coluna}>
                    <img className={Style.Tamanho_Cartão} src={cartG5} alt="Cartão Gold 5" />
                </div>

                <div className={Style.Botao}>
                    <button className={Style.Abra}>Venha Conferir!</button>
                </div>

            </div>

            <div className={Style.CartoesPlatinum}>
                <div className={Style.Titulo_h1}>
                    <h2 className={Style.h2_title}>Cartões <h2>Platinum</h2></h2>
                </div>

                <div className={Style.Coluna}>
                    <img className={Style.Tamanho_Cartão} src={cartP1} alt="Cartão Platinum 1" />
                </div>

                <div className={Style.Coluna}>
                    <img className={Style.Tamanho_Cartão} src={cartP2} alt="Cartão Platinum 2" />
                </div>

                <div className={Style.Coluna}>
                    <img className={Style.Tamanho_Cartão} src={cartP3} alt="Cartão Platinum 3" />
                </div>

                <div className={Style.Coluna}>
                    <img className={Style.Tamanho_Cartão} src={cartP4} alt="Cartão Platinum 4" />
                </div>

                <div className={Style.Coluna}>
                    <img className={Style.Tamanho_Cartão} src={cartP5} alt="Cartão Platinum 5" />
                </div>

                <div className={Style.Botao}>
                    <button className={Style.Abra}>Venha Conferir!</button>
                </div>

            </div>

            <div className={Style.CartoesBlack}>
                <div className={Style.Titulo_h1}>
                    <h2 className={Style.h2_title}>Cartões <h2>Black</h2></h2>
                </div>

                <div className={Style.Coluna}>
                    <img className={Style.Tamanho_Cartão} src={cartB1} alt="Cartão Black 1" />
                </div>

                <div className={Style.Coluna}>
                    <img className={Style.Tamanho_Cartão} src={cartB2} alt="Cartão Black 2" />
                </div>

                <div className={Style.Coluna}>
                    <img className={Style.Tamanho_Cartão} src={cartB3} alt="Cartão Black 3" />
                </div>

                <div className={Style.Coluna}>
                    <img className={Style.Tamanho_Cartão} src={cartB4} alt="Cartão Black 4" />
                </div>

                <div className={Style.Coluna}>
                    <img className={Style.Tamanho_Cartão} src={cartB5} alt="Cartão Black 5" />
                </div>

                <div className={Style.Botao}>
                    <button className={Style.Abra}>Venha Conferir</button>
                </div>

            </div>

        </motion.section>

    )
}

export default Cartoes