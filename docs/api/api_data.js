define({ "api": [  {    "type": "GET",    "url": "/part",    "title": "零件查询",    "name": "part",    "group": "Part",    "author": [      "计算机系"    ],    "tags": [      "v1.0.0"    ],    "description": "<p>查询零件列表</p> ",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "<p>list</p> ",            "optional": false,            "field": "data",            "description": "<p>返回的零件列表</p> "          }        ]      },      "examples": [        {          "title": "Response Data",          "content": "\n{\n    \"data\": [\n        {\n            \"_id\": \"564722cedffa711fb03a46dd\", \n            \"amount\": 171, \n            \"limit\": 10, \n            \"master\": \"Wheel Company\", \n            \"name\": \"Wheel\", \n            \"order\": 199, \n            \"price\": 0.2, \n            \"second\": \"\"\n        }\n    ]\n}",          "type": "object"        }      ]    },    "version": "0.0.0",    "filename": "./part.py",    "groupTitle": "Part"  },  {    "type": "POST",    "url": "/part/in",    "title": "零件入库",    "name": "part_in",    "group": "Part",    "author": [      "计算机系"    ],    "tags": [      "v1.0.0"    ],    "description": "<p>零件入库</p> ",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "<p>str</p> ",            "optional": false,            "field": "id",            "description": "<p>零件ID</p> "          },          {            "group": "Parameter",            "type": "<p>int</p> ",            "optional": false,            "field": "value",            "description": "<p>入库数量</p> "          }        ]      },      "examples": [        {          "title": "Request Data",          "content": "\n{\n    \"id\": \"564722cedffa711fb03a46dd\",\n    \"value\": 10,\n}",          "type": "json"        }      ]    },    "success": {      "examples": [        {          "title": "Response Data",          "content": "\n{\n    \"n\": 1, \n    \"nModified\": 1, \n    \"ok\": 1, \n    \"updatedExisting\": true\n}",          "type": "object"        }      ]    },    "version": "0.0.0",    "filename": "./part.py",    "groupTitle": "Part"  },  {    "type": "POST",    "url": "/part/order",    "title": "零件订购",    "name": "part_order",    "group": "Part",    "author": [      "计算机系"    ],    "tags": [      "v1.0.0"    ],    "description": "<p>零件订购</p> ",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "<p>str</p> ",            "optional": false,            "field": "id",            "description": "<p>零件ID</p> "          },          {            "group": "Parameter",            "type": "<p>int</p> ",            "optional": false,            "field": "value",            "description": "<p>订购数量</p> "          }        ]      },      "examples": [        {          "title": "Request Data",          "content": "\n{\n    \"id\": \"564722cedffa711fb03a46dd\",\n    \"value\": 10,\n}",          "type": "json"        }      ]    },    "success": {      "examples": [        {          "title": "Response Data",          "content": "\n{\n    \"n\": 1, \n    \"nModified\": 1, \n    \"ok\": 1, \n    \"updatedExisting\": true\n}",          "type": "object"        }      ]    },    "version": "0.0.0",    "filename": "./part.py",    "groupTitle": "Part"  },  {    "type": "POST",    "url": "/part/out",    "title": "零件出库",    "name": "part_out",    "group": "Part",    "author": [      "计算机系"    ],    "tags": [      "v1.0.0"    ],    "description": "<p>零件出库</p> ",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "<p>str</p> ",            "optional": false,            "field": "id",            "description": "<p>零件ID</p> "          },          {            "group": "Parameter",            "type": "<p>int</p> ",            "optional": false,            "field": "value",            "description": "<p>出库数量</p> "          }        ]      },      "examples": [        {          "title": "Request Data",          "content": "\n{\n    \"id\": \"564722cedffa711fb03a46dd\",\n    \"value\": 10,\n}",          "type": "json"        }      ]    },    "success": {      "examples": [        {          "title": "Response Data",          "content": "\n{\n    \"n\": 1, \n    \"nModified\": 1, \n    \"ok\": 1, \n    \"updatedExisting\": true\n}",          "type": "object"        }      ]    },    "version": "0.0.0",    "filename": "./part.py",    "groupTitle": "Part"  },  {    "type": "POST",    "url": "/user/login",    "title": "登录",    "name": "user_login",    "group": "User",    "author": [      "计算机系"    ],    "tags": [      "v1.0.0"    ],    "description": "<p>用户登录</p> ",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "<p>str</p> ",            "optional": false,            "field": "username",            "description": "<p>用户名</p> "          },          {            "group": "Parameter",            "type": "<p>str</p> ",            "optional": false,            "field": "password",            "description": "<p>密码</p> "          }        ]      },      "examples": [        {          "title": "Request Data",          "content": "\n{\n    \"username\": \"test\",\n    \"password\": \"1234\",\n}",          "type": "json"        }      ]    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "<p>str</p> ",            "optional": false,            "field": "username",            "description": "<p>用户名</p> "          },          {            "group": "Success 200",            "type": "<p>str</p> ",            "optional": false,            "field": "password",            "description": "<p>密码</p> "          },          {            "group": "Success 200",            "type": "<p>int</p> ",            "optional": false,            "field": "role",            "description": "<p>用户角色</p> "          }        ]      },      "examples": [        {          "title": "Response Data",          "content": "\n{\n    \"username\": \"test\",\n    \"password\": \"1234\",\n    \"role\": 1\n}",          "type": "object"        }      ]    },    "version": "0.0.0",    "filename": "./user.py",    "groupTitle": "User"  },  {    "type": "POST",    "url": "/user/register",    "title": "注册",    "name": "user_register",    "group": "User",    "author": [      "计算机系"    ],    "tags": [      "v1.0.0"    ],    "description": "<p>用户注册</p> ",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "<p>str</p> ",            "optional": false,            "field": "username",            "description": "<p>用户名</p> "          },          {            "group": "Parameter",            "type": "<p>str</p> ",            "optional": false,            "field": "password",            "description": "<p>密码</p> "          },          {            "group": "Parameter",            "type": "<p>int</p> ",            "optional": false,            "field": "role",            "description": "<p>用户角色</p> "          }        ]      },      "examples": [        {          "title": "Request Data",          "content": "\n{\n    \"username\": \"test\",\n    \"password\": \"1234\",\n    \"role\": 1\n}",          "type": "json"        }      ]    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "<p>str</p> ",            "optional": false,            "field": "username",            "description": "<p>用户名</p> "          },          {            "group": "Success 200",            "type": "<p>str</p> ",            "optional": false,            "field": "password",            "description": "<p>密码</p> "          },          {            "group": "Success 200",            "type": "<p>int</p> ",            "optional": false,            "field": "role",            "description": "<p>用户角色</p> "          }        ]      },      "examples": [        {          "title": "Response Data",          "content": "\n{\n    \"username\": \"test\",\n    \"password\": \"1234\",\n    \"role\": 1\n}",          "type": "object"        }      ]    },    "version": "0.0.0",    "filename": "./user.py",    "groupTitle": "User"  },  {    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "optional": false,            "field": "varname1",            "description": "<p>No type.</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "varname2",            "description": "<p>With type.</p> "          }        ]      }    },    "type": "",    "url": "",    "version": "0.0.0",    "filename": "./doc/main.js",    "author": [],    "tags": [],    "group": "_Users_yufeili_repo_luna_fourmilk_docs_api_doc_main_js",    "groupTitle": "_Users_yufeili_repo_luna_fourmilk_docs_api_doc_main_js",    "name": ""  }] });