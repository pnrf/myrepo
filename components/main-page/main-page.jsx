import styles from './main-page.module.css'

export default function MainPage() {
  return (
		<div className={styles.main_container}>
			<section className={styles['hero-section']}>
				<div className={styles['hero-section__text-wrapper']}>
					<div>
						<h1 className={styles['hero-section__title']}>Юрий Панкратов</h1>
						<h2 className={styles['hero-section__subtitle']}>технический писатель</h2>
						<p className={styles['hero-section__text']}>На этом сайте собрал краткую информацию <a className={styles['hero-section__link']} href="/about/">о себе</a>, <a className={styles['hero-section__link']} href="/portfolio/">портфолио</a>, <a className={styles['hero-section__link']} href="/knowledge-base/">базу знаний</a> и <a className={styles['hero-section__link']} href="/blog/">блог</a>, чтобы показать свои умения и навыки на реальных примерах. </p>
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
			<h2 style={{fontSize: "40px", color: "#647F94", paddingBottom: "20px"}}>Портфолио</h2>
			<section style={{display: "grid", gridTemplateColumns: "2fr 3fr auto", gap: "2em"}}>
				<div style={{display: "flex", flexDirection: "column", backgroundColor: "#647F94", color: "whitesmoke", border: "1px solid #647F94", borderRadius: "8px", padding: ".75rem 1.5rem", marginTop: ".5rem"}}>
					<h2 style={{fontSize: "1.75em", fontWeight: "600", lineHeight: "1.75em", paddingBottom: "8px"}}>Обо мне</h2>
					<div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%"}}>
						<div style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
							<p style={{paddingBottom: "20px"}}>Работаю в ИТ с 2023 года.</p> 
							<p style={{paddingBottom: "20px"}}>Разрабатываю техническую и юридическую документацию по программным продуктам.</p>
							<p style={{paddingBottom: "20px"}}>Пишу тексты для интерфейсов и создаю контент для корпоративных баз знаний.</p>
							<p style={{paddingBottom: "40px"}}>Изучаю ГОСТ 19 и 34 серий. Общаюсь с сообществом.</p>
						</div>
						<a href="/about">Подробнее <span>→</span></a>
					</div>
				</div>
				<div style={{display: "flex", flexDirection: "column", border: "1px solid #647F94", borderRadius: "8px", padding: ".75rem 1.5rem", marginTop: ".5rem"}}>
					<h2 style={{fontSize: "1.75em", fontWeight: "600", lineHeight: "1.75em", paddingBottom: "8px"}}>Проекты</h2>
					<div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%"}}>
						<div style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
							<ul style={{listStyle: "inside"}}>
								<li><a href="/portfolio/projects/registratsiya-rossiyskogo-po-v-reyestre-mintsifry">Регистрация российского ПО в реестре Минцифры</a></li>
								<li><a href="/portfolio/projects/registratsiya-programm-dlya-evm-v-rospatente">Регистрация программ для ЭВМ в Роспатенте</a></li>
								<li><a href="/portfolio/projects/registratsiya-po-v-roszdravnadzore">Регистрация ПО в Росздравнадзоре</a></li>
								<li><a href="/portfolio/projects/sostavleniye-zayavok-na-polucheniye-grantov">Составление заявок на получение грантов</a></li>
								<li><a href="/portfolio/projects/sostavleniye-dokumentov-dlya-uchastiya-v-goszakupkakh">Составление документов для участия в госзакупках</a></li>
							</ul>
						</div>
						<a href="/portfolio/projects">Все проекты <span>→</span></a>
					</div>
				</div>
				<div style={{display: "flex", flexDirection: "column", border: "1px solid #647F94", borderRadius: "8px", padding: ".75rem 1.5rem", marginTop: ".5rem"}}>
					<h2 style={{fontSize: "1.75em", fontWeight: "600", lineHeight: "1.75em", paddingBottom: "8px"}}>Документы</h2>
					<div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%"}}>
						<div style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
							<ul style={{listStyle: "inside"}}>
							<li><a href="#">Руководство пользователя (ГОСТ 19)</a></li>
							<li><a href="#">Технические условия на ПО (ГОСТ 19)</a></li>
							<li><a href="#">Бриф для составления ТЗ на разработку ИИ-сервиса</a></li>
							<li><a href="#">Краткое описание программного комплекса</a></li>
							<li><a href="#">Назначение использования ПО и перечень бизнес-функций</a></li>
							<li><a href="#">Описание ПО для подачи заявки на грант</a></li>
							</ul>
						</div>
						<a href="/portfolio/documents">Все документы <span>→</span></a>
					</div>
				</div>
			</section>
			<h2 style={{fontSize: "40px", color: "#647F94", marginTop: "40px"}}>Блог</h2>
		</div>
  )
}