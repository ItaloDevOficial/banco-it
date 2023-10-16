import Style from '../css/SobreCartao.module.css'
import CircuitoEsq from '../img/circuitoTecEsq1.png'
import CircuitoDir from '../img/circuitoTecDir1.png'
import CartaoDuplo from '../img/CartõesJuntos2.png'

function SobreCartao() {
    return (
        
        <section className={Style.SobreCartao}>

            <div className={Style.Cima}>

                <div className={Style.CircuitoEsq}>
                    <img className={Style.CircuitoTamanho} src={CircuitoEsq} alt="Circuito Esquerdo" />
                </div>

                <div className={Style.CartaoDuplo}>
                    <img className={Style.CartaoTamanho} src={CartaoDuplo} alt="Cartão Duplo" />
                </div>

            </div>

            <div className={Style.Baixo}>

                <div className={Style.TextoCartao}>
                    <p className={Style.p_Cartao}><h3> Banco IT </h3> Diferente, sem pegadinhas e sem tarifas: como você sempre quis. Planeje e invista no seu futuro com a Conta Investimentos ou abra uma Conta digital 100% isenta de tarifas e com tudo que você precisa. </p>
                    
                </div>

                <div className={Style.CircuitoDir}>
                    <img className={Style.CircuitoTamanhoD} src={CircuitoDir} alt="Circuito Direito" />
                </div>

            </div>

        </section>
    )
}

export default SobreCartao