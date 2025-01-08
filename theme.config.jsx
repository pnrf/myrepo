import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
import Avatar from './components/avatar/avatar.js'
import Logo from './components/logo/logo.js'

export default {
  head() {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://www.myrepo.ru' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
 
    return (
      <>
				<meta name="yandex-verification" content="bb075df507c3b509" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'Мой репозиторий'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'Персональный сайт технического писателя. Портфолио для поиска работы'}
        />
      </>
    )
  },
	logo: (
    <>
			<Avatar />
			<Logo />
    </>
  ),
	project: {
    link: 'https://github.com/pnrf',
  },
	search: {
		placeholder: 'Поиск по сайту...'
	},
	chat: {
    link: 'https://t.me/pnrf_tg',
    icon: (
			<svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="16" cy="16" r="14" fill="url(#paint0_linear_87_7225)"></circle> <path d="M22.9866 10.2088C23.1112 9.40332 22.3454 8.76755 21.6292 9.082L7.36482 15.3448C6.85123 15.5703 6.8888 16.3483 7.42147 16.5179L10.3631 17.4547C10.9246 17.6335 11.5325 17.541 12.0228 17.2023L18.655 12.6203C18.855 12.4821 19.073 12.7665 18.9021 12.9426L14.1281 17.8646C13.665 18.3421 13.7569 19.1512 14.314 19.5005L19.659 22.8523C20.2585 23.2282 21.0297 22.8506 21.1418 22.1261L22.9866 10.2088Z" fill="white"></path> <defs> <linearGradient id="paint0_linear_87_7225" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse"> <stop stopColor="#37BBFE"></stop> <stop offset="1" stopColor="#007DBB"></stop> </linearGradient> </defs> </g></svg>
    )
  },
	sidebar: {
		defaultMenuCollapseLevel: 1,
		autoCollapse: true
	},
	toc: {
		title: "На странице",
		backToTop: "Прокрутить вверх",
		extraContent: (
			<>
				<h3 style={{margin: "20px 0", fontWeight: "600", lineHeight: "20px"}}>Об авторе</h3>
					<p style={{fontSize: "12px"}}>С 2023 г. <a style={{paddingTop: "6px", color: "#3b82f6"}} href="https://www.myrepo.ru">работаю</a> техническим писателем в ИТ.</p>
					<p style={{fontSize: "12px"}}>Разрабатываю <a style={{paddingTop: "6px", color: "#3b82f6"}} href="https://www.myrepo.ru/portfolio">документацию</a> по программным продуктам, пишу тексты для интерфейсов и создаю контент для баз знаний.</p>
					<p style={{fontSize: "12px"}}>В своем <a style={{paddingTop: "6px", color: "#3b82f6"}} href="https://www.myrepo.ru/blog">блоге</a> делюсь мыслями о профессиональных навыках.</p>
					<p style={{fontSize: "12px"}}>В <a style={{paddingTop: "6px", color: "#3b82f6"}} href="https://www.myrepo.ru/knowledge-base">базе знаний</a> кратко описываю технологии, с которыми довелось поработать.</p>
			</>
		)
	},
	editLink: { 
		component: null
	},
	feedback: {
		content: null
	},
	themeSwitch: {
    useOptions() {
      return {
        light: 'Светлая тема',
        dark: 'Темная тема',
        system: 'Системная тема'
      }
    }
  },
	faviconGlyph: '🐀',
	footer: {
		content: (
			<div style={{width: '100%', display: 'flex', alignItems: 'baseline', flexWrap: 'wrap', gap: '60px'}}>
				<div>
					<p style={{ fontSize: '.8em', lineHeight: '1.2em', color: '#647F94' }}>Myrepo.ru – сайт-портфолио технического писателя</p>
					<p style={{ paddingBottom: '10px', fontSize: '.8em', lineHeight: '1.2em', color: '#647F94' }}>© 2024-{new Date().getFullYear()}{', Панкратов Ю.А.'} {' Все права защищены'} </p>
					<p style={{ fontSize: '.8em', lineHeight: '1.2em', color: '#647F94' }}>
						Сайт работает на <a href="https://github.com" target="_blank"> Github</a>, <a href="https://vercel.com" target="_blank">Vercel</a>, <a href="https://react.dev" target="_blank"> React</a>, <a href="https://nextjs.org" target="_blank"> Next.js</a> и <a href="https://nextra.site" target="_blank"> Nextra</a>
					</p>
					<p style={{paddingBottom: '10px', fontSize: '.8em', lineHeight: '1.2em', color: '#647F94' }}>Применяются сервисы и технологии Яндекса и Google</p>
					<p style={{ fontSize: '.8em', lineHeight: '1.2em', color: '#647F94' }}>Возрастные ограничения и применимое право:</p>
					<div style={{display: 'flex', gap: '10px'}}>
						<span style={{display: 'inline-block', margin: "20px 0", padding: "10px", border: '1px solid rgb(170, 195, 214)', borderRadius: '50%', backgroundColor: '#647F94', color: 'white'}}>18+</span>
						<span style={{display: 'inline-block', margin: "20px 0", padding: "10px", border: '1px solid rgb(170, 195, 214)', borderRadius: '50%', color: '#647F94'}}>RU</span>
					</div>
				</div>
			</div>
		)
  },
	banner: {
    key: 'privacy-warning',
    content: (
      <p>
				❄️ С Новым годом и Рождеством 2025! 🎉🌲⛄
        {/* ⚙️ Сайт находится в стадии разработки. */}
      </p>
    )
  }
}