export const environment = {
  enableDebug: false,
  production: true,
}

export const Urls = {
  host: "http://localhost:3000/",
  //apiBase: "https://paperabsolute.com/api/",
  apiBase: "qpw_manage.test/api/",
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
    "name": "Exam Choice",
    "db_prefix": ""
  }
};
