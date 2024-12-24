import styles from './logo.module.css'

export default function Logo() {
  return (
		<div className={styles.logo_container}>
			<span className={styles.logo_title}>
				Юрий Панкратов
			</span>
			<span className={styles.logo_subtitle}>
				технический писатель
			</span>
	</div>
  )
}