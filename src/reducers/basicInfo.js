import * as reducerType from '../unit/reducerType';

const defaultValue = {
    "images": [
        "../../image/img0.jpg",
        "../image/img1.jpg",
        "../image/img2.jpg"
    ],
        "products": [{
            "id": "product1-fff",
            "name": "name1",
            "introduction": "此处是一大段文字描述？",
            "image": "../../image/file0.jpg"
        },{
            "id": "product2-fff",
            "name": "name2",
            "introduction": "此处是一大段文字描述？",
            "image": "../../image/file0.jpg"
        },{
            "id": "product3-fff",
            "name": "很长的名字很长的名字很长的名字很长的名字很长的名字很长的名字很长的名字",
            "introduction": "此处是一大段文字描述？",
            "image": "../../image/file0.jpg"
        },{
            "id": "product4-fff",
            "name": "文字很长未做截断处理",
            "introduction": "此处是一大段文字描述？此处是一大段文字描述？此处是一大段文字描述？此处是一大段文字描述？此处是一大段文字描述？此处是一大段文字描述？此处是一大段文字描述？此处是一大段文字描述？此处是一大段文字描述？此处是一大段文字描述？此处是一大段文字描述？此处是一大段文字描述？此处是一大段文字描述？此处是一大段文字描述？此处是一大段文字描述？此处是一大段文字描述？",
            "image": "../../image/file1.png"
        },{
            "id": "product5-fff",
            "name": "name5",
            "introduction": "此处是一大段文字描述？",
            "image": "../../image/file1.png"
        },{
            "id": "product6-fff",
            "name": "name6",
            "introduction": "此处是一大段文字描述？",
            "image": "../../image/file1.png"
        },{
            "id": "product7-fff",
            "name": "name7",
            "introduction": "此处是一大段文字描述？",
            "image": "../../image/file0.jpg"
        },{
            "id": "product8-fff",
            "name": "name8",
            "introduction": "此处是一大段文字描述？",
            "image": "../../image/file0.jpg"
        },{
            "id": "product9-fff",
            "name": "name9",
            "introduction": "此处是一大段文字描述？",
            "image": "../../image/file0.jpg"
        }],
        "news": [{
            id: "news1-fff",
            title: "新闻标题1",
            content: "此处为内容",
            created: "2019-2-21"
        },{
            id: "news2-fff",
            title: "新闻标题2",
            content: "此处为内容",
            created: "2019-1-21"
        },{
            id: "news3-fff",
            title: "如果是很长的标题，标题未做截断处理",
            content: "此处为内容此处为内容此处为内容此处为内容此处为内容此处为内容此处为内容此处为内容此处为内容此处为内容此处为内容此处为内容此处为内容此处为内容此处为内容此处为内容此处为内容此处为内容此处为内容此处为内容此处为内容此处为内容此处为内容此处为内容此处为内容此处为内容此处为内容此处为内容此处为内容此处为内容此处为内容此处为内容此处为内容此处为内容",
            created: "2018-12-21"
        },{
            id: "news4-fff",
            title: "新闻标题1111",
            content: "此处为内容",
            created: "2018-11-21"
        },{
            id: "news5-fff",
            title: "新闻标题111111",
            content: "此处为内容",
            created: "2018-10-21"
        },{
            id: "news6-fff",
            title: "新闻标题1",
            content: "此处为内容",
            created: "2019-2-21"
        },{
            id: "news7-fff",
            title: "新闻标题2",
            content: "此处为内容",
            created: "2019-1-21"
        },{
            id: "news8-fff",
            title: "如果是很长的标题，标题未做截断处理",
            content: "此处为内容",
            created: "2018-12-21"
        },{
            id: "news9-fff",
            title: "新闻标题1111",
            content: "此处为内容",
            created: "2018-11-21"
        },{
            id: "news10-fff",
            title: "新闻标题111111",
            content: "此处为内容",
            created: "2018-10-21"
        },{
            id: "news11-fff",
            title: "新闻标题1",
            content: "此处为内容",
            created: "2019-2-21"
        },{
            id: "news12-fff",
            title: "新闻标题2",
            content: "此处为内容",
            created: "2019-1-21"
        },{
            id: "news13-fff",
            title: "如果是很长的标题，标题未做截断处理",
            content: "此处为内容",
            created: "2018-12-21"
        },{
            id: "news14-fff",
            title: "新闻标题1111",
            content: "此处为内容",
            created: "2018-11-21"
        },{
            id: "news15-fff",
            title: "新闻标题111111",
            content: "此处为内容",
            created: "2018-10-21"
        },{
            id: "news16-fff",
            title: "新闻标题1",
            content: "此处为内容",
            created: "2019-2-21"
        },{
            id: "news17-fff",
            title: "新闻标题2",
            content: "此处为内容",
            created: "2019-1-21"
        },{
            id: "news18-fff",
            title: "如果是很长的标题，标题未做截断处理",
            content: "此处为内容",
            created: "2018-12-21"
        },{
            id: "news19-fff",
            title: "新闻标题1111",
            content: "此处为内容",
            created: "2018-11-21"
        },{
            id: "news20-fff",
            title: "新闻标题111111",
            content: "此处为内容",
            created: "2018-10-21"
        }]
   
};

const basicInfo = (state = defaultValue, action) => {
    switch(action.type) {
        default: return state;
    }
}

export default basicInfo;