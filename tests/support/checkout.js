
import { ignoreFreshChat } from './helpers'
import { expect, test } from '@playwright/test';
import { argosScreenshot } from "@argos-ci/playwright";


const data =
{
    "login": "guest",
    "prefix": "geschaeftskunde",
    "company_name": "Test GmbH",
    "vatID": "ATU33803701",
    "prefix_business": "Frau",
    "first_name": "Maria",
    "last_name": "Magdalena",
    "email": "maria@delphinus-test.de",
    "street": "Karlsplatz 40",
    "postal_code": "1040",
    "city": "Wien",
    "state": "Österreich",
    "phone": "222219",
    "shipping": "new",
    "prefix2": "geschaeftskunde",
    "company_name2": "Chaimag Ltd",
    "prefix_business2": "Herr",
    "first_name2": "Mirco",
    "last_name2": "Yanar",
    "street2": "104 Bdin Str., Büro 12",
    "postal_code2": "1234",
    "city2": "Sofia",
    "state2": "Bulgarien",
    "phone2": "225588",
    "versandkosten": "16,81", //20,00 / 119 * 100 
    "payment": "bankpayment"
};

export async function add2Cart(page) {

    //add to cart
    await page.locator('#configurator-price-cart > .add-to-cart button').click();

}

export async function checkOut(page) {

    //----------------------- CHECK URL OF CART --------------------------------//
    //--------------------------------------------------------------------------//

    // check correct URL --> is cart loaded?
    await expect(page).toHaveURL(new RegExp('/checkout/cart'));

    // ignore freshchat
    await ignoreFreshChat(page);

    // take argos screenshot
    await argosScreenshot(page, 'Alle Produkte im Warenkorb', {
        viewports: [
            "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
            "iphone-6" // Use device preset for iphone-6 --> 375x667
        ]
    });


    //proceed to checkout 
    await page.getByText(/zur Kasse gehen/).first().click();


    //----------------------- CHECK URL OF CHECKOUT ----------------------------//
    //--------------------------------------------------------------------------//

    // check correct URL --> is cart loaded?
    await expect(page).toHaveURL(new RegExp('/checkout/onepage'));

    //set billing address information in Rechnungsinformation
    await setBillingData(page, data.company_name, data.vatID, data.first_name, data.last_name, data.email, data.street, data.postal_code, data.city, data.phone, data.state);

    // ignore freshchat
    await ignoreFreshChat(page);

    // take argos screenshot Rechnungsinformation
    await argosScreenshot(page, 'checkout - Rechnungsinformation', {
        viewports: [
            "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
            "iphone-6" // Use device preset for iphone-6 --> 375x667
        ]
    });

    //select 'An andere Adresse verschicken' and go on
    await page.locator('input[title="An andere Adresse verschicken"]').check();
    await page.locator('#billing-buttons-container > button[title="Weiter"]').click();




    //------------------------------- CHECK REQUEST ----------------------------//
    //--------------------------------------------------------------------------//
    await Promise.all([
        page.waitForResponse(response =>
            response.url().includes('/checkout/onepage/saveBilling')
            && response.status() === 200, { timeout: 2000 }
        && console.log('RESPONSE RECEIVED - /checkout/onepage/saveBilling')
        )
    ]);

    //set shipping address information
    await setShippingData(page, data.company_name2, data.vatID_2, data.first_name2, data.last_name2, data.street2, data.postal_code2, data.city2, data.phone2, data.state2);

    // ignore freshchat
    await ignoreFreshChat(page);

    // take argos screenshot Versandinformation
    await argosScreenshot(page, 'checkout - Versandinformation', {
        viewports: [
            "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
            "iphone-6" // Use device preset for iphone-6 --> 375x667
        ]
    });

    // click 'Weiter'
    await page.locator('#shipping-buttons-container button').click();





    //------------------------------- CHECK REQUEST ----------------------------//
    //--------------------------------------------------------------------------//
    await Promise.all([
        page.waitForResponse(response =>
            response.url().includes('/checkout/onepage/saveShipping')
            && response.status() === 200, { timeout: 2000 }
        && console.log('RESPONSE RECEIVED - /checkout/onepage/saveShipping')
        )
    ]);

    // ignore freshchat
    await ignoreFreshChat(page);

    // take argos screenshot Versandkosten
    await argosScreenshot(page, 'checkout - Versandkosten', {
        viewports: [
            "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
            "iphone-6" // Use device preset for iphone-6 --> 375x667
        ]
    });

    // Button "Weiter" @Versandkosten
    await expect(page.locator('#co-shipping-method-form > .buttons-set > .button')).toBeVisible()  // Warte bis WEITER-Button sichtbar ist
    await page.locator('#co-shipping-method-form > .buttons-set > .button').click()  // und klicke dann




    //------------------------------- CHECK REQUEST ----------------------------//
    //--------------------------------------------------------------------------//

    await Promise.all([
        page.waitForResponse(response =>
            response.url().includes('/checkout/onepage/saveShippingMethod')
            && response.status() === 200, { timeout: 2000 }
        && console.log('RESPONSE RECEIVED - /checkout/onepage/saveShippingMethod')
        )
    ]);


    // WARTE AUF RESSOURCEN BEVOR AUFNAHME GEMACHT WIRD
    // warte bis Images der vier verfügbaren Zahlungsarten sichtbar sind
    await page.locator('dt[class="ppp bankpayment"] img').waitFor();
    await page.locator('dt[class="ppp paypal ppp-selected"] img').waitFor();
    await page.locator('dt[class="ppp card"] img').waitFor();
    // await page.locator('dt[class="ppp sofort"] img').waitFor();

    // ignore freshchat
    await ignoreFreshChat(page);
    // take argos screenshot Zahlungsinformation
    await argosScreenshot(page, 'checkout - Zahlungsinformation', {
        viewports: [
            "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
            "iphone-6" // Use device preset for iphone-6 --> 375x667
        ]
    });

    //Click "Weiter"
    await page.locator('#payment-buttons-container button').click();



    //------------------------------- CHECK REQUEST ----------------------------//
    //--------------------------------------------------------------------------//

    await Promise.all([
        page.waitForResponse(response =>
            response.url().includes('/checkout/onepage/savePayment')
            && response.status() === 200, { timeout: 2000 }
        && console.log('RESPONSE RECEIVED - /checkout/onepage/savePayment')
        )
    ]);

    // ignore freshchat
    await ignoreFreshChat(page);

    // wait for Paypal-Button
    await page.locator('iframe.component-frame.visible').waitFor()

    // take argos screenshot Bestellübersicht
    await argosScreenshot(page, 'checkout - Bestellübersicht', {
        viewports: [
            "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
            "iphone-6" // Use device preset for iphone-6 --> 375x667
        ]
    });
}

export async function emptyCart(page) {

    // await page.waitForTimeout(2000);
    // click cart icon and delete articles  + take snapshots before and after
    await page.locator('.smallcartdiv').click();

    //----------------------- CHECK URL OF CART --------------------------------//
    //--------------------------------------------------------------------------//

    // check correct URL --> is cart loaded?
    await expect(page).toHaveURL(new RegExp('/checkout/cart'));

    // ignore FreshChat
    await ignoreFreshChat(page)

    // take argos screenshot full cart
    await argosScreenshot(page, 'checkout - Warenkorb leeren', {
        viewports: [
            "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
            "iphone-6" // Use device preset for iphone-6 --> 375x667
        ]
    });

    await deleteProducts(page);


    // ignore freshchat
    await ignoreFreshChat(page);

    // take argos screenshot full cart
    await argosScreenshot(page, 'checkout - Warenkorb geleert', {
        viewports: [
            "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
            "iphone-6" // Use device preset for iphone-6 --> 375x667
        ]
    });

}

async function setBillingData(page, company, vatID, firstName, lastName, email, street, postalCode, city, phone, state) {

    await page.locator('#billing_anrede_geschaeftskunde').click()
    await page.locator('[id="billing:company"]').fill(company);
    await page.locator('[id="billing:vat_id"]').fill(vatID);

    // set prefix of contact person, if user is a company
    await page.locator('.anrede_frau[name="billing\\[prefix\\]"]').check()
    await page.locator('[id="billing:firstname"]').fill(firstName);
    await page.locator('[id="billing:lastname"]').fill(lastName);
    await page.locator('[id="billing:email"]').fill(email);
    await page.locator('[id="billing:street1"]').fill(street);
    await page.locator('[id="billing:postcode"]').fill(postalCode);
    await page.locator('[id="billing:city"]').fill(city);
    await page.locator('[id="billing:telephone"]').fill(phone);
    await page.selectOption('[id="billing:country_id"]', state)
}

async function setShippingData(page, company, vatID, firstName, lastName, street, postalCode, city, phone, state) {

    await page.locator('#shipping_anrede_geschaeftskunde').click()
    await page.locator('[id="shipping:company"]').fill(company);
    // await page.locator('[id="shipping:vat_id"]').fill(vatID);  //Bulgarische VAT-ID macht oft Verifizierungsprobleme, was zum Abbruch führt

    // set prefix of contact person, if user is a company
    await page.locator('.anrede_herr[name="shipping\\[prefix\\]"]').check()
    await page.locator('[id="shipping:firstname"]').fill(firstName);
    await page.locator('[id="shipping:lastname"]').fill(lastName);
    await page.locator('[id="shipping:street1"]').fill(street);
    await page.locator('[id="shipping:postcode"]').fill(postalCode);
    await page.locator('[id="shipping:city"]').fill(city);
    await page.locator('[id="shipping:telephone"]').fill(phone);
    await page.selectOption('[id="shipping:country_id"]', state)

}

async function deleteProducts(page) {

    await page.locator('.smallcartdiv').click()
    await page.locator('.remove-item').first().waitFor()

    // bei mehreren produkten --> zB Kissen Sets
    while (await page.isVisible('.remove-item')) {  // solange das Element sichtbar ist
        // Klicke auf das Element mit der Klasse 'remove-item'
        await page.locator('.remove-item').first().click(); // entferne immer das erste element
        await page.waitForTimeout(500); 
    }
}