import { stats } from '../constants/index.js';
import styles from '../style';

const Stats = () => (
      <section className={`${styles.flexCenter} flex-row flew-wrap sm:mb-20 mb-6 sm:mt-20 mt-6 h-20`}>
        {stats.map((stat) => (
          <div key={stat.id} className={`flex-1 flex flex-wrap xs:flex-nowrap justify-start items-center flex-row xs:m-3 relative ss:static`}>
            <h4 className="font-poppins font-semibold md:text-[40px] ss:text-[20px] md:leading-[53px] leading-[43px] text-white absolute ss:static bottom-0">{stat.value}</h4>
            <p className="font-poppins font-normal md:text-[20px] text-[15px] md:leading-[26px] leading-[21px] text-gradient uppercase xs:ml-3 ml-0 top-0 absolute ss:static">{stat.title}</p>
          </div>
        ))}
      </section>
    
  );


export default Stats