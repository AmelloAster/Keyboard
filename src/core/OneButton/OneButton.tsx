import { sign } from 'crypto';
import styles from './OneButton.module.scss';
export interface OneButtonProps {
  keycode: string;
  size?: number;
  modifiers?: Modifier[];
  description?: string;
  hidden?: boolean;
}

export enum Modifier {
  CMD,
  CTRL,
  SHIFT,
  ALT,
}

const OneButton: React.FC<OneButtonProps> = (props) => {
  const buttonSize: (size?: number) => string = (size) => {
    switch (size) {
      case 20: return styles.size20
      case 25: return styles.size25
      case 30: return styles.size30
      case 40: return styles.size40
      case 50: return styles.size50
      case 100: return styles.size100
      default: return styles.size10
    }
  }

  const hasKeyMapping: (description?: string) => string | null = description => {
    if ( description == null ) return null
    return styles.hasKeyMapping
  }

  const calculateStyle: (size?: number, hidden?: boolean) => string = (size, hidden) => {
    return `
    ${(props.hidden == true) ? styles.hidden : null} 
    ${buttonSize(props.size)}
    ${hasKeyMapping(props.description)}
    `
  }

  return (
    <div className={calculateStyle(props.size, props.hidden)}>
      <span>{props.keycode}</span>
    </div>
  )
}

export { OneButton };
