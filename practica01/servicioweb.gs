const  doGet  =  ( e  =  { } )  =>  {
const  { parámetro }  =  e ;
const  { nombre =  'Arnold' , apellido =  'GetSchwarzenegger', tel =  '2281015690', dir =  'Venuztiano Carranza' }  =  parámetro ;
const  salida  =  `Hola ${ nombre }  ${ apellido } ${ tel }  ${ dir}` ;
return  ContentService . createTextOutput ( salida ) ;
} ;
// regresa de forma textual los parametros leidos con post
const  doPost  =  ( e  =  { } )  =>  {
const  { parámetro }  =  e ;
const  { nombre =  'Arnold' , apellido =  'PostSchwarzenegger' , tel =  '2281015690' , dir =  'Venuztiano Carranza' }  =  parámetro ;
const  salida  =  `Hola ${ nombre }  ${ apellido }  ${ tel }  ${ dir } ` ;
return  ContentService . createTextOutput ( salida ) ;
} ;