/*
 * @Author: Bill Bill@bill.com
 * @Date: 2022-07-07 19:54:24
 * @LastEditors: Bill Bill@bill.com
 * @LastEditTime: 2024-08-20 16:24:57
 * @FilePath: /juejin/src/api/juejin.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const request = require('../utils/request');
const { COOKIE,SPIDER,AID,UUID,SPIDER,MSTOKEN,A_BOGUS } =  require('../utils/config.js');

module.exports = function () {
  return {
    /**
     * 签到
     */
    checkIn: function () {
      return request({
        url: `https://api.juejin.cn/growth_api/v1/check_in?aid=${AID}&uuid=${UUID}&spider=${SPIDER}&msToken=${MSTOKEN}&a_bogus=${A_BOGUS}`,
        method: 'post',
        headers: {
          cookie: COOKIE,
        },
      });
    },
    /**
     * 抽奖
     */
    drawApi: function () {
      return request({
        url: `https://api.juejin.cn/growth_api/v1/lottery/draw?aid=${AID}&uuid=${UUID}&spider=${SPIDER}&msToken=${MSTOKEN}&a_bogus=${A_BOGUS}`,
        method: 'post',
        headers: {
          cookie: COOKIE,
        },
      });
    },
    dipLucky: function (params) {
      return request({
        url: 'https://api.juejin.cn/growth_api/v1/lottery_lucky/dip_lucky?aid=2608',
        method: 'post',
        data: params,
        headers: {
          cookie: COOKIE,
        },
      });
    },
  }
};
