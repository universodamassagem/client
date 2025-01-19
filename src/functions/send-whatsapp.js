const WMsg = 'Oi,%20gostaria%20de%20marcar%20uma%20consulta!';

const FONE_NUMBER = '5541998124378'

export default function send(message) { window.open(`https://wa.me/${FONE_NUMBER}/?text=${message ? message : WMsg}`) }
