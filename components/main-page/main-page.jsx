import styles from './main-page.module.css'

export default function MainPage() {
  return (
		<div className={styles.main_container}>
			<section className={styles['hero-section']}>
				<div className={styles['hero-section__text-wrapper']}>
					<div>
						<h1 className={styles['hero-section__title']}>Юрий Панкратов</h1>
						<h2 className={styles['hero-section__subtitle']}>технический писатель</h2>
						<p className={styles['hero-section__text']}>На этом сайте собрал краткую информацию <a className={styles['link']} href="/about/">о себе</a>, <a className={styles['link']} href="/portfolio/">портфолио</a>, <a className={styles['link']} href="/knowledge-base/">базу знаний</a> и <a className={styles['link']} href="/blog/">блог</a>, чтобы показать свои умения и навыки на реальных примерах.</p>
						<p className={styles['hero-section__text']}>Это позволяет эффективнее общаться с рекрутерами и тимлидами в процессе поиска работы. Повышает шансы на успех.</p>
					</div>
					<div>
						<a className={styles['hero-section__button']} href="https://drive.google.com/file/d/19OEJ1l-lD0T91tixJFyk0I11RUvQTsK7/view?usp=share_link" target="_blank">Скачать резюме ↗</a>
					</div>
				</div>
				<div>
					<img className={styles['hero-section__image']} src="https://github.com/pnrf/myrepo/blob/main/images/portfolioPics/hero-section/yup-hero-section-02.png?raw=true" alt="Фоновое фото" />
				</div>
			</section>
			<h2 className={styles['section__title']}>Чем занимаюсь</h2>
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
								<li><a className={styles['link']} href="#">Разработка ИИ-сервисов для лучевой диагностики</a></li>
								<li><a className={styles['link']} href="#">Автоматизация процессов формирования датасетов</a></li>
								<li><a className={styles['link']} href="#">Оптимизация процессов документирования ПО</a></li>
								<li><a className={styles['link']} href="#">Проектирование медицинской информационной системы</a></li>
								<li><a className={styles['link']} href="/portfolio/projects/registratsiya-rossiyskogo-po-v-reyestre-mintsifry">Регистрация ПО в реестре Минцифры</a></li>
								<li><a className={styles['link']} href="/portfolio/projects/registratsiya-programm-dlya-evm-v-rospatente">Регистрация программ для ЭВМ в Роспатенте</a></li>
								<li><a className={styles['link']} href="/portfolio/projects/registratsiya-po-v-roszdravnadzore">Регистрация ПО в Росздравнадзоре</a></li>
								<li><a className={styles['link']} href="/portfolio/projects/sostavleniye-zayavok-na-polucheniye-grantov">Участие в конкурсах на получение гранта</a></li>
								<li><a className={styles['link']} href="/portfolio/projects/sostavleniye-dokumentov-dlya-uchastiya-v-goszakupkakh">Подготовка к участию в госзакупках</a></li>
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
								<li><a className={styles['link']} href="/portfolio/documents/rukovodstvo-po-ekspluatatsii-po">Руководство по эксплуатации ПО</a></li>
								<li><a className={styles['link']} href="/portfolio/documents/opisaniye-protsessov-zhiznennogo-tsikla">Описание процессов жизненного цикла</a></li>
								<li><a className={styles['link']} href="/portfolio/documents/opisaniye-funktsionalnykh-kharakteristik">Описание функциональных характеристик ПО</a></li>
								<li><a className={styles['link']} href="/portfolio/documents/obrazets-litsenzionnogo-dogovora">Образец лицензионного договора</a></li>
								<li><a className={styles['link']} href="/portfolio/documents/tekhnicheskiye-usloviya">Технические условия для ПО</a></li>
								<li><a className={styles['link']} href="/portfolio/documents/tekhnicheskiye-zadaniya-na-programmnyy-kompleks">Технические задания на программный комплекс</a></li>
								<li><a className={styles['link']} href="/portfolio/documents/dorozhnaya-karta-po-uchastiyu-v-konkurse">Дорожная карта по участию в конкурсе на грант</a></li>
								<li><a className={styles['link']} href="/portfolio/projects/oformleniye-sbornika-istoriy-tekhpisateley">Сборник историй технических писателей</a></li>
							</ul>
						</div>
						<a href="/portfolio/documents">Все документы →</a>
					</div>
				</div>
			</section>
			<section className={styles['blog-section']}>
				<h2 className={styles['section__title']}>О чём пишу</h2>
			</section>
		</div>
  )
}