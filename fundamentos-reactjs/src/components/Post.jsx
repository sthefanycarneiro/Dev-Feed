import styles from './Post.modules.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
               <div className={styles.author}>
                    <img className={styles.avatar} src="https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"/>
                    <div className={styles.authorInfo}> 
                        <strong>Daniel Gallo</strong>
                        <span>Web Developer</span>
                    </div>
                </div> 

                <time dateTime=''>
                    Publicado há 1h
                </time>
            </header>
        </article>
    )
}