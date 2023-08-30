export interface Cliente {
  tipo: 'General' | 'Afiliado'
}

export interface FormaPago {
  tipo: 'Contado' | 'Plazo'
}

export class ClienteGeneral implements Cliente {
  tipo: 'General' = 'General'
}

export class ClienteAfiliado implements Cliente {
  tipo: 'Afiliado' = 'Afiliado'
}

export class PagoContado implements FormaPago {
  tipo: 'Contado' = 'Contado'
}

export class PagoPlazo implements FormaPago {
  tipo: 'Plazo' = 'Plazo'
}
