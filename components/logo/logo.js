import styles from './logo.module.css'

export default function Logo() {
  return (
		<div className={styles.logo_container}>
			<span className={styles.logo_title}>
				Мой репозиторий
			</span>
			<span className={styles.logo_subtitle}>
				сайт технического писателя
			</span>
	</div>
  )
}