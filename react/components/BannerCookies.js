import React from 'react'
import withSettings from './withSettings'
import { Box, Button } from 'vtex.styleguide'

class BannerCookies extends React.Component {
    constructor(props) {
        super(props)
        //props.showCookies = true;
        console.log(props.data)
    }
    aceptar() {
        alert("Has aceptado las cookies");
        //this.props.showCookies = false;
    }
    rechazar() {
        alert('Has rechazado la publicidad');
        //this.props.showCookies = false; className={this.props.showCookies ? '' : 'hide'}
    }
    render() {
        return <div class="row" >
            <Box>
                <div class="col-80">
                    <p>Utilizamos cookies propias y de terceros para obtener datos estadísticos de la navegación de nuestros usuarios y mejorar nuestros servicios. Si acepta o continúa navegando, consideramos que acepta su uso. Puede cambiar la configuración u obtener más información aquí (enlace a página de cookies).</p>
                </div>
                <div class="col-10 center">
                    <Button variation="tertiary" onClick={this.aceptar()}>
                        Aceptar
                    </Button>
                </div>
                <div class="col-10 center">
                    <Button variation="danger-tertiary" onClick={this.rechazar()}>
                        Rechazar
                    </Button>
                </div>
            </Box>
        </div>
    }
}


export default withSettings(BannerCookies)