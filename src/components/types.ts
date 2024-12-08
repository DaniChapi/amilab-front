// Definir la interfaz Visita
export interface Visita {
    id: number;
    seller_id: number;
    client_id: number;
    customer: { rut: string };
    fecha_visita: Date; // O Date si ya lo manejas como un objeto Date
    temas_comerciales: string;
    otras_gestiones: string;
    latitude: number;
    longitude: number;

  }

  export interface Sale {
    id: number;
    tipo_doc: string;
    num_doc: string;
    fecha_doc: string;  // Puedes usar Date si prefieres trabajar con objetos de fecha
    cliente: string;
    razon_social: string;
    cod_comuna: string;
    codigo_producto: string;
    descripcion_producto: string;
    familia: string;
    subfamilia: string;
    cantidad: number;
    precio_lista: number;
    neto: number;
    COMUNA: string;
    PROVINCIA: string;
    REGION: string;
    MES: string;  // O también podrías usar number si es un número del mes
    VENDEDOR: string;
  }
  
  export interface Customer {
    client_id: number;
    RUT: string;
    RAZON_SOCIAL: string;
    NOMBRE_DE_FANTASIA: string;
    GIRO: string;
    RUT_HOLDING: string;
    AREA_DE_PRODUCCION: string;
    CLASIFICACION: string;
    EMAIL_COMERCIAL: string;
    EMAIL_SII: string;
    COMENTARIO: string;
    TIPO_DE_CLIENTE: string;
    TIPO_DE_PROVEEDOR: string;
    VENCIMIENTO: string;
    PLAZO_DE_PAGO: number;
    NOMBRE_VENDEDOR: string;
    CODIGO_COMISION: string;
    CODIGO_COBRADOR: string;
    LITSA_DE_PRECIOS: string;
    COMENTARIO_EMPRESA: string;
    DESCRIPCION_DE_DIRECCION: string;
    DIRECCION: string;
    COMUNA: string;
    CIUDAD: string;
    ATENCION_CONTACTO: string;
    EMAIL_CONTACTO: string;
    TELEFONO: string;
    TELEFONO_2: string;
    CUENTA_BANCO: string;
    CUENTA_TIPO: string;
    N_DE_CUENTA: string;
    ID_DE_CLIENTE_EXTRANJERO: string;
    TEXTO_1: string;
    TEXTO_2: string;
    CARACTERISTICA_1: string;
    CARACTERISTICA_2: string;
    MONTO_DE_CREDITO_AUTORIZADO: number;
    DIAS_DE_MORA: number;
  }

  export interface Seller{
    seller_id: number;
    name: string;
    email: string;
    rating: number;
  }