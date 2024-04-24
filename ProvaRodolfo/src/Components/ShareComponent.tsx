import { useEffect, useState } from "react";
import { ShareRequestProps } from "../Interfaces/ShareRequestProps";
import { consultaAcaoPorCodigo } from "../Services/ShareApi";

const ShareComponent: React.FC<ShareRequestProps> = ({ symbol }) => {
    const [share, setShareData] = useState<any | null>(null);
    const [loading, setLoading] = useState<boolean | null>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        consultaAcaoPorCodigo(symbol)
            .then((response) => {
                setShareData(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [symbol]);
    if (loading) return <div> Loading ...</div>;
    if (error) return <div>Error:{error}</div>

    return (
        <>
            <div>
                <img src={share?.logourl} alt={`${symbol}`} width={100} />
                <h1>{share?.shortName}</h1>
                <p>
                </p>
            </div>
            <div>
                <h1>Alta média do dia de mercado: R${share.regularMarketDayHigh}</h1>
            </div>
            <div>
                <p>Moeda: {share.currency}</p>
            </div>
            <div>
                <p>Baixa normal do dia de mercado: {share.regularMarketDayLow}</p>
            </div>
            <h2>Lucro por ação: R$ {share.earningsPerShare}</h2>
        </>
    );
};


export default ShareComponent;