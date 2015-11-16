"""
@api {GET} /part 零件查询
@apiName part
@apiGroup Part
@apiAuthor 计算机系
@apiTags v1.0.0

@apiDescription 查询零件列表

@apiSuccess {list} data 返回的零件列表

@apiSuccessExample {object} Response Data

    {
        "data": [
            {
                "_id": "564722cedffa711fb03a46dd", 
                "amount": 171, 
                "limit": 10, 
                "master": "Wheel Company", 
                "name": "Wheel", 
                "order": 199, 
                "price": 0.2, 
                "second": ""
            }
        ]
    }

"""

"""
@api {POST} /part/in 零件入库
@apiName part_in
@apiGroup Part
@apiAuthor 计算机系
@apiTags v1.0.0

@apiDescription 零件入库

@apiParam {str} id 零件ID
@apiParam {int} value 入库数量

@apiParamExample Request Data

    {
        "id": "564722cedffa711fb03a46dd",
        "value": 10,
    }

@apiSuccessExample {object} Response Data

    {
        "n": 1, 
        "nModified": 1, 
        "ok": 1, 
        "updatedExisting": true
    }

"""

"""
@api {POST} /part/out 零件出库
@apiName part_out
@apiGroup Part
@apiAuthor 计算机系
@apiTags v1.0.0

@apiDescription 零件出库

@apiParam {str} id 零件ID
@apiParam {int} value 出库数量

@apiParamExample Request Data

    {
        "id": "564722cedffa711fb03a46dd",
        "value": 10,
    }

@apiSuccessExample {object} Response Data

    {
        "n": 1, 
        "nModified": 1, 
        "ok": 1, 
        "updatedExisting": true
    }

"""

"""
@api {POST} /part/order 零件订购
@apiName part_order
@apiGroup Part
@apiAuthor 计算机系
@apiTags v1.0.0

@apiDescription 零件订购

@apiParam {str} id 零件ID
@apiParam {int} value 订购数量

@apiParamExample Request Data

    {
        "id": "564722cedffa711fb03a46dd",
        "value": 10,
    }

@apiSuccessExample {object} Response Data

    {
        "n": 1, 
        "nModified": 1, 
        "ok": 1, 
        "updatedExisting": true
    }

"""
