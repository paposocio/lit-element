import { LitElement, html, css } from "lit-element";


customElements.define("my-dashboard1", class extends LitElement {
  static get styles() {
    return css` 
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
    /* Estilos generales */
    * {
      font-family: "Roboto", sans-serif;
    }
    
    ::-webkit-scrollbar {
      display: none;
    }
    
    html,
    body {
      height: 100%;
      overflow: hidden;
    }
    
    body :not(header) {
      padding: 0 10px;
    }
    
    /* Estilos de encabezado */
    header {
      background-color: #ffffff;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    
    .logo {
      position: absolute;
      left: -5px;
      border-radius: 100%;
      height: 70px;
    }
    
    .usuarios {
      position: absolute;
      top: -12px;
      left: 8%;
      font-size: 2.1em;
      color: black;
    }
    
    #burguer {
      font-size: xx-large;
    }
    
    /* Estilos de los contenedores rojo y blanco */
    .contenedor_rojo {
      width: 25%;
      height: 100%;
      border-bottom-right-radius: 20%;
      display: flex;
      align-items: center;
      background-color: #ff0000;
    }
    
    .contenedor_blanco {
      height: 50%;
      width: 100%;
      border-bottom-right-radius: 20%;
      border-bottom-left-radius: 30%;
      border-top-left-radius: 30%;
      display: flex;
      align-items: center;
      background-color: #ffffff;
    }
    
    /* Estilos de contenedor principal */
    .container {
      margin-top: 110px;
      height: 88%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
    
    /* Estilos de barra lateral */
    aside {
      margin-right: 5px;
      background-color: #bcbcbc;
      width: 15%;
      border-radius: 30px;
    }
    
    /* Estilos de sección principal */
    section {
      width: 90%;
    }
    
    /* Estilos de contenido */
    .content {
      margin-left: 5px;
      display: grid;
      grid-template-columns: repeat(3, 20%);
      grid-template-rows: repeat(2, 40%);
      grid-gap: 60px;
      background: url(../images/background.png);
      background-size: cover;
      padding: 20px;
      justify-content: center;
    }
    
    .content>* {
      box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.5);
      background-color: #ffffff;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
    }
    
    
    
    /* Estilos para los elementos de la lista */
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    li {
      margin-bottom: 10px;
      width: 100%;
      height: 30px;
      background-color: #ffffff;
      border-radius: 10px;
      display: flex;
      align-items: center;
    }
    
    /* Estilos para las imágenes y el texto dentro del contenido */
    .content>div>img {
      height: 100px;
      width: 100px;
    }
    
    .content>div>div {
      font-size: 1.5em;
      border-bottom: 1.5px solid;
    }
    
    .content>div {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    
    .content>div>a {
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #ff0000;
      height: 50px;
      width: 150px;
      border-radius: 10px;
      color: #ffffff;
    }
    `;
  }

  render() {
    return html` 
    <header>
    <div class="contenedor_rojo">
      <div class="contenedor_blanco">
        <img src="../images/team_logo.png" alt="logo" class="logo" />
        <p>Usuarios</p>
      </div>
    </div>
    <a href=""><i class="fa-solid fa-bars" id="burguer"></i></a>
  </header>
  <div class="container">
    <aside>
      <ul>
        <li>
          <i class="fa-solid fa-football" style="color: #7c493c"></i>Home
        </li>
        <li>
          <i class="fa-solid fa-football" style="color: #7c493c"></i>Presidencia
        </li>
        <li>
          <i class="fa-solid fa-football" style="color: #7c493c"></i>Vice-presidencia
        </li>
        <li>
          <i class="fa-solid fa-football" style="color: #7c493c"></i>Secretaria
        </li>
        <li>
          <i class="fa-solid fa-football" style="color: #7c493c"></i>Tesoreria
        </li>
        <li>
          <i class="fa-solid fa-football" style="color: #7c493c"></i>Revisoria fiscal
        </li>
        <li>
          <i class="fa-solid fa-football" style="color: #7c493c"></i>Lista afiliados
        </li>
        <li>
          <i class="fa-solid fa-football" style="color: #7c493c"></i>Lista jugadores
        </li>
        <li>
          <i class="fa-solid fa-football" style="color: #7c493c"></i>Lista coach's
        </li>
      </ul>
    </aside>
    <section class="content">
      <div>
        <div>Actas</div>
        <img src="https://cdn-icons-png.flaticon.com/512/4487/4487354.png" alt="imagen_actas" />
        <a href="">Gestionar</a>
      </div>
      <div>
        <div>Certificados</div>
        <img src="https://cdn-icons-png.flaticon.com/512/926/926403.png" alt="imagen_Certificados" />
        <a href="">Gestionar</a>
      </div>
      <div>
        <div>Reuniones</div>
        <img src="https://cdn-icons-png.flaticon.com/512/1324/1324843.png" alt="imagen_Reuniones" />
        <a href="">Gestionar</a>
      </div>
      <div>
        <div>Asistencia</div>
        <img src="https://cdn-icons-png.flaticon.com/512/2666/2666469.png" alt="imagen_Asistencia" />
        <a href="">Gestionar</a>
      </div>
      <div>
        <div>Comunicacion</div>
        <img src="https://cdn-icons-png.flaticon.com/512/685/685887.png" alt="imagen_Comunicacion" />
        <a href="">Gestionar</a>
      </div>
      <div>
        <div>Estado de cuenta</div>
        <img src="https://static.thenounproject.com/png/2998605-200.png" alt="imagen_Estado" />
        <a href="">Gestionar</a>
      </div>
    </section>
  </div>
`;
  }
});
