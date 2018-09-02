define({ "api": [
  {
    "type": "PUT",
    "url": "/depart/add",
    "title": "add-depart",
    "name": "addDepart",
    "description": "<p>添加部门</p>",
    "group": "depart",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-token",
            "description": "<p>Users unique access-token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\":\"Bearer ff4cc574-7e82-4187-a4ec-f2883cce8f88\",\n  \"Content-Type\":\"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "parentId",
            "description": "<p>父部门ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "departmentName",
            "description": "<p>部门名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "departmentCode",
            "description": "<p>部门编码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "/depart/add?parentId=1\n{\n    \"departmentName\":\"销售部\",\n    \"departmentCode\":\"1003\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"status\": 200,\n \"message\": \"ok\",\n \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.1",
    "filename": "./src/main/java/com/cloudhelios/atlantis/controller/AtlDepartmentController.java",
    "groupTitle": "depart"
  },
  {
    "type": "DELETE",
    "url": "/depart/del",
    "title": "delete-depart",
    "name": "delDepart",
    "description": "<p>删除部门</p>",
    "group": "depart",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-token",
            "description": "<p>Users unique access-token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\":\"Bearer ff4cc574-7e82-4187-a4ec-f2883cce8f88\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "id",
            "description": "<p>部门ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "/depart/del/1",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"status\": 200,\n \"message\": \"ok\",\n \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.1",
    "filename": "./src/main/java/com/cloudhelios/atlantis/controller/AtlDepartmentController.java",
    "groupTitle": "depart"
  },
  {
    "type": "GET",
    "url": "/depart/num",
    "title": "get-depart-num",
    "name": "getDepartNum",
    "description": "<p>获取部门人数</p>",
    "group": "depart",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-token",
            "description": "<p>Users unique access-token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\":\"Bearer ff4cc574-7e82-4187-a4ec-f2883cce8f88\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "id",
            "description": "<p>部门ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "/depart/num/1",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"status\": 200,\n \"message\": \"ok\",\n \"data\": 5\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.1",
    "filename": "./src/main/java/com/cloudhelios/atlantis/controller/AtlDepartmentController.java",
    "groupTitle": "depart"
  },
  {
    "type": "GET",
    "url": "/depart/tree",
    "title": "get-depart-tree",
    "name": "getDepartTree",
    "description": "<p>获取部门组织结构</p>",
    "group": "depart",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-token",
            "description": "<p>Users unique access-token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\":\"Bearer ff4cc574-7e82-4187-a4ec-f2883cce8f88\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "id",
            "description": "<p>部门ID，可选项，默认为1</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "/depart/tree?id=1",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"status\": 200,\n \"message\": \"ok\",\n \"data\": [\n  {\n    \"id\": 1,\n    \"departmentName\": \"abcd\",\n    \"departmentCode\": \"1001\",\n    \"parentId\": null,\n    \"num\": 5,\n    \"subDeparts\": [\n     {\n       \"id\": 2,\n       \"departmentName\": \"bcd\",\n       \"departmentCode\": \"1002\",\n       \"parentId\": 1,\n       \"num\": 3,\n       \"subDeparts\": []\n     }\n    ]\n  }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.1",
    "filename": "./src/main/java/com/cloudhelios/atlantis/controller/AtlDepartmentController.java",
    "groupTitle": "depart"
  },
  {
    "type": "POST",
    "url": "/depart/update",
    "title": "update-depart",
    "name": "updateDepart",
    "description": "<p>更新部门</p>",
    "group": "depart",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-token",
            "description": "<p>Users unique access-token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\":\"Bearer ff4cc574-7e82-4187-a4ec-f2883cce8f88\",\n  \"Content-Type\":\"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "id",
            "description": "<p>部门ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "departmentName",
            "description": "<p>部门名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "departmentCode",
            "description": "<p>部门编码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "/depart/update/1\n{\n    \"departmentName\":\"销售部\",\n    \"departmentCode\":\"1003\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"status\": 200,\n \"message\": \"ok\",\n \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.1",
    "filename": "./src/main/java/com/cloudhelios/atlantis/controller/AtlDepartmentController.java",
    "groupTitle": "depart"
  },
  {
    "type": "DELETE",
    "url": "/user/del/:id",
    "title": "user-delete",
    "name": "delUser",
    "description": "<p>删除用户</p>",
    "group": "user",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-token",
            "description": "<p>Users unique access-token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\":\"Bearer ff4cc574-7e82-4187-a4ec-f2883cce8f88\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "id",
            "description": "<p>用户ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "/user/del/2",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": 200,\n  \"message\": \"ok\",\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.1",
    "filename": "./src/main/java/com/cloudhelios/atlantis/controller/AtlUserController.java",
    "groupTitle": "user"
  },
  {
    "type": "POST",
    "url": "/user/index",
    "title": "init-user-index",
    "name": "initUserIndex",
    "description": "<p>初始化索引库</p>",
    "group": "user",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-token",
            "description": "<p>Users unique access-token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\":\"Bearer ff4cc574-7e82-4187-a4ec-f2883cce8f88\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "/user/index",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": 200,\n  \"message\": \"ok\",\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.1",
    "filename": "./src/main/java/com/cloudhelios/atlantis/controller/AtlUserController.java",
    "groupTitle": "user"
  },
  {
    "type": "PUT",
    "url": "/user/register",
    "title": "user-register",
    "name": "register",
    "description": "<p>用户注册</p>",
    "group": "user",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Request Content-Type.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Content-Type\":\"application/json\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "departId",
            "description": "<p>部门ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "employeeId",
            "description": "<p>职工编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "/user/register?departId=2\n{\n \"username\":\"wangwu\",\n \"password\":\"111111\",\n \"employeeId\":\"1003\",\n \"email\":\"abcd@qq.com\",\n \"phone\":\"15825923412\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": 200,\n  \"message\": \"ok\",\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.1",
    "filename": "./src/main/java/com/cloudhelios/atlantis/controller/AtlUserController.java",
    "groupTitle": "user"
  },
  {
    "type": "GET",
    "url": "/user/search_lu",
    "title": "search-user-lu",
    "name": "search_lu",
    "description": "<p>从索引库中搜索用户</p>",
    "group": "user",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-token",
            "description": "<p>Users unique access-token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\":\"Bearer ff4cc574-7e82-4187-a4ec-f2883cce8f88\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>页码，默认为1</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每次最多返回记录数，默认为20</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>搜索关键字，按照用户编码，手机号，邮箱，用户名查找</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "/user/searchdb?keyword=李四&page=1&pageSiez=20",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": 200,\n  \"message\": \"ok\",\n  \"data\": {\n  \"page\": 1,\n  \"pageSize\": 20,\n  \"totalPage\": 1,\n  \"totalRecord\": 1,\n  \"data\": [\n    {\n      \"id\": 2,\n      \"username\": \"李四\",\n      \"password\": null,\n      \"employeeId\": \"1002\",\n      \"email\": \"12371293@qq.com\",\n      \"phone\": \"15825923411\",\n      \"statue\": null,\n      \"language\": null\n    }\n   ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.1",
    "filename": "./src/main/java/com/cloudhelios/atlantis/controller/AtlUserController.java",
    "groupTitle": "user"
  },
  {
    "type": "GET",
    "url": "/user/searchdb",
    "title": "search-user-db",
    "name": "searchdb",
    "description": "<p>从数据库中搜索用户</p>",
    "group": "user",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-token",
            "description": "<p>Users unique access-token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\":\"Bearer ff4cc574-7e82-4187-a4ec-f2883cce8f88\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>页码，默认为1</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每次最多返回记录数，默认为20</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>搜索关键字，按照用户编码，手机号，邮箱，用户名查找</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "/user/searchdb?keyword=李四&page=1&pageSiez=20",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": 200,\n  \"message\": \"ok\",\n  \"data\": {\n  \"page\": 1,\n  \"pageSize\": 20,\n  \"totalPage\": 1,\n  \"totalRecord\": 1,\n  \"data\": [\n    {\n      \"id\": 2,\n      \"username\": \"李四\",\n      \"password\": null,\n      \"employeeId\": \"1002\",\n      \"email\": \"12371293@qq.com\",\n      \"phone\": \"15825923411\",\n      \"statue\": null,\n      \"language\": null\n    }\n   ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.1",
    "filename": "./src/main/java/com/cloudhelios/atlantis/controller/AtlUserController.java",
    "groupTitle": "user"
  },
  {
    "type": "POST",
    "url": "/user/update",
    "title": "user-update",
    "name": "updateUser",
    "description": "<p>更新用户</p>",
    "group": "user",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access-token",
            "description": "<p>Users unique access-token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\":\"Bearer ff4cc574-7e82-4187-a4ec-f2883cce8f88\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Long",
            "optional": false,
            "field": "id",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "/user/update?id=2\n{\n \"username\":\"wangwu\",\n \"password\":\"111111\",\n \"email\":\"abcd@qq.com\",\n \"phone\":\"15825923412\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": 200,\n  \"message\": \"ok\",\n  \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.1",
    "filename": "./src/main/java/com/cloudhelios/atlantis/controller/AtlUserController.java",
    "groupTitle": "user"
  }
] });
