import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm/index.tsx";
import { PriceHighlight, TransactionsContainer, TransectionsTable } from "./styles";
import { TransactionsContext } from "../../contexts/TransactionsContext.tsx";
import { dateFormater, dateFormatter, priceFormater, priceFormatter } from "../../utils/formater.ts";


export function Transactions() {
    const { transactions } = useContext(TransactionsContext)

    return (
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>
                <SearchForm />
                <TransectionsTable>
                    <tbody>
                        {transactions.map(transaction => {
                            return (
                                <tr key={transaction.id}>
                            <td width='50%' >{transaction.description}</td>
                            <td>
                                <PriceHighlight variant={transaction.type}>
                                    {transaction.type === 'outcome' && '- '}
                                    {priceFormatter.format(transaction.price)}
                                </PriceHighlight>
                            </td>
                            <td>{transaction.category}</td>
                            <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                        </tr>
                            )
                        })}
                        
                    </tbody>
                </TransectionsTable>
            </TransactionsContainer>
        </div>
    )
}