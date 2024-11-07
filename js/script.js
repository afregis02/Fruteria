const app = {
    data() {
        return {
            frutas: [{ nombre: 'Manzana Chilosa', cantidad: 15, precioUnitario: 5 }],
            nuevaFruta: '',
            nuevaCantidad: 0,
            nuevoPrecio: 0
        };
    },
    methods: {
        agregar() {
            if (this.nuevaFruta && this.nuevaCantidad > 0 && this.nuevoPrecio > 0) {
                this.frutas.push({
                    nombre: this.nuevaFruta,
                    cantidad: this.nuevaCantidad,
                    precioUnitario: this.nuevoPrecio
                });
                this.nuevaFruta = '';
                this.nuevaCantidad = 0;
                this.nuevoPrecio = 0;
            }
        }
    },
    computed: {
        subtotal() {
            return this.frutas.reduce((acc, fruta) => acc + (fruta.cantidad * fruta.precioUnitario), 0);
        },
        iva() {
            return (this.subtotal * 0.16).toFixed(2);
        },
        total() {
            return (this.subtotal + parseFloat(this.iva)).toFixed(2);
        }
    }
};

Vue.createApp(app).mount('#seccion');
