const WMsg = 'Oi,%20gostaria%20de%20marcar%20uma%20consulta!';

const FONE_NUMBER = '351926735707'

export default function send(){window.open(`https://wa.me/${FONE_NUMBER}/?text=${WMsg}`)}