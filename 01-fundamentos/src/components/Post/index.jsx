import { Comment } from '../Comment/index';
import { Avatar } from '../Avatar/index';

import styles from './styles.module.css'

export const Post = () => {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar 
                        srcImg="https://avatars.githubusercontent.com/u/15836394?v=4" 
                    />
                
                    <div className={styles.authorInfo}>
                        <strong>Alexandre Soares</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='02 de Fevereiro as 08:30h' dateTime="2024-02-02 08:30:33">Publicado ha 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. 
                O nome do projeto é DoctorCare 🚀</p>

                <p><a href="#">👉{' '}jane.design/doctorcare</a></p>

                <p>
                    <a href="#">#novoprojeto</a>{' '}
                    <a href="#">#nlw</a>{' '}
                    <a href="#">#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe um feedback</strong>

                <textarea placeholder='Deixe um comentario' />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}

