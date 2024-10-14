import React, { useState } from 'react';
import LottoBall from '../lotto/LottoBall';

const LottoPage = () => {
    const setNumbers = () => {
        const lottoSet = new Set();

        while (lottoSet.size < 6) {
            let random = Math.floor(Math.random() * 45) + 1;
            lottoSet.add(random);
        }

        console.log(lottoSet);

        return Array.from(lottoSet);
    };

    const ChangeRandom = () => {
        setRandoms(setNumbers);
    };

    const [randoms, setRandoms] = useState(setNumbers);

    return (
        <div className="container">
            <div className="row mt-sm-5" onClick={ChangeRandom}>
                {randoms &&
                    randoms.map((random) => <LottoBall lottoNum={random} />)}
            </div>
        </div>
    );
};

export default LottoPage;
