let obj = JSON.parse($response.body);

obj["data"]["is_vip"] = true,
obj["data"]["vip_expire_time"] = "2080-12-10 00:00:00",

$done({body: JSON.stringify(obj)});
