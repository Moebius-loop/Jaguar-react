import React from 'react';
import '../styles/administracaostyle.css';
import SideBar from '../components/SideBar';

function AdministracaoObrasAndamento(){
    return(
        <div className="tela-contabilidade">
            <div className="aba">
                <SideBar />
            </div>
            <div className="conteudo-administracao-obras">
                
            </div>
        </div>
    );
}

export default AdministracaoObrasAndamento;