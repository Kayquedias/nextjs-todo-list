import { ButtonHTMLAttributes, ReactNode } from 'react'

import buttonStyles from './styles.module.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
}

export function Button({ children, type, className, ...rest }: ButtonProps) {
  const styles = className
    ? `${buttonStyles.button} ${className}`
    : buttonStyles.button

  return (
    <button type={type ?? 'button'} className={styles} {...rest}>
      {children}
    </button>
  )
}
