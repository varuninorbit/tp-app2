//import { basename } from "path";

export const environment = {
  //apiUrl: "http://192.168.0.103:3000/",
  //apiUrl: "http://localhost:3000/",
  enableDebug: false,
  production: false
};

export const Urls = {
  //host: "http://192.168.0.103:3000/",
  host: "http://localhost:3000/",
  questionsAPI:"http://192.168.0.102:3001/exp/questionv2?&std=8&sub=mat&p_no=10&q_nos=10&ch=2",
  //base: "http://192.168.0.103:3001/"
  //for api url
  apiBase: "http://qpw_manage.test/api/",
  relativeURL: "authi/",  
  everyQuery:
    'exam_choice=8th_mat_cb_en'+ //TODO Exam Choice Selection fromm scheme
    '&api_token=57844f2390c771454ba190b4f5242b45'+
    '&XDEBUG_SESSION_START'
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