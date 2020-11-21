//import { basename } from "path";

export const environment = {
  //apiUrl: "http://192.168.0.103:3000/",
  //apiUrl: "http://localhost:3000/",
  enableDebug: false,
  production: false
};

export const Urls = {
  host: "http://localhost:3000/",
  questionsAPI:"http://192.168.0.102:3001/exp/questionv2?&std=8&sub=mat&p_no=10&q_nos=10&ch=2",
  apiBase: "http://qpw_manage.test/api/",
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
