import style from './styles.module.css';

const SobreGuinchoPage = () => {
    return (
        <div className={style.container}>
            <h1 className={style.title}>Sobre o Guincho</h1>
            <p className={style.text}>
                O guincho é um equipamento utilizado para rebocar ou transportar
                veículos que estão imobilizados, seja por falha mecânica, acidente ou
                outras razões. Ele é composto por um cabo de aço ou corrente, um
                motor para movimentar o cabo e um sistema de controle para operar o
                guincho. O guincho é amplamente utilizado em serviços de reboque, resgate
                e transporte de veículos, proporcionando uma solução eficiente para
                lidar com situações de emergência ou transporte de veículos.
            </p>
        </div>
    );
}

export default SobreGuinchoPage;
