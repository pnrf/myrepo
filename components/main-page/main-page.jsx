import styles from './main-page.module.css'

export default function MainPage() {
  return (
		<div>
			<section className={styles['hero-section']}>
				<div className={styles['hero-section__content']}>
					<div className={styles['hero-section__text-wrapper']}>
						<h1 className={styles['hero-section__title']}>Юрий Панкратов</h1>
						<h2 className={styles['hero-section__subtitle']}>технический писатель</h2>
						<p className={styles['hero-section__text']}>В этом репозитории собираю информацию <a className={styles['link']} href="/about/">о себе</a>, <a className={styles['link']} href="/portfolio/">портфолио</a>, <a className={styles['link']} href="/knowledge-base/">базу знаний</a> и <a className={styles['link']} href="/blog/">блог</a>, чтобы показать свои умения и навыки на реальных примерах.</p>
						<p className={styles['hero-section__text']}>Это позволяет мне эффективнее общаться с рекрутерами и тимлидами в процессе поиска работы. Повышает шансы на успех.</p>
					</div>
					<div className={styles['hero-section__buttons']}>
						<a className={styles['hero-section__button']} href="https://drive.google.com/file/d/1gNXqrc9GDDaJc6u33emLr8UHspgW9PDH/view?usp=share_link" target="_blank">Резюме ↗</a>
						<a className={styles['hero-section__button']} href="/about/contacts">Контакты</a>
					</div>
				</div>
				<div className={styles['hero-section__image-wrapper']}>
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
				<div className={styles['portfolio-section__projects']}>
					<h2 className={styles['portfolio-section__card-title']}>Проекты</h2>
					<div className={styles['portfolio-section__content']}>
						<div className={styles['portfolio-section__text-wrapper']}>
							<ul className={styles['portfolio-section__card-list']}>
								<li><a className={styles['link']} href="#">Разработка ИИ-сервисов для лучевой диагностики</a></li>
								<li><a className={styles['link']} href="#">Автоматизация процессов формирования датасетов</a></li>
								<li><a className={styles['link']} href="#">Оптимизация процессов документирования ПО</a></li>
								<li><a className={styles['link']} href="#">Разработка медицинской информационной системы</a></li>
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
				<div className={styles['portfolio-section__docs']}>
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
			<h2 className={styles['section__title']}>База знаний</h2>
			<section className={styles['portfolio-section__kb-cards']}>
				<div className={`${styles['portfolio-section__docs']} ${styles['portfolio-section__docs_size-small']}`}>
					<h2 className={styles['portfolio-section__card-title']}>Концепции</h2>
					<div className={styles['portfolio-section__content']}>
						<div className={styles['portfolio-section__text-wrapper']}>
							<ul className={styles['portfolio-section__card-list']}>
								<li><a className={styles['link']} href="/knowledge-base/concepts/bem">БЭМ</a></li>
								<li><a className={styles['link']} href="/knowledge-base/concepts/bpmn">BPMN</a></li>
								<li><a className={styles['link']} href="/knowledge-base/concepts/docs-as-code">Docs as Code</a></li>
								<li><a className={styles['link']} href="/knowledge-base/concepts/pixel-perfect">Pixel Perfect</a></li>
								<li><a className={styles['link']} href="/knowledge-base/concepts/rest-api">REST API</a></li>
								<li><a className={styles['link']} href="/knowledge-base/concepts/uml">UML</a></li>
							</ul>
						</div>
						<a href="/knowledge-base#концепции">Все концепции →</a>
					</div>
				</div>
				<div className={`${styles['portfolio-section__docs']} ${styles['portfolio-section__docs_size-small']}`}>
					<h2 className={styles['portfolio-section__card-title']}>Технологии</h2>
					<div className={styles['portfolio-section__content']}>
						<div className={styles['portfolio-section__text-wrapper']}>
							<ul className={styles['portfolio-section__card-list']}>
								<li><a className={styles['link']} href="/knowledge-base/technologies/css">CSS</a></li>
								<li><a className={styles['link']} href="/knowledge-base/technologies/html">HTML</a></li>
								<li><a className={styles['link']} href="/knowledge-base/technologies/javascript">JavaScript</a></li>
								<li><a className={styles['link']} href="/knowledge-base/technologies/markdown">Markdown</a></li>
								<li><a className={styles['link']} href="/knowledge-base/technologies/nextjs">Next.js</a></li>
								<li><a className={styles['link']} href="/knowledge-base/technologies/nextra">Nextra</a></li>
								<li><a className={styles['link']} href="/knowledge-base/technologies/reactjs">React</a></li>
								<li><a className={styles['link']} href="/knowledge-base/technologies/typescript">TypeScript</a></li>
							</ul>
						</div>
						<a href="/knowledge-base#технологии">Все технологии →</a>
					</div>
				</div>
				<div className={`${styles['portfolio-section__docs']} ${styles['portfolio-section__docs_size-small']}`}>
					<h2 className={styles['portfolio-section__card-title']}>Сервисы</h2>
					<div className={styles['portfolio-section__content']}>
						<div className={styles['portfolio-section__text-wrapper']}>
							<ul className={styles['portfolio-section__card-list']}>
								<li><a className={styles['link']} href="/knowledge-base/services/figma">Figma</a></li>
								<li><a className={styles['link']} href="/knowledge-base/services/github">GitHub</a></li>
								<li><a className={styles['link']} href="/knowledge-base/services/obsidian">Obsidian</a></li>
								<li><a className={styles['link']} href="/knowledge-base/services/storybook">Storybook</a></li>
								<li><a className={styles['link']} href="/knowledge-base/services/vs-code">VS Code</a></li>
								<li><a className={styles['link']} href="https://gramota.ru">Грамота ↗</a></li>
							</ul>
						</div>
						<a href="/knowledge-base#технологии">Все сервисы →</a>
					</div>
				</div>
				<div className={`${styles['portfolio-section__docs']} ${styles['portfolio-section__docs_size-small']}`}>
					<h2 className={styles['portfolio-section__card-title']}>Нормативы</h2>
					<div className={styles['portfolio-section__content']}>
						<div className={styles['portfolio-section__text-wrapper']}>
							<ul className={styles['portfolio-section__card-list']}>
								<li><a className={styles['link']} href="/knowledge-base/standards/gost-2">ГОСТ 2 серии (ЕСКД)</a></li>
								<li><a className={styles['link']} href="/knowledge-base/standards/gost-19">ГОСТ 19 серии (ЕСПД)</a></li>
								<li><a className={styles['link']} href="/knowledge-base/standards/gost-34">ГОСТ 34 серии (КСАС)</a></li>
							</ul>
						</div>
						<a href="/knowledge-base#нормативы">Все нормативы →</a>
					</div>
				</div>
				<div className={`${styles['portfolio-section__docs']} ${styles['portfolio-section__docs_size-small']}`}>
					<h2 className={styles['portfolio-section__card-title']}>Примеры доки</h2>
					<div className={styles['portfolio-section__content']}>
						<div className={styles['portfolio-section__text-wrapper']}>
							<ul className={styles['portfolio-section__card-list']}>
								<li><a className={styles['link']} href="https://guides.gosuslugi.ru" target='_blank'>Госуслуги ↗</a></li>
								<li><a className={styles['link']} href="https://github.com/doka-guide/content/blob/main/README.md" target='_blank'>Дока Гайд ↗</a></li>
								<li><a className={styles['link']} href="https://docs.passwork.ru" target='_blank'>Пассворк ↗</a></li>
								<li><a className={styles['link']} href="https://dev.rutoken.ru" target='_blank'>Рутокен ↗</a></li>
								<li><a className={styles['link']} href="https://consta.design/libs/uikit" target='_blank'>Consta UI Kit ↗</a></li>
								<li><a className={styles['link']} href="https://express.ms/docs/" target='_blank'>eXpress ↗</a></li>
								<li><a className={styles['link']} href="https://gram.ax/resources/docs" target='_blank'>Gramax Docs ↗</a></li>
							</ul>
						</div>
						<a href="#">Все примеры →</a>
					</div>
				</div>
				<div className={`${styles['portfolio-section__docs']} ${styles['portfolio-section__docs_size-small']}`}>
					<h2 className={styles['portfolio-section__card-title']}>Дока на заказ</h2>
					<div className={styles['portfolio-section__content']}>
						<div className={styles['portfolio-section__text-wrapper']}>
							<ul className={styles['portfolio-section__card-list']}>
								<li><a className={styles['link']} href="https://documentat.io/" target='_blank'>Documentat.io ↗</a></li>
								<li><a className={styles['link']} href="https://dv-consulting.ru/tech-doc/" target='_blank'>DV Consulting ↗</a></li>
								<li><a className={styles['link']} href="https://protext.su/pro/uslugi/" target='_blank'>Pro Text ↗</a></li>
								<li><a className={styles['link']} href="https://progdoc.ru" target='_blank'>Prog Doc ↗</a></li>
								<li><a className={styles['link']} href="https://rtmtech.ru/services/razrabotka-dokumentatsii-na-po/" target='_blank'>RTM Group ↗</a></li>
								<li><a className={styles['link']} href="https://www.serconsrus.ru/services/tekhnicheskaya-dokumentaciya/" target='_blank'>Sercons ↗</a></li>
								<li><a className={styles['link']} href="https://vdoke.ru/services/" target='_blank'>VDoke ↗</a></li>
							</ul>
						</div>
						<a href="#">Все компании →</a>
					</div>
				</div>
				<div className={`${styles['portfolio-section__docs']} ${styles['portfolio-section__docs_size-small']}`}>
					<h2 className={styles['portfolio-section__card-title']}>Творчество</h2>
					<div className={styles['portfolio-section__content']}>
						<div className={styles['portfolio-section__text-wrapper']}>
							<ul className={styles['portfolio-section__card-list']}>
								<li><a className={styles['link']} href="/knowledge-base/creativity/painting-sketching">Рисунок и скетчинг</a></li>
								<li><a className={styles['link']} href="/knowledge-base/creativity/animation">Анимация 2D и 3D</a></li>
								<li><a className={styles['link']} href="/knowledge-base/creativity/illustration-children-books">Детская иллюстрация</a></li>
								<li><a className={styles['link']} href="/knowledge-base/creativity/wood-carving">Резьба по дереву</a></li>
							</ul>
						</div>
						<a href="#">Подробнее →</a>
					</div>
				</div>
				<div className={`${styles['portfolio-section__docs']} ${styles['portfolio-section__docs_size-small']}`}>
					<h2 className={styles['portfolio-section__card-title']}>Книги</h2>
					<div className={styles['portfolio-section__content']}>
						<div className={styles['portfolio-section__text-wrapper']}>
							<ul className={styles['portfolio-section__card-list']}>
								<li><a className={styles['link']} href="/knowledge-base/books/writing">Писательство</a></li>
								<li><a className={styles['link']} href="/knowledge-base/books/classical-literature">Классическая литература</a></li>
								<li><a className={styles['link']} href="/knowledge-base/books/science-fiction-fantasy">Фантастика и фэнтези</a></li>
								<li><a className={styles['link']} href="/knowledge-base/books/motivation">Смысл жизни и мотивация</a></li>
								<li><a className={styles['link']} href="/knowledge-base/books/work-life-balance">Баланс жизни и работы</a></li>
								<li><a className={styles['link']} href="/knowledge-base/books/personal-effectiveness">Личная эффективность</a></li>
							</ul>
						</div>
						<a href="#">Все книги →</a>
					</div>
				</div>
				<div className={`${styles['portfolio-section__docs']} ${styles['portfolio-section__docs_size-small']}`}>
					<h2 className={styles['portfolio-section__card-title']}>Синема</h2>
					<div className={styles['portfolio-section__content']}>
						<div className={styles['portfolio-section__text-wrapper']}>
							<ul className={styles['portfolio-section__card-list']}>
								<li><a className={styles['link']} href="/knowledge-base/cinema/cartoons">Мульфильмы</a></li>
								<li><a className={styles['link']} href="/knowledge-base/cinema/national-fims">Отчественные фильмы</a></li>
								<li><a className={styles['link']} href="/knowledge-base/cinema/fiction">Фантастика и космос</a></li>
								<li><a className={styles['link']} href="/knowledge-base/cinema/comedies-romance">Комедии и романтика</a></li>
								<li><a className={styles['link']} href="/knowledge-base/cinema/doramas">Дорамы</a></li>
							</ul>
						</div>
						<a href="#">Весь список →</a>
					</div>
				</div>
				<div className={`${styles['portfolio-section__docs']} ${styles['portfolio-section__docs_size-small']}`}>
					<h2 className={styles['portfolio-section__card-title']}>О сайте</h2>
					<div className={styles['portfolio-section__content']}>
						<div className={styles['portfolio-section__text-wrapper']}>
							<ul className={styles['portfolio-section__card-list']}>
								<li><a className={styles['link']} href="/knowledge-base/about-website/rules">Правила сайта</a></li>
								<li><a className={styles['link']} href="/knowledge-base/about-website/content-licence">Лицензия на контент</a></li>
								<li><a className={styles['link']} href="/knowledge-base/about-website/personal-data">Обработка данных</a></li>
								<li><a className={styles['link']} href="/knowledge-base/about-website/tech-settings">Технические настройки</a></li>
								<li><a className={styles['link']} href="/knowledge-base/about-website/yandex-analytics">Яндекс-аналитика</a></li>
								<li><a className={styles['link']} href="/knowledge-base/about-website/google-analytics">Google-аналитика</a></li>
							</ul>
						</div>
						<a href="#">Все детали →</a>
					</div>
				</div>
			</section>
			<section className={styles['blog-section']}>
				<h2 className={styles['section__title']}>Блог</h2>
			</section>
		</div>
  )
}