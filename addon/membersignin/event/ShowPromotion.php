<?php
/**
 * Niushop商城系统 - 团队十年电商经验汇集巨献!
 * =========================================================
 * Copy right 2019-2029 上海牛之云网络科技有限公司, 保留所有权利。
 * ----------------------------------------------
 * 官方网址: https://www.niushop.com

 * =========================================================
 */

namespace addon\membersignin\event;

/**
 * 活动展示
 */
class ShowPromotion
{

    /**
     * 活动展示
     *
     * @return multitype:number unknown
     */
    public function handle()
    {
        $data = [
            'shop' => [
                [
                    //插件名称
                    'name'        => 'membersignin',
                    //展示分类（根据平台端设置，admin（平台营销），shop：店铺营销，member:会员营销, tool:应用工具）
                    'show_type'   => 'member',
                    //展示主题
                    'title'       => '签到奖励',
                    //展示介绍
                    'description' => '会员签到后奖励设置',
                    //展示图标
                    'icon'        => 'addon/membersignin/icon.png',
                    //跳转链接
                    'url'         => 'membersignin://shop/config/index',
                ]
            ]

        ];
        return $data;
    }
}