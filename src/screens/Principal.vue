<template>
  <div>
    <b-modal v-model="modalShow" id="some-modal-id" ok-only size="xl" hide-footer>
      <p
        class="acesseRapido"
        style="
          font-size: 27px;
          font-weight: 700;
          font-size: 22px;
          margin-bottom: 0rem;
          color: gray;
          text-align: center !important;
        "
      >
        Glossário
      </p>
      <p style="font-size: 19px; color: #b4b4b4; text-align: center !important">
        Guia de capitulo dos serviços
      </p>
      <div
        style="
          width: 90%;
          display: flex;
          margin: 0 auto;
          justify-content: space-between;
          border-top: 4px solid #e6e6e6;
          padding-top: 30px;
        "
      >
        <div style="font-size: 13px; margin-right: 17px">
          <span style="margin-right: 20px"> 1</span> SERVIÇOS DE INFORMÁTICA E
          CONGÊNERES<br />
          <span style="margin-right: 20px; margin-bottom: 30px"> 2</span> SERVIÇOS DE
          PESQUISAS E DESENVOLVIMENTO DE QUALQUER NATUREZA <br />
          <span style="margin-right: 20px"> 3</span> SERVIÇOS PRESTADOS MEDIANTE LOCAÇÃO,
          CESSÃO DE DIREITO DE USO E CONGÊNERES <br />
          <span style="margin-right: 20px"> 4</span> SERVIÇOS DE SAÚDE, ASSISTÊNCIA MÉDICA
          E CONGÊNERES <br />
          <span style="margin-right: 20px"> 5</span> SERVIÇOS DE MEDICINA E ASSISTÊNCIA
          VETERINÁRIA E CONGÊNERES<br />
          <span style="margin-right: 20px"> 6</span> SERVIÇOS DE CUIDADOS PESSOAIS,
          ESTÉTICA, ATIVIDADES FÍSICAS E CONGÊNERES <br />
          <span style="margin-right: 20px"> 7</span> SERVIÇOS RELATIVOS A ENGENHARIA,
          ARQUITETURA, GEOLOGIA, URBANISMO, CONSTRUÇÃO CIVIL, <br />
          <span style="margin-right: 20px"> 8</span> SERVIÇOS DE EDUCAÇÃO, ENSINO,
          ORIENTAÇÃO PEDAGÓGICA E EDUCACIONAL, INSTRUÇÃO, TREINAMENTO E AVALIAÇÃO PESSOAL
          DE QUALQUER GRAU OU NATUREZA <br />
          <span style="margin-right: 20px"> 9</span> SERVIÇOS RELATIVOS A HOSPEDAGEM,
          TURISMO, VIAGENS E CONGÊNERES <br />
          <span style="margin-right: 20px"> 10</span> SERVIÇOS DE INTERMEDIAÇÃO E
          CONGÊNERES <br />
          <span style="margin-right: 20px"> 11</span> SERVIÇOS DE GUARDA, ESTACIONAMENTO,
          ARMAZENAMENTO, VIGILÂNCIA E CONGÊNERES <br />
          <span style="margin-right: 20px">12</span> SERVIÇOS DE DIVERSÕES, LAZER,
          ENTRETENIMENTO E CONGÊNERES <br />
          <span style="margin-right: 20px">13</span> SERVIÇOS RELATIVOS A FONOGRAFIA,
          FOTOGRAFIA, CINEMATOGRAFIA E REPROGRAFIA <br />
          <span style="margin-right: 20px"> 14</span> SERVIÇOS RELATIVOS A BENS DE
          TERCEIROS <br />
          <span style="margin-right: 20px"> 15</span> SERVIÇOS RELACIONADOS AO SETOR
          BANCÁRIO OU FINANCEIRO, INCLUSIVE AQUELES PRESTADOS POR INSTITUIÇÕES FINANCEIRAS
          AUTORIZADAS A FUNCIONAR PELA UNIÃO OU POR QUEM DE DIREITO <br />
          <span style="margin-right: 20px"> 16</span> SERVIÇOS DE TRANSPORTE DE NATUREZA
          MUNICIPAL <br />
          <span style="margin-right: 20px"> 17</span> SERVIÇOS DE APOIO TÉCNICO,
          ADMINISTRATIVO, JURÍDICO, CONTÁBIL, COMERCIAL E CONGÊNERES <br />
          <span style="margin-right: 20px"> 18</span> SERVIÇOS DE REGULAÇÃO DE SINISTROS
          VINCULADOS A CONTRATOS DE SEGUROS; INSPEÇÃO E AVALIAÇÃO DE RISCOS PARA COBERTURA
          DE CONTRATOS DE SEGUROS; PREVENÇÃO E GERÊNCIA DE RISCOS SEGURÁVEIS E CONGÊNERES
          <br />
          <span style="margin-right: 20px"> 19</span> SERVIÇOS DE DISTRIBUIÇÃO E VENDA DE
          BILHETES E DEMAIS PRODUTOS DE LOTERIA, BINGOS, CARTÕES, PULES OU CUPONS DE
          APOSTAS, SORTEIOS, PRÊMIOS, INCLUSIVE OS DECORRENTES DE TÍTULOS DE CAPITALIZAÇÃO
          E CONGÊNERES <br />
          <span style="margin-right: 20px"> 20 </span> SERVIÇOS PORTUÁRIOS,
          AEROPORTUÁRIOS, FERROPORTUÁRIOS, DE TERMINAIS RODOVIÁRIOS, FERROVIÁRIOS E
          METROVIÁRIOS
        </div>
        <div style="font-size: 13px">
          <span style="margin-right: 20px"> 21 </span> SERVIÇOS DE REGISTROS PÚBLICOS,
          CARTORÁRIOS E NOTARIAIS<br />
          <span style="margin-right: 20px"> 22 </span> SERVIÇOS DE EXPLORAÇÃO DE RODOVIA
          <br />
          <span style="margin-right: 20px"> 23 </span> SERVIÇOS DE PROGRAMAÇÃO E
          COMUNICAÇÃO VISUAL, DESENHO INDUSTRIAL E CONGÊNERES <br />
          <span style="margin-right: 20px"> 24 </span> SERVIÇOS DE CHAVEIROS, CONFECÇÃO DE
          CARIMBOS, PLACAS, SINALIZAÇÃO VISUAL, BANNERS, ADESIVOS E CONGÊNERES <br />
          <span style="margin-right: 20px"> 25 </span> SERVIÇOS FUNERÁRIOS <br />
          <span style="margin-right: 20px"> 26 </span> SERVIÇOS DE COLETA, REMESSA OU
          ENTREGA DE CORRESPONDÊNCIAS, DOCUMENTOS, OBJETOS, BENS OU VALORES, INCLUSIVE
          PELOS CORREIOS E SUAS AGÊNCIAS FRANQUEADAS; COURRIER E CONGÊNERES <br />
          <span style="margin-right: 20px"> 27 </span> SERVIÇOS DE ASSISTÊNCIA SOCIAL
          <br />
          <span style="margin-right: 20px"> 28 </span> SERVIÇOS DE AVALIAÇÃO DE BENS E
          SERVIÇOS DE QUALQUER NATUREZA <br />
          <span style="margin-right: 20px"> 29 </span> SERVIÇOS DE BIBLIOTECONOMIA <br />
          <span style="margin-right: 20px"> 30 </span> SERVIÇOS DE BIOLOGIA, BIOTECNOLOGIA
          E QUÍMICA <br />
          <span style="margin-right: 20px"> 31 </span> SERVIÇOS TÉCNICOS EM EDIFICAÇÕES,
          ELETRÔNICA, ELETROTÉCNICA, MECÂNICA, TELECOMUNICAÇÕES E CONGÊNERES <br />
          <span style="margin-right: 20px"> 32 </span> SERVIÇOS DE DESENHOS TÉCNICOS
          <br />
          <span style="margin-right: 20px"> 33 </span> SERVIÇOS DE DESEMBARAÇO ADUANEIRO,
          COMISSÁRIOS, DESPACHANTES E CONGÊNERES <br />
          <span style="margin-right: 20px"> 34 </span> SERVIÇOS DE INVESTIGAÇÕES
          PARTICULARES, DETETIVES E CONGÊNERES <br />
          <span style="margin-right: 20px"> 35 </span> SERVIÇOS DE REPORTAGEM, ASSESSORIA
          DE IMPRENSA, JORNALISMO E RELAÇÕES PÚBLICAS <br />
          <span style="margin-right: 20px"> 36 </span> SERVIÇOS DE METEOROLOGIA <br />
          <span style="margin-right: 20px"> 37 </span> SERVIÇOS DE ARTISTAS, ATLETAS,
          MODELOS E MANEQUINS <br />
          <span style="margin-right: 20px"> 38 </span> SERVIÇOS DE MUSEOLOGIA <br />
          <span style="margin-right: 20px"> 39 </span> SERVIÇOS DE OURIVESARIA E LAPIDAÇÃO
          <br />
          <span style="margin-right: 20px"> 40 </span> SERVIÇOS RELATIVOS A OBRAS DE ARTE
          SOB ENCOMENDA <br />
        </div>
      </div>
      <br />
      <div style="display: flex; width: 100%; justify-content: center">
        <div>
          <button @click="modalShow = false" class="voltar">fechar</button>
        </div>
      </div>
    </b-modal>
    <div class="painel-p-rtfonte">
      <svg
        width="663"
        height="116"
        viewBox="0 0 663 116"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M42.8001 30.2135C27.828 32.2368 14.012 42.4687 10.9482 58.1346C8.98275 68.6555 11.295 80.6217 11.4685 81.4888C15.9196 91.6051 23.2612 100.276 32.7416 106.288C20.6021 83.7433 22.1629 49.3478 42.8001 30.2135Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M74.9411 4.02675C44.5922 -2.62112 14.7057 16.571 8.05781 46.8621C8.05781 46.9199 8.05781 47.0355 8 47.0933C8.86711 43.1624 10.1389 39.4049 11.7575 35.8787C14.7635 33.1039 17.0758 31.7165 17.0758 31.7165C33.0885 21.1956 48.234 24.2594 50.0839 24.7218C75.9238 8.99819 94.7691 16.5132 94.7691 16.5132C77.2534 16.1663 63.4952 24.3172 58.9284 27.381C77.7737 34.9538 83.3232 50.8508 83.3232 50.8508C72.7444 34.2601 55.749 30.5604 55.749 30.5604C55.4022 30.5026 55.0553 30.4448 54.7085 30.387C35.632 45.2435 37.0194 67.1526 37.0194 67.1526C39.4473 102.531 72.1664 113.514 72.1664 113.514L71.9929 114.266C94.0176 110.624 112.632 93.9753 117.661 70.8522C124.367 40.5611 105.232 10.6168 74.9411 4.02675Z"
          fill="white"
        />
        <path
          d="M204.529 80.13V93H152.653C152.653 69.933 152.653 46.767 152.653 23.7H204.529V36.372H165.622V52.311H203.143V64.488H165.622V80.13H204.529Z"
          fill="white"
        />
        <path
          d="M227.697 93H214.629V23.799H264.426V36.372H227.697V55.281H262.446V67.359H227.697V93Z"
          fill="white"
        />
        <path
          d="M299.745 23.7C323.505 23.7 334.098 40.629 334.395 57.756C334.692 75.279 324 93 299.745 93C291.231 93 281.034 93 272.52 93V23.7C281.034 23.7 291.231 23.7 299.745 23.7ZM285.489 36.075V80.427H299.745C315.486 80.427 321.723 68.943 321.426 57.657C321.129 46.866 314.793 36.075 299.745 36.075H285.489Z"
          fill="white"
        />
        <path d="M341.634 66.27V55.182H378.165V66.27H341.634Z" fill="white" />
        <path
          d="M449.842 92.109V93H434.299L414.103 69.834H401.53V93H388.462V23.601C399.451 23.601 410.44 23.7 421.429 23.7C437.764 23.799 446.377 34.689 446.377 46.668C446.377 56.172 442.021 65.775 428.854 68.448L449.842 92.109ZM421.429 35.877H401.53V58.053H421.429C429.745 58.053 433.309 52.509 433.309 46.965C433.309 41.421 429.646 35.877 421.429 35.877Z"
          fill="white"
        />
        <path
          d="M506.846 80.13V93H454.97C454.97 69.933 454.97 46.767 454.97 23.7H506.846V36.372H467.939V52.311H505.46V64.488H467.939V80.13H506.846Z"
          fill="white"
        />
        <path d="M530.015 93H517.046V23.7H530.015V93Z" fill="white" />
        <path
          d="M587.817 66.666V23.601H600.885V93H592.767V93.099L556.335 46.272V93H543.267V23.7H553.86L587.817 66.666Z"
          fill="white"
        />
        <path
          d="M625.921 93H612.853V23.799H662.65V36.372H625.921V55.281H660.67V67.359H625.921V93Z"
          fill="white"
        />
        <path
          d="M114.391 80.9577C114.426 80.8857 114.457 80.812 114.482 80.7365C121.532 64.2135 120.272 43.9569 111.115 28.4744C116.004 22.5403 109.654 14.0424 102.709 17.3304C101.489 16.0642 100.208 14.8506 98.8801 13.7031C101.486 6.50939 92.7883 0.608136 87.3713 5.98287C71.6265 -2.08986 52.0436 -1.98762 36.3858 6.25605C30.8158 0.262475 21.4613 6.68883 24.8337 14.2088C22.9023 15.9237 21.0742 17.7762 19.3886 19.7352C17.9332 21.4266 20.5698 23.745 22.0152 22.0653C23.5834 20.243 25.2825 18.5192 27.0771 16.9217C30.5476 19.4634 35.5798 18.1686 37.4838 14.2889C43.7669 16.1253 49.7671 18.761 55.3583 22.1437C54.8902 23.8576 55.0814 25.7717 55.8845 27.3539C51.2828 31.3901 47.1386 35.9559 43.54 40.9598C40.2178 39.9405 36.556 41.6466 35.1113 44.8411C27.785 44.881 20.4359 45.6812 13.2205 47.2298C12.5833 46.0243 11.6174 45.0253 10.4464 44.3562C11.802 38.9883 13.9492 33.882 16.8414 29.1605C17.9938 27.2788 15.0849 25.3226 13.8797 27.2899C10.8047 32.3095 8.52083 37.7378 7.07635 43.4441C-1.27843 43.5881 -2.68105 55.324 5.27262 57.5817C5.15543 74.2844 12.2676 90.5233 24.6005 101.585C22.0278 108.642 30.38 114.462 35.8919 109.485C51.9778 118.17 72.3076 118.172 88.3945 109.488C94.0005 115.118 102.979 108.828 99.8217 101.469C106.178 95.733 111.116 88.7176 114.391 80.9577ZM112.194 76.9972C107.366 72.1273 102.083 67.7095 96.4428 63.8314C97.2438 61.2836 96.5476 58.417 94.6769 56.5362C99.4201 48.5286 103.144 39.9424 105.765 30.9729C106.638 30.976 107.478 30.8124 108.251 30.5163C116.283 44.2891 117.752 62.0467 112.194 76.9972ZM31.9419 97.0153C30.4742 82.418 33.0497 67.8552 39.424 54.6948C43.384 55.9495 47.6641 53.3053 48.4331 49.1779C60.4584 50.6831 72.04 54.2679 82.9089 59.8507C82.3861 61.9138 82.8189 64.1887 84.0641 65.9049C71.8128 81.6648 55.6411 93.5238 37.1326 100.321C36.0112 98.5174 34.1251 97.2559 31.9419 97.0153ZM86.174 61.6451C86.174 59.6384 87.7701 58.006 89.732 58.006C94.4519 58.2055 94.4505 65.0854 89.732 65.2842C87.7701 65.2842 86.174 63.6518 86.174 61.6451ZM109.338 23.7924C109.338 25.7991 107.742 27.4315 105.78 27.4315C101.06 27.232 101.061 20.3521 105.78 20.1533C107.742 20.1533 109.338 21.7857 109.338 23.7924ZM100.044 19.6294C97.634 23.0683 98.7527 28.0395 102.387 30.0835C99.8477 38.7354 96.2481 47.0175 91.6689 54.7427C90.7116 54.4632 89.649 54.3938 88.6647 54.5468C83.8783 44.1687 76.9138 34.821 68.406 27.3543C69.2099 25.7712 69.4015 23.8604 68.9327 22.1442C74.3178 18.8864 80.0862 16.3189 86.1182 14.4938C88.1231 18.4241 93.5013 19.5338 96.8402 16.5916C97.9468 17.5583 99.018 18.5737 100.044 19.6294ZM58.5874 24.0665C58.5874 22.0599 60.1835 20.4274 62.1454 20.4274C66.8655 20.6269 66.8641 27.5066 62.1454 27.7054C60.1835 27.7054 58.5874 26.073 58.5874 24.0665ZM92.32 7.44957C94.2821 7.44957 95.8782 9.08201 95.8782 11.0887C95.6824 15.9164 88.9572 15.9152 88.7621 11.0887C88.7621 9.08201 90.3582 7.44957 92.32 7.44957ZM31.1787 14.7276C29.2169 14.7276 27.6208 13.0951 27.6208 11.0885C27.8166 6.26054 34.5418 6.26219 34.7369 11.0885C34.7369 13.0951 33.1406 14.7276 31.1787 14.7276ZM38.2181 10.8169C38.2 10.3254 38.1335 9.84676 38.0228 9.38494C52.6217 1.71926 70.8596 1.58562 85.5711 9.02842C85.382 9.67039 85.2786 10.3492 85.2751 11.0521C78.9303 12.9579 72.8634 15.65 67.1994 19.0705C64.4769 16.211 59.815 16.2101 57.0916 19.0703C51.1893 15.5055 44.8536 12.7346 38.2181 10.8169ZM58.1935 30.0082C60.5519 31.6425 63.7382 31.6427 66.0967 30.0084C74.2195 37.1296 80.8735 46.0438 85.4569 55.9426C85.1463 56.1851 84.8561 56.4536 84.5891 56.7442C73.1303 50.8427 60.902 47.0905 48.2004 45.5808C47.8574 44.5269 47.2816 43.5805 46.5343 42.8059C49.9432 38.1038 53.8552 33.8093 58.1935 30.0082ZM41.5123 44.197C43.4742 44.197 45.0703 45.8295 45.0703 47.8361C44.8745 52.6641 38.1493 52.6626 37.9542 47.8361C37.9544 45.8295 39.5505 44.197 41.5123 44.197ZM3.45471 50.6234C3.45471 48.6167 5.05079 46.9843 7.01264 46.9843C11.7325 47.1838 11.7311 54.0635 7.01264 54.2623C5.05102 54.2625 3.45471 52.63 3.45471 50.6234ZM8.76033 57.5803C8.76033 57.5803 14.0576 56.4073 14.0576 50.6701C14.0576 50.6701 27.6503 48.4639 34.4893 48.3865C34.6176 50.1021 35.3391 51.6502 36.4458 52.8185C29.6494 66.7018 26.9081 82.0941 28.486 97.5185C27.8066 97.806 27.1811 98.1992 26.6281 98.677C15.2502 88.3275 8.76033 70.9869 8.76033 57.5803ZM31.1787 107.792C29.2169 107.792 27.6208 106.159 27.6208 104.153C27.6208 102.146 29.2169 100.514 31.1787 100.514C33.1143 100.514 34.7369 102.216 34.7369 104.153C34.7369 106.159 33.1406 107.792 31.1787 107.792ZM62.1454 112.485C53.6811 112.485 45.3109 110.427 37.83 106.519C38.1337 105.635 38.2676 104.628 38.2086 103.691C57.3546 96.6831 74.0853 84.437 86.7596 68.1534C87.8008 68.6492 88.9563 68.8768 90.1042 68.8157C90.879 71.7356 91.4913 74.7146 91.9252 77.6933C92.2575 79.9736 95.7089 79.4641 95.3757 77.1753C94.9151 74.0124 94.2628 70.849 93.4348 67.7508C93.8517 67.4873 94.2391 67.1801 94.5921 66.8366C100.412 70.8483 105.838 75.4536 110.753 80.5504C107.705 87.393 103.268 93.5887 97.6305 98.7082C97.0732 98.2832 96.4516 97.9413 95.7845 97.6981C96.1272 94.4061 96.2765 91.0822 96.2263 87.7946C96.1909 85.4813 92.7032 85.5356 92.7388 87.8494C92.7872 91.0095 92.643 94.2047 92.3119 97.3692C88.1987 98.0334 85.5085 102.364 86.6419 106.423C79.114 110.393 70.679 112.485 62.1454 112.485ZM93.4183 108.1C91.4564 108.1 89.8603 106.467 89.8603 104.461C90.0561 99.6328 96.7813 99.6345 96.9764 104.461C96.9764 106.467 95.3803 108.1 93.4183 108.1Z"
          fill="#DB9416"
        />
      </svg>

      <p style="color: rgb(230, 233, 233); font-size: 24px">R-4000</p>
    </div>

    <div class="espacamento">
      <div class="dividir">
        <div class="itemSelecionado">
          <div style="display: flex; align-items: center; margin-top: 25px">
            <p txtSelectAtual>{{ lista[selectAtual - 1].nome }}</p>
            <span> {{ lista[selectAtual - 1].lado }}</span>
          </div>
          <p style="color: #b45152; font-size: 15px">
            {{ lista[selectAtual - 1].subtitulo }}
          </p>
        </div>
        <div class="acessoRapido" v-if="selectAtual == 1" @click="modalShow = !modalShow">
          <img
            src="https://www.lefisc.com.br/efdReinf/img/pesquisar.svg"
            alt=""
            width="25"
          />
          Índice de Tópicos
        </div>
      </div>
      <div v-if="selectAtual == 2">
        <div v-html="autopecas.conteudo" style="margin-top: 20px"></div>
        <hr />
        <h3 style="text-align: center; margin-top: 20px; margin-bottom: 20px">
          ANEXOS I e II da Lei nº 10.485/2002
        </h3>
        <div class="pesquisar">
          <select
            name=""
            id=""
            style="margin: 0px 20px; border: none; border-radius: 5px; height: 27px"
            @change="onChangeNcm($event)"
          >
            <option value="ncm">NCM</option>
            <option value="descricao">Descrição</option>
          </select>
          <div class="pIn">
            <img
              src="https://www.lefisc.com.br/efdReinf/img/pesquisarBlack.svg"
              width="20"
            />
            <input type="text" v-model="txtNcm" placeholder="Pesquisar" />
          </div>
        </div>
        <h5 style="margin-top:25px;margin-bottom50px;font-weight:bold;">ANEXO I</h5>
        <table>
          <thead>
            <tr>
              <th>NCM</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            <!-- irmao se tu ta trabalhando na lefisc ja passei por isso sai daqui imediatamente ja perdi minha sanidade estou prestes a me matar enforcado tmj nao cometa os mesmos erros que eu familia! -->
            <tr v-for="(n, i) in ListaNcmAnexo1" :key="i">
              <td v-html="hig(n.ncm)" style="letter-spacing: -1px; width: 110px"></td>
              <td v-html="hig(n.descricao)" style="text-align: justify"></td>
            </tr>
          </tbody>
        </table>
        <h5 style="margin-top: 25px; margin-bottom: 5px; font-weight: bold">ANEXO II</h5>
        <table>
          <thead>
            <tr>
              <th>NCM</th>
              <th>Descrição</th>
              <th>Condição</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(n, i) in ListaNcmAnexo2" :key="i">
              <td v-html="hig(n.ncm)" style="letter-spacing: -1px; width: 110px"></td>
              <td v-html="hig(n.descricao)" style="text-align: justify"></td>
              <td style="background-color: #fcf8e3; text-align: justify">
                {{ n.condicao }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else-if="selectAtual == 3">
        <div v-html="orgaosPublicosFederais.conteudo" style="margin-top: 20px"></div>
      </div>

      <div class="inputCaixa" v-if="selectAtual == 1">
        <form v-on:submit.prevent="pesquisar()" style="display: flex">
          <input type="text" v-model="texto" required="" />
          <button type="submit" style="margin-left: 0px">
            <img src="https://www.lefisc.com.br/efdReinf/img/pesquisar.svg" alt="" />
            Pesquisar
          </button>
          <label for="texto">buscar por palavra</label>
        </form>
        <p style="color: red; margin: 10px 0px">{{ msg }}</p>
      </div>
      <Numeracao
        @pegarAtual="
          atual = $event;
          chamarConteudoPaginaInicial(atual);
        "
        v-if="selectAtual == 1"
      />
      <br />
      <div v-if="selectAtual == 1">
        <div v-if="mostraSke">
          <span class="skeleton-loaderT"></span>
          <span class="skeleton-loader"></span>
          <span class="skeleton-loader"></span>
          <span class="skeleton-loader"></span>
          <span class="skeleton-loader"></span>
        </div>
        <div v-for="(n, i) in this.dados" :key="i">
          <p txtTitulo v-if="!mostraSke">{{ n.titulo }}</p>
          <div v-for="(a, j) in n.array" :key="j">
            <div>
              <Perguntas
                :pergunta="a.numero + ' ' + a.servico"
                :idItem="a.idItem"
                :id="a.numero"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Numeracao from "../components/Numeracao.vue";
import Perguntas from "../components/Perguntas.vue";
import { url, token } from "../services/link.js";

export default {
  components: {
    Numeracao,
    Perguntas,
  },
  directives: {
    changeCor: {
      bind(el, binding) {
        if (binding.value !== binding.oldValue) {
          el.oninput =
            ((ev) => {
              console.log(ev);
              el.dispatchEvent(new Event("change"));
            },
            parseInt(binding.value) || 300);
        }
        const type = binding.arg;
        const fn = binding.value;
        el.addEventListener(type, fn);
      },
    },
  },
  computed: {
    ListaNcmAnexo1() {
      if (this.ncm) {
        return this.autopecas.anexo1.filter((e) => e.ncm.includes(this.txtNcm));
      }
      return this.autopecas.anexo1.filter((e) => e.descricao.includes(this.txtNcm));
    },
    ListaNcmAnexo2() {
      if (this.ncm) {
        return this.autopecas.anexo2.filter((e) => e.ncm.includes(this.txtNcm));
      }
      return this.autopecas.anexo2.filter((e) => e.descricao.includes(this.txtNcm));
    },
  },
  data() {
    return {
      mostraSke: false,
      modalShow: false,
      keyword: null,
      queries: ["birds", "scatt"],
      description: "Tropical birds scattered as Drake veered the Jeep",
      ncm: true,
      txtNcm: "",
      orgaosPublicosFederais: [],
      autopecas: [],
      lista: [
        {
          id: 1,
          nome: "Lista de Serviços em Geral ",
          subtitulo:
            "Acesso Rápido Selecione o capítulo do serviço desejado entre as opções abaixo",
          lado: "| Acesso Rapido",
        },
        {
          id: 2,
          nome: "Autopeças – Lei nº 10.485/2002 – Retenção PIS e COFINS",
          subtitulo: "",
          lado: "",
        },
        {
          id: 3,
          nome:
            "Órgãos Públicos Federais/Estaduais/Municipais – Comercialização de Bens e Demais Operações Não Enquadradas na Lista de Serviços (LC nº 116/2003)",
          subtitulo: "",
          lado: "",
        },
      ],
      msg: "",
      texto: "",
      pag: 1,
      dados: [],
      atual: 1,
      selectAtual: 1,
    };
  },
  methods: {
    async pesquisar() {
      this.dados = [];
      this.mostraSke = true;
      this.carregamentoPag = true;
      this.texto = this.texto.trim();
      await axios
        .post(`${url}/pesquisa/`, {
          termo: this.texto,
        })
        .then((e) => {
          for (let element of e.data) {
            if (element.serviço.length <= 2) {
              console.log(element.serviço);
              this.dados.push({
                idCat: element.idCat,
                titulo: element.serviço + " " + element.categoria,
                array: [],
              });
            }
          }
          console.log(e.data);
          for (let ele of this.dados) {
            for (let data of e.data) {
              if (ele.idCat == data.idCat) {
                if (data.serviço.length >= 3) {
                  ele.array.push({
                    idCat: data.idCat,
                    idItem: data.idItem,
                    numero: data.serviço,
                    servico: data.categoria,
                  });
                }
              }
            }
          }
        });
      this.mostraSke = false;
    },
    hig(txt) {
      return txt.replace(new RegExp(this.txtNcm, "gi"), '<span class="hig">$&</span>');
    },
    onChangeNcm(e) {
      if (e.target.value == "ncm") {
        this.ncm = true;
        return;
      }
      this.ncm = false;
    },
    async onChange(e) {
      this.selectAtual = e.target.value;
      if (this.selectAtual == 2) {
        await axios
          .get("https://www.lefisc.com.br/api/retfonte/api/autopecas")
          .then((e) => (this.autopecas = e.data));
      } else if (this.selectAtual == 3) {
        await axios
          .get("https://www.lefisc.com.br/api/retfonte/api/orgaos-publicos-federais")
          .then((e) => (this.orgaosPublicosFederais = e.data));
      }
    },
    async chamarConteudoPaginaInicial(id) {
      this.dados = [];
      this.mostraSke = true;
      try {
        await axios.get(`${url}/titulo/${id}/${token}`).then(async (e) => {
          console.log(e);
          this.dados.push({
            idCat: e.data[0].idCat,
            titulo: e.data[0].idCat + ` ` + e.data[0].titulo,
            array: [],
          });
          await axios
            .get(`${url}/GeralporIdCatPaginado/${e.data[0].idCat}/${this.pag}/${token}`)
            .then((e) => {
              for (let element of e.data) {
                console.log(element);
                this.dados[0].array.push({
                  idItem: element.idItem,
                  idCat: element.idCat,
                  numero: element.n_servico,
                  servico: element.servico,
                });
              }
            });
        });
      } catch (e) {
        console.log(e);
      }
      this.mostraSke = false;
    },
  },
};
</script>

<style>
.skeleton-loader {
  width: 100%;
  height: 60px;
  border-radius: 10px;
  margin-top: 20px;
  display: block;
  background: linear-gradient(
      to right,
      rgba(216, 0, 0, 0),
      rgba(255, 255, 255, 0.3) 50%,
      rgba(255, 255, 255, 0) 90%
    ),
    lightgray;
  background-repeat: repeat-y;
  background-size: 400px 10px;
  background-position: 0 0;
  animation: shine 1.5s infinite;
}
@keyframes shine {
  to {
    background-position: 100% 100px, /* move highlight to right */ 0 0;
  }
}
.skeleton-loaderT {
  width: 40%;
  height: 25px;
  border-radius: 5px;
  margin-top: 20px;
  display: block;
  background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 80%
    ),
    lightgray;
  background-repeat: repeat-y;
  background-size: 50px 500px;
  background-position: 0 0;
  animation: shine 1s infinite;
}
@keyframes shine {
  to {
    background-position: 100% 0, 0 0;
  }
}
p {
  text-align: justify !important;
}
.voltar button {
  height: 46px;
  width: 120px;
  border-radius: 7px;
  border: 2px solid #af3437;
  background: #fff;
  color: gray;
  font-style: italic;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  margin-top: 9px;
}
.voltar button:focus {
  outline: none;
}
.hig {
  color: rgb(226, 5, 5);
}
.pesquisar {
  height: 40px;
  display: flex;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
}
.pesquisar .pIn {
  position: relative;
  border-left: 1px solid rgb(27 31 35 / 15%);
  padding-left: 15px;
  display: flex;
  align-items: center;
  width: 100%;
}
.pesquisar input {
  border: none;
  margin-left: 7px;
  width: 100%;
}
.pesquisar input:focus {
  outline: none;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
td,
th {
  border: 1px solid #dfdfdf;
  border-width: 1px !important;
  padding: 6px;
}
tr:nth-child(even) {
  background-color: #e9e8e8;
}
.dividir {
  padding-bottom: 8px;
  border-bottom: 1px solid #707070;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
li {
  text-align: justify;
  position: relative;
}
.acessoRapido:hover {
  background: #b45152;
  border: 1px solid #b45152;
}
.acessoRapido {
  height: 38px;
  position: relative;
  background: #af3437;
  color: #fff;
  border: 1px solid #af3437;
  width: 175px;
  text-transform: lowercase;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  transition: 0.5s all;
}
.itemSelecionado {
  color: #af3437;
}
.itemSelecionado p {
  margin-bottom: 0;
}
.itemSelecionado p {
  font-size: 20px;
}
.itemSelecionado span {
  font-size: 20px;
  margin-left: 5px;
}
[txtSelectAtual] {
  font-weight: bold;
}
select:focus {
  outline: none;
}
[txtTitulo] {
  color: #616161;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: -9px;
  margin-top: 20px;
}
.espacamento {
  padding: 30px;
}
.painel-p-rtfonte {
  height: 27vw;
  background-image: url("https://www.lefisc.com.br/efdReinf/img/back2.png"),
    linear-gradient(to top, #af3437, rgba(175, 52, 55, 0.05));
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: multiply;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
}
.painel-p-rtfonte img {
  width: 25%;
}
.painel-p-rtfonte p {
  font-style: italic;
  letter-spacing: -0.9px;
  color: rgba(175, 52, 55, 0.05);
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 6%;
}
#linhas {
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #af3437;
}
#linhas p {
  color: #fff;
  font-weight: bold;
  margin-bottom: 0px;
  font-size: 18px;
}
.inputCaixa {
  max-width: 521px;
  position: relative;
  margin: 45px auto;
  height: 38px;
}
.inputCaixa label {
  position: absolute;
  bottom: 7px;
  opacity: 0.5;
  left: 12px;
  font-size: 18px;
  color: #555;
  pointer-events: none;
  transition: 0.3s all;
}
.inputCaixa input {
  width: 400px;
  outline: none;
  position: relative;
  z-index: 2;
  padding-left: 20px;
  border: 1px solid #707070;
  background: none;
}
.inputCaixa input:focus ~ label,
.inputCaixa input:valid ~ label {
  bottom: 26px;
  background: #fff;
  opacity: 1;
  z-index: 3;
}
.inputCaixa button {
  height: 38px;
  margin-left: -5px;
  position: relative;
  border-radius: 0px 5px 5px 0px;
  background: #af3437;
  color: #fff;
  border: 1px solid #af3437;
  width: 120px;
  text-transform: lowercase;
  font-size: 16px;
  padding-left: 23px;
  outline: none;
  cursor: pointer;
}
.inputCaixa button:hover {
  background: #b45152;
  border: 1px solid #b45152;
}
.inputCaixa button img {
  margin-left: -8px;
  position: absolute;
  left: 17px;
  top: 10px;
  width: 19px;
}
.inputCaixa button:hover img {
  width: 20px;
}
</style>
