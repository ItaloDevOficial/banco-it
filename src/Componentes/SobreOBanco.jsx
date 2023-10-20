import React, { useState } from 'react'
import { motion } from 'framer-motion'
import figura from '../img/Figura.jpg'
import figura2 from '../img/Figura2.jpg'
import figura3 from '../img/Figura3.jpg'
import figura4 from '../img/Figura4.jpg'
import '../css/SobreOBanco.css'
import MyCarousel from './Carrosel'

const SobreOBanco = () => {

    const [expandedIndex, setExpandedIndex] = useState(null)

    const handleCardClick = (index) => {
        setExpandedIndex(index === expandedIndex ? -1 : index)
    }

    const cardVariants = {
        expanded: {
            width: "400px"
        },
        collapsed: {
            width: '300px'
        }
    }

    const cardImages = [figura, figura2, figura3, figura4]

    const cardDescriptions = [
        'Nossa visão inclui um crescimento sólido e sustentável, garantindo a estabilidade financeira de longo prazo e a capacidade de atender às necessidades de nossos clientes ao longo do tempo.',

        'Garantir a máxima segurança dos ativos e informações dos clientes, implementando tecnologias de ponta e práticas de cibersegurança rigorosas.',

        'Buscamos promover a inclusão financeira, oferecendo serviços que atendam a diversos segmentos da sociedade, independentemente de sua localização ou situação econômica.',

        'Buscamos constantemente melhorar a experiência do cliente, oferecendo um atendimento personalizado e eficiente.',
    ]

    const cardtitulos = [
        'Crescimento Sustentável',

        'Cibersegurança',

        'Acessibilidade Financeira ',

        'Experiência do Cliente Impecável ',
    ]

    return (
        <section className='SobreAlgo'>

            <div className='História'>
                <MyCarousel className='tamanho'/>
            </div>

            <div className='Visão'>
                <h1>Visão</h1>
            </div>


            <div className='Carts'>
                {[0, 1, 2, 3].map((index) => (
                    <motion.div
                        key={index}
                        className={`${index === expandedIndex ? 'expanded' : 'Cart'}`}
                        variants={cardVariants}
                        initial="collapsed"
                        animate={index === expandedIndex ? 'expanded' : 'collapsed'}
                        transition={{ duration: 0.5 }}
                        onClick={() => handleCardClick(index)}
                        style={{ backgroundImage: `url(${cardImages[index]})`, }}>

                        <div className=''>
                            <div className='Tamanho_Cart'>
                                <h2 className='H2_carts'>{cardtitulos[index]}</h2>
                                {index === expandedIndex && (
                                    <p className='P_carts'>{cardDescriptions[index]} </p>
                                )

                                }
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

        </section>
    )
}

export default SobreOBanco