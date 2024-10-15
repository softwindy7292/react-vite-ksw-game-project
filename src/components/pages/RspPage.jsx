import React, { useState } from 'react';
import RspCard from '../rsp/RspCard';

import rock from '../../assets/rsp/rock.jpg';
import scissor from '../../assets/rsp/scissor.jpg';
import paper from '../../assets/rsp/paper.jpg';

const RspPage = () => {
    const [players, setPlayers] = useState([
        {
            id: 1,
            username: '당신',
            arrRsp: ['가위', '바위', '보'],
            img: 'https://taegon.kim/wp-content/uploads/2018/05/image-5.png',
        },
        {
            id: 2,
            username: '심판',
            arrRsp: [],
            img: 'https://taegon.kim/wp-content/uploads/2018/05/image-5.png',
        },
        {
            id: 1,
            username: '컴퓨터',
            arrRsp: ['랜덤생성'],
            img: 'https://taegon.kim/wp-content/uploads/2018/05/image-5.png',
        },
    ]);

    const handleClick = (e) => {
        console.log(e.target.innerText);

        const rspArr = ['가위', '바위', '보'];
        const imgArr = [scissor, rock, paper];

        let user_rsp = rspArr.indexOf(e.target.innerText);
        let com_rsp = Math.floor(Math.random() * 3);

        let result = getResult(e.target.innerText, rspArr[com_rsp]);

        let copyPlayers = [...players];

        copyPlayers[1].arrRsp = [result];
        copyPlayers[2].arrRsp = [rspArr[com_rsp]];

        copyPlayers[0].img = imgArr[user_rsp];
        copyPlayers[2].img = imgArr[com_rsp];

        setPlayers(copyPlayers);
    };

    function getResult(you, computer) {
        let result = '결과';

        if (you == computer) {
            result = '비겼습니다';
        }

        if (you == '가위') {
            if (computer == '바위') {
                result = '당신이 졌습니다.';
            }
            if (computer == '보') {
                result = '당신이 이겼습니다.';
            }
        }

        if (you == '바위') {
            if (computer == '보') {
                result = '당신이 졌습니다.';
            }
            if (computer == '가위') {
                result = '당신이 이겼습니다.';
            }
        }

        if (you == '보') {
            if (computer == '가위') {
                result = '당신이 졌습니다.';
            }
            if (computer == '바위') {
                result = '당신이 이겼습니다.';
            }
        }

        return result;
    }

    return (
        <main>
            <div className="container mt-5">
                <div className="row">
                    {players &&
                        players.map((player) => (
                            <RspCard player={player} onClick={handleClick} />
                        ))}
                </div>
            </div>
        </main>
    );
};

export default RspPage;
