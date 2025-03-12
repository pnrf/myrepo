import styles from './main-page.module.css'

export default function MainPage() {
  return (
		<div className={styles.main_container}>
			<section className={styles['hero-section']}>
				<div className={styles['hero-section__text-wrapper']}>
					<div>
						<h1 className={styles['hero-section__title']}>Юрий Панкратов</h1>
						<h2 className={styles['hero-section__subtitle']}>технический писатель</h2>
						<p className={styles['hero-section__text']}>На этом сайте собрал краткую информацию <a className={styles['link']} href="/about/">о себе</a>, <a className={styles['link']} href="/portfolio/">портфолио</a>, <a className={styles['link']} href="/knowledge-base/">базу знаний</a> и <a className={styles['link']} href="/blog/">блог</a>, чтобы показать свои умения и навыки на реальных примерах. </p>
						<p className={styles['hero-section__text']}>Это позволяет эффективнее общаться с рекрутерами и тимлидами в процессе поиска работы. Экономит время.</p>
					</div>
					<div>
						<a className={styles['hero-section__button']} href="https://drive.google.com/file/d/19OEJ1l-lD0T91tixJFyk0I11RUvQTsK7/view?usp=share_link" target="_blank">Скачать резюме ↗</a>
					</div>
				</div>
				<div>
					<img className={styles['hero-section__image']} src="https://github.com/pnrf/myrepo/blob/main/images/portfolioPics/hero-section/yup-hero-section-02.png?raw=true" alt="Фоновое фото" />
				</div>
			</section>
			<h2 className={styles['section__title']}>Портфолио</h2>
			<section className={styles['portfolio-section']}>
				<div className={styles['portfolio-section__about']}>
					<h2 className={styles['portfolio-section__card-title']}>Обо мне</h2>
					<div className={styles['portfolio-section__content']}>
						<div className={styles['portfolio-section__text-wrapper']}>
							<p className={styles['portfolio-section__text']}>Работаю в ИТ с 2023 года.</p> 
							<p className={styles['portfolio-section__text']}>Разрабатываю техническую и юридическую документацию по программным продуктам.</p>
							<p className={styles['portfolio-section__text']}>Пишу тексты для интерфейсов и создаю контент для корпоративных баз знаний.</p>
							<p className={styles['portfolio-section__text']}>Изучаю ГОСТ 19 и 34 серий. Общаюсь с сообществом.</p>
						</div>
						<a className={styles['portfolio-section__button']} href="/about">Подробнее →</a>
					</div>
				</div>
				<div className={styles['portfolio-section__white-card']}>
					<h2 className={styles['portfolio-section__card-title']}>Проекты</h2>
					<div className={styles['portfolio-section__content']}>
						<div className={styles['portfolio-section__text-wrapper']}>
							<ul className={styles['portfolio-section__card-list']}>
								<li><a className={styles['link']} href="/portfolio/projects/registratsiya-rossiyskogo-po-v-reyestre-mintsifry">Регистрация ПО в реестре Минцифры</a></li>
								<li><a className={styles['link']} href="/portfolio/projects/registratsiya-programm-dlya-evm-v-rospatente">Регистрация программ для ЭВМ в Роспатенте</a></li>
								<li><a className={styles['link']} href="/portfolio/projects/registratsiya-po-v-roszdravnadzore">Регистрация ПО в Росздравнадзоре</a></li>
								<li><a className={styles['link']} href="/portfolio/projects/sostavleniye-zayavok-na-polucheniye-grantov">Составление заявок на получение грантов</a></li>
								<li><a className={styles['link']} href="/portfolio/projects/sostavleniye-dokumentov-dlya-uchastiya-v-goszakupkakh">Составление документов для госзакупкок</a></li>
							</ul>
						</div>
						<a href="/portfolio/projects">Все проекты →</a>
					</div>
				</div>
				<div className={styles['portfolio-section__white-card']}>
					<h2 className={styles['portfolio-section__card-title']}>Документы</h2>
					<div className={styles['portfolio-section__content']}>
						<div className={styles['portfolio-section__text-wrapper']}>
							<ul className={styles['portfolio-section__card-list']}>
								<li><a href="#">Руководство пользователя (ГОСТ 19)</a></li>
								<li><a href="#">Технические условия на ПО (ГОСТ 19)</a></li>
								<li><a href="#">Бриф для составления ТЗ на разработку ИИ-сервиса</a></li>
								<li><a href="#">Краткое описание программного комплекса</a></li>
								<li><a href="#">Назначение использования ПО и перечень бизнес-функций</a></li>
								<li><a href="#">Описание ПО для подачи заявки на грант</a></li>
							</ul>
						</div>
						<a href="/portfolio/documents">Все документы →</a>
					</div>
				</div>
			</section>
			<section className={styles['blog-section']}>
				<h2 className={styles['section__title']}>Блог</h2>
			</section>
		</div>
  )
}