import styles from './Post.module.css';

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

                <time title="11 de Outubro às 20:17" dateTime='2023-10-11 20:17:30'>Publicado há 1h</time>
            </header>
            <div className={styles.content}> 
            <p>Fala galeraa 👋</p>
            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
            <p>👉 <a href="">jane.design/doctorcare</a></p>
            <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
            </div>
        </article>
    )
}