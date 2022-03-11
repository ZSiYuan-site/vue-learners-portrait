export default {
    install (Vue) {
        Vue.prototype.$utils = {
            /**
             * 防抖函数
             * @param fn 要执行的方法
             * @param wait 等待时间
             * @return {(function(): void)|*}
             */
            debounce(fn, wait) {
                let timer = null;
                return function () {
                    let context = this,
                        args = arguments;
                    if (timer) {
                        clearTimeout(timer);
                        timer = null;
                    }
                    timer = setTimeout(() => {
                        fn.apply(context, args);
                    }, wait);
                };
            },

            /**
             * 节流函数
             * @param fn 要执行的方法
             * @param delay 延迟时间
             * @return {(function(): (*|undefined))|*}
             */
            throttle(fn, delay) {
                let curTime = Date.now();
                return function () {
                    let context = this,
                        args = arguments,
                        nowTime = Date.now();
                    if (nowTime - curTime >= delay) {
                        curTime = Date.now();
                        return fn.apply(context, args);
                    }
                };
            }
        }
    }
}