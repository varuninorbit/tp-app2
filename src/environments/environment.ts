//import { basename } from "path";

export const environment = {
  enableDebug: false,
  production: false
};

export const Urls = {
  base:"http://qpw_manage.test/",
  //base:"https://paperabsolute.com/",
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
    "name": "",
    "db_prefix": ""
  }
};
