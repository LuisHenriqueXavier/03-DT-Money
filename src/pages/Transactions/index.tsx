import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm/index.tsx";
import { PriceHighlight, TransactionsContainer, TransectionsTable } from "./styles";

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>
                <SearchForm />
                <TransectionsTable>
                    <tbody>
                        <tr>
                            <td width='50%' >Desenvolvimento de site</td>
                            <td>
                                <PriceHighlight variant="income">
                                    R$ 12.000,00
                                </PriceHighlight>
                            </td>
                            <td>Venda</td>
                            <td>13/04/2022</td>
                        </tr>
                        <tr>
                            <td width='50%' >Hamburguer</td>
                            <td>
                                <PriceHighlight variant="outcome">
                                    R$ 59,00
                                </PriceHighlight>
                            </td>
                            <td>Alimentação</td>
                            <td>18/04/2022</td>
                        </tr>
                    </tbody>
                </TransectionsTable>
            </TransactionsContainer>
        </div>
    )
}