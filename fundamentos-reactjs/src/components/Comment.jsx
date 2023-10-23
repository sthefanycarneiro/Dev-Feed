import  styles from './Comment.module.css'
import { PiTrashDuotone , PiThumbsUpDuotone } from "react-icons/pi";
import { Avatar } from "./Avatar";

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&q=80&w=300&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>

                        <div className={styles.authorAndTime}>
                            <strong>Maria Helena</strong>
                            <time title="11 de Outubro às 20:17" dateTime='2023-10-11 20:17:30'>Cerca de 2h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <PiTrashDuotone size={23}/>
                        </button>
                    </header>

                    <p> Muito bom, Daniel! parabéns!! </p>
                </div>

                <footer>
                    <button>
                        <PiThumbsUpDuotone/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}