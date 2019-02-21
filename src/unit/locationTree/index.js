export default {
    'product-center': {
        name: '产品中心',
        regex: /^\/product-center/g,
        isLink: true,
        children: {
            product: {
                name: '产品详情',
                regex: /^\/product-center\/product\/[a-z0-9]+/g,
                isLink: false,
                }
        }
    },
    'news-center': {
        name: '新闻中心',
        regex: /^\/news-center/g,
        isLink: true,
        children: {
            news: {
                name: '新闻详情',
                regex: /^\/news-center\/news\/[a-z0-9]+/g,
                isLink: false,
            }
        }
    },
    'cooperation': {
        name: '互动合作',
        regex: /^\/cooperation/g,
        isLink: true,
    },
    'info-feedback': {
        name: '信息反馈',
        regex: /^\/info-feedback/g,
        isLink: true,
    },
    'introduction': {
        name: '关于我们',
        regex: /^\/introduction/g,
        isLink: true,
    }
}