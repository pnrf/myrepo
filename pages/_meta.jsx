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
			breadcrumb: true,
			sidebar: true
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
	blog: {
		title: 'Блог',
		theme: {
			breadcrumb: true,
			sidebar: false
		}
	}
}