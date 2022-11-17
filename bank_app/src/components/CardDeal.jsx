import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" /> in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliguet quis aliquet eget mauris tortor. Aliquet ultrices ac, ametau.</p>
        <Button styles="mt-10" />
      </div>
      <div className={`${layout.sectionImg} relative z-[5]`}>
        <img src={card} alt="card" className="w-[100%] h-auto"/>

        {/* gradient start */}
      <div className="absolute z-[0] w-[20%] h-[35%] md:w-[30%] md:h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[40%] h-[50%] md:w-[50%] md:h-[65%] rounded-full white__gradient bottom-40" />
      <div className="absolute z-[2] w-[20%] h-[30%] md:w-[50%] md:h-[35%] right-20 bottom-20 blue__gradient" />
      {/* gradient end */}
      </div>
    </section>
  )


export default CardDeal