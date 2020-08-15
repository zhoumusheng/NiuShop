<?php
/**
 * Niushop商城系统 - 团队十年电商经验汇集巨献!
 * =========================================================
 * Copy right 2019-2029 上海牛之云网络科技有限公司, 保留所有权利。
 * ----------------------------------------------
 * 官方网址: https://www.niushop.com.cn

 * =========================================================
 */

namespace app\event;

use app\model\order\OrderMessage;

class MessageShopVerified
{
    /**
     * @param $param
     */
    public function handle($param)
    {
        // 发送订单消息
        if ($param["keywords"] == "VERIFY") {
            //发送订单消息
            $model = new OrderMessage();
            return $model->messageOrderVerify($param);
        }
    }

}