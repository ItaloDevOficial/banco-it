import Style from '../css/Home.module.css'
import Moca from '../img/moça2.png'
import {motion} from 'framer-motion'

function Home(){
    return(

        <motion.section className={Style.Home}
            initial={{width: 0 }}
            animate={{width: '100%' }}
        >

            <div className={Style.ImagemMoca}>
                <img className={Style.Moca} src={Moca} alt="Moça" />
            </div>

            <div className={Style.Texto}>
                <h1 className={Style.h1_texto}>Simplifique suas <h1 className={Style.h1_branco}>finanças,</h1>maximize seu <h1 className={Style.h1_branco}>potencial.</h1></h1>
            </div>


        </motion.section>

    )
}

export default Home