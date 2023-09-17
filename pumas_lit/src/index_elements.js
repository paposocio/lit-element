import { LitElement, html, css } from "lit-element";


customElements.define("my-element", class extends LitElement {
    static get styles() {
        return css`      
          .login-container {
            height: 20em;
            width: 380px;
            border-radius: 30px;
            background-color: #ffffff;
            box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.5);
          }
          
          .login-container > * {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            flex-direction: column;
          }
          .login-container div{
            border-top-left-radius:30px;
            border-top-right-radius:30px;
            background-color: #ff0000;
          }
          h1{
            color: #ffffff;
          }
          form > *{
            width: 90%;
            margin-top: 10px;
          }
          input{
            height: 2em;
            border:none;
            border-bottom: 3px solid #ff0000;
          }
          
          input::placeholder{
            font-size:1.2em;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          }
          
          .button{
            height:3em;
            background-color: #ff0000;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #ffffff;
          }
    `;
    }

    render() {
        return html` 

        <section class="login-container">
            <div><h1>PUMAS DC</h1></div>

            <form action="src/views/dashboard_pumas.html">
                <input type="text" name="" id="" placeholder="Usuario">
                <input type="password" name="" id="" placeholder="Clave">
                <button class="button" type="submit" >Enviar</button>
                <a href="#">Olvido su clave?</a>
            </form>
        </section>
`;
    }
});