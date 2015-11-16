"""
@api {POST} /user/login 登录
@apiName user_login
@apiGroup User
@apiAuthor 计算机系
@apiTags v1.0.0

@apiDescription 用户登录

@apiParam {str} username 用户名
@apiParam {str} password 密码

@apiParamExample Request Data

    {
        "username": "test",
        "password": "1234",
    }

@apiSuccess {str} username 用户名
@apiSuccess {str} password 密码
@apiSuccess {int} role 用户角色

@apiSuccessExample {object} Response Data

    {
        "username": "test",
        "password": "1234",
        "role": 1
    }

"""


"""
@api {POST} /user/register 注册
@apiName user_register
@apiGroup User
@apiAuthor 计算机系
@apiTags v1.0.0

@apiDescription 用户注册

@apiParam {str} username 用户名
@apiParam {str} password 密码
@apiParam {int} role 用户角色

@apiParamExample Request Data

    {
        "username": "test",
        "password": "1234",
        "role": 1
    }

@apiSuccess {str} username 用户名
@apiSuccess {str} password 密码
@apiSuccess {int} role 用户角色

@apiSuccessExample {object} Response Data

    {
        "username": "test",
        "password": "1234",
        "role": 1
    }

"""

