import styles from '../styles/Menu.module.css'

const MenuItem = (props) => <section onClick={props.onClick} className={styles.menuitem}>
    <img src={props.img} />
    <h6>{props.text}</h6>
</section>

export default MenuItem