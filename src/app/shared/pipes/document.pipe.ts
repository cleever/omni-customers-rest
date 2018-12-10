import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'document'
})
export class DocumentPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        let mask = '';
        if (!value) {
            return value;
        }
        // CPF
        if (value.length === 11) {
            mask = '999.999.999-99';
        }
        // CNPJ
        if (value.length === 14) {
            mask = '99.999.999/9999-99';
        }
        return this.aplicarMascara(value, mask);
    }


    aplicarMascara(valor: string, mask: string): string {
        valor = valor.replace(/\D/g, '');
        const pad = mask.replace(/\D/g, '').replace(/9/g, '_');
        const valorMask = valor + pad.substring(0, pad.length - valor.length);
        let valorMaskPos = 0;

        valor = '';
        for (let i = 0; i < mask.length; i++) {
            if (isNaN(parseInt(mask.charAt(i), 10))) {
                valor += mask.charAt(i);
            } else {
                valor += valorMask[valorMaskPos++];
            }
        }

        if (valor.indexOf('_') > -1) {
            valor = valor.substr(0, valor.indexOf('_'));
        }

        return valor;
    }

}
