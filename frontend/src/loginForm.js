import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

/**
 * `p3-component`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class LoginForm extends PolymerElement {
    static get template() {
        return html `

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.3/css/uikit.min.css" />
        
      <style>
        :host {
          display: block;
        }

         header, .content {
		    padding: 10px;
	    }

	    input[type=text], select {
          width: 100%;
          padding: 5px 5px;
          margin: 8px 0;
          display: inline-block;
          border: 1px solid #ccc;
          box-sizing: border-box;
        }

        input[type=password], select {
          width: 100%;
          padding: 5px 5px;
          margin: 8px 0;
          display: inline-block;
          border: 1px solid #ccc;
          box-sizing: border-box;
        }

        input[type=submit], button {
          width: 100%;
          background-color: #271236;
          color: white;
          padding: 5px 5px;
          margin: 8px 0;
          border: none;
          cursor: pointer;
        }

        input[type=submit]:hover, button:hover {
          background-color: #271236;
        }

        .registro{
          width: 100%;
          background-color: #271236;
          color: white;
          padding: 5px 5px;
          margin: 8px 0;
          border: none;
          cursor: pointer;
        }

        .center{
          padding-top: 3rem;
          text-align: center;
        }

        img{
          width: 50%;
          height: 50%;
          text-align: center;
        }

        .form {
          margin: 3rem;
        }

        .registro{
          background-color: white;
        }

      </style>
    <article>
    <header>
      <div class="center">
      <br>
      
      <img src="./images/Recurso 5@2x.png">
      
      </div>
			
		</header>

		<form on-submit="_handleLogin" class="form">
            

            <fieldset class="uk-fieldset">

            <div class="uk-margin">
            <input class="uk-input" id="inputemail" type="text" placeholder="Enter email" name="uname" value="[[username]]" required>
          </div>

          <div class="uk-margin">
            <input class="uk-input" id="inputpassword" type="password" placeholder="Enter password" name="psw" value="[[password]]" required>
          </div>

          <button class="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom" type="submit">Login</button>
          <button class="uk-button uk-button uk-width-1-1 registro">Registro</button>


          
            
            </fieldset>

             
            
        </form>

    </article>

    `;
    }
    static get properties() {
        return {

        }
    }

    _handleLogin(event) {
        event.preventDefault();
        const email = this.shadowRoot.querySelector('#inputemail').value;
        const password = this.shadowRoot.querySelector('#inputpassword').value;
        this.shadowRoot.querySelector('#inputemail').value = '';
        this.shadowRoot.querySelector('#inputpassword').value = '';
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((response) => {

                console.log(response);

                this.dispatchEvent(new CustomEvent('login-success', {
                    bubbles: true,
                    composed: true,
                    detail: { text: 'Gracias por iniciar sesión' }
                }));
            })
            .catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
                console.log(error);
                this.dispatchEvent(new CustomEvent('login-error', {
                    bubbles: true,
                    composed: true,
                    detail: { text: 'Datos invalidos' }
                }));
            });
    }
}

window.customElements.define('login-form', LoginForm);