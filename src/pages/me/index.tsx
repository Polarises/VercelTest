import React, {useEffect, useMemo, useState} from 'react';
import styles from './styles/styles.module.scss';
import dayjs from "dayjs";
import NumberDisplay from "@/components/NumberDisplay";
// 1. 做一个垂直的 0-9 div
// 2. 滚动到 7 时，div 就要垂直移动到 7 * height 个单位
function App() {
    const [time, setTime] = useState<number>(Date.now().valueOf());
    useEffect(() => {
        setInterval(() => {
            setTime(Date.now().valueOf());
        }, 1000);
    }, []);

    const timeStr = useMemo(() => {
        let todayDate = dayjs(time).format('YYYY-MM-DD HH:mm:ss');
        const diff =  dayjs(todayDate).diff('2020-11-28','seconds');
        const day = Math.floor(diff / 86400); //天
        const hours = Math.floor((diff % 86400)/3600); //时
        const minute = Math.floor(((diff % 86400)%3600) / 60) //分
        const second = ((diff % 86400)%3600) % 60 //秒
        // console.log( `${day}：${hours} ：${minute} ：${second}`)
        return `${day}:${hours}:${minute}:${second}`
        // return dayjs(todayDate).diff('2020-11-28','seconds').toString();
    }, [time]);

    return (
        <div className={styles.app}>
            <NumberDisplay numberString={timeStr} />
        </div>
    );
}

export default App;
