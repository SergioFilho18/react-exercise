const fullTime = new Intl.DateTimeFormat('pt-BR', { // Define uma constante com o resultado de busca da hora atual
  timeStyle: 'short', // propriedade da função DateTimeFormat que define o tamanho do resultado com apenas horas e minutos
  hour12: false // propriedade da função DateTimeFormat que o formato de apenas 12 horas, para 24horas
}).format(); 

const hour = new Date().getHours(); // Define a variavel hours com a hora atual
let greeting = ''; // Define a variavel greeting como vazia

if(hour >= 0 && hour < 12) { // Verifica se a variavel hour é maior ou igual a '0' e se ela é menor que '12'
  greeting = 'Bom dia 😊'; // Caso a verificação seja verdadeira, seta a String 'Bom Dia' na variavel greeting
} else if(hour >= 12 && hour <18){ // Se a verificação anterior for falsa, verifica se a variavel hour é maior ou igual a '12' e se ela é menor que '18'
  greeting = 'Bom Tarde 😎'; // Caso a verificação seja verdadeira, seta a String 'Bom Tarde' na variavel greeting
} else if(hour >=18 && hour <=23){ // Se a verificação anterior for falsa, verifica se a variavel hour é maior ou igual a '18' e se ela é menor que '23'
  greeting = 'Bom Noite 😴'; // Caso a verificação seja verdadeira, seta a String 'Bom Noite' na variavel greeting
}

const Page = () => {
      return( // Cria uma função 'Page', que retorna uma div c tailwind, que define a altura e largura como tamanho da tela, define um display:flex, flex-column, justify-center, items-center, cor de texto para brango, e fundo com cor gradiente
              // dentro desta div,temos 2 divs filhos, a 1 irá mostrar o resultado da constante 'fullTime', e a 2 o resultado da variavel 'greeting'
        <div className="w-screen h-screen flex flex-col justify-center items-center text-white 
        bg-gradient-to-r from-sky-50 to-indigo-500">

          <div className="text-9xl"> {fullTime}</div>
          <div className="text-5xl font-bold">{greeting}</div>

        </div>
      );
};
export default Page;