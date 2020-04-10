module.exports = {

    /**
     * 获得当前时间的13位（毫秒）时间戳
     */
    get_time(dateArr) {
        if(dateArr) {
            const [ year, month, day ] = dateArr;
            const date = new Date();
            date.setFullYear(year);
            date.setMonth(month - 1);
            date.setDate(day);
            return date.valueOf();
        }
        // return Date.parse(new Date()); // or new Date().valueOf()
        return new Date().valueOf();
    },
    

    /**
     * 获得当前时间的年月日，返回结果为数值形式 [year, month, day]
     * @param {*} timestamp 13位时间戳
     */
    get_ymd(timestamp) {
        timestamp = timestamp || this.get_time();
        const date = new Date(timestamp);
        return [
            date.getFullYear(),
            date.getMonth() + 1,
            date.getDate()
        ]
    }

}