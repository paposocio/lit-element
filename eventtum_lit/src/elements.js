import { LitElement, html, css } from "lit-element";
import "../assets/styles/styles.css"; // Ruta relativa para los estilos

class CustomHeader extends LitElement {
  static styles = css``;

  render() {
    return html`
      <img src="./assets/images/icon.png" alt="" />
      <i class="fa-solid fa-list" style="color: #ffffff; font-size: 50px"></i>
    `;
  }
}


class CustomContainer extends LitElement {
  static styles = css``;

  render() {
    return html`
      <div class="container">
        <div class="conocenos">
          <img src="logo.png" alt="logo" />
          <p>Crea, sueña, realizalo</p>
          <a href="#">Conocenos</a>
        </div>
      </div>
    `;
  }
}

class CustomLogin extends LitElement {
  static styles = css``;

  render() {
    return html`
      <div class="login">
        <p>Ya eres cliente?</p>
        <a href="#" id="white">Ingresa</a>
      </div>
    `;
  }
}

class CustomBanner extends LitElement {
  static styles = css``;

  render() {
    return html`
      <div class="banner1">
        <div><p>Expertos en eventos</p></div>
      </div>
    `;
  }
}

class CustomCards extends LitElement {
  static styles = css``;

  render() {
    return html`
      <div class="container_cards" id="margin_true">
        <div class="card1">
          <div>
            <h1>Salon amarillo</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet
            </p>
            <a href="#" id="white">Ingresa</a>
          </div>
        </div>
        <div class="card2">a</div>
        <div class="card3">a</div>
      </div>
    `;
  }
}

class CustomInfo extends LitElement {
  static styles = css``;

  render() {
    return html`
      <div class="container_info" id="margin_true">
        <div class="imagen">
          <img
            src="https://www.toulouselautrec.edu.pe/sites/default/files/imagenes/cursos/toulouse-cursos-org-eventos-desktop-37.jpg"
            alt="evento"
          />
        </div>
        <div class="texto_info"></div>
      </div>
    `;
  }
}

class CustomBanner2 extends LitElement {
  static styles = css``;

  render() {
    return html`
      <div class="banner1">
        <div><p>Expertos en eventos</p></div>
      </div>
    `;
  }
}

class CustomReservation extends LitElement {
  static styles = css``;

  render() {
    return html`
      <div class="container_resenas">
        <div class="opinion1">a</div>
        <div class="opinion2">a</div>
      </div>
    `;
  }
}

customElements.define("my-header", CustomHeader);
customElements.define("my-container", CustomContainer);
customElements.define("my-login", CustomLogin);
customElements.define("my-banner", CustomBanner);
customElements.define("my-cards", CustomCards);
customElements.define("my-info", CustomInfo);
customElements.define("my-banner2", CustomBanner2);
customElements.define("my-reservation", CustomReservation);

