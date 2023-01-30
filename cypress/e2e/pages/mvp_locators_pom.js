export class StackAdaptLocators{

    logo = '.site-logo a'
    object_1_sunglasses = '.site-navigation.just-top-level ul.top-level li:nth-child(1)'
    object_2_opticals = '.site-navigation.just-top-level ul.top-level li:nth-child(2)'
    object_3_collaborations = '.site-navigation.just-top-level ul.top-level li:nth-child(3)'
    object_4_accessories = '.site-navigation.just-top-level ul.top-level li:nth-child(4)'
    object_5_virtual_try_on = '.site-navigation.just-top-level ul.top-level li:nth-child(5)'


    search = '.header-actions.justify-content-end div.header-search-icon'
    account = '.header-actions.justify-content-end div.header-account'
    wishlist = '.header-actions.justify-content-end div.header-wishlist'
    basket = '.header-actions.justify-content-end div.header-basket'
    currency = '.header-actions.justify-content-end div.header-currency-select'


    add_to_basket = 'button[name=add]'

    // Product
    product_title = '.product-detail__info .product-title'
    product_price = '.product-detail__info .product-detail-price'
    product_image = '.product-detail__image.product-detail__imageOne img'
    product_description = '.accordion-container .accordion-item:nth-child(1)'
    product_details = '.accordion-container .accordion-item:nth-child(2)'
    product_sizeAndfit = '.accordion-container .accordion-item:nth-child(3)'


    // Footer

    object_1_facebook = '.footer-social ul li:nth-child(1)'
    object_2_twitter = '.footer-social ul li:nth-child(2)'
    object_3_pintrest = '.footer-social ul li:nth-child(3)'
    object_4_instagram = '.footer-social ul li:nth-child(4)'
    object_5_youtube = '.footer-social ul li:nth-child(5)'
    object_6_weibo = '.footer-social ul li:nth-child(6)'

    non_mandatory_email_input = 'input[name=email]:not(input[name=email][aria-describedby=klaviyo_ariaid_2])'
    mandatory_email_input = 'input[name=email][aria-describedby=klaviyo_ariaid_2]'


    non_mandatory_subscribe_button = '.klaviyo-form div:nth-child(1) form:nth-child(1)  button:nth-child(1)'
    mandatory_subscribe_button = '.klaviyo-form div:nth-child(2) form:nth-child(1)  button:nth-child(1)'
    

    object_1_Information = '//h4[text()="Information"]'
    object_2_About_Us = '//h4[text()="Information"]/following-sibling::div//ul/li[1]'
    object_3_Face_Shape_Guide = '//h4[text()="Information"]/following-sibling::div//ul/li[2]'
    object_4_Current_Offers = '//h4[text()="Information"]/following-sibling::div//ul/li[3]'
    object_5_FAQ = '//h4[text()="Information"]/following-sibling::div//ul/li[4]'
    object_6_Privacy_Policy = '//h4[text()="Information"]/following-sibling::div//ul/li[5]'
    object_7_Careers = '//h4[text()="Information"]/following-sibling::div//ul/li[6]'
    object_8_Terms = '//h4[text()="Information"]/following-sibling::div//ul/li[7]'



    object_1_Service = '//h4[text()="Service"]'
    object_2_Delivery = '//h4[text()="Service"]/following-sibling::div//ul/li[1]'
    object_3_Our_Stores = '//h4[text()="Service"]/following-sibling::div//ul/li[2]'
    object_4_Contact_Us = '//h4[text()="Service"]/following-sibling::div//ul/li[3]'
    object_5_Returns = '//h4[text()="Service"]/following-sibling::div//ul/li[4]'
    object_6_Warranty_Registration = '//h4[text()="Service"]/following-sibling::div//ul/li[5]'
    object_7_Online_Repair_Form = '//h4[text()="Service"]/following-sibling::div//ul/li[6]'
    object_8_Lens_Replacement = '//h4[text()="Service"]/following-sibling::div//ul/li[7]'


}