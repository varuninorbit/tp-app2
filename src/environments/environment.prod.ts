export const environment = {
  enableDebug: false,
  production: true,
}

export const Urls = {
  host: "http://127.0.0.1/",
  //questionsAPI:"http://test.test/questions/exp/questionv2?&std=8&sub=mat&p_no=10&q_nos=10&ch=2",
  
  //base: "http://192.168.0.103:3001/"
  //for action
  base: "http://qpw_manage.test/api",
  relativeURL: "authi/"
}

export let state={
  chapters:[
  ],
  selectedChapters:[],
  currentScheme:{
    id:0,
    description:'',
    name:''
  },
  arrayTable:[
    [
      "chapter_id",
      "category_id",
      "marks",
      "no"
    ],
    [
      [
        3,
        1,
        0,
        3
      ],
      [
        7,
        1,
        1,
        6
      ],
      [
        4,
        1,
        0,
        5
      ]
    ]
  ],
  currentChoice:{
    "id": '0',
    "name": "Exam Choice",
    "db_prefix": ""
  }
};
