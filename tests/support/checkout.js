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
    "vatID_2": "BG201794665",
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

    //take snapshot of cart
    await page.waitForTimeout(3000);
    await page.FIXME_should("url.contain", '/checkout/cart');

    page.FIXME_argosScreenshot(
        'Alle Produkte im Warenkorb', {
        viewports: [
            "iphone-6", // Use device preset for iphone-6
            { width: 1280, height: 1024 } // Specify dimensions directly
        ]
    });

    //proceed to checkout 
    await page.getByText(/zur Kasse gehen/).first().click();

    //set billing address information & and take snapshot
    setBillingData(data.prefix, data.company_name, data.vatID, data.prefix_business, data.first_name, data.last_name, data.email, data.street, data.postal_code, data.city, data.phone, data.state);
    page.FIXME_argosScreenshot('checkout: Rechnungsinformation', {
        viewports: [
            "iphone-6", // Use device preset for iphone-6
            { width: 1280, height: 1024 } // Specify dimensions directly
        ]
    });

    //select 'An andere Adresse verschicken' and go on
    await page.locator('input[title="An andere Adresse verschicken"]').check();
    await page.locator('#billing-buttons-container > button[title="Weiter"]').click();
    await page.locator('#billing-buttons-container > button[title="Weiter"]')// .waitForTimeout(5000);

    //set shipping address information  & and take snapshot
    setShippingData(data.prefix2, data.company_name2, data.vatID_2, data.prefix_business2, data.first_name2, data.last_name2, data.street2, data.postal_code2, data.city2, data.phone2, data.state2);
    page.FIXME_argosScreenshot('checkout: Versandinformation', {
        viewports: [
            "iphone-6", // Use device preset for iphone-6
            { width: 1280, height: 1024 } // Specify dimensions directly
        ]
    });

    // click 'Weiter'
    await page.locator('#shipping-buttons-container button').click();
    await page.locator('#shipping-buttons-container button')//.waitForTimeout(2000);


    //take snapshot of checkout: Versandkosten
    page.FIXME_argosScreenshot('checkout: Versandkosten', {
        viewports: [
            "iphone-6", // Use device preset for iphone-6
            { width: 1280, height: 1024 } // Specify dimensions directly
        ]
    });

    //Click "Weiter"
    await page.locator('#opc-shipping_method > .step.a-item > form > .buttons-set > button').click();
    await page.locator('#opc-shipping_method > .step.a-item > form > .buttons-set > button').waitForTimeout(2000);


    //take snapshot of checkout: Zahlungsinformation
    page.FIXME_argosScreenshot('checkout: Zahlungsinformation', {
        viewports: [
            "iphone-6", // Use device preset for iphone-6
            { width: 1280, height: 1024 } // Specify dimensions directly
        ]
    });

    //Click "Weiter"
    await page.locator('#payment-buttons-container button').click();
    await page.locator('#payment-buttons-container button').waitForTimeout(2000);

    //take snapshot of checkout: Bestellübersicht
    page.FIXME_argosScreenshot(
        'checkout: Bestellübersicht', {
        viewports: [
            "iphone-6", // Use device preset for iphone-6
            { width: 1280, height: 1024 } // Specify dimensions directly
        ]
    });
    await page.waitForTimeout(2000);
}

export async function emptyCart(page) {

    await page.waitForTimeout(2000);
    // click cart icon and delete articles  + take snapshots before and after
    await page.locator('.smallcartdiv').click();

    // page.FIXME_argosScreenshot(

    //     'Warenkorb leeren', {
    //     viewports: [
    //         "iphone-6", // Use device preset for iphone-6
    //         { width: 1280, height: 1024 } // Specify dimensions directly
    //     ]
    // });

    // deleteProducts();

    // page.FIXME_argosScreenshot('Warenkorb geleert', {
    //     viewports: [
    //         "iphone-6", // Use device preset for iphone-6
    //         { width: 1280, height: 1024 } // Specify dimensions directly
    //     ]
    // });

}

async function setBillingData(prefixA, company, vatID, prefixB, firstName, lastName, email, street, postalCode, city, phone, state) {

    await page.locator('#input_box_prefix').locator(":scope > *").check();
    await page.locator('[id="billing:company"]').fill(company);
    await page.locator('[id="billing:vat_id"]').fill(vatID);
    await page.locator('label[for="billing[prefix]"] + .input-box').locator(":scope > *").check();
    await page.locator('[id="billing:firstname"]').fill(firstName);
    await page.locator('[id="billing:lastname"]').fill(lastName);
    await page.locator('[id="billing:email"]').fill(email);
    await page.locator('[id="billing:street1"]').fill(street);
    await page.locator('[id="billing:postcode"]').fill(postalCode);
    await page.locator('[id="billing:city"]').fill(city);
    await page.locator('[id="billing:telephone"]').fill(phone);
    await page.locator('[id="billing:country_id"]').FIXME_select(state);
}

async function setShippingData(prefixA, company, vatID, prefixB, firstName, lastName, street, postalCode, city, phone, state) {

    await page.locator('label[for="shipping_prefix"] + #input_box_prefix').locator(":scope > *").check();
    await page.locator('[id="shipping:company"]').fill(company);
    await page.locator('[id="shipping:vat_id"]').fill(vatID);
    await page.locator('.field.shipping_name-prefix.name-prefix > .input-box').locator(":scope > *").check();
    await page.locator('[id="shipping:firstname"]').fill(firstName);
    await page.locator('[id="shipping:lastname"]').fill(lastName);
    await page.locator('[id="shipping:street1"]').fill(street);
    await page.locator('[id="shipping:postcode"]').fill(postalCode);
    await page.locator('[id="shipping:city"]').fill(city);
    await page.locator('[id="shipping:telephone"]').fill(phone);
    await page.locator('[id="shipping:country_id"]').FIXME_select(state);

}

function deleteProducts() {
    //delete articles from cart (recursively)
    const deleteArticle = async () => {
        const $body = page.locator('body');
        const isVisible = (async () => {
            $body.locator('.remove-item').FIXME_is(':visible');
            return $body.locator('.remove-item');
        })();
        if (isVisible) {
            await $body.getByText(/Artikel entfernen/).first().click();

            deleteArticle();
        }

    };
    deleteArticle();
}