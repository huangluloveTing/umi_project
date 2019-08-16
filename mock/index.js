import Mock , {Random} from 'mockjs';

export default {
    '/api/user':(req , res) => {
        res.send({
            name:'hhhh',address:'tjzx'
        })
    },
    '/api/list':  Mock.mock({
        'list|100': [{ name: '@city', 'value|1-100': 50, 'type|0-2': 1 }],
      }),
    '/api/tags': Mock.mock({
        'string|110':'afkaf'
    }),
    '/api/date':Mock.mock({
        date:'@date(yyyy/MM/dd)'
    }),
    '/api/img':Mock.mock({
        img:Random.image('200x100')
    }),
    '/api/country': Mock.mock({
        'list|100':[{name:'@cname()' , address:'@county(true)'}]
    })
}