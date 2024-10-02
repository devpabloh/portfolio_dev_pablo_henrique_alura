import React from 'react'

/* CSS */
import styles from "./MyPerson.module.css"

const MyPerson = () => {
  return (
    <section className={styles.containerMyPerson}>
        <h1>Sobre mim</h1>
        <p>Meu nome é Pablo Henrique. Sou formado em Administração de Empresas, Ciências Contábeis, pós-graduado em Gestão Tributária e, agora, estou cursando o tecnólogo em Análise e Desenvolvimento de Sistemas.</p>

        <p>Atualmente, estou em transição de carreira. Durante a pandemia, a empresa de engenharia na qual eu trabalhava prestava alguns serviços ao governo por meio de licitações. No entanto, devido à situação atípica que estávamos vivendo, a empresa não conseguiu cumprir seus contratos, o que resultou em atrasos de até seis meses no pagamento de salários e benefícios. Tentei me manter o máximo possível, mas infelizmente chegou um momento em que não consegui mais. Foi então que, para não ficar sem trabalhar, decidi abrir um depósito de água na garagem de casa. Para reduzir o custo da água com o fornecedor, eu o ajudava a descarregar as águas do caminhão.</p>

        <p>Você deve estar pensando algo como "é pesado ou é cansativo", e sim, é, mas era melhor do que ficar sem trabalhar. Com o tempo, a gente se acostuma. Durante esse período, alguns amigos de infância, que trabalham com tecnologia, me deram a ideia de estudar na área. O primeiro curso que fiz foi com o nosso ilustre Guanabara, e de imediato, isso reacendeu em mim a chama do amor pela tecnologia. A partir disso, comecei a conversar com clientes que vinham buscar água no depósito; com incentivos daqui e dali, hoje estou aqui, em busca de uma oportunidade de emprego na área que eu amo.</p>
    </section>
  )
}

export default MyPerson