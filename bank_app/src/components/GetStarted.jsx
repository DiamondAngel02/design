import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer `}
  >
    <div className={`${styles.flexCenter} flex-col hover:bg-gradient-to-bl hover:from-transparent hover:via-cyan-800 hover:to-transparent bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[20px] leading-[23px] mr-2">
            <span className="text-gradient">Get </span>
          </p>
          <img src={ arrowUp } className="w-[23px] h-[23px] object-contain"/>
        </div>

        <p className="font-poppins font-medium text-[20px] leading-[23px]">
            <span className="text-gradient">Started </span>
          </p>
    </div>
  </div>
)

export default GetStarted;
