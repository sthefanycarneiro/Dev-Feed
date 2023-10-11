import { PiPencilSimpleLineLight } from "react-icons/pi";
import styles from './Sidebar.module.css'; 

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
            />
        
            <div className={styles.profile}>
                <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/100644037?v=4"/>
                <strong>Sthéfany Carneiro</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PiPencilSimpleLineLight size={15}/>
                    Editar seu Perfil
                </a>
            </footer>
        </aside>
    );
}