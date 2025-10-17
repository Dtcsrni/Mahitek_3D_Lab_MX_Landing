# GitHub Copilot Instructions - Mahitek 3D Lab MX Landing

## Repository Overview

This repository contains the landing page for Mahitek 3D Lab MX, focused on validating physical 3D printed products and converting traffic into sales through digital campaigns. The platform integrates:

- SKU product sheets with batch traceability
- Short-links with UTM parameters for campaign tracking
- Dynamic QR codes for visual materials
- Digital marketing connected to Lean operations and margin-based decisions
- Multi-channel strategy (bazaars, social media, marketplaces)

## Business Context

### Core Value Proposition
Mahitek 3D Lab manufactures and validates physical 3D printed products through digital marketing campaigns. The landing page serves as the conversion hub for:
- Product discovery and validation
- Campaign performance tracking
- Inventory management with batch traceability
- Margin optimization and decision-making

### Key Metrics
- **Conversion rate**: Traffic to sales
- **Margin per product**: Profitability tracking
- **Campaign ROI**: UTM-based attribution
- **Batch traceability**: Quality and inventory control

## Technical Guidelines

### SKU Sheet Generation

When working with product SKU sheets, follow these principles:

1. **Batch Traceability**
   - Each SKU must include a unique batch identifier
   - Format: `SKU-{PRODUCT_CODE}-LOTE-{BATCH_NUMBER}-{YEAR}{MONTH}{DAY}`
   - Example: `SKU-DRAGON-LOTE-001-20250115`
   - Include production date, material type, and quality metrics

2. **Required Fields**
   - SKU ID (unique identifier)
   - Product name and description
   - Batch number and production date
   - Material specifications (PLA, ABS, PETG, etc.)
   - Dimensions and weight
   - Cost and suggested retail price
   - Margin percentage
   - Current inventory count
   - QR code reference

3. **Data Structure**
   ```javascript
   {
     sku_id: "SKU-DRAGON-LOTE-001-20250115",
     product_name: "Dragon Miniature",
     batch: "001",
     production_date: "2025-01-15",
     material: "PLA",
     cost: 45.00,
     price: 120.00,
     margin_percent: 62.5,
     inventory: 25,
     qr_code: "QR-DRAGON-001"
   }
   ```

### UTM Parameters and Short-Links

When implementing URL tracking and short-links:

1. **UTM Parameter Structure**
   - `utm_source`: Traffic source (facebook, instagram, tiktok, marketplace, bazar)
   - `utm_medium`: Marketing medium (social, organic, paid, qr, email)
   - `utm_campaign`: Specific campaign name (navidad2025, valentines, halloween)
   - `utm_content`: Content variation (carousel, video, story, post)
   - `utm_term`: Keywords or targeting (dragons, miniatures, decoracion)

2. **Short-Link Naming Convention**
   - Base: `mhk.mx` or similar short domain
   - Format: `/{campaign}/{channel}/{product}`
   - Example: `mhk.mx/navidad/ig/dragon`
   - Always redirect to full URL with complete UTM parameters

3. **Implementation Example**
   ```javascript
   function generateCampaignURL(product, campaign, channel, content) {
     const baseURL = 'https://mahitek3dlab.mx';
     const params = new URLSearchParams({
       utm_source: channel,
       utm_medium: 'social',
       utm_campaign: campaign,
       utm_content: content,
       utm_term: product
     });
     return `${baseURL}?${params.toString()}`;
   }
   ```

### Dynamic QR Code Integration

When working with QR codes:

1. **QR Code Generation**
   - Use dynamic QR codes that can be updated without reprinting
   - Include UTM parameters in the destination URL
   - Track scan metrics (location, time, device)
   - Format: SVG for print materials, PNG for digital

2. **QR Placement Strategy**
   - Product packaging: Link to product page with batch info
   - Marketing materials: Campaign-specific landing pages
   - Business cards: Main landing page with contact tracking
   - Point-of-sale: Quick purchase flow with discount codes

3. **Code Implementation**
   ```javascript
   // Example QR code data structure
   {
     qr_id: "QR-DRAGON-001",
     sku_reference: "SKU-DRAGON-LOTE-001-20250115",
     destination_url: "https://mahitek3dlab.mx/producto/dragon?utm_source=qr&utm_medium=packaging&utm_campaign=navidad2025",
     created_at: "2025-01-15",
     scan_count: 0,
     is_active: true
   }
   ```

### Marketing-Operations Integration

Connect digital marketing with Lean operations:

1. **Margin-Based Decision Making**
   - Always calculate and display margin percentage
   - Flag products below minimum margin threshold (e.g., 40%)
   - Prioritize high-margin products in campaigns
   - Track campaign ROI against product margins

2. **Inventory and Production Flow**
   - Link campaign performance to production planning
   - Auto-alert when popular products reach low inventory
   - Batch production based on campaign conversion rates
   - Track lead time from campaign to fulfillment

3. **Lean Metrics**
   - Time from click to conversion
   - Cart abandonment rate by traffic source
   - Cost per acquisition by channel
   - Customer lifetime value by entry campaign

## Code Style and Best Practices

### General Principles
- Write clean, maintainable code with clear variable names
- Use comments for business logic, not obvious code
- Follow the DRY principle (Don't Repeat Yourself)
- Implement error handling for all external integrations
- Use environment variables for sensitive data (API keys, domains)

### File Organization
```
/
├── .github/
│   └── copilot-instructions.md
├── src/
│   ├── components/      # Reusable UI components
│   ├── utils/          # Helper functions (QR, UTM, SKU)
│   ├── data/           # SKU sheets, product catalogs
│   └── analytics/      # Tracking and metrics
├── public/
│   ├── assets/         # Images, logos, icons
│   └── qr-codes/       # Generated QR codes
└── docs/
    ├── campaigns/      # Campaign documentation
    └── products/       # Product specifications
```

### Naming Conventions
- **Files**: kebab-case (`generate-qr-code.js`)
- **Functions**: camelCase (`generateCampaignURL`)
- **Constants**: UPPER_SNAKE_CASE (`MIN_MARGIN_PERCENT`)
- **Components**: PascalCase (`ProductCard`)
- **CSS classes**: BEM methodology (`product-card__title--highlighted`)

### Documentation
- Every utility function should have JSDoc comments
- Include usage examples for complex functions
- Document business rules and calculations
- Maintain a changelog for major updates

## Testing and Validation

### Testing Requirements
1. **Unit Tests**
   - SKU generation and validation
   - UTM parameter building
   - QR code URL generation
   - Margin calculations

2. **Integration Tests**
   - Short-link redirects
   - QR code scanning flow
   - Campaign tracking accuracy
   - Database operations

3. **Manual Validation**
   - QR codes scan correctly on mobile devices
   - UTM parameters populate in analytics
   - Short-links resolve to correct destinations
   - Margin calculations match spreadsheet formulas

### Quality Checklist
- [ ] All functions have proper error handling
- [ ] UTM parameters follow naming conventions
- [ ] QR codes include fallback URLs
- [ ] SKU batch numbers are unique and sequential
- [ ] Margin calculations are accurate
- [ ] Links are tested on multiple devices
- [ ] Analytics tracking is verified in production

## Campaign-Specific Guidelines

### Social Media Campaigns
- Use vertical format for stories (9:16)
- Include clear CTA with short-link
- Place QR code in last frame for scannability
- Tag location for local discovery

### Marketplace Integration
- Include UTM parameters in product URLs
- Track conversion by marketplace (Mercado Libre, Amazon, Etsy)
- Sync inventory levels with SKU system
- Calculate fees in margin calculations

### Physical Events (Bazaars, Pop-ups)
- Print QR codes at minimum 2x2 cm for reliable scanning
- Use high-contrast colors (black on white)
- Include short-link as text backup
- Track event-specific campaigns separately

## Examples and Templates

### Complete Campaign Setup Example

```javascript
// Product Definition
const product = {
  sku_id: "SKU-DRAGON-LOTE-001-20250115",
  name: "Dragon Miniature",
  cost: 45.00,
  price: 120.00,
  margin: 62.5
};

// Campaign Configuration
const campaign = {
  name: "navidad2025",
  channels: ["instagram", "facebook", "tiktok"],
  startDate: "2025-12-01",
  endDate: "2025-12-25"
};

// Generate URLs for each channel
campaign.channels.forEach(channel => {
  const url = generateCampaignURL(
    product.sku_id,
    campaign.name,
    channel,
    "carousel-launch"
  );
  
  const qrCode = generateQRCode({
    data: url,
    size: 512,
    format: "svg"
  });
  
  console.log(`${channel}: ${url}`);
  saveQRCode(qrCode, `qr-${channel}-${product.sku_id}.svg`);
});
```

## Questions to Ask Copilot

When you need assistance, consider asking:

- "Generate a new SKU with batch traceability for [product name]"
- "Create UTM parameters for a [channel] campaign promoting [product]"
- "Build a QR code with tracking for [specific use case]"
- "Calculate margin and recommend pricing for [product with costs]"
- "Set up a complete campaign with short-links and QR codes for [event/season]"
- "Create a product sheet template with all required fields"
- "Generate analytics tracking code for [specific campaign]"

## Additional Resources

- **UTM Builder**: Use standardized tools for parameter consistency
- **QR Code Generators**: Dynamic QR services (QR Code Monkey, Bitly, custom API)
- **Analytics**: Google Analytics, Facebook Pixel, TikTok Pixel
- **Short-link Services**: Bitly, Rebrandly, custom domain shorteners
- **Lean Metrics**: Focus on conversion rate, margin, and customer acquisition cost

---

**Last Updated**: 2025-01-15
**Maintained by**: Mahitek 3D Lab MX Team
**Version**: 1.0.0
