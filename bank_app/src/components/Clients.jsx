import { clients } from "../constants"
import styles from "../style"

const Clients = () => (
  <section className={`${styles.flexCenter} my-4 mb-16`}>
  <div className={`${styles.flexCenter} flex-wrap w-full`}>

    {clients.map((client) => (
      <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[202px] md:min-w-[160px] xs:min-w-[140px] min-w-[120px] m-5 mx-10`}>
        <img src={client.logo} alt="client" className="sm:w-[192px] md:min-w-[220px] w-[180px]  object-contain client__effect"/>
      </div>
    ))}
  </div>
  </section>
)

export default Clients
// imports from somewhere and in return