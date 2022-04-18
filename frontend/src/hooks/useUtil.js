export function formatPrice(value) {
    if (value) {
      return new Intl.NumberFormat("pt-BR", { // classe Javascript
        style: "currency", // atributos da formatação
        currency: "BRL", 
      }).format(Number(value)); // data formatada
    }
        return 'Saldo Indisponivel' // trataiva
    }
    
    // formatação de data
    
    export function formatData(dateUTC){
        if (dateUTC) {
            return new Intl.DateTimeFormat("pt-BR", { 
                year: "numeric",
                month: "2-digit",
                day: "2-digit"
            }).format(new Date(dateUTC))
        }
            return 'Data não informada'
    }

    export function payment(value){
        if(value){
            let result = value / 10
            return result;
        }
        else{
            return 'Não há um preço definido para este produto'
        }
    }