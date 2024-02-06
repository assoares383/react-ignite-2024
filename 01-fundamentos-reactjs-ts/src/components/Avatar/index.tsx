import { ImgHTMLAttributes } from 'react';
import styles from './styles.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
    srcImg: string;
}

export const Avatar = ({ hasBorder = true, srcImg, ...props}: AvatarProps) => {
    return (
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            src={srcImg}
            {...props}
        />
    )
}