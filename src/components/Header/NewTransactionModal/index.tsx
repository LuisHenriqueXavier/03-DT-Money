
import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay, TansactionType, TransactionTypeButton } from "./styled";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";

export function NewTransactionModal() {
    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <Dialog.Title>Nova transação</Dialog.Title>

                <CloseButton>
                    <X size={24} />
                </CloseButton>


                <form>
                    <input type="text" placeholder="Descrição" required />
                    <input type="number" placeholder="Preço" required />
                    <input type="text" placeholder="Categoria" required />

                    <TansactionType>
                        <TransactionTypeButton value="income" variant="income" >
                            <ArrowCircleUp size={24} />
                            Entrada
                        </TransactionTypeButton>

                        <TransactionTypeButton value="outcome" variant="outcome" >
                            <ArrowCircleDown size={24} />
                            Saída
                        </TransactionTypeButton>
                    </TansactionType>

                    <button type="submit">Cadastrar</button>
                </form>

            </Content>
        </Dialog.Portal>
    )
}