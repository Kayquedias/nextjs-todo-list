import styles from './styles.module.scss'

type CheckBoxProps = {
  label: string
  id: string
}

export function CheckBox({ label, id }: CheckBoxProps) {
  return (
    <div className={styles['checkbox-wrapper-28']}>
      <input
        id={id}
        type="checkbox"
        className={styles['promoted-input-checkbox']}
      />

      <svg>
        <use xlinkHref="#checkmark-28" />
      </svg>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
        <symbol id="checkmark-28" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeMiterlimit="10"
            fill="none"
            d="M22.9 3.7l-15.2 16.6-6.6-7.1"
          />
        </symbol>
      </svg>
    </div>
  )
}
