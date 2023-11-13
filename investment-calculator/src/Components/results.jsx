import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ input }){
    const annualData = calculateInvestmentResults(input);
    const initial = annualData[0].valueEndOfYear - annualData[0].interest - annualData[0].annualInvestment;
    return (
        <>
            <table id='result'>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Intrest (Year)</th>
                        <th>Total Intrest</th>
                        <th>Total Capital</th>
                    </tr>
                </thead>
                <tbody>
                    {annualData.map((yearData) =>{
                        const totalIntrest = yearData.valueEndOfYear - yearData.annualInvestment*yearData.year -initial;
                        const totalInvest = yearData.valueEndOfYear - totalIntrest;
                        return (
                            <tr key={yearData.year}>
                                <td>{yearData.year}</td>
                                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                                <td>{formatter.format(yearData.interest)}</td>
                                <td>{formatter.format(totalIntrest)}</td>
                                <td>{formatter.format(totalInvest)}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}