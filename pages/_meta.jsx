export default {
	'*': {
		type: "page"
	},
	index: {
		title: 'Главная',
		display: 'hidden'
	},
	about: {
		title: 'Обо мне',
		theme: {
			breadcrumb: false,
			sidebar: false
		}
	},
	portfolio: {
    title: 'Портфолио',
    theme: {
      breadcrumb: true
    }
  },
	'knowledge-base': {
    title: 'База знаний',
    theme: {
      breadcrumb: true
    }
  },
	blog: 'Блог'
}