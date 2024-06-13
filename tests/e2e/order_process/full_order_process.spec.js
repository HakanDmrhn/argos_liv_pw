import { test } from '@playwright/test';
import { checkOut, emptyCart } from "../../support/checkout";
import { configure_doppelrollo } from "../../support/configure_doppelrollo";
import { configure_plissee } from "../../support/configure_plissee";
import { configure_rollo } from "../../support/configure_rollo";
import { configure_jalousie } from "../../support/configure_jalousie";
import { configure_holzjalousie } from "../../support/configure_holzjalousie";
import { configure_insektenrollo } from "../../support/configure_insektenrollo";
import { configure_fliegengitter } from "../../support/configure_fliegengitter";
import { configure_vorhang } from "../../support/configure_vorhang";
import { configure_schiebegardine } from "../../support/configure_schiebegardine";
import { configure_raffrollo } from "../../support/configure_raffrollo";
import { configure_kissenhuelle } from "../../support/configure_kissenhuelle";
import { configure_muster } from "../../support/configure_muster";
import { configure_zubehoer_plissee } from "../../support/configure_zubehoer_plissee";
import { configure_zubehoer_schiebegardinen } from "../../support/configure_zubehoer_schiebegardinen";
import { configure_zubehoer_vorhang } from "../../support/configure_zubehoer_vorhang";
import { configure_zubehoer_rollo } from "../../support/configure_zubehoer_rollo";
import { configure_service_breiteKuerzen } from "../../support/configure_service_breiteKuerzen";
import { configure_service_aenderungSchnur } from "../../support/configure_service_schnurAendern";
import { configure_service_schnurErsetzen } from "../../support/configure_service_schnurErsetzen";
import { configure_service_laengereSchnur } from "../../support/configure_service_schnurLaenger";


test.describe('Integration test with visual testing - order process incl. all product groups', function () {

  test('pdp2checkout: configure products and go 2 checkout', async function ({ page }) {

    test.setTimeout(4 * 60 * 1000);  // set test timeout to 4 minutes as this test is a little bit long

    await configure_doppelrollo(page);
    await configure_plissee(page);
    await configure_rollo(page);
    await configure_jalousie(page);
    await configure_holzjalousie(page);
    await configure_insektenrollo(page);
    await configure_fliegengitter(page);
    await configure_kissenhuelle(page);
    await configure_muster(page);
    await configure_raffrollo(page);
    await configure_schiebegardine(page); //es wird ein einzelpaneel konfiguriert
    await configure_service_breiteKuerzen(page);
    await configure_service_aenderungSchnur(page);
    await configure_service_schnurErsetzen(page);
    await configure_service_laengereSchnur(page);
    await configure_vorhang(page);
    await configure_zubehoer_plissee(page);
    await configure_zubehoer_rollo(page);
    await configure_zubehoer_schiebegardinen(page);
    await configure_zubehoer_vorhang(page);

    await page.waitForTimeout(2000);

    await checkOut(page);
    await emptyCart(page);
  });
});
