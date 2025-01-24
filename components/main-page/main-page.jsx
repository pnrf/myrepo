import styles from './main-page.module.css'

export default function MainPage() {
  return (
		<div className={styles.main_container}>
			<div>
				<section className={styles.hero_section}>
					<h1>Сайт-портфолио технического писателя</h1>
					<h2>для поиска работы</h2>
					<p>Привет! Меня зовут Юрий. Я технический писатель.</p>
					<p>На этом сайте собрал краткую информацию о себе, портфолио, базу знаний и блог, чтобы показать свои умения и навыки на реальных примерах. Это позволяет эффективнее общаться с рекрутерами и тимлидами в процессе поиска работы. Экономит время.</p>
					<a href='https://www.myrepo.ru/blog'>Мое резюме</a>
					<a href='https://www.myrepo.ru/about'>Обо мне</a>
				</section>
				<section className={styles.feature_section}>
					<div>
						<ul>
							<li></li>
						</ul>
					</div>
				</section>
			</div>
		</div>
  )
}