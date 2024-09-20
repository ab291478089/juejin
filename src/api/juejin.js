/*
 * @Author: Bill Bill@bill.com
 * @Date: 2022-07-07 19:54:24
 * @LastEditors: Bill Bill@bill.com
 * @LastEditTime: 2024-09-20 15:57:24
 * @FilePath: /juejin/src/api/juejin.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const request = require('../utils/request');
const { COOKIE,SPIDER,AID,UUID,MSTOKEN,A_BOGUS } =  require('../utils/config.js');

module.exports = function () {
  return {
    /**
     * 签到
     */
    // https://api.juejin.cn/growth_api/v1/check_in?aid=2608&uuid=6994725939028739584&spider=0&msToken=XusBx2nYD7AI_GvdwwO3t7dYrnLrks8W9JTboM8LkU27jXyW6SsTdLVFsTPb3C10fxPdS5BPm_ZxeuM-p6wZMcLzMMi4c8VfXWdx6O0mpeVdxe05ugpvzyfpQnbiXp-G&a_bogus=EXUYXO2IMsm1rX32MXDz9a6Ejwg0YW5EgZEPJDvg70os
    checkIn: function () {
      console.log('签到',`https://api.juejin.cn/growth_api/v1/check_in?aid=${AID}&uuid=${UUID}&spider=${SPIDER}&msToken=${MSTOKEN}&a_bogus=${A_BOGUS}`)
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
    // https://api.juejin.cn/growth_api/v1/lottery/draw?aid=2608&uuid=6994725939028739584&spider=0&msToken=XusBx2nYD7AI_GvdwwO3t7dYrnLrks8W9JTboM8LkU27jXyW6SsTdLVFsTPb3C10fxPdS5BPm_ZxeuM-p6wZMcLzMMi4c8VfXWdx6O0mpeVdxe05ugpvzyfpQnbiXp-G&a_bogus=E7-Okc2IMsm1rX32MhDz9a6EjYm0YW5qgZEPJDI17to0
    drawApi: function () {
      console.log('抽奖',`https://api.juejin.cn/growth_api/v1/lottery/draw?aid=${AID}&uuid=${UUID}&spider=${SPIDER}&msToken=${MSTOKEN}&a_bogus=${A_BOGUS}`)
      return request({
        url: `https://api.juejin.cn/growth_api/v1/lottery/draw?aid=${AID}&uuid=${UUID}&spider=${SPIDER}&msToken=${MSTOKEN}&a_bogus=${A_BOGUS}`,
        method: 'post',
        headers: {
          cookie: COOKIE,
        },
      });
    },
  }
};
