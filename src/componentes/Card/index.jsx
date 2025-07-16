import './styles.css';
// import Capa from './assets/capa.png';
import Code from './assets/code.svg';
import Chat from './assets/chat.svg';
import Share from './assets/share.svg';
// import Foto from './assets/usuario.svg'

export default function Card({ id, imagemUrl, titulo, resumo, linhasDeCodigo, compartilhamentos, comentarios, usuario }) {
  return (
    <article className='card'>
      <div className='card__imagem'>
        {/* <img src={Capa} alt="Imagem de capa do post" /> */}
        <img src={imagemUrl} alt="Imagem de capa do post" />
      </div>
      <div className='card__conteudo'>
        <div className='conteudo__texto'>
          {/* <h3>Título do post</h3>
          <p>Resumo do post</p> */}
          <h3>{titulo}</h3>
          <p>{resumo}</p>
        </div>

        <div className='conteudo__rodape'>
          <ul>
            <li>
              <img src={Code} alt="códigos" />
              {/* 100 */}
              {linhasDeCodigo}
            </li>
            <li>
              <img src={Share} alt="compartilhamentos" />
              {/* 12 */}
              {compartilhamentos}
            </li>
            <li>
              <img src={Chat} alt="comentários" />
              {/* 50 */}
              {comentarios}
            </li>
          </ul>

          <div className='rodape__usuario'>
            {/* <img src={Foto} alt="imagem do usuário" />
            @mily */}
            <img src={usuario.imagem} alt="imagem do usuário" />
            {usuario.nome}
          </div>
        </div>
      </div>
    </article>
  );
};