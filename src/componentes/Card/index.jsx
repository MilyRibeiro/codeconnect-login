import './styles.css';
import Capa from './assets/capa.png';
import Code from './assets/code.svg';
import Chat from './assets/chat.svg';
import Share from './assets/share.svg';
import Foto from './assets/usuario.svg'

export default function Card() {
  return (
    <article className='card'>
      <div className='card__imagem'>
        <img src={Capa} alt="Imagem de capa do post" />
      </div>
      <div className='card__conteudo'>
        <div className='conteudo__texto'>
          <h3>Título do post</h3>
          <p>Resumo do post</p>
        </div>

        <div className='conteudo__rodape'>
          <ul>
            <li>
              <img src={Code} alt="códigos" />
              100
            </li>
            <li>
              <img src={Share} alt="compartilhamentos" />
              12
            </li>
            <li>
              <img src={Chat} alt="comentários" />
              50
            </li>
          </ul>

          <div className='rodape__usuario'>
            <img src={Foto} alt="imagem do usuário" />
            @mily
          </div>
        </div>
      </div>
    </article>
  );
};