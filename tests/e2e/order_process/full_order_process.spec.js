import { test } from '@playwright/test';
import {checkOut, emptyCart} from "../../support/checkout"
import {configure_doppelrollo} from "../../support/configure_doppelrollo"
// import {rollo} from ("../../support/configure_rollo");
// import {plissee} from ("../../support/configure_plissee");
// import {jalousie} from ("../../support/configure_jalousie");
// import {holzjalousie} from ("../../support/configure_holzjalousie");
// import {insektenrollo} from ("../../support/configure_insektenrollo");
// import {fliegengitter} from ("../../support/configure_fliegengitter");
// import {vorhang} from ("../../support/configure_vorhang");
// import {schiebegardine} from ("../../support/configure_schiebegardine");
// import {raffrollo} from ("../../support/configure_raffrollo");
// import {kissenhuelle} from ("../../support/configure_kissenhuelle");
// import {muster} from ("../../support/configure_muster");
// import {plissee_zubehoer} from ("../../support/configure_zubehoer_plissee");
// import {schiebegardinen_zubehoer} from ("../../support/configure_zubehoer_schiebegardinen");
// import {vorhang_zubehoer} from ("../../support/configure_zubehoer_vorhang");
// import {rollo_zubehoer} from ("../../support/configure_zubehoer_rollo");
// import {service_breiteKuerzen} from ("../../support/configure_service_breiteKuerzen");
// import {service_schnurAendern} from ("../../support/configure_service_schnurAendern");
// import {service_schnurErsetzen} from ("../../support/configure_service_schnurErsetzen");
// import {service_schnurLaenger} from ("../../support/configure_service_schnurLaenger");


test.describe('Integration test with visual testing - order process incl. all product groups', function () {

  test('pdp2checkout: configure products and go 2 checkout', async function ({ page }) {

    // doppelrollo.configure_doppelrollo();
    await configure_doppelrollo(page);
    // fliegengitter.configure_fliegengitter();
    // holzjalousie.configure_holzjalousie();
    // insektenrollo.configure_insektenrollo();
    // jalousie.configure_jalousie();
    // kissenhuelle.configure_kissenhuelle();
    // muster.configure_muster();
    // plissee.configure_plissee();
    // raffrollo.configure_raffrollo();
    // rollo.configure_rollo();
    // schiebegardine.configure_schiebegardine(); //es wird ein einzelpaneel konfiguriert
    // service_breiteKuerzen.configure_service_breiteKuerzen();
    // service_schnurAendern.configure_service_aenderungSchnur();
    // service_schnurErsetzen.configure_service_schnurErsetzen();
    // service_schnurLaenger.configure_service_laengereSchnur();
    // vorhang.configure_vorhang();
    // plissee_zubehoer.configure_zubehoer_plissee();
    // rollo_zubehoer.configure_zubehoer_rollo();
    // schiebegardinen_zubehoer.configure_zubehoer_schiebegardinen();
    // vorhang_zubehoer.configure_zubehoer_vorhang();
    
    await page.waitForTimeout(2000);

    // checkOut.checkout();
    // checkOut.emptyCart();
    await checkOut(page);
    await emptyCart(page);
  });
});
