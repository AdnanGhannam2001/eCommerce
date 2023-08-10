# ECommerceApp

## Pages:
- Home: Home 3 (https://demo-uminex.myshopify.com/?preview_theme_id=147690389789)
- Categories: https://demo-uminex.myshopify.com/collections
- Products Layout: Filter Left sidebar
- Product Layout: Product - Left thumbnails + Product Variable
- About Us
- Contact Us
- FAQs
- Page 404

## Types of Products:
- Macbook / PCs
- OLED / Smart TVs
- Phones
- Tablets / Ipads
- Gamepad
- Camera
- Other

## Database:
- CategoryGroup:
    - Name
    - Category[]
- ProductCategory / Type:
    - Name
    - Image
    - Product[]?
- ProductTag?:
    - Name
- Product:
    - Name
    - Category
    - Price
    - FullInformation
    - Description: .md || textEditor
    - MainImage?
    - Image[]
    - Review[]
    - TopSpecification[]
    - ShippingInfo
    - Returns and Exchanges
    - AvailableColor[]
    - Available (Count of available)
    - SKU
    - Vendor
    - Tag[]?
    - CreatedAt
    - Sale
    - (only-response) rate
    - (only-response) flag
- User:
    - ...
- Review:
    - At
    - By
    - Content
    - Rate
- ProductInformation:
    - Product
    - Key
    - Value
- Color:
    - Name
    - Value
- Reports
    - To
    - By
    - Content
- Cart:
    - User
    - Product[] || InCartProduct[]
- Sale:
    - Product
    - EndsAt
    - Precentege
- FAQs

## Notes:
- Product's price should increase depending on options