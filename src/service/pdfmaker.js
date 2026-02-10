const pdfmake = require('pdfmake');

const makepdf = async () => {
    const fonts = {
        Roboto: {
            normal: './public/fonts/Roboto-Regular.ttf',
            bold: './public/fonts/Roboto-Medium.ttf',
            italics: './public/fonts/Roboto-Italic.ttf',
            bolditalics: './public/fonts/Roboto-MediumItalic.ttf'
        }
    };


    pdfmake.addFonts(fonts);

    const docDefinition = {
        content: [
            {
                
                columns: [
                    {
                        image: './public/amazon.png',
                        width: 100
                    },
                    {
                        text: 'Tax Invoice/Bill of Supply/Cash Memo (Original for Recipient)'
                    }
                ]
            },
            '\n\n\n',
            {
                style: 'items',
                columns: [
                    [
                        { text: 'Sold By :' },
                        { text: 'SUPER MARKETING ' },
                        {
                            text:
                                `*Super Marketinrg Agency, Plot No. 613, Sumer
                            Nagar Main, Nea, r Gagan Bharti School,
                            Mansarovar Jaipur - 302020
                            JAIPUR, RAJASTHAN, 302020
                            IN`
                        }
                    ],
                    [
                        { text: 'Billing Address : :' },
                        {
                            text:
                                `Ankitkumar Navinbhai dharsandiya
                            A1 402, Opera palm, Kholvad Road
                            SURAT, GUJARAT, 394185
                            IN`
                        },
                        { text: 'State/UT Code: 24' },
                    ]
                ]
            },
            '\n',
            {
                columns: [
                    [
                        { text: 'PAN No: EPSPK8990C:' },
                        { text: 'GST Registration No: 08EPSPK8990C1Z5' }
                    ],
                    [
                        { text: 'Shipping Address :' },
                        {
                            text:
                                `Ankitkumar Navinbhai dharsandiya
                            Ankitkumar Navinbhai dharsandiya
                            A1 402, Opera palm, Kholvad Road
                            SURAT, GUJARAT, 394185
                            IN`
                        },
                        { text: 'State/UT Code: 24' },
                        { text: 'Place of supply: GUJARAT ' },
                        { text: 'Place of delivery: GUJARAT' },
                    ]
                ]
            },
            '\n',
            {
                columns: [
                    [
                        { text: 'Order Number: 405-0419869-0333924' },
                        { text: 'Order Date: 28.01.2025 ' }
                    ],
                    [   
                        { text: 'Invoice Number : IN-803',style:'right' },
                        { text: 'Invoice Details : RJ-315637153-2425',style:'right' },
                        { text: 'Invoice Date : 28.01.2025',style:'right' }
                    ]
                ]
            },
            '\n\n\n',
            {
                style: 'tableExample',
                table: {
                    body: [
                        ['Sl.No', 'Description', 'Unit Price', 'Qty', 'Net Amoun', 'Tax Rate', 'Tax Type', 'Tax Amoun', 'Total Amount'],
                        ['1', `Google Review NFC Card Along with QR Code | Tap or Scan for
                                Reviews/Feedback | PVC Card with UV Print | Pre-Printed Multicolored
                                | B0CYD64SY3 ( GRC1001 )
                                HSN:5201`,
                            '₹117.80', '2', '₹235.60', '18%', 'IGST', '₹42.40', '278.00'],
                        ['', 'Shipping Charges', '₹33.90', '', '₹67.80', '18%', 'IGST', '₹12.20', '₹80.00'],
                        [
                            {
                                colSpan: 7,
                                text: 'TOTAL:',
                                border: [true, true, true, true],
                            },
                            {}, {}, {}, {}, {}, {},
                            {
                                text: '₹54.60'
                            },
                            {
                                text: '₹358.00'
                            },
                        ],
                        [
                            {
                                colSpan: 9,
                                text: `Amount in Words:
                                        Three Hundred Fifty-eight only`,
                                border: [true, true, true, true],
                            },
                            {}, {}, {}, {}, {}, {}, {}, {}
                        ],
                        [
                            {
                                colSpan: 9,
                                text: [
                                    'For SUPER MARKETING:\n',
                                    { text: 'Authorized Signatory', bold: true }
                                ],
                                alignment: 'right',
                                border: [true, true, true, true],
                            },
                            {}, {}, {}, {}, {}, {}, {}, {}
                        ]
                    ]
                }
            },
            'Whether tax is payable under reverse charge - No\n',
            {
                style: 'tableExample',
                table: {
                    body: [
                        [
                            {
                                text: 
                                    'Payment Transaction ID:\n1112wwZD1UzLIjSf7OFM9Vqkv'
                            },
                            {
                                text: 'Date & Time: 28/01/2025, 19:09:00hrs'
                            },
                            {

                                text: 'Invoice Value:\n 358.00',
                                rowSpan: 2,

                            },
                            {
                                text: 'Mode of Payment:\nAmazonPay'
                            }
                        ], [
                            {
                                text: 'Payment Transaction ID:\n1112rGnrZzfROO1OaWwcPbJwY',
                            },
                            {
                                text: 'Date & Time: 28/01/2025, 19:09:00 hrs'
                            },
                            {},
                            {
                                text: 'Mode of Payment: \n GiftCard'
                            }
                        ]
                    ]
                }
            }
           
        ],
        styles: {
    header: {
      fontSize: 22,
      bold: true
    },
    anotherStyle: {
      italics: true,
      alignment: 'right'
    }
  }
    };



    const pdf = pdfmake.createPdf(docDefinition);
    pdf.write('pdf1.pdf').then(() => {
        // success event
    }, err => {
        // error event
        console.error(err);
    });
}

module.exports = makepdf