export const environment = {
  enableDebug: false,
  production: true,
}

export const Urls = {
  base:"https://paperabsolute.com/",
  // base:"http://qpw_manage.test/",
  get apiBase (){
    return this.base+'api/';
  },
  get login(){
    return this.base+'login/';
  },
  relativeURL: "authi/",
  everyQuery:''
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
