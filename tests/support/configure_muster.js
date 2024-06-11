
module.exports = {

  configure_muster: async function configure_muster() {

    //muster doppelrollo
    await page.goto('/doppelrollo/rayure-5007');
    await page.locator('#free-samples-addtocart').click();

    //muster plissee
    await page.goto('/plissee/poesia-1824');
    await page.locator('#free-samples-addtocart').click();

    //muster raffrollo
    await page.goto('/raffrollo/corsia-9135');
    await page.locator('#free-samples-addtocart').click();

    //muster rollo
    await page.goto('/rollo/blackout-unicolor-3110');
    await page.locator('#free-samples-addtocart').click();

    //muster schiebegardine
    await page.goto('/schiebegardinen/hilko-7316');
    await page.locator('#free-samples-addtocart').click();

    //muster vorhang
    await page.goto('/vorhaenge/dekoschal/bosco');
    await page.locator('#free-samples-addtocart').click();

  }
};