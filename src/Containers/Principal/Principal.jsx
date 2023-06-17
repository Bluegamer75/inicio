import React from 'react'

const Siguenos = () => {
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img src={'./img/logo-f.jpg'} className='tw-followCard-avatar' />
        <div className='tw-followCard-info'>
          <strong>Ermua Saskibaloi Eskola</strong>
          <span className='tw-followCard-infoUsername'></span>
          <span></span>
        </div>
      </header>

      <aside>
      <button className='tw-followCard-button' onClick={() => window.location.href = 'https://www.facebook.com/saskiermua/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0'}>
    Seguir
    </button>

        
      </aside>
      <br />
    </article>
  );
};


const Futuro = ({ Noticia, Descripcion, Fecha }) => {
    return (
      <article className='tw-followCard1'>
        <header className='tw-followCard-header'>
          <div className='tw-followCard-info'>
            <strong>{Noticia}</strong>
            <span className='tw-followCard-infoUsername'>{Descripcion}</span>
            <span>{Fecha}</span>
          </div>
        </header>
      </article>
    );
  };
  



const Clasificacion = () => {
    return (
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
    )
}

const Partidos = ({ Grupo, Resultado, Rival, Estado, Fecha }) => {
    let estadoClass = '';
  
    if (Estado === 'Victoria') {
      estadoClass = 'estado-victoria';
    } else if (Estado === 'Derrota') {
      estadoClass = 'estado-derrota';
    } else if (Estado === 'Empate') {
      estadoClass = 'estado-empate';
    }
  
    return (
      <article className='tw-followCard'>
        <header className='tw-followCard-header'>
          <img src={`./img/saskibaloi ermua.png`} className='tw-followCard-avatar' />
          <div className='tw-followCard-info'>
            <strong>Ermua {Grupo} vs {Rival}</strong>
            <span className={`tw-followCard-infoUsername `}>{Resultado}</span>
            <span>{Fecha}</span>
          </div>
        </header>
  
        <aside>
          <button className={`tw-followCard-button ${estadoClass}`}>{Estado}</button>
        </aside>
      </article>
    );
  };
  

const Noticias = () => {
    return (
        <h1 style={{ fontSize: '2em' }}>Noticias del equipo</h1>
    )
}

const Principal = () => {
  return (
    <div className="flex-container">
    <div className="flex-container-izquierda">
      <div className="flex-item">
        <h1 style={{ fontSize: '2em' }}>Siguenos</h1>
        <Siguenos />
      </div>
    </div>
    <div className="flex-container-centro">
      <div className="flex-item">
        <img src="./img/IMG_5418.JPG" className="imagen-centro"/>
        <h2 className="titulo-centro">Club Saskibaloi Ermua</h2>
        <h4 className="subtitulo-centro"><em>"Los sueños se hacen realidad"</em></h4>
        <p className="historia">Este proyecto se empezó por el 2020 pero por el covid no se pudo arrancar hasta septiembre 2021.
          Intentar sacar un grupo de baloncesto escolar en un sitio como Ermua con tradición niños fútbol y niñas balonmano y donde apenas habido baloncesto escolar es muy difícil. Muchas horas de reuniones, llamadas… Decisiones difíciles y siempre pensando en los niñ@s.
          Momentos malos de tirar la toalla ,
          dejar el equipo de Ermua Basket, crear un nuevo club….
          Cada día un problema resuelto y 3 nuevos más…
          Esté fin de semana empiezan los 4 equipos, con ilusión y ganas de baloncesto.
          Por el baloncesto en Ermua.
          Que decir que sin la ayuda de Ina Mendibe que siempre esta dispuesto para lo que nos haga falta.
          La directiva de este equipo la conforman Mónica, Luis, Fernan, Juan Carlos , Jaime sin ellos esto no funcionaria.
          Gracias a Rubén por toda tu colaboración.
          Feredu construcciones y reformas por patrocinarnos y Ayuntamiento y Federación bizkaina baloncesto por su colaboración.
          </p>
      </div>
    </div>
    <div className="flex-container-derecha">
      <div className="flex-item">
        <h1 style={{ fontSize: '2em' }}>Proximos encuentros</h1>
        <Partidos Grupo="premini" Rival="Berango"  Fecha="14-2-2023" Estado="Proximamente..."/>
        <Partidos Grupo="mini" Rival="Basauri"  Fecha="14-2-2023" Estado="Proximamente..."/>
        <Partidos Grupo="infantil" Rival="Artxandape"  Fecha="14-2-2023" Estado="Proximamente..."/>
        <Partidos Grupo="infantil mixto" Rival="Durango"  Fecha="14-2-2023" Estado="Proximamente..."/>
        <Noticias />
        <Futuro Noticia="Torneo de villa de ermua" Descripcion="huhxohcioachsadjfiosdljcdushjciokscuisjcughjhhg({ Grupo, Resultado, Rival, Estado, Fecha })i" Fecha="22-2-2022"/>
      </div>
    </div>
  </div>

  )
}

export default Principal
