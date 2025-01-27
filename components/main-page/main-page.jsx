import styles from './main-page.module.css'
import { MySliderPhotos } from '../my-slider/'

export default function MainPage() {
  return (
		<div className={styles.main_container}>
			<section style={{margin: "60px 0", display: "flex", flexWrap: "wrap-reverse"}}>
				<div style={{maxWidth: "620px", margin: "0 50px 0 0"}}>
					{/* <p style={{}}>Всем привет!</p> */}
					<h1 style={{fontSize: "60px", fontWeight: "700", lineHeight: "1.2"}}>Юрий Панкратов</h1>
					<h2 style={{fontSize: "40px", color: "#647F94"}}>технический писатель</h2>
					<p style={{marginTop: "1.5em", lineHeight: "1.75em"}}>На этом сайте собрал краткую информацию <a style={{color: "rgb(0, 107, 230)", textDecoration: "underline"}} href="/about/">о себе</a>, <a style={{color: "rgb(0, 107, 230)", textDecoration: "underline"}} href="/portfolio/">портфолио</a>, <a style={{color: "rgb(0, 107, 230)", textDecoration: "underline"}} href="/knowledge-base/">базу знаний</a> и <a style={{color: "rgb(0, 107, 230)", textDecoration: "underline"}} href="/blog/">блог</a>, чтобы показать свои умения и навыки на реальных примерах. </p>
					<p style={{marginTop: "1.5em", lineHeight: "1.75em"}}>Это позволяет эффективнее общаться с рекрутерами и тимлидами в процессе поиска работы. Экономит время.</p>
					<div style={{display: "flex", gap: "10px", marginTop: "1.5em", lineHeight: "1.75em"}}>
						<a style={{textAlign: "center", display: "inline-block", textDecoration: "none", border: "1px solid #647F94", borderRadius: "8px", padding: ".75rem 1.5rem", marginTop: ".5rem", boxShadow: "0 1px 1px #00387838"}} href="https://drive.google.com/file/d/1TGSSwcalFYnvuWGaRpjOszSLqf-qom1H/view?usp=sharing">Скачать резюме <span>↗</span></a>
					</div>
				</div>
				<div style={{margin: "20px auto 0 50px"}}>
					<MySliderPhotos />
				</div>
			</section>
			<h2 style={{fontSize: "40px", color: "#647F94", paddingBottom: "20px"}}>Портфолио</h2>
			<section style={{display: "grid", gridTemplateColumns: "2fr 3fr auto", gap: "2em"}}>
				<div style={{display: "flex", flexDirection: "column", backgroundColor: "#647F94", color: "whitesmoke", border: "1px solid #647F94", borderRadius: "8px", padding: ".75rem 1.5rem", marginTop: ".5rem"}}>
					<h2 style={{fontSize: "1.75em", fontWeight: "600", lineHeight: "1.75em", paddingBottom: "8px"}}>Обо мне</h2>
					<div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%"}}>
						<div style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
							<p style={{paddingBottom: "20px"}}>Работаю в ИТ с 2023 года.</p> 
							<p>Разрабатываю техническую и юридическую документацию по программным продуктам, пишу тексты для интерфейсов и создаю контент для корпоративных баз знаний. Изучаю ГОСТ 19 и 34 серий. Общаюсь с сообществом.</p>
							<br />
							<br />
						</div>
						<a href="/portfolio/projects">Подробнее <span>→</span></a>
					</div>
				</div>
				<div style={{display: "flex", flexDirection: "column", border: "1px solid #647F94", borderRadius: "8px", padding: ".75rem 1.5rem", marginTop: ".5rem"}}>
					<h2 style={{fontSize: "1.75em", fontWeight: "600", lineHeight: "1.75em", paddingBottom: "8px"}}>Проекты</h2>
					<div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%"}}>
						<div style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
							<ul style={{listStyle: "inside"}}>
								<li><a href="./portfolio/projects/registratsiya-rossiyskogo-po-v-reyestre-mintsifry.mdx">Регистрация российского ПО в реестре Минцифры</a></li>
								<li><a href="./portfolio/projects/registratsiya-rossiyskogo-po-v-reyestre-mintsifry.mdx">Регистрация программ для ЭВМ в Роспатенте</a></li>
								<li><a href="./portfolio/projects/registratsiya-rossiyskogo-po-v-reyestre-mintsifry.mdx">Регистрация ПО в Росздравнадзоре</a></li>
								<li><a href="./portfolio/projects/registratsiya-rossiyskogo-po-v-reyestre-mintsifry.mdx">Составление заявок на получение грантов</a></li>
								<li><a href="./portfolio/projects/registratsiya-rossiyskogo-po-v-reyestre-mintsifry.mdx">Составление документов для участия в госзакупках</a></li>
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