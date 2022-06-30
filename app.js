 
impot{ pieceRender } form './services/pieceRender.service.js'

addEventlistener( 'DOMcontentLoaded', _ =>{
pieceRender.renderpiece()
})