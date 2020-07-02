import React, { useState, useEffect } from "react";

function Clock() {
    const [time, setTime] = useState('');
    const [greeting, setGreeting] = useState('');
    const [am_pm, setAm_pm] = useState('');
    const [week, setWeek] = useState('');
    const getTime = () => {
        const week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
        const date = new Date();

        const dd = date.getDate();
        const mm = date.getMonth() + 1; //January is 0!
        const yyyy = date.getFullYear();

        const hour = date.getHours();
        const minute = date.getMinutes();
        const sec = date.getSeconds();
        const day = date.getDay();

        //FIXME: 글자 포매팅을 좀 깔끔하게 변경
        const nowDate = `${yyyy}년 ${mm > 9 ? mm : `0${mm}`}월 ${dd > 9 ? dd : `0${dd}`}일`
        const time = `${hour > 12 ? hour % 12 : hour > 9 ? hour : `0${hour}`}:${minute > 9 ? minute : `0${minute}`}:${sec > 9 ? sec : `0${sec}`}`;

        setWeek(`${nowDate} ${week[day]}`);
        setTime(time)

        if (hour >= 5 && hour < 12) {
            setGreeting('Good Morning');
        } else if (hour >= 12 && hour < 17) {
            setGreeting('Good Afternoon');
        } else {
            setGreeting('Good Evening');
        }
        if (hour >= 12) {
            setAm_pm('PM');
        } else {
            setAm_pm('AM');
        }
    }

    useEffect(() => {
        const repeat = setInterval(getTime, 10);
        return () => {
            clearInterval(repeat);
        }
    }, [])
    //TODO: 스타일은 styledComponent 로 변경할 예정임
    return (
        <>
            <p>{week}</p>
            <p style={{ fontWeight: 500, fontSize: "8rem" }}>{time} <span style={{ fontSize: '3rem' }}>{am_pm}</span></p>
            <p >{greeting}</p>
        </>
    );
}

export default Clock;