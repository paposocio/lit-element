import { LitElement, html, css } from "lit-element";


customElements.define("my-dashboard2", class extends LitElement {
    static get styles() {
        return css`/* Estilos generales */
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
          background: url(../images/background.png);
          background-size: cover;
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
        
        .grid_container {
          height: 90%;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: 0.3fr 1.7fr;
          gap: 20px 20px;
          grid-auto-flow: row;
          grid-template-areas:
            "soicitudes_1 actas_2 pendientes_3"
            "solicitudes solicitudes solicitudes";
        }
        
        .grid_container > * {
          box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.5);
          border-radius: 10px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          font-size: 1.4em;
        }
        
        .grid_container > div > div {
          border-bottom: 1.8px solid;
          margin: 0 15px;
        }
        
        .grid_container > div > img {
          height: 70px;
        }
        
        .solicitudes {
          grid-area: solicitudes;
        }
        
        .soicitudes_1 {
          grid-area: soicitudes_1;
        }
        
        .actas_2 {
          grid-area: actas_2;
        }
        
        .pendientes_3 {
          grid-area: pendientes_3;
        }
        
        .grid_container2 {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 0.25fr 0.25fr 1.5fr;
          gap: 20px 20px;
          grid-auto-flow: row;
          grid-template-areas:
            "titulo"
            "select"
            "area";
        }
        
        .titulo {
          grid-area: titulo;
        }
        
        .select {
          grid-area: select;
        }
        
        .area {
          grid-area: area;
        }
        .container_solicitudes {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 0.25fr 0.25fr 1.5fr;
          gap: 5px;
          grid-auto-flow: row;
          grid-template-areas:
            "titulo"
            "select"
            "area";
        }
        
        .titulo {
          grid-area: titulo;
        }
        
        .select {
          grid-area: select;
        }
        
        .area {
          grid-area: area;
        }
        
        .texto {
          text-align: center;
          font-size: 2em;
          border-bottom: 1.5px solid;
          width: 9%;
        }
        
        select {
          height: 25px;
          width: 10%;
          border-radius: 10px;
        }
        
        input {
          height: 25px;
          width: 100%;
          border-radius: 10px;
        }
        textarea {
          width: 100%;
          border-radius: 10px;
          margin-right: 20px;
        }
        
        .container_solicitudes > * {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        
        .button {
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
        
        .area_container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          grid-auto-rows: 1fr;
          gap: 17px 17px;
          grid-auto-flow: row;
          grid-template-areas:
            "input_area1 input_area2"
            "input_area input_area";
        }
        
        .input_area1 {
          grid-area: input_area1;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
        }
        
        .input_area2 {
          grid-area: input_area2;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
        }
        
        .input_area {
          grid-area: input_area;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }
        
        .table_container {
          margin-top: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
        
        .select_largo {
          width: 50px;
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
              <i class="fa-solid fa-football" style="color: #7c493c"></i
              >Presidencia
            </li>
            <li>
              <i class="fa-solid fa-football" style="color: #7c493c"></i
              >Vice-presidencia
            </li>
            <li>
              <i class="fa-solid fa-football" style="color: #7c493c"></i
              >Secretaria
            </li>
            <li>
              <i class="fa-solid fa-football" style="color: #7c493c"></i>Tesoreria
            </li>
            <li>
              <i class="fa-solid fa-football" style="color: #7c493c"></i>Revisoria
              fiscal
            </li>
            <li>
              <i class="fa-solid fa-football" style="color: #7c493c"></i>Lista
              afiliados
            </li>
            <li>
              <i class="fa-solid fa-football" style="color: #7c493c"></i>Lista
              jugadores
            </li>
            <li>
              <i class="fa-solid fa-football" style="color: #7c493c"></i>Lista
              coach's
            </li>
          </ul>
        </aside>
        <section class="content">
          <div class="grid_container">
            <div class="solicitudes">
              <div class="container_solicitudes">
                <div class="titulo">
                  <div class="texto">Solicitudes</div>
                </div>
                <div class="select">
                  Por favor seleccione el tipo de solicitud
                  <select>
                    <option></option>
                  </select>
                </div>
                <div class="area">
                  <div class="area_container">
                    <div class="input_area1">
                      <input type="text" placeholder="lorem ipsum" />
                      <input type="text" placeholder="lorem ipsum" />
                    </div>
                    <div class="input_area2">
                      <input type="text" placeholder="lorem ipsum" />
                      <input type="text" placeholder="lorem ipsum" />
                    </div>
                    <div class="input_area">
                      <textarea name="" id="" cols="30" rows="10"></textarea>
                      <a href="#" class="button">Gestionar</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="soicitudes_1">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4487/4487354.png"
                alt="imagen_actas"
              />
              <div>Solicitudes</div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/2989/2989988.png"
                alt="next"
              />
            </div>
            <div class="actas_2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4487/4487354.png"
                alt="imagen_actas"
              />
              <div>Actas</div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/2989/2989988.png"
                alt="next"
              />
            </div>
            <div class="pendientes_3">
              <img
                src="https://cdn-icons-png.flaticon.com/512/472/472371.png"
                alt="imagen_actas"
              />
              <div>Pendientes</div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/2989/2989988.png"
                alt="next"
              />
            </div>
          </div>
        </section>
      </div>
`;
    }
});