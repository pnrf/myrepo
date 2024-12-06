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
    link: 'https://github.com/pnrf/myrepo',
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
		backToTop: "Прокрутить вверх"
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
      <span>
        <p style={{ paddingBottom: '10px', fontSize: '.8em', lineHeight: '1.2em', color: '#647F94' }}>©{' Myrepo.ru'}, {new Date().getFullYear()}. {' Все права защищены.'} </p>
				<p style={{ paddingBottom: '10px', fontSize: '.8em', lineHeight: '1.2em', color: '#647F94' }}>
					Сайт работает на <a href="https://github.com" target="_blank"> Github</a>, <a href="https://vercel.com" target="_blank">Vercel</a>, <a href="https://nextjs.org" target="_blank"> Next.js</a> и <a href="https://nextra.site" target="_blank"> Nextra</a>
				</p>
				<s />
      </span>
    )
  }
}