export const environment = {
  enableDebug: false,
  production: true,
}

export const Urls = {
 // host: "http://localhost:3000/",
 // questionsAPI:"http://192.168.0.102:3001/exp/questionv2?&std=8&sub=mat&p_no=10&q_nos=10&ch=2",
  base:"https://paperabsolute.com/",
  get apiBase (){
    return this.base+'api/';
  },
  get login(){
    return this.base+'login/';
  },
  relativeURL: "authi/",
  everyQuery:'&XDEBUG_SESSION_START'
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
