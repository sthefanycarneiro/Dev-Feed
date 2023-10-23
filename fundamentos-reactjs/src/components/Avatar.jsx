import styles from './Avatar.module.css';

export function Avatar({ hasBorder = true , src} ) {

    /*Outra forma de fazer:
    Se a propriedade hasBorder for diferente de false, ou seja, tem borda
    const hasBorder = props.hasBorder != false; */

    return (
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar } 
            src={src}
        />
    )
}