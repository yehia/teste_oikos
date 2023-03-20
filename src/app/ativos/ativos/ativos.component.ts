import { Component } from '@angular/core';
import {ConfirmationService, ConfirmEventType, MessageService} from 'primeng/api';

@Component({
  selector: 'app-ativos',
  templateUrl: './ativos.component.html',
  styleUrls: ['./ativos.component.css']
})
export class AtivosComponent {
  usuario = 'Tiago';

  ativo: any = {};
  ativoDialog = false;

  constructor(private confirmationService: ConfirmationService) {}

  editAtivo(ativoEdit: any) {

    this.ativo = {...ativoEdit};
    console.log(this.ativo.company);
    console.log(this.ativo.additionalInfo.unitPrice);
    this.ativoDialog = true;
}

  confirm(ativo: any) {
    this.confirmationService.confirm({
        message: `Tem certeza que deseja excluir o ativo de identificador <b>${ativo.company}?<br>Essa ação não poderá ser desfeita.</b>`,
        accept: () => {
            //Actual logic to perform a confirmation
        }
    });
  }

  hideDialog() {
    this.ativoDialog = false;
  }

  tipos = [
    {label: 'Ação', value: 'acao'},
    {label: 'Opção', value: 'opcao'},
  ];

  ativos: any[] = [
      {
        "_id": "TTZsRVHZUV",
        "company": "XPTO Incorporações Ltda",
        "asset": "XPTO3",
        "type": "acao",
        "additionalInfo": {
          "allotmentSize": 100,
          "unitPrice": 15.0
        }
      },
      {
        "_id": "SskQGI6Qj2",
        "company": "XPTO Incorporações Ltda",
        "asset": "XPTO4",
        "type": "acao",
        "additionalInfo": {
          "allotmentSize": 100,
          "unitPrice": 10.0
        }
      },
      {
        "_id": "HTZUuKXvr5",
        "company": "XPTO Incorporações Ltda",
        "asset": "XPTO205",
        "type": "opcao",
        "additionalInfo": {
          "operation": "compra",
          "unitPrice": 0.1
        }
      },
      {
        "_id": "reIeXG2g5O",
        "company": "XPTO Incorporações Ltda",
        "asset": "XPTO308",
        "type": "opcao",
        "additionalInfo": {
          "operation": "venda",
          "unitPrice": 0.05
        }
      },
        {
        "_id": "E3dhoMMv04",
        "company": "QCJ Capital",
        "asset": "QCYJ3",
        "type": "acao",
        "additionalInfo": {
          "allotmentSize": 10,
          "unitPrice": 238.25
        }
      },
      {
        "_id": "cgzLYgUVmH",
        "company": "QCJ Capital",
        "asset": "QCYJ4",
        "type": "acao",
        "additionalInfo": {
          "allotmentSize": 100,
          "unitPrice": 173.92
        }
      },
      {
        "_id": "qmAqXLlkgq",
        "company": "QCJ Capital",
        "asset": "QCYJ237",
        "type": "opcao",
        "additionalInfo": {
          "operation": "compra",
          "unitPrice": 0.35
        }
      },
      {
        "_id": "Wlkkg0fmEp",
        "company": "QCJ Capital",
        "asset": "QCYJ328",
        "type": "opcao",
        "additionalInfo": {
          "operation": "venda",
          "unitPrice": 0.22
        }
      }
  ];

}
