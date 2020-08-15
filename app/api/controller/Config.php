<?php
/**
 * Niushop商城系统 - 团队十年电商经验汇集巨献!
 * =========================================================
 * Copy right 2015-2025 上海牛之云网络科技有限公司, 保留所有权利。
 * ----------------------------------------------
 * 官方网址: http://www.niushop.com.cn

 * =========================================================
 * @author : niuteam
 */

namespace app\api\controller;

use app\model\web\Config as ConfigModel;

class Config extends BaseApi
{

    /**
     * 详情信息
     */
    public function defaultimg()
    {
        $upload_config_model = new ConfigModel();
        $res                 = $upload_config_model->getDefaultImg($this->site_id, 'shop');
        if (!empty($res['data']['value'])) {
            return $this->response($this->success($res['data']['value']));
        } else {
            return $this->response($this->error());
        }
    }

    /**
     * 版权信息
     */
    public function copyright()
    {
        $config_model = new ConfigModel();
        $res          = $config_model->getCopyright($this->site_id, 'shop');
        return $this->response($this->success($res['data']['value']));
    }

}