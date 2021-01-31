import styles from '../styles/Menu.module.css'
import MenuItem from './MenuItem'

const Menu = () => <div className={styles.menu}>
    <section>
        <MenuItem text="dragonDScript" img="https://avatars.githubusercontent.com/u/46191980?s=460&u=a8271c1ef08c7abc6781a3cf525193f5779aa693&v=4"/>
    </section>
    <section></section>
    <section></section>
</div>

export default Menu