import styles from './IconWithText.module.css';
import type { LucideIcon } from 'lucide-react';

interface IconWithTextProps {
    icon: LucideIcon
    text: string
}

export default function IconWithText({icon: Icon, text}: IconWithTextProps) {
    return(
        <span className={styles.iconWithText}>
            <Icon size={14} aria-hidden="true" />{" "}
            {text}
        </span>
    )
}
