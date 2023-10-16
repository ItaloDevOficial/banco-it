import Style from '../css/SobreNos.module.css'
import {motion} from 'framer-motion'

function SobreNos() {
    return (

        <motion.section className={Style.SobreNos}
            initial={{width: 0 }}
            animate={{width: '100%' }}
        >

            <div className={Style.Texxt}>

                <h1 className={Style.h1_SobreNos}>O melhor para sua vida <h1 className={Style.h1_AZUL}>financeira! </h1></h1>
            </div>

            <div className={Style.Visao}>

                <h1 className={Style.h1_title}>Visão</h1>

                <div>
                    <div className={Style.Caixa1}>
                        <h1 className={Style.h1_visao}>
                            <h2>Acessibilidade Financeira:</h2> Buscamos promover a inclusão financeira, oferecendo serviços que atendam a diversos segmentos da sociedade, independentemente de sua localização ou situação econômica. Queremos ser um banco acessível para todos, proporcionando oportunidades iguais a todos os nossos clientes.
                        </h1>

                    </div>

                    <div className={Style.Caixa2}>
                        <h1 className={Style.h1_visao}>
                            <h2>Inovação Contínua:</h2> Continuaremos a investir em tecnologias emergentes, como inteligência artificial, blockchain e análise de dados, para criar produtos e serviços financeiros de ponta. Estamos comprometidos em fornecer soluções que estejam sempre à frente das expectativas do mercado.
                        </h1>
                    </div>

                    <div className={Style.Caixa3}>
                        <h1 className={Style.h1_visao}>
                            <h2>Experiência do Cliente Impecável:</h2> Buscamos constantemente melhorar a experiência do cliente, oferecendo um atendimento personalizado e eficiente. Queremos que cada interação com o Banco IT seja memorável e que nossos clientes confiem em nós como seu parceiro financeiro de confiança.
                        </h1>

                    </div>

                    <div className={Style.Caixa4}>
                        <h1 className={Style.h1_visao}>
                            <h2>Crescimento Sustentável:</h2> Nossa visão inclui um crescimento sólido e sustentável, garantindo a estabilidade financeira de longo prazo e a capacidade de atender às necessidades de nossos clientes ao longo do tempo.
                        </h1>
                    </div>
                </div>

            </div>

            <div className={Style.Historia}>
                <h1 className={Style.h1_title}> História </h1>

                <div className={Style.Nos}>
                    <p>O Banco IT é uma instituição financeira fictícia que se destaca por sua abordagem inovadora e compromisso com a tecnologia. Fundado há 10 anos, o Banco IT rapidamente ganhou reputação como um líder em serviços bancários digitais. Sua missão é proporcionar aos clientes uma experiência bancária moderna e conveniente, totalmente adaptada às necessidades do mundo contemporâneo.</p>
                </div>

                <div className={Style.Nos}>
                    <p>O Banco IT oferece uma variedade de produtos e serviços financeiros, incluindo contas correntes digitais, cartões de crédito com recompensas personalizadas, empréstimos de fácil acesso e investimentos online. A instituição se destaca por sua plataforma de banco online intuitiva e aplicativo móvel de última geração, que permitem aos clientes realizar transações, pagar contas, investir e monitorar suas finanças de maneira simples e eficiente.</p>
                </div>

                <div className={Style.Nos}>
                    <p>Além disso, o Banco IT se orgulha de sua abordagem responsável e sustentável, promovendo práticas financeiras conscientes e investindo em iniciativas ambientais e sociais. Sua equipe dedicada de especialistas está sempre disponível para auxiliar os clientes e fornecer orientações personalizadas para alcançar seus objetivos financeiros.</p>
                </div>

                <div className={Style.Nos}>
                    <p>Em resumo, o Banco IT é uma instituição fictícia que representa a vanguarda da inovação financeira, oferecendo soluções modernas e práticas para atender às necessidades dos clientes em um mundo cada vez mais digital e globalizado.</p>
                </div>
            </div>


        </motion.section>

    )
}

export default SobreNos