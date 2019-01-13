## Order Api

### `GET` Groups Banner

```
/api/groups
```

Get list all user's banner group

#### Request Headers

| Key           | Value            |
| ------------- | ---------------- |
| Accept        | application/json |
| Authorization | Bearer \$token   |

#### Query Param

| Param | Type    | Description          |
| ----- | ------- | -------------------- |
| limit | integer | result limit perpage |
| page  | integer | page number          |

#### Response

```json
{
    "result": {
        "paginator": {
            "current_page": 1,
            "first_page_url": "http://192.168.21.12/api/groups?page=1",
            "from": 1,
            "last_page": 2,
            "last_page_url": "http://192.168.21.12/api/groups?page=2",
            "next_page_url": "http://192.168.21.12/api/groups?page=2",
            "path": "http://192.168.21.12/api/groups",
            "per_page": 5,
            "prev_page_url": null,
            "to": 5,
            "total": 10
        },
        "data": [
            {
                "id": 1,
                "user_id": 1,
                "name": "group banner name",
                "type": "fixed-multi or vary-multi or single",
                "width": 2.3,
                "height": 2.3,
                "responsive": true,
                "corner_type": "square or round or super-round",
                "adaptive_height": true,
                "variable_width": true,
                "transition_type": "instant or slide or zoom",
                "speed": "slow or medium or fast",
                "autoplay": "off or once or once-rewind or loop",
                "image_effect": "off or zoom-pan or zoom-rotate",
                "bfbtn_enable": true,
                "bfbtn_visibility": "invisible or auto-hide or visible",
                "bfbtn_icon_type": "chevron or triangle or arrow",
                "bfbtn_size": "small or medium or large",
                "bfbtn_shape": "off or square or circular or semi-circular or full",
                "bfbtn_color": "white-on-black or black-on-white or white or black",
                "rdbtn_enable": true,
                "rdbtn_type": "button or thumbnail",
                "rdbtn_shape": "square or round-square or circular",
                "rdbtn_align": "left or center or right",
                "rdbtn_color": "white or black or white-border or black-border",
                "created_at": "2018-05-31 07:04:58",
                "updated_at": "2018-05-31 07:04:58",
                "deleted_at": null
            }
        ]
    },
    "code": 200
}
```

### `POST` Orders

```
/api/orders
```

Create new order

#### Request Headers

| Key           | Value            |
| ------------- | ---------------- |
| Accept        | application/json |
| Authorization | Bearer \$token   |

#### Query Param

| Param      | Type  | Description                                    |
| ---------- | ----- | ---------------------------------------------- |
| products[] | array | List order's products (id, quantity) (require) |

#### Response

-   _Success_

```json
{
    "result": {
        "user_id": 1,
        "updated_at": "2018-06-20 08:00:52",
        "created_at": "2018-06-20 08:00:52",
        "id": 26,
        "total": 6,
        "order_details": [
            {
                "id": 18,
                "product_id": 1,
                "order_id": 26,
                "quantity": 3,
                "product_price": 2,
                "created_at": "2018-06-20 08:00:52",
                "updated_at": "2018-06-20 08:00:52",
                "deleted_at": null
            },
            {
                "id": 19,
                "product_id": 1,
                "order_id": 26,
                "quantity": 3,
                "product_price": 2,
                "created_at": "2018-06-20 08:00:52",
                "updated_at": "2018-06-20 08:00:52",
                "deleted_at": null
            }
        ]
    },
    "code": 200
}
```

-   _Error_

```json
{
    "message": "The given data was invalid.",
    "errors": {
        "products.1.quantity": ["The quantity may not be greater than 10."]
    },
    "code": 422,
    "request": {
        "product": [
            {
                "id": "1",
                "price": "2",
                "quantity": "3"
            },
            {
                "id": "1",
                "price": "2",
                "quantity": "321321"
            }
        ]
    }
}
```
